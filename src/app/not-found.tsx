"use client";

/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: 10 }}
    >
      <section className="text-center mt-30 mb-20 px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold font-inter">
          404 - Page not found
        </h1>

        <h2 className="font-extralight font-inter text-xl sm:text-2xl md:text-2xl mt-1 text-[#999999] mb-2">
          The page you're looking for doesn't exist.
        </h2>

        <div className=" flex items-center justify-center mt-4">
          <Link href="/">
            <Button title="Go home" />
          </Link>
        </div>
      </section>
    </motion.section>
  );
}
