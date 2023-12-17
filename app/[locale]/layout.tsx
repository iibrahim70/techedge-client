import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { notFound } from "next/navigation";
import ThemeProviders from "@/components/providers/ThemeProviders";
import { cn } from "@/lib/utils";
import "./globals.css";
import { NextIntlClientProvider, useMessages } from "next-intl";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "TechEdge College",
  description: "Empowering Students with Cutting-Edge Technology Education.",
};

const locales = ["en", "bn"];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  if (!locales.includes(locale)) notFound();

  // Receive messages provided in `i18n.ts`
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className={cn(montserrat.className)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProviders>{children}</ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
