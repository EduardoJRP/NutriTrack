import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// DELETE Handler: Deletes an item
export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
  ) {
    const { id } = params;
  
    try {
      const deletedItem = await prisma.item_Macro.delete({
        where: {
          id: parseInt(id, 10), // Convert id to integer
        },
      });
  
      return NextResponse.json({ success: true, data: deletedItem });
    } catch (error) {
      console.error('Error during DELETE operation:', error);
      return NextResponse.json(
        { success: false, error: 'Item not found or error during deletion' },
        { status: 404 }
      );
    }
  }