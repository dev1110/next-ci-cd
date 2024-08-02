import { NextRequest, NextResponse } from 'next/server';
import { User, users } from '../../data';

export async function GET(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  const { id } = params;
  const user = users?.find((u: User) => u.id === +id);
  if (user) {
    return NextResponse.json({
      message: 'fetched successfully!',
      status: 'success',
      data: user,
    });
  } else {
    return NextResponse.json({ message: 'user not found!', status: 'failed' });
  }
}
