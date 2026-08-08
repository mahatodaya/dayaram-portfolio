"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 text-lg font-medium mb-4">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              {profile.fullName}
            </h1>

            <p className="mt-4 text-xl text-gray-400">
              Most people call me{" "}
              <span className="text-blue-400 font-semibold">
                {profile.nickname}
              </span>
              .
            </p>

            {/* Roles */}
            <div className="mt-8 space-y-2">
              {profile.roles.map((role, index) => (
                <motion.p
                  key={role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.15,
                  }}
                  className="text-2xl md:text-3xl font-semibold text-gray-200"
                >
                  {role}
                </motion.p>
              ))}
            </div>

            <p className="mt-8 max-w-xl text-gray-400 text-lg leading-relaxed">
              {profile.tagline}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-700 hover:-translate-y-1"
              >
                View My Work
                <ArrowDown size={18} />
              </a>

              <a
                href={profile.buttons.resume}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-slate-600 px-6 py-3 font-medium transition hover:border-blue-500 hover:text-blue-400"
              >
                Download CV
                <Download size={18} />
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8 flex items-center gap-5">
              <a
                href={profile.buttons.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="GitHub"
              >
                Github
              </a>

              <a
                href={profile.buttons.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                Linkedin
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE - PHOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-110" />

              {/* Photo container */}
<div className="relative w-72 md:w-96">

  {/* Soft blue glow behind the portrait */}
  <div className="absolute inset-10 bg-blue-600/20 blur-3xl rounded-full" />

  <Image
    src={profile.image}
    alt="Dayaram Mahato"
    width={500}
    height={600}
    priority
    className="relative z-10 w-full h-auto object-contain"
  />

</div>

              {/* Small badge */}
<div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-xl px-5 py-3 shadow-xl">

  <p className="text-sm text-gray-400">
    Based in
  </p>

  <p className="font-semibold">
    Australia 🇦🇺
  </p>

</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
