/* =============================================
   DATA
============================================= */
const educationsData = [
  {
    id: 1,
    title: " Diploma in Software Development",
    institution: "Rosebank College, Cape Town",
    duration: "2026",
  },
  {
    id: 2,
    title: "Software Developer | Diploma + Web Development Certification",
    institution: "Online Courses (Udemy)",
    duration: "2026",
  },
];

// const projectsData = [
//   {
//     id: 1,
//     name: "AI Powered Financial App",
//     description:
//       "Me and my team built an AI-powered financial mobile application. I developed the API using Express, Typescript, OpenAI, AWS, and MongoDB. Used OTP via AWS SES, Google, and Facebook for authentication. Built AI assistants using OpenAI latest model trained on our dataset.",
//     tools: [
//       "Express",
//       "MongoDB",
//       "OpenAI API",
//       "AWS SES",
//       "AWS S3",
//       "Node Mailer",
//       "Joi",
//       "Puppeteer",
//       "EC2",
//       "PM2",
//       "Nginx",
//     ],
//     role: "Backend Developer",
//     code: "",
//     demo: "",
//   },
//   {
//     id: 2,
//     name: "Travel Agency App",
//     description:
//       "I designed and developed a full-stack web app for 2Expedition, a travel agency in Armenia. Built with NextJS, Typescript, MUI, TailwindCSS, Google Maps, and React Slick. The app supports multiple languages and currencies.",
//     tools: [
//       "NextJS",
//       "Tailwind CSS",
//       "Google Maps",
//       "NestJS",
//       "TypeScript",
//       "MySQL",
//       "AWS S3",
//       "Sun-Editor",
//     ],
//     role: "Full Stack Developer",
//     code: "",
//     demo: "",
//   },
//   {
//     id: 3,
//     name: "AI Powered Real Estate",
//     description:
//       "My team built an AI-based real estate app using Replicate API and OpenAI. Used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose for the API. NextJS, Formik, and TailwindCSS for the UI. Added role-based auth, subscription plans, and Stripe payments.",
//     tools: [
//       "React",
//       "Bootstrap",
//       "SCSS",
//       "Stripe",
//       "Express",
//       "TypeScript",
//       "MongoDB",
//       "Azure Blob",
//       "OpenAI API",
//       "Replicate AI",
//     ],
//     role: "Full Stack Developer",
//     code: "",
//     demo: "",
//   },
//   {
//     id: 4,
//     name: "Newsroom Management",
//     description:
//       "A newspaper management dashboard application. I worked on the front-end using NextJS, Material UI, Redux, Calendar, and other npm libraries. Used React Redux for state management and React-hook-form with Sun Editor for forms.",
//     tools: ["NextJS", "Material UI", "Redux", "Sun Editor", "Calendar"],
//     role: "Full Stack Developer",
//     code: "",
//     demo: "",
//   },
// ];
const projectsData = [
  {
    id: 1,
    name: "Shopdazz App",
    description:
      "A full stack e-commerce app with an ADMIN panel, Stripe and COD payment methods, built with Next.js, Clerk authentication, MongoDB, Inngest and Tailwind CSS.",
    tools: ["Next.js", "Tailwind CSS", "MongoDB", "Clerk", "Stripe", "Inngest"],
    role: "Full Stack Developer",
    code: "",
    demo: "https://shopdazz.vercel.app/",
  },
  {
    id: 2,
    name: "TripBuddy AI",
    description:
      "A full stack AI-powered travel planning app built with React.js, Gemini AI, Firebase, Google Auth, Google Places and Tailwind CSS. A complete AI SaaS app with trip generation.",
    tools: [
      "React.js",
      "Tailwind CSS",
      "Firebase",
      "Gemini AI",
      "Google Auth",
      "Google Places",
    ],
    role: "Full Stack Developer",
    code: "",
    demo: "https://tripbuddy-ai.vercel.app/",
  },
  {
    id: 3,
    id: 1,
    name: "E-Commerce Website",
    description:
      "A fully responsive multi-page e-commerce website with a shopping cart, product pages, blog, about and contact pages. Built with pure HTML, CSS and JavaScript — no frameworks needed.",
    tools: ["HTML5", "CSS3", "JavaScript"],
    role: "Frontend Developer",
    code: "https://github.com/babalonogqala23/Build-and-Deploy-Ecommerce-Website-main",
    demo: "https://babalonogqala23.github.io/Build-and-Deploy-Ecommerce-Website-main/",
  },
  {
    id: 4,
    name: "Barber Website",
    description:
      "A clean and modern barbershop website with a services section, filterable pricing, photo gallery, appointment booking form and newsletter subscription. Built with HTML, CSS and JavaScript.",
    tools: ["HTML5", "CSS3", "JavaScript", "Ion Icons", "Flaticon"],
    role: "Frontend Developer",
    code: "https://github.com/babalonogqala23/Barber-website",
    demo: "https://babalonogqala23.github.io/Barber-website/",
  },
];
const skillsData = [
  { name: "JavaScript", icon: "fab fa-js" },
  // { name: "TypeScript", icon: "fab fa-js-square" },
  { name: "React", icon: "fab fa-react" },
  // { name: "Next JS", icon: "fas fa-n" },
  // { name: "Node.js", icon: "fab fa-node-js" },

  { name: "Docker", icon: "fab fa-docker" },
  // { name: "AWS", icon: "fab fa-aws" },
  { name: "Git", icon: "fab fa-git-alt" },
  { name: "HTML", icon: "fab fa-html5" },
  { name: "CSS", icon: "fab fa-css3-alt" },

  // { name: "MongoDB", icon: "fas fa-database" },
  { name: "MySQL", icon: "fas fa-database" },
  { name: "Firebase", icon: "fas fa-fire" },
  // { name: "GraphQL", icon: "fas fa-project-diagram" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "WordPress", icon: "fab fa-wordpress" },
];

