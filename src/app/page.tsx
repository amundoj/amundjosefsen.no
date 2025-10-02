"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen dysto-bg flex flex-col items-center justify-center p-8 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-2xl"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-bold neon-text mb-4"
          whileHover={{ scale: 1.05 }}
        >
          Amund Josefsen
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Backend-utvikler fra Noroff | Lærer cybersikkerhet på TryHackMe. Fra APIer til forensics – kickstarter karrieren min her.
        </motion.p>
        <motion.a 
          href="/portfolio"
          className="neon-border bg-transparent text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyber-neon transition-all"
          whileTap={{ scale: 0.95 }}
          whileHover={{ boxShadow: "0 0 30px rgba(0, 245, 255, 0.6)" }}
        >
          Se portefølje
        </motion.a>
      </motion.div>
    </div>
  );
}