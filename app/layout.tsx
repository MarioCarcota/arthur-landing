import "./css/style.css";

export const metadata = {
  title: "Arthur | Transform space into an engaging adventure. ",
  description:
    "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
  openGraph: {
    title: "Arthur | Transform space into an engaging adventure.",
    description:
      "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
    url: "https://usearthur.co/",
    siteName: "usearthur",
    images: [
      {
        url: "https://usearthur.co/images/ArthurNasa.png",
        width: 1200,
        height: 630,
        alt: "Arthur | Transform space into an engaging adventure.",
      },
    ],
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arthur | Transform space into an engaging adventure.",
    description:
      "Arthur is your personal virtual buddy, crafted to make every moment of your mission more engaging, productive, and connected to Earth.",
    images: ["https://usearthur.co/images/ArthurNasa.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`bg-black tracking-tight text-gray-300 antialiased`}>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
