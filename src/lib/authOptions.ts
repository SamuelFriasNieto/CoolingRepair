import { NextAuthOptions } from "next-auth";
import GoogleProviders from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
 providers: [
    GoogleProviders({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
    };