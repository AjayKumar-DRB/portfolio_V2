import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({subsets:['latin'], variable:'--font-cal', weight: ['400']})

export const metadata: Metadata = {
  title: "Ajay Kumar",
  description: "Welcome to my personal portfolio, where I showcase a variety of projects and technical skills that demonstrate my passion for innovation and problem-solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="en">
      <head>
        <link rel="icon" href="@/app/favicon.ico" type="image/x-icon" />
      </head>
      <body className={twMerge(inter.variable,calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>
        {children}
      </body>
    </html>
  );
}
