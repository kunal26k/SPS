interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {tag && (
        <span className="tag bg-gold/10 text-gold-600 font-montserrat text-xs font-700 uppercase tracking-widest">
          {tag}
        </span>
      )}
      <h2 className={`section-heading ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subheading ${light ? 'text-white/80' : 'text-gray-500'} ${align === 'center' ? 'text-center' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
