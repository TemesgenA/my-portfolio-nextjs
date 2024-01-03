import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>{metadata.title?.toString() || ''}</title>
        <meta name="description" content={metadata.description || ''} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      </head>
      <body className={inter.className}>
        <header>
          {/* Header content */}
        </header>
        <main>
          {children}
        </main>
        <footer>
          {/* Footer content */}
        </footer>
      </body>
    </html>
  )
}