/* =============================================
   TIME CONVERTER
============================================= */
function timeConverter(isoTime) {
  const diff = new Date().getTime() - new Date(isoTime).getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);
  if (seconds < 60) return seconds + " seconds ago";
  if (minutes < 60) return minutes + " minutes ago";
  if (hours < 24) return hours + " hours ago";
  if (days < 30) return days + " days ago";
  if (months < 12) return months + " months ago";
  return years + " years ago";
}

/* =============================================
   NAVBAR
============================================= */
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  var btn = document.getElementById("scrollToTop");
  btn.style.display = window.scrollY > 300 ? "flex" : "none";
});

var hamburger = document.getElementById("hamburger");
var navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", function () {
    navLinks.classList.remove("open");
  });
});

/* =============================================
   SCROLL TO TOP
============================================= */
document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =============================================
   INTERSECTION OBSERVER
============================================= */
var observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.1 },
);

/* =============================================
   GLOW CARD EFFECT
============================================= */
function initGlowEffect() {
  document.body.addEventListener("pointermove", function (e) {
    document.querySelectorAll(".glow-card").forEach(function (card) {
      var b = card.getBoundingClientRect();
      var prox = 40;
      var near =
        e.x > b.left - prox &&
        e.x < b.left + b.width + prox &&
        e.y > b.top - prox &&
        e.y < b.top + b.height + prox;
      card.style.setProperty("--active", near ? 1 : 0);
      var angle =
        (Math.atan2(
          e.y - (b.top + b.height / 2),
          e.x - (b.left + b.width / 2),
        ) *
          180) /
        Math.PI;
      if (angle < 0) angle += 360;
      card.style.setProperty("--start", angle + 90);
    });
  });
}

/* =============================================
   RENDER SKILLS MARQUEE
============================================= */
function renderSkills() {
  var track = document.getElementById("marqueeTrack");
  if (!track) return;
  var all = skillsData.concat(skillsData); // double for infinite scroll
  all.forEach(function (skill) {
    var chip = document.createElement("div");
    chip.className = "skill-chip";
    chip.innerHTML =
      '<i class="' + skill.icon + '"></i><span>' + skill.name + "</span>";
    track.appendChild(chip);
  });
}
const learningData = [
  { name: "Next.js", icon: "fas fa-n" },
  { name: "MongoDB", icon: "fas fa-database" },
  { name: "TypeScript", icon: "fab fa-js-square" },
  { name: "Node.js", icon: "fab fa-node-js" },
];

function renderLearning() {
  var track = document.getElementById("learningTrack");
  if (!track) return;
  var all = learningData.concat(learningData); // double for infinite scroll
  all.forEach(function (item) {
    var chip = document.createElement("div");
    chip.className = "skill-chip";
    chip.innerHTML =
      '<i class="' + item.icon + '"></i><span>' + item.name + "</span>";
    track.appendChild(chip);
  });
}

