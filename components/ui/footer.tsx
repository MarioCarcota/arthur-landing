import Link from "next/link";
import { Globe, Instagram, Linkedin } from "lucide-react";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 ">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; usearthur.co - All rights reserved.
            </div>
          </div>

          {/* 2nd block */}
          <div className="hidden sm:block space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 3rd block */}
          <div className="hidden sm:block space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 4th block */}
          <div className="hidden sm:block space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2"></div>

          {/* 5th block */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2 z-50">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-3">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-200"
                  href="https://www.mariocarcota.com/"
                  aria-label="Twitter"
                >
                  <Globe size={24} />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-200"
                  href="https://www.linkedin.com/in/mario-carcota/"
                  aria-label="Medium"
                >
                  <Linkedin size={24} />
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-200"
                  href="https://www.instagram.com/mariocarcota/"
                  aria-label="Github"
                >
                  <Instagram size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Big text */}
      <div className="relative mt-0 sm:-mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Arthur'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Arthur'] after:[text-shadow:0_1px_0_white]"></div>
        {/* Glow */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-72 w-72 rounded-full border-[40px] border-blue-800 blur-[100px]"></div>
        </div>
      </div>
    </footer>
  );
}
