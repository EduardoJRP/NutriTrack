import {NextResponse} from 'next/server';
import { fetchTableFoods } from '@/app/lib/actions/fetchTableFoods';

export async function GET() {
    const result = await fetchTableFoods();
    return NextResponse.json(result);
}