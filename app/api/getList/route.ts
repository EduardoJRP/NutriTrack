import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

/**
 * Handler for GET requests to fetch items.
 */
export async function GET() {
  try {
    // Log the request details for debugging
    console.info('GET Request Received: Fetching items.');
    const items = await prisma.item_Macro.findMany();
    console.info('GET Response Data:', items);

    return NextResponse.json({
      success: true,
      data: items,
      message: 'Items fetched successfully.',
    });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal Server Error',
        message: 'An unexpected error occurred while fetching items.',
      },
      { status: 500 }
    );
  } finally {
    // Cleanup logic or logging after the request is handled
    console.info('GET Request Processing Completed.');
  }
}
