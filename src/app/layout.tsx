import './globals.css';
import { ReactNode } from 'react';
import '../styles/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A simple portfolio website',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white text-center py-4">
          <p>&copy; {new Date().getFullYear()} Rabi Hassan. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}