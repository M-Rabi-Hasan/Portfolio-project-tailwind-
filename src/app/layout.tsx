import Link from 'next/link';
import '../styles/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'A simple portfolio website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>© 2024 My Portfolio. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
