import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import axios from "axios";
// import { isJwtExpired } from "constants/Utils";

export const refreshToken = async function (refreshToken) {
 try {
  const response = await axios.post(
   "http://localhost:8000/api/auth/token/refresh/",
   {
    refresh: refreshToken,
   }
  );

  const { access, refresh } = response.data;
  // still within this block, return true
  return [access, refresh];
 } catch {
  return [null, null];
 }
};

export const authOptions = {
 providers: [
  // CredentialsProvider({
  //  // The name to display on the sign in form (e.g. 'Sign in with...')
  //  name: "Credentials",
  //  // The credentials is used to generate a suitable form on the sign in page.
  //  // You can specify whatever fields you are expecting to be submitted.
  //  // e.g. domain, username, password, 2FA token, etc.
  //  // You can pass any HTML attribute to the <input> tag through the object.
  //  credentials: {
  //   username: { label: "Username", type: "text", placeholder: "jsmith" },
  //   password: { label: "Password", type: "password" },
  //  },
  //  async authorize(credentials, req) {
  //   // You need to provide your own logic here that takes the credentials
  //   // submitted and returns either a object representing a user or value
  //   // that is false/null if the credentials are invalid.
  //   // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
  //   // You can also use the `req` object to obtain additional parameters
  //   // (i.e., the request IP address)
  //   const res = await fetch("/your/endpoint", {
  //    method: "POST",
  //    body: JSON.stringify(credentials),
  //    headers: { "Content-Type": "application/json" },
  //   });
  //   const user = await res.json();

  //   // If no error and we have user data, return it
  //   if (res.ok && user) {
  //    return user;
  //   }
  //   // Return null if user data could not be retrieved
  //   return null;
  //  },
  // }),
  GoogleProvider({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
 ],
 callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
   if (account.provider === "google") {
    try {
     const response = await axios.post(
      // tip: use a seperate .ts file or json file to store such URL endpoints
      "http://localhost:8000/api/social/login/google/",
      {
       access_token: account.access_token,
       id_token: account.id_token,
      }
     );

     // extract the returned token from the DRF backend and add it to the `user` object
     const { access_token, refresh_token } = response.data;
     user.accessToken = access_token;
     user.refreshToken = refresh_token;
     return true;
    } catch (error) {
     console.log(error);
     return false;
    }
   }
   return false;
  },
  async jwt({ token, user, account, profile, isNewUser }) {
   const isUserSignedIn = user ? true : false;
   if (isUserSignedIn) {
    token.id = profile.id;
    token.accessToken = user.accessToken;
   }
   return Promise.resolve(token);
  },

  //  // user was signed in previously, we want to check if the token needs refreshing
  //  // token has been invalidated, try refreshing it
  // //  if (isJwtExpired(token.accessToken)) {
  // //   const [newAccessToken, newRefreshToken] = await NextAuthUtils.refreshToken(
  // //    token.refreshToken
  // //   );

  // //   if (newAccessToken && newRefreshToken) {
  // //    token = {
  // //     ...token,
  // //     accessToken: newAccessToken,
  // //     refreshToken: newRefreshToken,
  // //     iat: Math.floor(Date.now() / 1000),
  // //     exp: Math.floor(Date.now() / 1000 + 2 * 60 * 60),
  // //    };

  // //    return token;
  // //   }

  // //   // unable to refresh tokens from DRF backend, invalidate the token
  // //   return {
  // //    ...token,
  // //    exp: 0,
  // //   };
  // //  }

  //  // token valid

  async session({ session, token, user }) {
   // Send properties to the client, like an access_token and user id from a provider.
   // session.accessToken = token.accessToken
   // session.user.id = token.id
   return session;
  },
 },
 logger: {
  error(code, metadata) {
   console.error(code, metadata);
  },
  warn(code) {
   console.warn(code);
  },
  debug(code, metadata) {
   console.debug(code, metadata);
  },
 },
};

// export default NextAuth(authOptions);
const nextAuth = (req, res) => {
 return NextAuth(req, res, authOptions);
};
export default nextAuth;
