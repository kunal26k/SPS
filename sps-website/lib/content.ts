// ─── Sharda Public School — Central Content Store ───────────────────────────
// All static content lives here. Update this file when school data changes.

export const SCHOOL = {
  name: 'Sharda Public School',
  shortName: 'SPS',
  tagline: 'Learn • Excel • Perform',
  motto: 'Seva Parmo Dharma',
  mottoMeaning: 'Service before Self',
  established: 2001,
  board: 'CBSE',
  affiliationNo: '3530299',
  classes: 'Nursery to Class XII',
  description: 'Best CBSE School in Almora — delivering holistic education that empowers students to succeed in a changing world.',
  heroHeadline: 'Nurturing Leaders,\nBuilding Futures.',
  heroSubline: 'CBSE School in Almora · Nursery to Class XII · Est. 2001',
  mission: 'To provide comprehensive, quality education that produces global citizens equipped with 21st-century competencies — civic literacy, cultural awareness, critical thinking, and communication skills — advancing Human Excellence.',
  vision: 'To be the most trusted educational institution in Uttarakhand, where every child discovers their potential and graduates as a confident, compassionate, and capable individual ready to contribute to a better world.',
}

export const CONTACT = {
  phone: '7300502640',
  phoneDisplay: '+91 73005 02640',
  whatsapp: '917300502640',
  email: 'contact@shardapublicschool.com',
  admissionEmail: 'admission@shardapublicschool.com',
  social: {
    facebook:  'https://facebook.com/shardapublicschool',
    instagram: 'https://instagram.com/shardapublicschool',
    youtube:   'https://youtube.com/@shardapublicschool',
    linkedin:  'https://linkedin.com/school/shardapublicschool',
  },
}

export const CAMPUSES = [
  {
    id: 'junior',
    name: 'Junior Branch',
    label: 'Nursery – Class V',
    address: 'Khatyari, Khagmara Kote',
    city: 'Almora, Uttarakhand – 263601',
    timing: 'Mon – Sat: 8:30 AM – 2:30 PM',
  },
  {
    id: 'senior',
    name: 'Senior Branch',
    label: 'Class VI – XII',
    address: 'Near Circuit House, Dugalkhola',
    city: 'Almora, Uttarakhand – 263601',
    timing: 'Mon – Sat: 8:30 AM – 2:30 PM',
  },
]

export const STATS = [
  { value: '1300+', label: 'Students Enrolled' },
  { value: '50+',   label: 'Expert Faculty' },
  { value: '23+',   label: 'Years of Excellence' },
  { value: '1:20',  label: 'Teacher-Student Ratio' },
  { value: '15',    label: 'Sports Programs' },
]

export const PILLARS = [
  {
    icon: 'GraduationCap',
    title: 'Academic Excellence',
    description: 'Consistently top CBSE results in Almora for over a decade, following NCF 2024 and NEP 2020.',
  },
  {
    icon: 'FlaskConical',
    title: 'Modern Infrastructure',
    description: 'AI & Robotics Lab, smart classrooms, science labs, swimming pool, and a 6-acre campus.',
  },
  {
    icon: 'Heart',
    title: 'Holistic Development',
    description: '15 sports, creative arts, debate, leadership programs — developing the whole child.',
  },
  {
    icon: 'Users',
    title: 'Experienced Faculty',
    description: '50+ dedicated educators with a 1:20 ratio ensuring personal attention for every student.',
  },
]

export const PROGRAMS = [
  {
    id: 'primary',
    label: 'Primary Wing',
    classes: 'Nursery – Class V',
    campus: 'Junior Branch',
    color: 'green',
    description: 'Play-based, child-centred learning that builds curiosity, confidence, and character in every young learner.',
    highlights: ['CBSE NCF 2024 aligned', 'Child-friendly environment', 'Focus on creativity & values', 'Safe & nurturing spaces'],
    href: '/academics#primary',
  },
  {
    id: 'secondary',
    label: 'Secondary',
    classes: 'Class VI – X',
    campus: 'Senior Branch',
    color: 'navy',
    description: 'Concept-based and experiential learning building the 4Cs — Communication, Creativity, Collaboration, and Critical Thinking.',
    highlights: ['NEP 2020 integrated', 'STEM & lab-based learning', 'Top CBSE board results', 'Skill development focus'],
    href: '/academics#secondary',
  },
  {
    id: 'senior',
    label: 'Senior Secondary',
    classes: 'Class XI – XII',
    campus: 'Senior Branch',
    color: 'gold',
    description: 'Advanced curriculum with AI labs, counselling, and mentorship — preparing students for IITs, universities and careers globally.',
    highlights: ['Unmatched Class XII results in Almora', 'Science, Commerce & Humanities', 'AI & computer labs', '1-on-1 academic counselling'],
    href: '/academics#senior',
  },
]

