"use client"
import { useEffect, useState } from "react";
import Navbar from "./navbar"
import { useRouter } from "next/router";

export default function NavbarRoot() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Evita renderizar antes do cliente estar pronto
  }


  return (
    <div className="absolute top-10 right-10 ">
      <Navbar />
    </div>
  )
}
