import '../styles/globals.scss';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Test',
  description: 'Learning Next.js 13.4 app',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body>
      <div className="container">
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>
      </body>
      </html>
  )
}
