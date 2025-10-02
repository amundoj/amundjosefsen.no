"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Repo { name: string; description: string; html_url: string; }

export default function Portfolio() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/amundoj/repos?per_page=6").then(res => res.json()).then(setRepos);
  }, []);

  return (
    <div className="min-h-screen dysto-bg p-8 pt-20">
      <Link href="/" className="neon-text mb-8 block">&larr; Hjem</Link>
      <h1 className="text-4xl neon-text mb-8">Portefølje</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo, i) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="neon-border p-6 bg-gray-800/50 hover:bg-gray-800/70 transition-all"
          >
            <h2 className="text-2xl neon-text">{repo.name}</h2>
            <p className="text-gray-300">{repo.description || "Prosjekt fra Noroff eller TryHackMe."}</p>
            <a href={repo.html_url} className="neon-text mt-4 block">GitHub →</a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}