import "./globals.css";

export const metadata = {
    title: "Crown Standard",
    description: "Premium cleaning services by trusted professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen antialiased bg-background text-foreground">
                <main>{children}</main>
            </body>
        </html>
    );
}
