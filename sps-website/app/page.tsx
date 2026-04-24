import type { Metadata } from 'next'
import Hero               from '@/components/home/Hero'
import StatsBar           from '@/components/home/StatsBar'
import WhySPS             from '@/components/home/WhySPS'
import Programs           from '@/components/home/Programs'
import InfraHighlights    from '@/components/home/InfraHighlights'
import PrincipalMessage   from '@/components/home/PrincipalMessage'
import AlumniStrip        from '@/components/home/AlumniStrip'
import StudentLifePreview from '@/components/home/StudentLifePreview'
import AdmissionBand      from '@/components/home/AdmissionBand'

export const metadata: Metadata = {
  title: 'Sharda Public School Almora | Best CBSE School in Almora',
  description:
    'Sharda Public School — best CBSE school in Almora, Uttarakhand. Nursery to Class XII, AI & Robotics Lab, 15 sports programs, 23 years of academic excellence. Admissions open 2025–26.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Full-screen hero with CTAs */}
      <Hero />

      {/* 2. Stats bar — navy band, gold numbers */}
      <StatsBar />

      {/* 3. Why SPS — 4 pillars */}
      <WhySPS />

      {/* 4. Academic programs — 3 level cards */}
      <Programs />

      {/* 5. Infrastructure highlights — 4 facility cards */}
      <InfraHighlights />

      {/* 6. Principal's message — split layout */}
      <PrincipalMessage />

      {/* 7. Alumni strip — world placements */}
      <AlumniStrip />

      {/* 8. Student life preview grid */}
      <StudentLifePreview />

      {/* 9. Admission CTA band — gold bg */}
      <AdmissionBand />
    </>
  )
}
