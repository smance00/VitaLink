import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'; // Import the ThemeProvider
import { cn } from "@/lib/utils";

// Font configuration
const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-Sans'
});

// Metadata configuration for SEO
export const metadata: Metadata = {
  title: "VitaLink",
  description: "A healthcare management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        {/* Theme Provider for managing theme context */}
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* Main content rendering */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
