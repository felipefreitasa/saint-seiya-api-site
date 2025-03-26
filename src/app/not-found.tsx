/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/Button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="text-center mt-20 mb-20 px-4 sm:px-8 md:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold font-inter">
        404 - Page not found
      </h1>

      <h2 className="font-extralight font-inter text-xl sm:text-2xl md:text-2xl mt-1 text-[#999999] mb-2">
        The page you're looking for doesn't exist.
      </h2>

      <Link href="/">
        <Button title="Go home" />
      </Link>
    </section>
  );
}
