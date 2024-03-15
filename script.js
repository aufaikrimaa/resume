const buttonsData = [
  { imageUrl: "./img/email.svg", linkUrl: "mailto:aufaikrimah@gmail.com" },
  { imageUrl: "./img/wa.svg", linkUrl: "whatsapp://send?phone=6289506591035" },
  { imageUrl: "./img/github.svg", linkUrl: "https://github.com/aufaikrimaa" },
  {
    imageUrl: "./img/linkedin.svg",
    linkUrl: "https://www.linkedin.com/in/aufa-ikrimah/",
  },
];

const buttonContainer = document.getElementById("contact-info");

buttonsData.forEach((data) => {
  const buttonHTML = `
          <a href="${data.linkUrl}" target="_blank">
              <span>
                  <img src="${data.imageUrl}" alt="Button Image" height="20">
              </span>
          </a>
      `;
  buttonContainer.innerHTML += buttonHTML;
});

const courseData = [
  {
    from: "Perempuan Inovasi",
    date: "Issued Feb 2024",
    title: "Full Stack Web Development",
    link: "",
    credentials: "",
  },
  {
    from: "Skilvul",
    date: "Issued Sep 2023 - Expires Sep 2028",
    title: "Web Development",
    link: "https://skilvul.com/paths/web-development-pemula-challenge-based/student/clliuhbqq1ivq01qk3t6ccvi1",
    credentials: "see credentials &gt&gt",
  },
  {
    from: "BNSP (Badan Nasional Sertifikasi Profesi)",
    date: "Issued Aug 2023 - Expires Aug 2026",
    title: "Competency Area: Software Development",
    link: "https://drive.google.com/file/d/1PHlPkjjhlYmRcfBzlcRkCyglpLw3XPg7/view",
    credentials: "see credentials &gt&gt",
  },
  {
    from: "Kampus Merdeka",
    date: "Issued Aug 2022 - Expires Dec 2027",
    title: "Wirausaha Merdeka Batch 1",
    link: "https://drive.google.com/file/d/1ibm5y6UX0ulKfRGsIc4Do07AiYpKIcgC/view",
    credentials: "see credentials &gt&gt",
  },
  {
    from: "Cisco Networking Academy",
    date: "Issued Aug 2021 - Expires Aug 2025",
    title: "PCAP: Programming Essentials in Python",
    link: "https://drive.google.com/file/d/1fmOyFe1XobPqQRxoas6k1FDxfYQ13hwc/view",
    credentials: "see credentials &gt&gt",
  },
];

const courseContainer = document.getElementById("courses");

courseData.forEach((data) => {
  const courseHTML = `
      <h6>${data.from}<span class="date"><i>${data.date}</i></span></h6>
      <h5>${data.title}</h5>
      <a href="${data.link}" target="_blank"><p>${data.credentials}</p></a>
    `;
  courseContainer.innerHTML += courseHTML;
});

const orgData = [
  {
    org: "The Students Activity Unit Student Choir",
    place: "BSI University",
    position: "President",
    date: "Jan 2022 - Dec 2022",
    li1: "Coordinating with the organization's advisor to execute the planned annual activities and report the outcomes to the advisor.",
    li2: "Coordinating team members to ensure the seamless execution of planned annual activities.",
  },
  {
    org: "PPPM Baitussalam Boarding School",
    place: "Yogyakarta, Indonesia",
    position: "Head Girl",
    date: "Aug 2018 - Dec 2019",
    li1: "Coordinating with the Chairperson and the Head of the Foundation to create rules, manage activities, and resolving any issues, ensuring everything runs efficiently. Also, overseeing the activities of the students.",
    li2: "Creating monthly reports on students' activities during their time at the boarding school for collaborative improvement discussions with the chairman and the head of the foundation.",
  },
];

const orgContainer = document.getElementById("org");

orgData.forEach((data) => {
  const orgHTML = `
      <h5>${data.org}<span class="place"><i>${data.place}</i></span></h5>
      <p class="orgpos">${data.position}<span class="date"><i>${data.date}</i></span></p>
      <ul>
        <li>${data.li1}</li>
        <li>${data.li2}</li>
      </ul>
    `;
  orgContainer.innerHTML += orgHTML;
});

const projectsData = [
  {
    project: "Front-End Developer ",
    place: "Online",
    program: "FS3 - Bootcamp Perempuan Inovasi 2023",
    date: "Sep 2023 – Feb 2024",
    list: [
      "I conduct research by sourcing relevant data and examining issues within the surrounding environment to develop digital solutions based on predefined themes, also contribute to the design of UI/UX using a Design Thinking approach.",
      "I actively participate in coding the SheTalk application, both on the front-end and back-end, contributing to its overall development.",
      "Collaborated effectively with the entire team, resulting in our SheTalk innovation securing second place in the competition.",
    ],
  },
  {
    project: "Web Developer",
    place: "Tangerang, Indonesia",
    program: "Group 2 - MBKM Wirausaha Merdeka 2022 Batch I",
    date: "Aug 2022 - Jan 2023",
    list: [
      "I develop the application code for TourGo, handling both the front-end and back-end aspects in accordance with the design provided by the design team.",
      "I conduct research through interviews with prospective users of the TourGo application, aiming to ensure the validity and alignment of the application with the users' needs.",
    ],
  },
];

const projectsContainer = document.getElementById("projects");

projectsData.forEach((data) => {
  const listHTML = data.list.map((li) => `<li>${li}</li>`).join("");
  const projectsHTML = `
      <h5>${data.project}<span class="place"><i>${data.place}</i></span></h5>
      <p class="orgpos">${data.program}<span class="date"><i>${data.date}</i></span></p>
      <ul>
        ${listHTML}
       </ul>
    `;
  projectsContainer.innerHTML += projectsHTML;
});
