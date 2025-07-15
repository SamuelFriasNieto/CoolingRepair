"use client";

import { SolicitudForm } from "@/app/solicitud/_components/solicitud-form"
import { useSession } from "next-auth/react";
import { use, useEffect } from "react";
import { redirect } from "next/navigation";

export default function SolicitudPage() {

  const {data: session, status} = useSession();
  console.log("Session data:", session);

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/")
    }
  },[session])

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full sm:max-w-md max-w-sm flex-col gap-6">
        <img className="w-[65%] mx-auto" src="/logo-1.png" alt="" />
        <SolicitudForm />
      </div>
    </div>
  )
}
