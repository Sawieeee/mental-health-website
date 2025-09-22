export interface DirectoryItem {
    id: string;
    name: string;
    role: string;
    description: string;
    phone: string;
    email: string;
    image: string;
  }
  
  export const directory: DirectoryItem[] = [
    {
      id: "1",
      name: "Dr. Maria Santos",
      role: "Psychologist",
      description: "Specializes in anxiety, depression, and stress management.",
      phone: "+63 912 345 6789",
      email: "maria.santos@example.com",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: "2",
      name: "Dr. John Dela Cruz",
      role: "Psychiatrist",
      description: "Focuses on mood disorders and medication management.",
      phone: "+63 987 654 3210",
      email: "john.delacruz@example.com",
      image: "https://randomuser.me/api/portraits/men/45.jpg"
    },
    {
      id: "3",
      name: "Ms. Angela Reyes",
      role: "Guidance Counselor",
      description: "Helps students and young adults with stress, peer pressure, and career counseling.",
      phone: "+63 923 111 2233",
      email: "angela.reyes@example.com",
      image: "https://randomuser.me/api/portraits/women/50.jpg"
    },
    {
      id: "4",
      name: "Mr. Carlo Mendoza",
      role: "Therapist",
      description: "Provides therapy sessions for trauma recovery and personal growth.",
      phone: "+63 955 222 3344",
      email: "carlo.mendoza@example.com",
      image: "https://randomuser.me/api/portraits/men/51.jpg"
    },
    {
      id: "5",
      name: "Dr. Sophia Lim",
      role: "Child Psychologist",
      description: "Expert in child development, behavioral issues, and family counseling.",
      phone: "+63 966 333 4455",
      email: "sophia.lim@example.com",
      image: "https://randomuser.me/api/portraits/women/52.jpg"
    },
    {
      id: "6",
      name: "Dr. Miguel Torres",
      role: "Psychiatrist",
      description: "Experienced in clinical psychiatry and mental health rehabilitation.",
      phone: "+63 977 444 5566",
      email: "miguel.torres@example.com",
      image: "https://randomuser.me/api/portraits/men/52.jpg"
    },
    {
      id: "7",
      name: "Dr. Patricia Cruz",
      role: "Clinical Psychologist",
      description: "Works with adults on trauma recovery, relationships, and coping strategies.",
      phone: "+63 933 555 6677",
      email: "patricia.cruz@example.com",
      image: "https://randomuser.me/api/portraits/women/48.jpg"
    },
    {
      id: "8",
      name: "Dr. Adrian Villanueva",
      role: "Family Counselor",
      description: "Helps families resolve conflicts and improve communication.",
      phone: "+63 944 666 7788",
      email: "adrian.villanueva@example.com",
      image: "https://randomuser.me/api/portraits/men/47.jpg"
    },
    {
      id: "9",
      name: "Mental Health Hotline PH",
      role: "24/7 Crisis Hotline",
      description: "Immediate assistance for individuals in emotional distress or crisis situations.",
      phone: "1553 (landline and mobile)",
      email: "hotline@mentalhealthph.org",
      image: "https://cdn-icons-png.flaticon.com/512/684/684908.png"
    },
    {
      id: "10",
      name: "National Center for Mental Health",
      role: "Crisis Hotline",
      description: "Provides psychiatric crisis intervention and counseling services.",
      phone: "0917-899-USAP (8727) / 989-USAP (8727)",
      email: "ncmh@ncmh.gov.ph",
      image: "https://cdn-icons-png.flaticon.com/512/3771/3771518.png"
    }
  ];
  