export const INFRASTRUCTURE_HIGHLIGHTS = [
  {
    id: 'stem',
    title: 'AI & Robotics Lab',
    description: 'Students design, build and code their own machines, exploring artificial intelligence and emerging technologies.',
    icon: 'Cpu',
    tag: 'Technology',
  },
  {
    id: 'sports',
    title: 'Sports Complex',
    description: 'Cricket, football, hockey, swimming pool, gymnasium, basketball, volleyball — 15 programs in all.',
    icon: 'Trophy',
    tag: 'Sports',
  },
  {
    id: 'library',
    title: 'Library',
    description: 'A sanctuary of learning with reading challenges, book fairs, author visits, and extended exam-prep hours.',
    icon: 'BookOpen',
    tag: 'Learning',
  },
  {
    id: 'auditorium',
    title: 'Auditorium',
    description: 'Professional-grade sound, lighting, and projection — the stage where students express, perform, and shine.',
    icon: 'Mic2',
    tag: 'Culture',
  },
]

export const PRINCIPAL = {
  name: 'Mrs. Vinita Shekhar',
  designation: 'Principal',
  quote: 'We believe that striving for excellence is not just a goal but a mindset that can be cultivated and passed on to our most precious asset — our students.',
  fullMessage: `It is both an honour and a privilege to serve as the Principal of Sharda Public School, an esteemed institution renowned for its commitment to excellence and its continuous efforts to establish the highest standards of education in Almora.

At the heart of our institution lies an unwavering commitment to excellence. Every opportunity we encounter is embraced with a relentless drive to reach new heights, driven by a deep and enduring desire to learn and evolve. We believe that striving for excellence is not just a goal but a mindset that can be cultivated and passed on to our most precious asset — our students.

Our students have brought us immense pride by reaching exceptional milestones and achieving remarkable success at the state, national, and international levels in academics, sports, and co-curricular activities. Together with my devoted colleagues and faculty, we are committed to building upon this solid foundation, striving to further elevate the standards across all areas to their highest potential.

I aspire to be a trusted mentor, friend, philosopher, and guide to our students — someone they can rely on and trust as they grow and realise their potential in various fields of education.

I assure that the doors of our Institution will always be open to both students and their parents. I welcome your suggestions and input as we work together to foster a nurturing and supportive environment for all.`,
}

export const ALUMNI = [
  { name: 'Aakriti Kumar',   achievement: 'IIT Madras',                      flag: '🇮🇳' },
  { name: 'Aditi Kumar',     achievement: 'B.Tech Biotechnology, IIT Jodhpur', flag: '🇮🇳' },
  { name: 'Roshani Sirari',  achievement: "Lady Shri Ram College, Delhi University", flag: '🇮🇳' },
  { name: 'Ojasvi Jalal',    achievement: 'University of Edinburgh, UK',      flag: '🇬🇧' },
  { name: 'Kartik Jalal',    achievement: 'Postgraduate Studies, Australia',  flag: '🇦🇺' },
]

