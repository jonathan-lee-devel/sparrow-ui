import './globals.css'
import React from "react";

export const metadata = {
  title: 'Sparrow',
  description: 'A delivery service application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
