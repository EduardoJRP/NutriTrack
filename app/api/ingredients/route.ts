import { NextResponse } from 'next/server';
import { fetchUserIngredient } from '@/app/lib/actions/fetchUserIngredient';

export async function GET() {
  const result = await fetchUserIngredient();
  return NextResponse.json(result);
}