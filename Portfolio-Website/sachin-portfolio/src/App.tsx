import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "About", to: "#about" },
  { label: "Projects", to: "#projects" },
  { label: "Certifications", to: "#certifications" },
  { label: "Achievements", to: "#achievements" },
  { label: "Resume", to: "#" },
  { label: "Contact", to: "#contact" },
];

const SOCIALS = [
  { label: "LinkedIn", url: "https://linkedin.com/in/sachin-dubey086" },
  { label: "Email", url: "mailto:dsachin086@gmail.com" },
  { label: "Phone", url: "tel:7607034698" },
];

const TECHNICAL = ["Python", "C++", "Java", "PyTorch", "TensorFlow", "Git", "GitHub", "Ubuntu", "Jupyter" ];
const CORE_SKILLS = ["Data Structures & Algorithms", "WebScraping", "Generative AI", "LLM", "Ghost Writing"];

const PROJECTS = [
  {
    title: "Neural network optimization using genetic algorithms",
    period: "Jan 2024–Mar 2024",
    desc: [
      "Optimized neural networks via genetic algorithms for hyperparameter tuning.",
      "Implemented and compared Naive Bayes, Decision Trees, KNN, K-Means, Random Forests.",
      "Reduced training time 50%, enabled rapid update deployment."
    ],
    tags: ["Python", "Genetic Algorithms", "ML"]
  },
  {
    title: "Analyzing Stock Performance & Building a Dashboard",
    period: "Dec 2023–Jan 2024",
    desc: [
      "Extracted & visualized data for Tesla/GameStop using Python dashboards.",
      "Showcased data extraction, manipulation, and visualization skills."
    ],
    tags: ["Python", "WebScraping", "Dashboard"]
  },
  {
    title: "Movie Ticket Booking System (C++)",
    period: "Dec 2022–Apr 2023",
    desc: [
      "C++ OOP practice via real-life movie ticket booking implementation.",
      "Efficient file I/O, text UI, user interface, and robust error handling."
    ],
    tags: ["C++", "OOP", "Project"]
  },
  {
    title: "Campus Ambassador for Shiksha.com",
    period: "Sept 2022–April 2023",
    desc: [
      "Answered student questions, wrote education-related articles."
    ],
    tags: ["Education"]
  },
];

const CERTIFICATIONS = [
  { name: "Generative AI with LLM", org: "Coursera", date: "Mar 2024" },
  { name: "Prompt Engineering", org: "Coursera", date: "Dec 2023" },
  { name: "Complete Machine Learning and Data Science Course", org: "GeeksForGeeks", date: "July 2024" },
  { name: "ChatGPT Playground for Beginners: Intro to NLP AI", org: "Coursera/DeepLearning.AI", date: "Feb 2024" },
  { name: "ChatGPT Advanced Data Analysis", org: "NPTEL", date: "March 2024" },
];

const EDUCATION = [
  {
    degree: "BTech, Computer Science and Engineering (CGPA: 4.44)",
    school: "Lovely Professional University Punjab",
    period: "2022–2026",
    location: "Jalandhar, Punjab"
  },
  {
    degree: "XII with Science (75%)",
    school: "YM Convent School, Bhadohi, UP",
    period: "2020–2021",
    location: "Bhadohi, UP"
  },
  {
    degree: "X (80%)",
    school: "Dayawanti Punj Model School, Bhadohi, UP",
    period: "2018–2019",
    location: "Bhadohi, UP"
  }
];

