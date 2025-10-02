
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Kontakt() {
  return (
    <div className="min-h-screen dysto-bg p-8 pt-20">
      <Link href="/" className="neon-text mb-8 block">&larr; Hjem</Link>
      <motion.h1 className="text-4xl neon-text mb-8">Kontakt</motion.h1>
      <motion.a 
        href="mailto:amund@example.no" 
        className="neon-border bg-transparent text-cyan-400 px-8 py-4 rounded-lg block text-center font-semibold hover:bg-cyber-neon transition-all"
        whileHover={{ scale: 1.05 }}
      >
        Send e-post
      </motion.a>
    </div>
  );
}