"use client";

import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function GoogleCallback() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const sendToBackend = async () => {
      if (status === "authenticated" && session?.user?.email) {
        try {
          await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`,
            {
              email: session.user.email,
              name: session.user.name,
              image: session.user.image,
            },
            { withCredentials: true } 
          );
          router.push("/");
        } catch (err) {
          console.error("Google login failed", err);
        }
      }
    };

    sendToBackend();
  }, [status, session]);

  return <p>Signing in with Google...</p>;
}
