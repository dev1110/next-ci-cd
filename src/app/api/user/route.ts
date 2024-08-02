import { users } from '../data';
import pool from '../db';

export async function GET(req: Request, res: any) {
  try {
    const result = await pool.query('SELECT id, email, roles FROM nc_users_v2');
    return res
      .status(200)
      .json({ message: 'success', error: null, data: result?.rows || [] });
  } catch (error) {
    console.error('Error executing query', error);
    return res
      .status(500)
      .json({ message: 'Internal Server Error', error: true, data: null });
  }
}

export async function POST(req: Request, res: any) {
  if (users.length) {
    return res.status(500).json({
      message: 'fetched successfully!',
      status: 'success',
      data: users,
    });
  } else {
    return res
      .status(500)
      .json({ message: 'user not found!', status: 'failed' });
  }
}