export const ADMISSION_STEPS = [
  {
    step: 1,
    title: 'Enquiry & Visit',
    description: 'Visit our campus or connect online to understand our programs, facilities, and environment.',
    icon: 'Search',
  },
  {
    step: 2,
    title: 'Registration',
    description: 'Download the admission form and submit it along with the required documents.',
    icon: 'FileText',
  },
  {
    step: 3,
    title: 'Assessment',
    description: 'Your child will undergo a brief, friendly interaction to determine class readiness.',
    icon: 'ClipboardCheck',
  },
  {
    step: 4,
    title: 'Confirmation',
    description: 'Admission is confirmed after fee submission and document verification. Welcome to SPS!',
    icon: 'CheckCircle2',
  },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story',            href: '/about#story' },
      { label: 'Vision & Mission',     href: '/about#vision' },
      { label: "Principal's Desk",     href: '/about#principal' },
      { label: 'Achievements',         href: '/about#achievements' },
      { label: 'Mandatory Disclosure', href: '/mandatory-disclosure' },
    ],
  },
  {
    label: 'Academics',
    href: '/academics',
    children: [
      { label: 'Primary (Nursery–V)',       href: '/academics#primary' },
      { label: 'Secondary (VI–X)',          href: '/academics#secondary' },
      { label: 'Senior Secondary (XI–XII)', href: '/academics#senior' },
      { label: 'Faculty',                   href: '/academics#faculty' },
      { label: '🔴 Live Classes',           href: '/live-classes' },
    ],
  },
  { label: 'Admissions', href: '/admissions' },
  {
    label: 'Life at SPS',
    href: '/life-at-sps',
    children: [
      { label: 'Student Life', href: '/life-at-sps#student-life' },
      { label: 'Sports',       href: '/life-at-sps#sports' },
      { label: 'Gallery',      href: '/life-at-sps#gallery' },
      { label: 'Alumni',       href: '/life-at-sps#alumni' },
      { label: 'Community',    href: '/community' },
    ],
  },
  { label: 'Infrastructure', href: '/infrastructure' },
  { label: 'Results',        href: '/results' },
  { label: 'Careers',        href: '/careers' },
  { label: 'Contact',        href: '/contact' },
]

// ─── Live Classes Data ───────────────────────────────────────────────────────

export const LIVE_SCHEDULE: {
  day: string
  slots: { time: string; subject: string; teacher: string; classes: string; youtubeId: string | null }[]
}[] = [
  {
    day: 'Monday',
    slots: [
      { time: '9:00 AM', subject: 'Mathematics', teacher: 'Mr. R.K. Sharma', classes: 'IX & X', youtubeId: null },
      { time: '11:00 AM', subject: 'Physics', teacher: 'Mrs. S. Pant', classes: 'XI & XII (Science)', youtubeId: null },
      { time: '2:00 PM', subject: 'English Literature', teacher: 'Ms. A. Bisht', classes: 'VI – VIII', youtubeId: null },
    ],
  },
  {
    day: 'Tuesday',
    slots: [
      { time: '9:00 AM', subject: 'Chemistry', teacher: 'Mr. D. Joshi', classes: 'XI & XII (Science)', youtubeId: null },
      { time: '11:00 AM', subject: 'History & Civics', teacher: 'Mrs. K. Rawat', classes: 'IX & X', youtubeId: null },
      { time: '2:00 PM', subject: 'Science', teacher: 'Ms. P. Mehta', classes: 'VI – VIII', youtubeId: null },
    ],
  },
  {
    day: 'Wednesday',
    slots: [
      { time: '9:00 AM', subject: 'Biology', teacher: 'Dr. R. Negi', classes: 'XI & XII (Science)', youtubeId: null },
      { time: '11:00 AM', subject: 'Geography', teacher: 'Mr. S. Verma', classes: 'IX & X', youtubeId: null },
      { time: '2:00 PM', subject: 'Mathematics', teacher: 'Mr. R.K. Sharma', classes: 'VI – VIII', youtubeId: null },
    ],
  },
  {
    day: 'Thursday',
    slots: [
      { time: '9:00 AM', subject: 'Accountancy', teacher: 'Mrs. M. Pandey', classes: 'XI & XII (Commerce)', youtubeId: null },
      { time: '11:00 AM', subject: 'Computer Science', teacher: 'Mr. A. Tiwari', classes: 'IX & X', youtubeId: null },
      { time: '2:00 PM', subject: 'English Grammar', teacher: 'Ms. A. Bisht', classes: 'III – V', youtubeId: null },
    ],
  },
  {
    day: 'Friday',
    slots: [
      { time: '9:00 AM', subject: 'Mathematics', teacher: 'Mr. R.K. Sharma', classes: 'XI & XII', youtubeId: null },
      { time: '11:00 AM', subject: 'Hindi', teacher: 'Mrs. U. Tiwari', classes: 'IX & X', youtubeId: null },
      { time: '2:00 PM', subject: 'EVS / Science', teacher: 'Ms. P. Mehta', classes: 'I – V', youtubeId: null },
    ],
  },
]

