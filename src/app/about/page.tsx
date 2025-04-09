"use client";

/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <main className="px-4 md:px-8 lg:px-16">
        <AboutHeader />

        <WhatIsThisSection />

        <DeveloperSection />

        <TechStackSection />
      </main>
    </motion.section>
  );
}

function AboutHeader() {
  return (
    <section className="pt-4">
      <h1 className="font-inter font-semibold text-3xl mb-5">About</h1>
    </section>
  );
}

function WhatIsThisSection() {
  return (
    <section>
      <h2 className="font-inter font-semibold text-xl">What is this?</h2>
      <p className="font-inter font-light text-base text-[#888888] mb-4">
        The Saint Seiya API is a RESTful API that provides detailed information
        on characters, techniques, and much more from the iconic Saint Seiya
        universe. Whether you're building a fan website, a mobile app, or just
        exploring data, this API serves as a comprehensive source for everything
        related to Saint Seiya.
      </p>
    </section>
  );
}

function DeveloperSection() {
  return (
    <section>
      <h2 className="font-inter font-semibold text-xl mt-6">
        Who develops this API?
      </h2>
      <p className="font-inter font-light text-base text-[#888888] mb-4">
        This API is developed and maintained by{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/felipefreitasa/"
          className="text-white font-medium hover:text-[#888888] transition-colors underline"
        >
          Felipe Freitas
        </Link>
        . The goal of this project is to provide an easily accessible and
        well-structured dataset for Saint Seiya enthusiasts and developers.
      </p>
    </section>
  );
}

function TechStackSection() {
  const techStack = [
    { label: "Backend", value: "Node.js, Express, Swagger" },
    { label: "Database", value: "MongoDB" },
    { label: "Hosting", value: "Heroku" },
  ];

  return (
    <section>
      <h2 className="font-inter font-semibold text-xl mt-6">Tech Stack</h2>
      <ul className="list-disc pl-5 text-[#888888] font-inter font-light text-base">
        {techStack.map(({ label, value }) => (
          <li key={label}>
            <span className="text-white">{label}:</span> {value}
          </li>
        ))}
      </ul>
    </section>
  );
}