function App() {
  // Animate Cyber Security text
  const [shownText, setShownText] = useState("");
  useEffect(() => {
    const target = "Cyber Security";
    let cur = 0;
    const timer = setInterval(() => {
      setShownText(target.slice(0, cur + 1));
      cur++;
      if (cur === target.length) clearInterval(timer);
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-10 backdrop-blur bg-[#141518cc] flex justify-between px-4 md:px-16 py-2 items-center shadow-lg border-b border-[#22233d66]">
        <span className="pl-2 text-[1.1rem] text-[#c2b0cb] font-bold">Sachin Dubey <span className="text-[#3a5aca]">|</span> Cyber Security</span>
        <div className="flex gap-1 md:gap-3">
          {NAV_LINKS.map(l => <a key={l.label} href={l.to} className="nav-link">{l.label}</a>)}
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="w-full min-h-[460px] flex flex-col md:flex-row items-center justify-center gap-8 pt-12 md:pt-0 relative" style={{background: "radial-gradient(at 70% 20%,rgba(58,90,202,0.13) 10%,transparent 100%)"}}>
        <div className="flex-1 px-4 md:pl-28">
          <p className="text-[#b966e7] font-semibold mb-2 animate-fade-in-slow">Hi, I'm Sachin</p>
          <h1 className="text-4xl md:text-5xl font-extrabold gradient-title mb-3 animate-fade-in-slow">{shownText}</h1>
          <p className="mt-4 max-w-lg text-[#c2b0cb] text-base animate-fade-in-slow">Building secure, efficient, and intelligent technology solutions with a passion for cyber security and AI. Welcome to my portfolio!</p>
          <div className="flex gap-3 mt-7 mb-3 animate-fade-in-slow">
            <Button className="rounded-full bg-[#3a5aca]" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild className="rounded-full border-[#3a5aca] text-[#3a5aca] hover:bg-[#22233d]">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
          <div className="flex gap-3 mt-2">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.url} target="_blank" className="text-[#b966e7] text-xl opacity-80 hover:opacity-100 transition-all" rel="noreferrer">{s.label}</a>
            ))}
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end pr-4">
          <Card className="rounded-full w-44 h-44 card-shadow flex items-center justify-center bg-[#23253a]">
            <Avatar className="w-36 h-36 shadow-2xl">
              <AvatarFallback className="font-bold text-4xl bg-[#3a5aca] text-white">SD</AvatarFallback>
            </Avatar>
          </Card>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="w-full max-w-5xl mx-auto mt-10 pb-4 px-2 md:px-0">
        <h2 className="text-center gradient-title mb-7">About Me</h2>
        <Card className="bg-[#23253a] card-shadow p-6 text-[#c2b0cb]">
          <div className="mb-4">
            I'm a cyber security and AI/data enthusiast focused on building secure, impactful, and meaningful tech. I have expertise in machine learning, security, and data engineering; I build robust systems that solve real problems.
          </div>
          <div className="mb-2">
            <div className="font-semibold">Technical Expertise</div>
            <div className="flex flex-wrap pt-2">
              {TECHNICAL.map((t, k) => <div className="chip" key={k}>{t}</div>)}
            </div>
          </div>
          <div className="mb-2">
            <div className="font-semibold">Core Skills</div>
            <div className="flex flex-wrap pt-2">
              {CORE_SKILLS.map((t, k) => <div className="chip" key={k}>{t}</div>)}
            </div>
          </div>
          <div className="mb-2 pt-3">
            <div className="font-semibold">Education</div>
            <div className="space-y-1 pt-2">
              {EDUCATION.slice(0, 1).map((ed, k) => (
                <div key={k} className="bg-[#171825] rounded-md px-4 py-2">
                  <div className="font-bold">{ed.school}</div>
                  <div className="text-sm">{ed.degree} <span className="ml-2 text-muted-foreground">({ed.period})</span></div>
                  <div className="text-xs text-[#7d92b0]">{ed.location}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <Button size="sm" asChild className="bg-[#3a5aca] rounded-full">
              <a href="#projects">View my projects →</a>
            </Button>
            <Button variant="outline" asChild size="sm" className="border-[#3a5aca] text-[#3a5aca] rounded-full">
              <a href="#contact">Contact me</a>
            </Button>
          </div>
        </Card>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full max-w-5xl mx-auto mt-14 px-2 md:px-0">
        <h2 className="gradient-title text-center mb-10">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-7">
          {PROJECTS.map((proj, i) => (
            <Card key={i} className="bg-[#22233d] card-shadow rounded-2xl p-6 flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <h3 className="font-bold text-lg text-[#b966e7] mb-1">{proj.title}</h3>
                <span className="ml-auto text-xs text-[#7d92b0]">{proj.period}</span>
              </div>
              <ul className="list-disc ml-5 my-2 space-y-1 text-[#ccc7d2] text-sm">
                {proj.desc.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
              <div className="flex flex-wrap pt-1 pb-2 gap-1">
                {proj.tags.map((t, k) => <span className="chip" key={k}>{t}</span>)}
              </div>
              <Button size="sm" asChild className="rounded-full ml-auto bg-[#3a5aca] mt-1">
                <a href="#contact">View Details</a>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="w-full max-w-5xl mx-auto mt-20 mb-14 px-2 md:px-0">
        <h2 className="gradient-title text-center mb-8">Certifications</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((c, idx) => (
            <Card key={idx} className="bg-[#22233d] card-shadow rounded-xl p-5">
              <div className="font-semibold text-[#c2b0cb] mb-1">{c.name}</div>
              <div className="text-[#7d92b0] text-xs">{c.org} <span className="pl-3">{c.date}</span></div>
            </Card>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS SECTION (optional, can add more if you have listed) */}
      <section id="achievements" className="w-full max-w-5xl mx-auto mt-10 mb-20 px-2 md:px-0">
        <h2 className="gradient-title text-center mb-8">Achievements</h2>
        <div className="text-center text-lg text-[#7d92b0]">Recognition and milestones in my journey.</div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full max-w-5xl mx-auto mt-10 px-2 md:px-0 mb-14">
        <h2 className="gradient-title text-center mb-2">Contact Me</h2>
        <div className="text-center text-[#7d92b0] mb-6">Let's discuss how we can work together.</div>
        <div className="flex justify-center gap-3 flex-wrap">
          {SOCIALS.map((s,i) => (
            <Button asChild className="rounded-full bg-[#3a5aca]" key={i}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>
            </Button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 flex flex-col items-center text-[#7d92b0] text-xs mt-6">
        &copy; {new Date().getFullYear()} Sachin Dubey · Inspired by ajshuklafolio.netlify.app
      </footer>
    </>
  );
}

export default App;
