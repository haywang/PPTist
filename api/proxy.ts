

// module.exports = (request, response) => {
//     let who = 'anonymous';

//     if (request.body && request.body.who) {
//       who = request.body.who;
//     } else if (request.query.who) {
//       who = request.query.who;
//     } else if (request.cookies.who) {
//       who = request.cookies.who;
//     }

//     response.status(200).send(`Hello ${who}!`);
//   };

import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const targetUrl = req.query.target as string;

  if (!targetUrl) {
    return res.status(400).json({ error: "Missing target URL" });
  }

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        "Content-Type": "application/json",
        ...(req.headers.authorization && { Authorization: req.headers.authorization }),
      },
      body: req.method === "GET" ? null : JSON.stringify(req.body),
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error });// "Internal Server Error"
  }
}


// export function GET(request: Request) {
//   return new Response('Hello from Vercel!');
// }