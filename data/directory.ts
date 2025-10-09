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
    name: "Jose B. Lingad Memorial General Hospital (San Fernando)",
    role: "Tertiary Hospital • Mental Health Services",
    description:
      "Public tertiary hospital in San Fernando with psychiatric and behavioral health services. Please check their official channels for the latest clinic schedules.",
    phone: "",
    email: "",
    website: "",
    address: "San Fernando, Pampanga",
    image: "/logos/pampanga/jblmgh.png"
  },
  {
    id: 2,
    name: "The Medical City Clark (Angeles)",
    role: "Hospital • Behavioral Medicine / Psychiatry",
    description:
      "Private hospital in Clark Freeport Zone providing behavioral medicine and psychiatric services.",
    phone: "",
    email: "",
    website: "",
    address: "Clark Freeport Zone, Angeles City, Pampanga",
    image: "/logos/pampanga/tmc-clark.png"
  },
  {
    id: 3,
    name: "Angeles University Foundation Medical Center (Angeles)",
    role: "Teaching Hospital • Psychiatry",
    description:
      "AUF Medical Center offering various specialty services including mental health. Contact the hospital or department for appointments.",
    phone: "",
    email: "",
    website: "",
    address: "Angeles City, Pampanga",
    image: "/logos/pampanga/aufmc.png"
  },
  {
    id: 4,
    name: "Rafael Lazatin Memorial Medical Center (Ospital Ning Angeles)",
    role: "Public Hospital • Mental Health Services",
    description:
      "City-run hospital known locally as ONA with access to mental health and psychosocial services.",
    phone: "",
    email: "",
    website: "",
    address: "Angeles City, Pampanga",
    image: "/logos/pampanga/ona.png"
  },
  {
    id: 5,
    name: "Mother Teresa of Calcutta Medical Center (San Fernando)",
    role: "Private Hospital • Counseling / Psychiatry (by schedule)",
    description:
      "Private medical center; check official page for availability of psychiatric consultations and counseling clinics.",
    phone: "",
    email: "",
    website: "",
    address: "San Fernando, Pampanga",
    image: "/logos/pampanga/mtcmc.png"
  },
  {
    id: 6,
    name: "City of San Fernando Health Office",
    role: "LGU • Mental Health & Psychosocial Support",
    description:
      "Local government mental health and psychosocial support programs. Visit their official Facebook page or city website for active hotlines and schedules.",
    phone: "",
    email: "",
    website: "",
    address: "City of San Fernando, Pampanga",
    image: "/logos/pampanga/csfp.png"
  },
  {
    id: 7,
    name: "Mabalacat City Health Office",
    role: "LGU • Community Mental Health Program",
    description:
      "Community-based mental health and psychosocial support in Mabalacat. Refer to official announcements for contact info.",
    phone: "",
    email: "",
    website: "",
    address: "Mabalacat City, Pampanga",
    image: "/logos/pampanga/mabalacat.png"
  }
];
