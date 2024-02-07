import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marco Toniut",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
