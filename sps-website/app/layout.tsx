import type { Metadata } from 'next'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/shared/WhatsAppFloat'

export const metadata: Metadata = {
  metadataBase: new URL('https://shardapublicschool.com'),
  title: {
    default: 'Sharda Public School Almora | Best CBSE School in Almora',
    template: '%s | Sharda Public School Almora',
  },
  description:
    'Sharda Public School is the best CBSE school in Almora, Uttarakhand — offering holistic education from Nursery to Class XII since 2001. AI Labs, 15 sports programs, experienced faculty.',
  keywords: [
    'best school in Almora',
    'CBSE school Almora',
    'Sharda Public School',
    'Uttarakhand school',
    'top school Almora',
    'nursery to class 12 Almora',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shardapublicschool.com',
    siteName: 'Sharda Public School',
    title: 'Sharda Public School Almora | Best CBSE School',
    description:
      'Best CBSE school in Almora — Nursery to Class XII, AI & Robotics Lab, 15 sports, 23+ years of excellence.',
    images: [{ url: '/images/sps-logo.png', width: 800, height: 600 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-inter antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
