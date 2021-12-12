// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (!req.query.name) {
    return res.status(400).end();
  }
  res.writeHead(307, { Location: `/` })
  res.end(`Hello ${req.query.name}`);
  // res.end()
}


