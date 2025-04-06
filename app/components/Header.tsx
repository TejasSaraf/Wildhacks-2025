import React, { useState, useEffect } from "react";
import { Wallet } from "lucide-react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function Header() {
  const { data: session, status } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      if (session?.user?.id) {
        const res = await fetch("/api/deleteUser", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: session.user.id }),
        });
        if (!res.ok) {
          console.error("Failed to delete user");
        }
      }
      await signOut({ redirect: false });
      router.push("/");
    } catch (error) {
      console.error("Error during sign out process:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Wallet className="h-6 w-6 text-budget-primary" />
          <span className="text-xl font-bold text-budget-primary">
            Budget Whisperer
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/expenses">Expenses</NavLink>
          <NavLink href="/insights">Insights</NavLink>
        </nav>
        <div className="relative">
          {status === "authenticated" && session?.user ? (
            <button
              className="flex items-center gap-4"
              onClick={() => setShowPopup(!showPopup)}
            >
              {session.user.image && (
                <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  alt="Profile"
                  className="rounded-full"
                />
              )}
            </button>
          ) : (
            <Link
              href="/SignIn"
              className="text-sm font-medium bg-budget-primary text-white px-4 py-2 rounded-md"
            >
              Sign In
            </Link>
          )}
          {showPopup && (
            <div className="absolute top-full right-0 mt-2 bg-white shadow-md rounded p-2">
              <button
                onClick={handleSignOut}
                className="text-sm font-medium hover:text-red-500"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-sm font-medium transition-colors hover:text-foreground/80"
    >
      {children}
    </Link>
  );
}
