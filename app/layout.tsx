import type {Metadata} from 'next';
//@ts-ignore
import './globals.css'; // Global styles

export const metadata = {
  title: "Portfolio| Full Stack Developer",
  description: "Portfolio showcasing web apps, backend systems, and modern UI experiences.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
