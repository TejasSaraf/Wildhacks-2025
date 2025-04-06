"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSession } from "next-auth/react";


function Navbar() {

    const router = useRouter();
    const { data: session, status } = useSession();
  
    const handleSignIn = () => {
      router.push("/SignIn");
    };

  return (
    <nav className="flex justify-between p-6 border-b border-gray-200 items-center bg-gradient-to-r from-blue-100/75 to-blue-400/50">
      <div className="flex items-center text-2xl font-bold text-[iconBlue]">CashFlow</div>
      <div className="flex items-center gap-2">
        <div>Features</div>
        <div>How it works</div>
        <div>Testimonials</div>
        <div>Pricing</div>

        <div className="flex items-center gap-4">
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            width={40}
            height={40}
            alt="Profile"
            className="rounded-full"
          />
        ) : (
          <button
            type="button"
            className="font-sans text-white text-xl border-[1px] border-borderGrey rounded-lg px-4 py-1"
            onClick={handleSignIn}
          >
            Signin
          </button>
        )}
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
