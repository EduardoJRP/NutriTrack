import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Utility to parse and validate ID
function parseId(id: string): number | null {
  const parsedId = Number(id);
  return isNaN(parsedId) ? null : parsedId;
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;

  const parsedId = parseId(id);
  if (!parsedId) {
    return NextResponse.json(
      { success: false, error: "Invalid or missing ID" },
      { status: 400 }
    );
  }

  try {
    const deletedItem = await prisma.item_Macro.delete({
      where: { id: parsedId },
    });

    return NextResponse.json({ success: true, data: deletedItem });
  } catch (error) {
    console.error("Error during DELETE operation:", error);

    // Generic error handling with a type guard
    const isRecordNotFoundError = (e: unknown): e is { code: string } =>
      typeof e === "object" && e !== null && "code" in e && (e as any).code === "P2025";

    if (isRecordNotFoundError(error)) {
      return NextResponse.json(
        { success: false, error: "Item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: false, error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
