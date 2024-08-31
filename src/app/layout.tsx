import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import './globals.scss'

import { basePath } from '@/const'

import { LayoutClient } from '@/components/layout-client/LayoutClient'

const poppins = Poppins({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'VPN - Lumos',
  description: 'Access everything securely with VPN',
  keywords: ['access', 'vpn', 'lumos', 'hide', 'location', 'blocked', 'trust'],
  creator: 'test by Yana'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href={`${basePath}/logo.ico`} />
      </head>
      <body className={poppins.className}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
