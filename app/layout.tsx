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
    <head>
      <title>{metadata.title}</title>
      <link rel={"icon"} type={"image/png"} href={"/favicon.ico"} />
    </head>
      <body>{children}</body>
    </html>
  )
}
