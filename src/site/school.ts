// School facts used across the website. Source: school-data.json (taken from the live
// school website). Change a fact here and in the page copy that quotes it.
export const school = {
  name: "Sharda Public School",
  motto: "Seva Parmo Dharma",
  mottoMeaning: "Service before Self",
  established: 2001,
  affiliationNumber: "3530299",
  principal: "Mrs. Vinita Shekhar",
  email: {
    general: "contact@shardapublicschool.com",
    admissions: "admission@shardapublicschool.com",
  },
  phones: {
    admissions: { label: "+91 73005 02640", tel: "tel:+917300502640" },
    office: [
      { label: "05962 236611", tel: "tel:+915962236611" },
      { label: "05962 236073", tel: "tel:+915962236073" },
      { label: "05962 230283", tel: "tel:+915962230283" },
    ],
  },
  whatsapp: "https://wa.me/917300502640",
  campuses: {
    junior: { name: "Junior Branch", classes: "Nursery – Class V", address: "Khatyari, Khagmara Kote, Almora — 263601" },
    senior: { name: "Senior Branch", classes: "Class VI – XII", address: "Near Circuit House, Dugalkhola, Almora — 263601" },
  },
  admissionHours: "Mon – Sat, 8:30 am – 2:30 pm",
} as const;
