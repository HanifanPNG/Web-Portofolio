import HeroImage from "/assets/Group 7.png";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/sijalingga.png";
import Proyek2 from "/assets/proyek/SabaChicken.png";
import Proyek3 from "/assets/proyek/UmahSoto.png";
import Proyek4 from "/assets/proyek/MBG-ku.png";
import Proyek5 from "/assets/proyek/potofolio.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Si-Jalingga",
    desk: "Sistem Informasi Jalan Purbalingga, collaboration with teamwork a system for mapping damaged roads",
    tools: ["HTML", "Tailwind", "Javascript", "PHP", "MySQL"],
    dad: "200",
    href: "#",
    sc:"#",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Company Profile: Saba-Chicken",
    desk: "best-selling fried chicken in Gembong, Purbalingga",
    tools: ["HTML", "Vanilla CSS", "Javascript"],
    dad: "300",
    href: "https://sabachicken.com",
    sc:"#",  
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Company Profile: Oemah Soto n Karedok Bu nur",
    desk: "a stall selling various traditional foods and the most delicious soto in Cilongok",
    tools: ["HTML", "Vanilla CSS", "Javascript"],
    dad: "400",
    href: "https://umah-soto-n-karedok-bu-nur.netlify.app/",
    sc:"#",
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "MBG-ku",
    desk: "final assignment from web programming course, with collaboration teamwork a system to help MBG program to be more transparent in its performance",
    tools: ["HTML", "Tailwind CSS v4", "PHP", "MySQL"],
    dad: "500",
    href: "#",
    sc:"https://github.com/HanifanPNG/project-mbg",
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "My first portfolio website uses React and the React Bits library for cool visualizations.",
    tools: ["HTML", "Tailwind CSS v4", "ReactJS", "Vite", "reactBits"],
    dad: "600",
    href: "#",
    sc:"https://github.com/HanifanPNG/Web-Portofolio",
  },
];

export const listOrganisasi = [
  {
    id: 1,
    nama: "UIN Saizu Informatics Student Association",
    at: "UIN Prof K.H Saiffudin Zuhri Purbalingga",
    jabatan: "Student Resource Development Department Staff",
    periode: "2025 – 2026",
    deskripsi: "Responsible for developing information technology resources in the academic field",
    delay: 0,
  },
  {
    id: 2,
    nama: "Webinar Carrer IT",
    at: "Kampus II UIN Prof K.H Saiffudin Zuhri Purbalingga",
    jabatan: "Event chairpersonent",
    periode: "April 24, 2025",
    deskripsi: "lead, coordinate, and take full responsibility for the entire series of events",
    delay: 0,
  },
  {
    id: 3,
    nama: "collaboration day event",
    at: "Kampus II UIN Prof K.H Saiffudin Zuhri Purbalingga",
    jabatan: "collaboration day event division coordinator",
    periode: "August 30-32, 2025",
    deskripsi: "plan, organize, and oversee all event details from start to finish, ensuring that the event runs smoothly, stays within budget, and achieves its objectives",
    delay: 0,
  },
];

import certiv1 from "/public/assets/certiv/pesoma.jpeg";
import certiv2 from "/public/assets/certiv/hackaton.jpeg";

export const  certificates = [
  {
    id:1,
    title:"2nd Place in Robotic Innovation",
    issuer:"Pesoma UIN SAIZU",
    year:"2025",
    image: certiv1,
    at:"Kampus II UIN Prof K.H Saiffudin Zuhri Purbalingga"
  },
  {
    id:2,
    title:"Invest 2025 Hackathon Participants",
    issuer:"Informatika Innovation the best 2025",
    year:"2025",
    image: certiv2,
    at:"Kampus II UIN Prof K.H Saiffudin Zuhri Purbalingga"
  },
]

