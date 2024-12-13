import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const items = await prisma.item_Macro.findMany();
    return NextResponse.json({ success: true, data: items });
  } catch (error) {
    console.error('GET Error:', error); // Log error
    return NextResponse.json(
      { success: false, error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
