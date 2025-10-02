"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen dysto-bg p-8 pt-20">
      <Link href="/" className="neon-text mb-8 block">&larr; Hjem</Link>
      <motion.h1 className="text-4xl neon-text mb-8">Blogg</motion.h1>
      <motion.p className="text-gray-300">Write-ups fra TryHackMe kommer snart – f.eks. "TCP Handshake på 15 min".</motion.p>
    </div>
  );
}