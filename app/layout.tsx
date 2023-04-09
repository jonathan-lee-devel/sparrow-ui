import '@/styles/globals.css'
import React from "react";
import {cn} from "@/lib/utils";
import Providers from "@/ui/Providers";
import Navbar from "@/ui/Navbar";

export const metadata = {
    title: 'Sparrow',
    description: 'A delivery service application',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={cn('bg-white text-slate-900 antialiased')}>
        <head>
            <title>{metadata.title}</title>
            <link rel={"icon"} type={"image/png"} href={"/favicon.ico"}/>
        </head>
        <body className={'min-h-screen bg-slate-50 dark:bg-slate-900 antialiased'}>
        <Providers>
            {children}
            {/* @ts-expect-error Server Component */}
            <Navbar/>
        </Providers>
        {/* Allow for more height on mobile devices */}
        <div className={'h-40 md:hidden'}/>
        </body>
        </html>
    )
}
