import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const result = await prisma.item_Macro.create({ data });
        return NextResponse.json({ success: true, data: result });
    } catch (error) {
        return NextResponse.json({ success: false, error })
    }
}