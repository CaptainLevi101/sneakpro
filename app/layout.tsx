import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
import "@/assets/styles/globals.css";
import { APP_NAME, SERVER_URL } from "@/lib/constants";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: `${APP_NAME}`,
  description: "Modern Sneaker Platform built with NextJs",
  metadataBase: new URL(SERVER_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
