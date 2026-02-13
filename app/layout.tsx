import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modisoft - Modern Software Solutions",
  description: "Professional software development and digital solutions for modern businesses. We create innovative, scalable, and user-friendly applications.",
  keywords: ["software development", "web development", "mobile apps", "digital solutions", "modisoft"],
  authors: [{ name: "Modisoft" }],
  openGraph: {
    title: "Modisoft - Modern Software Solutions",
    description: "Professional software development and digital solutions for modern businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