export const PAST_RECORDINGS = [
  { title: 'Trigonometry — Class X', subject: 'Mathematics', teacher: 'Mr. R.K. Sharma', date: 'Apr 10, 2026', duration: '52 min', youtubeId: 'PLACEHOLDER' },
  { title: 'Organic Chemistry Basics — Class XII', subject: 'Chemistry', teacher: 'Mr. D. Joshi', date: 'Apr 9, 2026', duration: '48 min', youtubeId: 'PLACEHOLDER' },
  { title: 'The French Revolution — Class IX', subject: 'History', teacher: 'Mrs. K. Rawat', date: 'Apr 8, 2026', duration: '45 min', youtubeId: 'PLACEHOLDER' },
]

// ─── Results Data ─────────────────────────────────────────────────────────────

export const RESULT_CLASSES = [
  'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
  'Class VI', 'Class VII', 'Class VIII',
  'Class IX', 'Class X', 'Class XI', 'Class XII',
]

export const SAMPLE_RESULT = {
  studentName: 'Sample Student',
  rollNo: '2024-001',
  class: 'Class X',
  section: 'A',
  session: '2024–25',
  subjects: [
    { name: 'English',     maxMarks: 100, obtained: 91, grade: 'A1' },
    { name: 'Hindi',       maxMarks: 100, obtained: 87, grade: 'A2' },
    { name: 'Mathematics', maxMarks: 100, obtained: 95, grade: 'A1' },
    { name: 'Science',     maxMarks: 100, obtained: 89, grade: 'A1' },
    { name: 'Social Sci.', maxMarks: 100, obtained: 84, grade: 'A2' },
  ],
  totalMax: 500,
  totalObtained: 446,
  percentage: 89.2,
  result: 'PASS',
  grade: 'A1',
  remarks: 'Excellent Performance',
}

// ─── Careers / Jobs Data ──────────────────────────────────────────────────────

export const JOB_OPENINGS = [
  {
    id: 'math-teacher',
    title: 'Mathematics Teacher',
    classes: 'IX – XII',
    type: 'Full-Time',
    qualification: 'M.Sc. Mathematics + B.Ed.',
    experience: '2+ years',
    posted: 'Apr 1, 2026',
    description: 'We are looking for a passionate Mathematics teacher for Classes IX–XII with strong CBSE board exam coaching experience.',
  },
  {
    id: 'science-teacher',
    title: 'Science Teacher (Physics/Chemistry)',
    classes: 'IX – XII',
    type: 'Full-Time',
    qualification: 'M.Sc. Physics or Chemistry + B.Ed.',
    experience: '3+ years',
    posted: 'Apr 1, 2026',
    description: 'Join our STEM department to teach Physics and/or Chemistry to senior secondary students. Lab experience preferred.',
  },
  {
    id: 'english-teacher',
    title: 'English Language & Literature Teacher',
    classes: 'VI – X',
    type: 'Full-Time',
    qualification: 'M.A. English + B.Ed.',
    experience: '1–3 years',
    posted: 'Mar 25, 2026',
    description: 'Seeking a creative and communicative English teacher to foster language skills, creative writing, and literary appreciation.',
  },
  {
    id: 'computer-teacher',
    title: 'Computer Science Teacher',
    classes: 'VI – XII',
    type: 'Full-Time',
    qualification: 'MCA / B.Tech CS + B.Ed. preferred',
    experience: '2+ years',
    posted: 'Mar 20, 2026',
    description: 'Teach programming, AI basics, and digital literacy in our state-of-the-art computer and robotics labs.',
  },
  {
    id: 'primary-teacher',
    title: 'Primary School Teacher',
    classes: 'Nursery – V',
    type: 'Full-Time',
    qualification: 'B.Ed. / D.El.Ed.',
    experience: '1+ years',
    posted: 'Mar 15, 2026',
    description: 'Energetic and nurturing teacher for our Junior Branch. Must have a passion for early childhood education.',
  },
]

