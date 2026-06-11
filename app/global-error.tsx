"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.log("Global Error rendered");
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 text-white">
          <h2 className="text-3xl font-bold mb-4">Something went wrong!</h2>
          <p className="text-zinc-400 mb-8 max-w-md text-center">
            A critical error occurred. Please try again.
          </p>
          <button
            onClick={() => reset()}
            className="rounded-full px-8 h-12 font-bold bg-indigo-600 text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
