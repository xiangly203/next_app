// app/layout.tsx
import {Providers} from "../providers";
import {Analytics} from '@vercel/analytics/react';
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en" className='dark'>
        <body>
        <Providers>
            {children}
            <Analytics/>
        </Providers>
        </body>
        </html>
    );
}