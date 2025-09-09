import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Crown Standard",
  description: "Premium cleaning services by trusted professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