/* =============================================
   RENDER PROJECTS
============================================= */
function renderProjects() {
  var list = document.getElementById("projectsList");
  if (!list) return;

  projectsData.slice(0, 4).forEach(function (project, index) {
    var toolsHTML = project.tools
      .map(function (tool, i) {
        if (i < project.tools.length - 1) {
          return (
            '<span class="ca">' +
            tool +
            "</span><span class=\"cgr\">', '</span>"
          );
        }
        return '<span class="ca">' + tool + "</span>";
      })
      .join("");

    var demoBtn = project.demo
      ? '<a href="' +
        project.demo +
        '" target="_blank" class="proj-link-btn" title="Live Demo"><i class="fas fa-play"></i></a>'
      : "";
    var codeBtn = project.code
      ? '<a href="' +
        project.code +
        '" target="_blank" class="proj-link-btn" title="View Code"><i class="fas fa-code"></i></a>'
      : "";
    var linksHTML =
      demoBtn || codeBtn
        ? '<div style="display:flex;gap:1rem;margin-top:1rem;">' +
          demoBtn +
          codeBtn +
          "</div>"
        : "";
    var el = document.createElement("div");
    el.className = "project-sticky-card fade-up";

    el.style.top = 2.5 + index * 0.5 + "rem";
    el.style.transitionDelay = index * 0.1 + "s";
    var projectUrl = project.demo || project.code || "#";
    el.innerHTML =
      '<div class="proj-card" onclick="window.open(\'' +
      projectUrl +
      "', '_blank')\" style=\"cursor:pointer;\">" +
      '<div class="proj-card-toplines">' +
      '<div class="proj-topline-l"></div>' +
      '<div class="proj-topline-r"></div>' +
      "</div>" +
      '<div class="proj-card-dots-row">' +
      '<span class="dot dot-red"></span>' +
      '<span class="dot dot-orange"></span>' +
      '<span class="dot dot-green-sm"></span>' +
      '<p class="proj-card-name">' +
      project.name +
      "</p>" +
      "</div>" +
      '<div class="proj-card-body">' +
      '<pre class="proj-code">' +
      '<span class="cp">const</span> <span class="cw">project</span> <span class="cp">=</span> <span class="cgr">{</span>\n' +
      '  <span class="cw">name:</span>        <span class="cgr">\'</span><span class="ca">' +
      project.name +
      '</span><span class="cgr">\',</span>\n' +
      '  <span class="cw">tools:</span>       <span class="cgr">[\'</span>' +
      toolsHTML +
      '<span class="cgr">\'],</span>\n' +
      '  <span class="cw">myRole:</span>      <span class="co">\'' +
      project.role +
      '\'</span><span class="cgr">,</span>\n' +
      '  <span class="cw">description:</span> <span class="cc">\'' +
      project.description +
      '\'</span><span class="cgr">,</span>\n' +
      '<span class="cgr">};</span>' +
      "</pre>" +
      linksHTML +
      "</div>" +
      "</div>";

    list.appendChild(el);
    observer.observe(el);
  });
}

/* =============================================
   RENDER EDUCATION
============================================= */
function renderEducation() {
  var container = document.getElementById("educationCards");
  if (!container) return;

  educationsData.forEach(function (edu, i) {
    var wrap = document.createElement("div");
    wrap.className = "glow-card-wrap fade-up";
    wrap.style.transitionDelay = i * 0.1 + "s";
    wrap.innerHTML =
      '<div class="glow-card">' +
      '<div class="glow-card-inner">' +
      '<p class="glow-card-date">' +
      edu.duration +
      "</p>" +
      '<div class="glow-card-body">' +
      '<i class="fas fa-user-graduate glow-card-icon"></i>' +
      "<div>" +
      '<p class="glow-card-title">' +
      edu.title +
      "</p>" +
      '<p class="glow-card-sub">' +
      edu.institution +
      "</p>" +
      "</div>" +
      "</div>" +
      "</div>" +
      "</div>";
    container.appendChild(wrap);
    observer.observe(wrap);
  });
}

/* =============================================
   RENDER BLOG
============================================= */
// function renderBlog() {
//   var grid = document.getElementById("blogGrid");
//   if (!grid) return;

//   fetch("https://dev.to/api/articles?username=said7388&per_page=9")
//     .then(function (res) {
//       return res.json();
//     })
//     .then(function (blogs) {
//       var withImages = blogs.filter(function (b) {
//         return b.cover_image;
//       });
//       withImages.sort(function () {
//         return Math.random() - 0.5;
//       });
//       withImages = withImages.slice(0, 6);

