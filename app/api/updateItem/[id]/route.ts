import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// PUT Handler: Updates an item
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const { name, quantity, calories, carbohydrates, fats, proteins } = await req.json(); // Get updated data from request body

  try {
    // Update the item in the database with the new data
    const updatedItem = await prisma.item_Macro.update({
      where: {
        id: parseInt(id, 10), // Find the item by its ID
      },
      data: {
        name, // Update with the new data
        quantity,
        calories,
        carbohydrates,
        fats,
        proteins,
      },
    });

    return NextResponse.json({ success: true, data: updatedItem });
  } catch (error) {
    console.error('Error during PUT operation:', error);
    return NextResponse.json(
      { success: false, error: 'Item not found or error during update' },
      { status: 404 }
    );
  }
}
