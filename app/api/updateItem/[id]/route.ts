import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Define the expected shape of the request body
interface UpdateItemPayload {
  name: string;
  quantity: number;
  calories: number;
  carbohydrates: number;
  fats: number;
  proteins: number;
}

// Helper function to validate the request body
function validateUpdateItemPayload(payload: Partial<UpdateItemPayload>): payload is UpdateItemPayload {
  const requiredFields: (keyof UpdateItemPayload)[] = [
    'name',
    'quantity',
    'calories',
    'carbohydrates',
    'fats',
    'proteins',
  ];

  for (const field of requiredFields) {
    if (!payload[field]) {
      return false;
    }
  }

  return true;
}

// PUT Handler: Updates an item
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  // Parse and validate the request body
  let payload: Partial<UpdateItemPayload>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON payload' },
      { status: 400 }
    );
  }

  if (!validateUpdateItemPayload(payload)) {
    return NextResponse.json(
      { success: false, error: 'Missing or invalid required fields' },
      { status: 400 }
    );
  }

  // Update the item in the database
  try {
    const updatedItem = await prisma.item_Macro.update({
      where: {
        id: parseInt(id, 10),
      },
      data: payload,
    });

    // Return the updated item
    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error: unknown) {
    console.error('Error during PUT operation:', error);

    // Handle Prisma-specific errors
    const isPrismaError = (e: unknown): e is { code: string } =>
      typeof e === 'object' && e !== null && 'code' in e;

    if (isPrismaError(error) && error.code === 'P2025') {
      return NextResponse.json(
        { success: false, error: 'Item not found' },
        { status: 404 }
      );
    }

    // Handle unexpected errors
    return NextResponse.json(
      { success: false, error: 'Internal server error during update' },
      { status: 500 }
    );
  }
}