//       if (!withImages.length) {
//         grid.innerHTML =
//           '<div class="blog-loading"><p>No blog posts found.</p></div>';
//         return;
//       }

//       grid.innerHTML = "";
//       withImages.forEach(function (blog, i) {
//         var card = document.createElement("div");
//         card.className = "blog-card fade-up";
//         card.style.transitionDelay = i * 0.08 + "s";
//         var comments =
//           blog.comments_count > 0
//             ? "<span>&#128172; " + blog.comments_count + "</span>"
//             : "";
//         card.innerHTML =
//           '<div class="blog-img-wrap">' +
//           '<img src="' +
//           blog.cover_image +
//           '" alt="' +
//           blog.title +
//           '" class="blog-img" loading="lazy" />' +
//           "</div>" +
//           '<div class="blog-body">' +
//           '<div class="blog-meta">' +
//           "<span>" +
//           timeConverter(blog.published_at) +
//           "</span>" +
//           '<div class="blog-reactions">' +
//           "<span>&#9829; " +
//           blog.public_reactions_count +
//           "</span>" +
//           comments +
//           "</div>" +
//           "</div>" +
//           '<a href="' +
//           blog.url +
//           '" target="_blank" class="blog-title">' +
//           blog.title +
//           "</a>" +
//           '<p class="blog-read">' +
//           blog.reading_time_minutes +
//           " min read</p>" +
//           '<p class="blog-desc">' +
//           (blog.description || "") +
//           "</p>" +
//           "</div>";
//         grid.appendChild(card);
//         observer.observe(card);
//       });
//     })
//     .catch(function () {
//       grid.innerHTML =
//         '<div class="blog-loading"><p>Could not load blog posts.</p></div>';
//     });
// }

/* =============================================
   CONTACT FORM
============================================= */
function initContactForm() {
  var form = document.getElementById("contactForm");
  var nameEl = document.getElementById("cf-name");
  var emailEl = document.getElementById("cf-email");
  var msgEl = document.getElementById("cf-message");
  var emailErr = document.getElementById("emailError");
  var reqErr = document.getElementById("requiredError");
  var toast = document.getElementById("successToast");
  var btn = document.getElementById("submitBtn");
  var btnText = document.getElementById("btnText");
  var btnLoad = document.getElementById("btnLoading");

  function isValidEmail(v) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  }

  emailEl.addEventListener("blur", function () {
    var bad = emailEl.value && !isValidEmail(emailEl.value);
    emailErr.classList.toggle("visible", !!bad);
    emailEl.classList.toggle("input-error", !!bad);
  });

  [nameEl, emailEl, msgEl].forEach(function (el) {
    el.addEventListener("input", function () {
      if (nameEl.value && emailEl.value && msgEl.value)
        reqErr.classList.remove("visible");
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = nameEl.value.trim();
    var email = emailEl.value.trim();
    var message = msgEl.value.trim();

    if (!name || !email || !message) {
      reqErr.classList.add("visible");
      return;
    }
    if (!isValidEmail(email)) {
      emailErr.classList.add("visible");
      emailEl.classList.add("input-error");
      return;
    }

    reqErr.classList.remove("visible");
    emailErr.classList.remove("visible");
    btnText.style.display = "none";
    btnLoad.style.display = "inline-flex";
    btn.disabled = true;

    setTimeout(function () {
      var subject = encodeURIComponent("New Message From " + name);
      var body = encodeURIComponent(
        "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message,
      );
      window.location.href =
        "mailto:babalonogqala23@gmail.com?subject=" + subject + "&body=" + body;

      btnText.style.display = "inline-flex";
      btnLoad.style.display = "none";
      btn.disabled = false;
      toast.classList.add("visible");
      setTimeout(function () {
        toast.classList.remove("visible");
      }, 4000);
      nameEl.value = "";
      emailEl.value = "";
      msgEl.value = "";
    }, 800);
  });
}

/* =============================================
   INIT
============================================= */
document.addEventListener("DOMContentLoaded", function () {
  renderSkills();
  renderProjects();
  renderEducation();
  renderLearning();
  renderBlog();
  initContactForm();
  initGlowEffect();
  document.querySelectorAll(".fade-up").forEach(function (el) {
    observer.observe(el);
  });
});
