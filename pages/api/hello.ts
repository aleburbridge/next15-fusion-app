// pages/api/hello.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set a cookie with SameSite=Lax
  res.setHeader('Set-Cookie', 'myCookie=hello; Path=/; SameSite=Lax; HttpOnly');
  res.status(200).json({ message: 'Cookie set with SameSite=Lax' });
}