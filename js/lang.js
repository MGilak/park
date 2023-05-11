const navTitles = document.querySelectorAll("nav ul a");
const headContentRightUp = document.querySelector(".head-content-right h1");
const headContentRightDown = document.querySelector(".head-content-right h3");
const langs = document.querySelectorAll(".lang");
const detailTitle = document.querySelectorAll(".detailEn");
const compEnList = document.querySelectorAll(".compEn");
const welcEnList = document.querySelectorAll(".welcEn");
const blogEnList = document.querySelectorAll(".blogEn");
const notifEnList = document.querySelectorAll(".notifEn");
const gallEnList = document.querySelectorAll(".gallEn");
const videoEnList = document.querySelectorAll(".videoEn");
const rulerEnList = document.querySelectorAll(".rulEn");
const otherEnList = document.querySelectorAll(".otherEn");
const footerEnList = document.querySelectorAll(".footerEn");
const footBottEnList = document.querySelector(".footerBottEn");

//   function
function replaceContent(NodeList, newArray) {
  NodeList.forEach((item, index) => {
    item.innerHTML = newArray[index];
  });
}

langEn.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.add("enlang");
  //   document.getElementsByTagName("head")[0].setAttribute("lang", "en");
  //   document.getElementsByTagName("head")[0].setAttribute("dir", "ltr");
  //   document.getElementsByTagName("html")[0].setAttribute("lang", "en");

  // Header
  const headerContent = [
    "Home",
    "About Park",
    "Bud Plan",
    "Presidency",
    "Technology Network",
    "Technique View",
  ];
  replaceContent(navTitles, headerContent);

  const langsArrayEn = ["English", "persian", "English", "Arabic"];
  replaceContent(langs, langsArrayEn);

  // head content
  headContentRightUp.innerHTML =
    "Welcome to Sistan and Baluchistan Science and Technology Park";

  headContentRightDown.innerHTML =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore";

  // detail
  const detailEnContent = [
    "Know More",
    "A view of Sistan and Baluchistan science and technology park",
    "What is happening in this park...",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis saepe adipisci nostrum quasi repellat, quibusdam harum, facere ducimus cupiditate voluptas, culpa officiis nemo provident repellendus error. Vero, voluptatibus dignissimos!",
  ];
  replaceContent(detailTitle, detailEnContent);

  //components
  const compEnContent = [
    "The main center of the park",
    "Technology cores",
    "Development stages",
    "Creative houses",
    "Science and Technology Campus",
    "Innovation Center",
    "Growth and technology center",
  ];
  replaceContent(compEnList, compEnContent);

  //   welcome
  const welcEnContent = [
    "Other departments",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore laboriosam suscipit neque veritatis, fugit, earum magnam nisi sequi voluptatem aspernatur doloremque natus, rem officiis non fugiat quaeratodit in!",
    "Social Innovation Center",
    "Intellectual Property",
    "Introduction of companies",
    "Memorandum",
    "Workers dispute settlement authority",
    "Communication with the university",
    "Executive regulations of the park",
    "Zahedan Innovation District",
    "Performance Report",
    "Labs",
    "Social Innovation Center",
    "Development centers",
    "Technology transfer center",
    "Technical service center",
  ];
  replaceContent(welcEnList, welcEnContent);

  //  blog
  const blogEnContent = [
    "News and Articles",
    "The festival of goldsmiths of the glory of Iran",
    "The governor of Sistan and Baluchistan said: Executive bodies should be permanently connected with universities, because this connection will lead to more communication and use of ideas and innovations produced in universities.",
    "view more",
    "The festival of goldsmiths of the glory of Iran",
    "The governor of Sistan and Baluchistan said: Executive bodies should be permanently connected with universities, because this connection will lead to more communication and use of ideas and innovations produced in universities.",
    "view more",
    "The festival of goldsmiths of the glory of Iran",
    "The governor of Sistan and Baluchistan said: Executive bodies should be permanently connected with universities, because this connection will lead to more communication and use of ideas and innovations produced in universities.",
    "view more",
    "Nowruz message of the leader of the revolution on the occasion of the beginning of 1402",
    "In a message on the occasion of the beginning of 1402, Ayatollah Khamenei, the leader of the Islamic Revolution, called the new year...",
    "view more",
    "Nowruz message of the leader of the revolution on the occasion of the beginning of 1402",
    "In a message on the occasion of the beginning of 1402, Ayatollah Khamenei, the leader of the Islamic Revolution, called the new year...",
    "view more",
    "Nowruz message of the leader of the revolution on the occasion of the beginning of 1402",
    "In a message on the occasion of the beginning of 1402, Ayatollah Khamenei, the leader of the Islamic Revolution, called the new year...",
    "view more",
  ];
  replaceContent(blogEnList, blogEnContent);

  // notif
  const notifEnContent = [
    "Announcements and Conferences",
    "In this section, you can be informed about the news of conferences and new decisions. Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines in columns and rows as necessary.",
    "Code event to ... code",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore laboriosam suscipit neque veritatis, fugit, arum magnam nisi sequi voluptatem aspernatur",
    "view details",
    "Code event to ... code",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore laboriosam suscipit neque veritatis, fugit, arum magnam nisi sequi voluptatem aspernatur",
    "view details",
    "Code event to ... code",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore laboriosam suscipit neque veritatis, fugit, arum magnam nisi sequi voluptatem aspernatur",
    "view details",
    "Code event to ... code",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore laboriosam suscipit neque veritatis, fugit, arum magnam nisi sequi voluptatem aspernatur",
    "view details",
  ];
  replaceContent(notifEnList, notifEnContent);

  //   gallery
  const gallEnContent = [
    "Gallery of images and videos",
    "We can see the pictures of the beautiful scientific and cultural park of Sistan and Baluchistan here (this is a slider and its slides will be changed to album mode)",
    "Image description",
    "Image description",
    "Image description",
    "Image description",
  ];
  replaceContent(gallEnList, gallEnContent);

  // video
  const videoEnContent = [
    "See a more complete view in the videos below",
    "Innovation Center",
    "Innovation Center",
    "Innovation Center",
    "Innovation Center",
    "Innovation Center",
    "Innovation Center",
    "view all",
  ];
  replaceContent(videoEnList, videoEnContent);

  // ruler-item
  const rulerEnContent = [
    "About us and our Services",
    "The number of employees",
    "Number of companies",
    "The number of technological cores",
    "Number of growth and innovation centers",
    "Number of technical assistants",
    "fab lab",
    "Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers.",
    "Financial and Credit Supervision Working Group",
    "Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers.",
    "Patent Working Group",
    "Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers.",
    "Specialist consultants",
    "Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers.",
    "fab lab",
    "Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers.",
  ];
  replaceContent(rulerEnList, rulerEnContent);

  // others
  const otherEnContent = [
    "Other Centers",
    "Comprehensive",
    "Park Growth Center",
    "Bampur Innovation",
    "Center",
    "Zahak Innovation",
    "Center",
    "Growth Center of",
    "Zabul University",
    "Saravan Growth",
    "Center",
    "Maritime growth",
    "center",
    "International",
    "Growth Center",
    "Introduction",
    "members",
    "companies",
    "cores",
    "events",
    "History of growth center",
    "In line with the fourth development program and macro policies of the government to develop the necessary structures and infrastructures for the growth of knowledge-based activities in the public and private sectors through the creation and expansion of the Science and Technology Development Center, the University of Sistan and Baluchistan since 2005 regarding the request for permission To establish a growth center in the university, and in this way, to provide a suitable building and physical space for the establishment of a growth center for technological units in the university, and by preparing and equipping and providing technical and specialized services and establishing a management headquarters, now all the foundations are in place. It has prepared the necessary for the establishment of technology units for 30 units.",
    "Center services",
    "One of the advantages of establishing technological institutions, research cores and research and development units in the growth center is to take advantage of the conditions of gathering and synergy of research in the vicinity of other researchers and the possibility of being present in an interdisciplinary and interdepartmental space.",
    "The growth center currently has about 4,500 square meters of space for the establishment of technology institutions. With the provision of necessary and value-added infrastructures in the environment of the growth center, the possibility of providing specialized and general support services as described below in order to reduce the costs and the level of riskiness of the activity is also foreseen based on an approved tariff:",
    "Workshop facilities and semi-industrial pilots",
    "Specialized and research laboratories",
    "Public service",
    "Accommodation services, access to telephone and remote control, central waiting room, processing and secretarial services, the possibility of using conference rooms, audio and visual equipment, information services.",
    "view more",
  ];
  replaceContent(otherEnList, otherEnContent);

  // footer
  const footerEnContent = [
    "Final word",
    "We are very happy that you visited the website of Sistan and Baluchistan Science and Technology Park, Lorem Epsom is a fake text produced with incomprehensible simplicity from the printing industry and using graphic designers, printers and texts, but also newspapers and magazines.",
    "Links",
    "Judiciary information base",
    "Leader information base",
    "President's information base",
    "Easy Access",
    "Home",
    "About Park",
    "Presidency",
    "Contact us",
    "Site Rules",
    "Contact Information",
    "Contact Number: 051264878",
    "E-mail:",
    "Company Address: North Tabarsi",
  ];
  replaceContent(footerEnList, footerEnContent);

  // footer-bottom
  footBottEnList.innerHTML = "UI design by MawDevelopers team";
});
