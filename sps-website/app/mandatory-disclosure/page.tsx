import Link from 'next/link'
import { SCHOOL, CONTACT, CAMPUSES } from '@/lib/content'
import { ArrowRight, ExternalLink } from 'lucide-react'

function PageHero({ title, subtitle, tag }: { title: string; subtitle: string; tag: string }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0" style={{ background: 'linear-gradient(135deg, #0E1A28 0%, #1A2E4A 50%, #1e3d30 100%)' }} />
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="font-montserrat text-xs font-700 text-white/90 uppercase tracking-wider">{tag}</span>
        </span>
        <h1 className="font-playfair text-white text-4xl sm:text-5xl lg:text-6xl font-700 leading-tight mb-4">{title}</h1>
        <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto">{subtitle}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10" style={{ background: 'linear-gradient(to top, #ffffff, transparent)' }} />
    </section>
  )
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <tr className="border-b border-gray-100 hover:bg-gold/3 transition-colors">
      <td className="py-3 px-4 font-inter text-sm font-500 text-navy w-1/2 lg:w-2/5">{label}</td>
      <td className="py-3 px-4 font-inter text-sm text-gray-700">{value}</td>
    </tr>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
      <div className="bg-navy px-6 py-4">
        <h3 className="font-montserrat font-700 text-white text-sm uppercase tracking-widest">{title}</h3>
      </div>
      <table className="w-full">{children}</table>
    </div>
  )
}