// ─── Community / Notice Board Data ───────────────────────────────────────────

export type PostCategory = 'Announcement' | 'Event' | 'Achievement' | 'Notice'

export interface CommunityPost {
  id: string
  category: PostCategory
  title: string
  body: string
  author: string
  role: 'Admin' | 'Teacher' | 'Student'
  date: string
  pinned?: boolean
}

export const COMMUNITY_POSTS: CommunityPost[] = [
  {
    id: '1',
    category: 'Announcement',
    title: 'Annual Sports Day — April 25, 2026',
    body: 'We are thrilled to announce our Annual Sports Day to be held on April 25, 2026 at the Senior Branch ground. All students are requested to report in their house colours by 8:00 AM. Parents are cordially invited.',
    author: 'SPS Administration',
    role: 'Admin',
    date: 'Apr 12, 2026',
    pinned: true,
  },
  {
    id: '2',
    category: 'Notice',
    title: 'PTM for Classes IX & XII — April 20, 2026',
    body: 'Parent-Teacher Meeting for Classes IX and XII is scheduled for April 20, 2026 (Sunday) from 10:00 AM to 1:00 PM at the Senior Branch auditorium. Attendance is mandatory.',
    author: 'SPS Administration',
    role: 'Admin',
    date: 'Apr 11, 2026',
    pinned: true,
  },
  {
    id: '3',
    category: 'Event',
    title: 'Inter-School Science Olympiad — Registration Open',
    body: 'Sharda Public School is hosting the Kumaon Regional Science Olympiad on May 5, 2026. Students from Classes VII–X may register through their class teacher before April 30. Exciting prizes await!',
    author: 'Mr. A. Tiwari',
    role: 'Teacher',
    date: 'Apr 10, 2026',
  },
  {
    id: '4',
    category: 'Achievement',
    title: 'Our Students Excel at State Mathematics Olympiad',
    body: 'Congratulations to Ananya Rawat (Class X) and Rohan Bisht (Class IX) who secured 1st and 3rd positions respectively at the Uttarakhand State Mathematics Olympiad held in Dehradun. We are proud of your achievement!',
    author: 'Mrs. K. Rawat',
    role: 'Teacher',
    date: 'Apr 8, 2026',
  },
  {
    id: '5',
    category: 'Event',
    title: 'Book Fair at School Library — April 18–19',
    body: 'The annual book fair will be held at our school library on April 18–19, 2026. Over 5,000 titles across fiction, science, history, and competitive exam prep will be available at discounted prices. Open to students, parents, and faculty.',
    author: 'Librarian',
    role: 'Teacher',
    date: 'Apr 7, 2026',
  },
  {
    id: '6',
    category: 'Announcement',
    title: 'Summer Vacation Schedule 2026',
    body: 'Summer vacation for all classes will commence from May 20, 2026. School will reopen on July 1, 2026. The schedule for pre-board examinations for Classes X & XII will be communicated separately.',
    author: 'SPS Administration',
    role: 'Admin',
    date: 'Apr 5, 2026',
  },
  {
    id: '7',
    category: 'Achievement',
    title: 'SPS Robotics Team Qualifies for National Round',
    body: 'A big congratulations to our Robotics Club team — Priya Joshi, Amit Negi, and Kavya Pandey (Class XI) — who have qualified for the National Robotics Championship to be held in Bengaluru. This is a proud moment for SPS!',
    author: 'Mr. A. Tiwari',
    role: 'Teacher',
    date: 'Apr 3, 2026',
  },
  {
    id: '8',
    category: 'Notice',
    title: 'Fee Payment Reminder — April 2026',
    body: 'This is a reminder that the tuition fee for April 2026 is due by April 15. Parents are requested to submit fees at the school office or via the designated payment mode. Late fee charges will apply after the due date.',
    author: 'SPS Administration',
    role: 'Admin',
    date: 'Apr 1, 2026',
  },
]
