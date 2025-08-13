import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Your Brand',
    default: 'Your Brand',
  },
  description: 'Emergency [service] in [city]. Fast response.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    siteName: 'Your Brand',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <header className="border-b">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold">Your Brand</h1>
            <nav className="hidden sm:flex space-x-6">
              <a href="/" className="hover:text-blue-600">Home</a>
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="border-t bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold mb-2">Contact Info</h3>
                <p>[Your Business Name]</p>
                <p>[Address Line 1]</p>
                <p>[City, State ZIP]</p>
                <p>Phone: <a href="tel:+1234567890" className="text-blue-600">(123) 456-7890</a></p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
                <p>Sun: Emergency Only</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
