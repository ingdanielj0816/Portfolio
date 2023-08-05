import "./globals.css";
import React, { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";

const syne = Syne({
    subsets: ["latin"],
    display: "block",
    weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
    metadataBase: new URL("https://www.seekvisualartist.com/"),
    title: "DanielPortfolio",
    description:
        "Portafolio profesional del ingeniero Daniel Muñoz de la universidad militar nueva granada Bogotá, Colombia",
    generator: "Next.js",
    applicationName: "DanielPortfolio",
    keywords: [
        "Daniel",
        "ing",
        "ingeniero mecatronico",
        "Mecatronica",
        "freelance",
        "developer",
        "freelance developer",
        "frontend",
        "nextjs",
        "astro",
        "react",
        "frontend developer",
        "frontend engineer",
        "creative",
        "creative developer",
        "creative engineer",
        "tech",
        "colombia",
        "software",
        "software developer",
        "portfolio",
        "frontend developer portfolio",
        "creative developer portfolio",
        "creative engineer portfolio",
        "software developer portfolio",
        "frontend engineer portfolio",
    ],
    colorScheme: "dark",
    openGraph: {
        title: "DanielPortfolio",
        description:
            "Portafolio profesional del ingeniero Daniel Muñoz de la universidad militar nueva granada Bogotá, Colombia",
        url: ".",
        siteName: "www.DanielPortfolio.com",
        images: [
            {
                url: "./public/logor.png",
                width: 1200,
                height: 1200,
                alt: "DanielPortfolio",
            },
        ],
        locale: "en-US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "DanielPortfolio",
        description:
            "Portafolio profesional del ingeniero Daniel Muñoz de la universidad militar nueva granada Bogotá, Colombia",
        creator: "Daniel",
        creatorId: "0000000000",
        images: ["./public/logor.png"],
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    category: "technology",
};

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en">
            <body
                className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
            >
                {children}
            </body>
        </html>
    );
}
