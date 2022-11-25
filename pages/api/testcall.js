import axios from 'axios';
// import { testCallRequest, testCallSuccess, testCallFailure } from '@/app/features/testcall';
import { getToken } from "next-auth/jwt";
import { useSession } from "next-auth/react";

export default async function handler(req, res) {
 if (req.method === "GET") {
  await getHandler(req, res);
 } else {
  res.status(405).send(null);
 }
}

async function getHandler(req, res) {
 const token = await getToken({ req });
 const data = token && axios.get("http://localhost:8000/api/", {
  headers: { Authorization: `Bearer ${token?.accessToken}` },
 });
 console.log(data);
 if (token) {
  // Signed in
  console.log("JSON Web Token", JSON.stringify(token, null, 2));
 } else {
  // Not Signed in
  res.status(401);
 }
 res.end();
}
