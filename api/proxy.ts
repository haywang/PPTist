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

    if (!response.body) {
      return res.status(500).json({ error: "No response body" });
    }

    // 设置响应头
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Transfer-Encoding', 'chunked');

    // 使用 Node.js 的流来逐步发送数据
    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    const processStream = async () => {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        res.write(chunk);
      }
      res.end();
    };

    processStream().catch(error => {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error at process" });
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error at catch" });
  }
}