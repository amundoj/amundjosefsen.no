"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Om() {
  return (
    <div className="min-h-screen dysto-bg p-8 pt-20">
      <Link href="/" className="neon-text mb-8 block">&larr; Hjem</Link>
      <motion.h1 className="text-4xl neon-text mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        Om meg
      </motion.h1>
      <motion.section className="neon-border p-6 bg-gray-800/50 max-w-md mx-auto" initial={{ y: 50 }} animate={{ y: 0 }}>
        <p className="text-gray-300 mb-4">Høyere fagskolegrad i Backend fra Noroff. Nå i cybersikkerhet: Pre Security på TryHackMe, nettverk og forensics.</p>
        <a href="/cv.pdf" className="neon-text">Last ned CV →</a>
      </motion.section>
    </div>
  );
}