export interface DirectoryItem {
    id: number;
    name: string;
    role: string;
    description: string;
    phone: string;
    email: string;
    image: string; // official logo or photo URL (recommend placing under /public/logos)
    website?: string;
    address?: string;
}

// Pampanga-based institutions and programs (placeholders where specific contact details are needed)
export const directory: DirectoryItem[] = [
  {
    id: 1,
    name: "Jose B. Lingad Memorial General Hospital (JBLMGH)",
    role: "Tertiary Hospital • Mental Health Services",
    description:
      "Public tertiary hospital in San Fernando with psychiatric and behavioral health services. Please check their official channels for the latest clinic schedules.",
    phone: "(045) 409-6688 (Trunkline)",
    email: "paccu.jblmrh@gmail.com",
    website: "https://jblmgh.doh.gov.ph/",
    address: "Dolores, City of San Fernando, Pampanga 2000, Philippines",
    image: "/logos/pampanga/jblmgh.png"
  },
  {
    id: 2,
    name: "The Medical City Clark (TMC Clark)",
    role: "Hospital • Behavioral Medicine / Psychiatry",
    description:
      "Private hospital in Clark Freeport Zone providing behavioral medicine and psychiatric services.",
    phone: "(045) 598-4000 (Hotline); +63 919-069-5536 (Customer Service)",
    email: "tmcclark@themedicalcity.com",
    website: "https://www.themedicalcity.com/our-network/medical-city-clark",
    address: "100 Gatwick Gateway, Clark Global City, Clark Freeport Zone, Pampanga, Philippines 2023",
    image: "/logos/pampanga/tmc-clark.png"
  },
  {
    id: 3,
    name: "Angeles University Foundation Medical Center (AUFMC)",
    role: "Teaching Hospital • Psychiatry",
    description:
      "AUF Medical Center offering various specialty services including mental health. Contact the hospital or department for appointments.",
    phone: "(045) 625-2999",
    email: "info@aufmc.com.ph",
    website: "https://aufmc.com.ph/",
    address: "MacArthur Highway, Angeles City, Pampanga, Philippines",
    image: "/logos/pampanga/aufmc.png"
  },
  {
    id: 4,
    name: "Rafael Lazatin Memorial Medical Center (Ospital Ning Angeles / ONA)",
    role: "Public Hospital • Mental Health Services",
    description:
      "City-run hospital known locally as ONA with access to mental health and psychosocial services.",
    phone: "+63 927-046-2443",
    email: "",
    website: "https://facebook.com/profile.php?id=100063886217621",
    address: "Angeles, Central Luzon, Philippines",
    image: "/logos/pampanga/ona.png"
  },
  {
    id: 5,
    name: "Mother Teresa of Calcutta Medical Center (MTCMC)",
    role: "Private Hospital • Counseling / Psychiatry (by schedule)",
    description:
      "Private medical center; check official page for availability of psychiatric consultations and counseling clinics.",
    phone: "+63 917-538-3151 (Globe); +63 933-856-8861 (Sun); (045) 455-0664 / (045) 861-4607",
    email: "customer.relations@calcuttamed.com.ph",
    website: "https://calcuttamed.com.ph/",
    address: "San Fernando, Pampanga, Philippines",
    image: "/logos/pampanga/mtcmc.png"
  },
  {
    id: 6,
    name: "City Government of San Fernando, Pampanga (CSFP)",
    role: "LGU • Mental Health & Psychosocial Support",
    description:
      "Local government mental health and psychosocial support programs. Visit their official Facebook page or city website for active hotlines and schedules.",
    phone: "(045) 649-8540 (City Hall Trunkline)",
    email: "info.csfp@gmail.com",
    website: "https://cityofsanfernando.gov.ph/",
    address: "City Hall, City of San Fernando, Pampanga, Philippines",
    image: "/logos/pampanga/csfp.png"
  },
  {
    id: 7,
    name: "City Government of Mabalacat",
    role: "LGU • Community Mental Health Program",
    description:
      "Community-based mental health and psychosocial support in Mabalacat. Refer to official announcements for contact info.",
    phone: "(045) 649-8620 (City Hall Landline)",
    email: "mayorsoffice@mabalacatcity.gov.ph",
    website: "https://mabalacatcity.gov.ph/",
    address: "Xevera Complex, Tabun, Mabalacat City, Pampanga, Philippines 2010",
    image: "/logos/pampanga/mabalacat.png"
  }
];
