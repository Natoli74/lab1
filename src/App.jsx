import { useMemo, useState } from "react";
import Header from "./components/Header";
import ClubCard from "./components/ClubCard";
import "./index.css";
import "./App.css";

export default function MSUMSTEMClubs() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedClub, setSelectedClub] = useState(null);

  const clubs = [
    {
      name: "STEM Learning Community",
      description:
        "Connect with faculty, participate in study groups, and explore research opportunities across all STEM disciplines at MSUM.",
      focus: "Academic Support",
      meeting: "Monthly Meetings",
      icon: "🔬",
      iconBgClass: "bg-green-100",
      colorClass: "bg-gradient-stem",
    },
    {
      name: "Computer Science Club",
      description:
        "Join fellow CS students for coding challenges, tech talks, and networking opportunities. Perfect for building programming skills and industry connections.",
      focus: "Programming & Software",
      meeting: "Wednesdays 7PM",
      icon: "💻",
      iconBgClass: "bg-blue-100",
      colorClass: "bg-gradient-cs",
    },
    {
      name: "Cybersecurity Club",
      description:
        "Learn about network security, ethical hacking, and digital forensics. Participate in CTF competitions and security workshops.",
      focus: "Information Security",
      meeting: "Thursdays 6PM",
      icon: "🛡️",
      iconBgClass: "bg-red-100",
      colorClass: "bg-gradient-sec",
    },
    {
      name: "Data Science Society",
      description:
        "Explore machine learning, data analytics, and statistical modeling. Work on real-world projects using Python, R, and SQL.",
      focus: "Data Analytics & ML",
      meeting: "Tuesdays 5:30PM",
      icon: "📊",
      iconBgClass: "bg-purple-100",
      colorClass: "bg-gradient-data",
    },
    {
      name: "Robotics & Engineering Club",
      description:
        "Build and program robots, participate in competitions, and learn about automation and embedded systems programming.",
      focus: "Robotics & Hardware",
      meeting: "Saturdays 2PM",
      icon: "🤖",
      iconBgClass: "bg-orange-100",
      colorClass: "bg-gradient-robot",
    },
    {
      name: "Web Development Group",
      description:
        "Master modern web technologies including React, Node.js, and cloud platforms. Collaborate on portfolio projects and freelance opportunities.",
      focus: "Web Technologies",
      meeting: "Mondays 7PM",
      icon: "🌐",
      iconBgClass: "bg-teal-100",
      colorClass: "bg-gradient-web",
    },
    {
      name: "Math & Statistics Club",
      description:
        "Dive deep into mathematical concepts, statistical analysis, and their applications in computer science and data science.",
      focus: "Mathematics & Stats",
      meeting: "Fridays 4PM",
      icon: "📐",
      iconBgClass: "bg-indigo-100",
      colorClass: "bg-gradient-math",
    },
    {
      name: "Game Development Society",
      description:
        "Create games using Unity, Unreal Engine, and web technologies. Participate in game jams and showcase your creative projects.",
      focus: "Game Programming",
      meeting: "Thursdays 8PM",
      icon: "🎮",
      iconBgClass: "bg-pink-100",
      colorClass: "bg-gradient-game",
    },
    {
      name: "AI & Machine Learning Club",
      description:
        "Explore artificial intelligence, neural networks, and deep learning. Work on cutting-edge projects in computer vision and NLP.",
      focus: "Artificial Intelligence",
      meeting: "Wednesdays 6PM",
      icon: "🧠",
      iconBgClass: "bg-yellow-100",
      colorClass: "bg-gradient-ai",
    },
    {
      name: "Tech Innovation Lab",
      description:
        "Prototype new technologies, participate in hackathons, and develop startup ideas. Connect with entrepreneurs and industry mentors.",
      focus: "Innovation & Startups",
      meeting: "Sundays 3PM",
      icon: "💡",
      iconBgClass: "bg-cyan-100",
      colorClass: "bg-gradient-innov",
    },
  ];

  const focusOptions = useMemo(() => {
    const set = new Set(clubs.map((c) => c.focus));
    return ["All", ...Array.from(set)];
  }, [clubs]);

  const filteredClubs = useMemo(() => {
    const q = query.trim().toLowerCase();
    return clubs.filter((c) => {
      if (filter !== "All" && c.focus !== filter) return false;
      if (!q) return true;
      return (
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.focus.toLowerCase().includes(q)
      );
    });
  }, [clubs, query, filter]);

  return (
    <div className="app-shell">
      <Header />

      <main className="container">
        <section className="hero">
          <div>
            <h2 className="hero-title">Join the Dragon STEM Community</h2>
            <p className="hero-sub">
              Find clubs, meet peers, and build projects that push your skills
              forward.
            </p>
          </div>

          <div className="controls">
            <input
              aria-label="Search clubs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="input-search"
              placeholder="Search clubs, topics, meetings..."
            />

            <select
              className="select-filter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              {focusOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>

            <button
              className="btn-ghost"
              onClick={() => {
                setQuery("");
                setFilter("All");
              }}
            >
              Reset
            </button>
          </div>
        </section>

        <section className="grid-section">
          <div className="grid-info">
            Showing <strong>{filteredClubs.length}</strong> of {clubs.length}{" "}
            clubs
          </div>

          <div className="clubs-grid">
            {filteredClubs.map((club, i) => (
              <ClubCard
                key={i}
                club={club}
                onLearnMore={() => setSelectedClub(club)}
              />
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-card">
            <div>
              <h3>Ready to get involved?</h3>
              <p>
                Visit DragonCentral to explore all student organizations or
                start a new club.
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn-primary" href="#">
                Visit DragonCentral
              </a>
              <a className="btn-outline" href="#">
                Start a New Club
              </a>
            </div>
          </div>
        </section>
      </main>


      {selectedClub && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <button
              className="modal-close"
              onClick={() => setSelectedClub(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <div className="modal-header">
              <div className={`modal-accent ${selectedClub.colorClass}`}></div>
              <h3>{selectedClub.name}</h3>
            </div>
            <p className="modal-desc">{selectedClub.description}</p>
            <div className="modal-meta">
              <div>
                <strong>Focus:</strong> {selectedClub.focus}
              </div>
              <div>
                <strong>Meeting:</strong> {selectedClub.meeting}
              </div>
            </div>
            <div className="modal-actions">
              <a
                className="btn-primary"
                target="_blank"
                href="https://www.mnstate.edu/student-life/student-activities/organizations/"
              >
                Contact
              </a>
              <button
                className="btn-outline"
                onClick={() => setSelectedClub(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
