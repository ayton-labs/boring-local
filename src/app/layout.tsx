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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-white text-neutral-900`}
      >
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
          <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-900">Your Brand</h1>
            <nav className="hidden sm:flex space-x-8">
              <a href="/" className="font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Home</a>
              <a href="/about" className="font-medium text-neutral-600 hover:text-emerald-600 transition-colors">About</a>
              <a href="/contact" className="font-medium text-neutral-600 hover:text-emerald-600 transition-colors">Contact</a>
            </nav>
          </div>
        </header>
        
        <main className="flex-1">
          {children}
        </main>
        
        <footer className="bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-neutral-900 mb-6">Contact Info</h3>
                <div className="space-y-2 text-neutral-600">
                  <p className="font-medium text-neutral-900">[Your Business Name]</p>
                  <p>[Address Line 1]</p>
                  <p>[City, State ZIP]</p>
                  <p className="pt-2">
                    Phone: <a href="tel:+1234567890" className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">(123) 456-7890</a>
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-neutral-900 mb-6">Hours</h3>
                <div className="space-y-2 text-neutral-600">
                  <p><span className="font-medium text-neutral-900">Mon-Fri:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="font-medium text-neutral-900">Sat:</span> 9:00 AM - 4:00 PM</p>
                  <p><span className="font-medium text-neutral-900">Sun:</span> Emergency Only</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
