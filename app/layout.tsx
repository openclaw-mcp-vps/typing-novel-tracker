import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TypingNovel — Track Typing Speed Through Classic Literature",
  description: "Gamified typing practice with classic novels. Track WPM, accuracy, and comprehension as you read."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b600a41d-8efd-4133-9757-2b1eb1a79cce"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
