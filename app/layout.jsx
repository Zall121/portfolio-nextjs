import './globals.css';

export const viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: 'no',
};

export const metadata = {
    title: 'Zall.Hdy | Junior Web Developer',
    description: 'Professional portfolio of Zall.Hdy - A passionate Junior Web Developer specializing in modern web technologies, React, Next.js, Node.js, and more.',
    keywords: ['Junior Developer', 'Web Developer', 'React', 'Next.js', 'Node.js', 'JavaScript', 'Portfolio'],
    authors: [{ name: 'Zall.Hdy' }],
    creator: 'Zall.Hdy',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://johndoe.dev',
        title: 'Zall.Hdy | Junior Web Developer',
        description: 'Professional portfolio showcasing modern web development projects and skills.',
        siteName: 'Zall.Hdy Portfolio',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Zall.Hdy | Junior Web Developer',
        description: 'Professional portfolio showcasing modern web development projects and skills.',
        creator: '@zall.hdy',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Allura&family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body className="bg-[#0a0a0f] text-gray-100 antialiased">
                {/* Background Effects */}
                <div className="fixed inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
                <div className="fixed top-0 left-0 w-96 h-96 gradient-orb gradient-orb-purple -translate-x-1/2 -translate-y-1/2" />
                <div className="fixed bottom-0 right-0 w-96 h-96 gradient-orb gradient-orb-blue translate-x-1/2 translate-y-1/2" />

                {/* Main Content */}
                <main className="relative z-10">
                    {children}
                </main>
            </body>
        </html>
    );
}
