import type { Metadata, Viewport } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from "@/components/theme-provider"
import './globals.css'

// Font setup: Montserrat brand standard hai
const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Rooster Shack | Proper Chicken. Proper Flavour.',
  description: 'Experience gourmet piri piri chicken, loaded burgers, wicked wings, and awesome shakes at Rooster Shack.',
  keywords: ['chicken', 'piri piri', 'burgers', 'fast food', 'Rooster Shack'],
}

export const viewport: Viewport = {
  themeColor: '#e11d48', // Red color for mobile browser bars
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {/* ThemeProvider yahan poori app ko wrap kar raha hai */}
        <ThemeProvider 
          attribute="class" 
          defaultTheme="dark" 
          enableSystem={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}