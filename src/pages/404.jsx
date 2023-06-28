import Link from "next/link";
import React from "react";

export default function Error404() {
  return (
    <main class="h-screen w-full flex flex-col justify-center items-center bg-[#f8efff] dark:bg-[#09030e]">
      <h1 class="text-9xl font-extrabold dark:text-white text-[#333333] tracking-widest">
        404
      </h1>
      <div class="bg-purple-500 dark:bg-purple-500 px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <button class="mt-5">
        <Link
          href="/"
          scroll={false}
          class="relative inline-block text-sm font-medium text-[#C43DFF] group active:text-purple-500 focus:outline-none focus:ring"
        >
          <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-purple-500 dark:bg-purple-500 group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span class="relative block px-8 py-3 bg-[#f8efff] dark:bg-[#09030e] border border-current">
            Go Home
          </span>
        </Link>
      </button>
    </main>
  );
}