export default function MandatoryDisclosurePage() {
  return (
    <>
      <PageHero
        tag="CBSE Mandatory Disclosure"
        title="Mandatory Public Disclosure"
        subtitle="All information as required under CBSE Affiliation Bye-Laws. Published in the interest of transparency and public information."
      />

      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          {/* Note */}
          <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5 mb-10 flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-gold flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-navy text-xs font-700">!</span>
            </div>
            <p className="font-inter text-sm text-navy">
              This page contains mandatory information as required by CBSE. For the official CBSE Affiliation details, visit{' '}
              <a href="https://cbseaff.nic.in" target="_blank" rel="noopener noreferrer" className="text-navy font-700 underline hover:text-gold inline-flex items-center gap-1">
                cbseaff.nic.in <ExternalLink size={12} />
              </a>
            </p>
          </div>

          {/* A: General Information */}
          <Section title="A. General Information">
            <tbody>
              <Row label="Name of the School" value={SCHOOL.name} />
              <Row label="Affiliation No." value={SCHOOL.affiliationNo} />
              <Row label="School Code" value="57192" />
              <Row label="Complete Address" value="Near Circuit House, Dugalkhola, Almora, Uttarakhand – 263601" />
              <Row label="Principal Name & Qualification" value="Mrs. Vinita Shekhar, M.A., B.Ed." />
              <Row label="School Email" value={<a href={`mailto:${CONTACT.email}`} className="text-navy hover:text-gold">{CONTACT.email}</a>} />
              <Row label="Contact No." value={CONTACT.phoneDisplay} />
            </tbody>
          </Section>

          {/* B: Documents & Information */}
          <Section title="B. Documents & Information">
            <tbody>
              <Row label="Copies of Affiliation / Upgradation letter" value="Available at school office" />
              <Row label="Copies of Societies / Trust / Company Registration" value={
                <span className="text-red-600 font-inter text-sm">
                  ⚠️ Trust registration valid until 18.08.2022 — renewal in progress. Please contact school office for updated documentation.
                </span>
              } />
              <Row label="Copy of No Objection Certificate (NOC) issued" value="NOC No. 1130(1)/XXIV-3/10/01(06)2010, issued 28 June 2010" />
              <Row label="Copies of Recognition Certificate" value="Available at school office" />
              <Row label="Copy of Valid Building Safety Certificate" value="Available at school office" />
              <Row label="Copy of Valid Fire Safety Certificate" value="Available at school office" />
              <Row label="Copy of the DEO Certificate" value="Available at school office" />
              <Row label="Copies of Valid Water, Health & Sanitation Certificates" value="Available at school office" />
            </tbody>
          </Section>

          {/* C: Results & Academics */}
          <Section title="C. Result & Academics">
            <tbody>
              <Row label="Fee Structure" value="Available at school office on request" />
              <Row label="Annual Academic Calendar" value="Available at school office" />
              <Row label="List of School Management Committee (SMC)" value="Available at school office" />
              <Row label="List of Parents Teachers Association (PTA) Members" value="Available at school office" />
              <Row label="Last 3-Year CBSE Board Result" value={
                <span>
                  <span className="block">2024-25: Outstanding results (Class X & XII)</span>
                  <span className="block">2023-24: Exceptional achievements (Class X & XII)</span>
                  <span className="block">2022-23: Exceptional results (Class X & XII)</span>
                </span>
              } />
            </tbody>
          </Section>

          {/* D: Staff & Infrastructure */}
          <Section title="D. Staff (Teaching)">
            <tbody>
              <Row label="Principal" value="Mrs. Vinita Shekhar" />
              <Row label="Total No. of Teaching Staff" value="50+" />
              <Row label="PGT Teachers" value="Available at school office" />
              <Row label="TGT Teachers" value="Available at school office" />
              <Row label="PRT Teachers" value="Available at school office" />
              <Row label="Trained, Untrained" value="All teachers are trained and qualified (B.Ed./D.El.Ed.)" />
            </tbody>
          </Section>

          {/* E: School Infrastructure */}
          <Section title="E. School Infrastructure">
            <tbody>
              <Row label="Total Campus Area" value="6 Acres (24,281.16 sq. metres)" />
              <Row label="Built-Up Area" value="602.01 sq. metres" />
              <Row label="Area of Playground" value="990 sq. metres" />
              <Row label="Other Facilities" value="Swimming Pool, AI & Robotics Lab, Science Labs (Physics, Chemistry, Biology), Computer Lab, Library, Auditorium, Cafeteria, GPS-tracked Transport, Medical Infirmary, CCTV Security" />
            </tbody>
          </Section>

          {/* F: Campuses */}
          <Section title="F. Campus Addresses">
            <tbody>
              {CAMPUSES.map((c) => (
                <Row key={c.id} label={`${c.name} (${c.label})`} value={`${c.address}, ${c.city}`} />
              ))}
            </tbody>
          </Section>

          {/* G: Affiliation Details */}
          <Section title="G. Affiliation Details">
            <tbody>
              <Row label="Board of Affiliation" value="Central Board of Secondary Education (CBSE), New Delhi" />
              <Row label="Affiliation No." value={SCHOOL.affiliationNo} />
              <Row label="Affiliation Date" value="30.08.2011" />
              <Row label="Affiliation Status" value="Provisional" />
              <Row label="NOC Number" value="1130(1)/XXIV-3/10/01(06)2010" />
              <Row label="NOC Issuing Date" value="28 June 2010" />
              <Row label="Is School CBSE NCF 2024 Aligned?" value="Yes" />
              <Row label="Is School NEP 2020 Compliant?" value="Yes" />
            </tbody>
          </Section>

          {/* Managing Committee */}
          <Section title="H. School Managing Committee">
            <tbody>
              <Row label="Trust / Society Name" value="Sharda Public School Samiti" />
              <Row label="Registration Under" value="Company Act 1956" />
              <Row label="Manager / President" value="Dr. H.D. Kandpal" />
              <Row label="No. of Managing Committee Members" value="10" />
            </tbody>
          </Section>

          {/* Footer note */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 mt-6">
            <p className="font-inter text-xs text-gray-400 leading-relaxed">
              <strong className="text-navy">Note:</strong> The above information is published in compliance with CBSE Affiliation Bye-Laws and is updated periodically.
              For any discrepancies or latest information, please contact the school office directly at {CONTACT.phoneDisplay} or email {CONTACT.email}.
              Some documents are available only at the school office for physical inspection as per CBSE guidelines.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link href="/contact" className="btn-navy inline-flex">
              Contact School Office <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
