import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    console.log('Database connected successfully');
    return NextResponse.json({ message: 'Connection successful' });
  } catch (error) {
    console.error('Database connection failed:', error);
    return NextResponse.json({ error: 'Connection failed' }, { status: 500 });
  }
}
