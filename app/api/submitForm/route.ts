import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST Handler: Adds a new item
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const result = await prisma.item_Macro.create({ data });
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error creating item:', error);
    return NextResponse.json({ success: false, error: 'Failed to create item' });
  }
}
