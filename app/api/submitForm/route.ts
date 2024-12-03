import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST Handler: Adds a new item
export async function POST(request: Request) {
  const data = await request.json();

  try {
    const result = await prisma.item_Macro.create({ data });
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

// GET Handler: Fetches all items
export async function GET() {
  try {
    const items = await prisma.item_Macro.findMany();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}
