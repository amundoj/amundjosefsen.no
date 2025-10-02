"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-cyber-dark/80 backdrop-blur-md z-50 p-4"
    >
      <ul className="flex justify-center space-x-8 text-gray-300">
        <li><Link href="/" className="neon-text hover:text-cyber-glow">Hjem</Link></li>
        <li><Link href="/portfolio" className="hover:text-cyber-glow">Portefølje</Link></li>
        <li><Link href="/blog" className="hover:text-cyber-glow">Blogg</Link></li>
        <li><Link href="/om" className="hover:text-cyber-glow">Om meg</Link></li>
        <li><Link href="/kontakt" className="hover:text-cyber-glow">Kontakt</Link></li>
      </ul>
    </motion.nav>
  );
}