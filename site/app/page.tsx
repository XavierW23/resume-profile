import Image from "next/image";

const projects = [
  {
    name: "Agency OS",
    label: "Proprietary AI operations platform",
    problem:
      "Manual business development workflows were slow, inconsistent, and hard to monitor end to end.",
    solution:
      "Architected a production AI operations platform coordinating prospect discovery, evidence capture, AI reasoning, browser automation, QA validation, Slack approvals, and outreach readiness.",
    stack:
      "Python, OpenAI API, GitHub Actions, Make, Slack, Google Sheets, Chrome automation, REST APIs, JSON, Windows services",
    lesson:
      "Autonomous systems need explicit state, human approval gates, and runtime visibility before they can be trusted with business operations.",
  },
  {
    name: "Runtime Supervisor",
    label: "Production reliability layer",
    problem:
      "Long-running AI and browser automation can stall, lose session state, or fail silently without an external source of truth.",
    solution:
      "Built a supervision layer with JSON heartbeats, stale-state detection, failure classification, recovery decisions, runtime logs, and Slack state reporting.",
    stack:
      "Python, NSSM, Windows services, JSON heartbeats, logging, retry logic, Chrome runtime monitoring",
    lesson:
      "The supervisor is often the difference between an impressive automation script and an actual production system.",
  },
  {
    name: "AI Market Intelligence",
    label: "Automated briefing pipeline",
    problem:
      "Market updates were fragmented across data sources and needed to be summarized into decision-ready briefings.",
    solution:
      "Built a scheduled reporting workflow that aggregates market data, economic events, and volatility signals into AI-generated HTML briefings.",
    stack: "Python, GitHub Actions, REST APIs, HTML, AI summarization",
    lesson:
      "Good AI reporting depends on deterministic data collection first, then controlled summarization and delivery.",
  },
  {
    name: "Enterprise Identity Automation",
    label: "Cloud identity engineering",
    problem:
      "Enterprise identity environments accumulate stale objects and manual operations that create compliance and reliability risk.",
    solution:
      "Developed PowerShell and Microsoft Graph automation for stale object cleanup, identity lifecycle management, and cloud compliance workflows.",
    stack: "PowerShell, Microsoft Graph API, Microsoft Entra ID, Azure DevOps",
    lesson:
      "Identity automation is strongest when compliance, repeatability, and operational safety are designed together.",
  },
];

const strengths = [
  "Production AI workflow orchestration",
  "Runtime monitoring and recovery",
  "Browser automation with evidence capture",
  "Cloud identity and Microsoft Graph automation",
  "CI/CD and scheduled automation",
  "JSON state management and validation",
];

const proofPoints = [
  "Reduced more than 5,000 stale Microsoft Entra ID objects through Microsoft Graph automation.",
  "Built Windows NSSM-backed supervision for continuous local AI/browser automation.",
  "Created approval and learning loops that persist human decisions as structured state.",
  "Designed public-safe examples that demonstrate architecture without exposing proprietary Agency OS logic.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#eef2f8]">
      <header className="border-b border-[#273244] bg-[#0d1117]/95">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a className="font-semibold text-white" href="#top">
            Xavier White
          </a>
          <div className="hidden gap-5 text-sm text-[#aeb9c9] sm:flex">
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#architecture">
              Architecture
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 py-14 sm:py-18">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase text-[#70d6c7]">
              Software Engineer specializing in Autonomous AI Systems
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Building production AI systems that combine automation, cloud
              infrastructure, and runtime reliability.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#c4ccd8]">
              I design intelligent software systems across AI workflows, browser
              automation, cloud identity, developer tooling, and operational
              monitoring. My work focuses on turning useful automation into
              production systems that can be observed, recovered, and trusted.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-md bg-[#70d6c7] px-4 py-2 text-sm font-semibold text-[#061111] hover:bg-[#8ce5d9]"
                href="/resume/Xavier_White_Master_Resume.pdf"
              >
                Download Resume
              </a>
              <a
                className="rounded-md border border-[#4b5f78] px-4 py-2 text-sm font-semibold text-white hover:border-[#70d6c7]"
                href="https://github.com/XavierW23/resume-profile"
              >
                View GitHub
              </a>
              <a
                className="rounded-md border border-[#4b5f78] px-4 py-2 text-sm font-semibold text-white hover:border-[#70d6c7]"
                href="mailto:Xavierwhite352@gmail.com"
              >
                Contact
              </a>
            </div>
          </div>

          <aside className="rounded-lg border border-[#273244] bg-[#121a25] p-5">
            <div className="mb-5 flex items-center justify-between border-b border-[#273244] pb-4">
              <div>
                <p className="text-sm text-[#aeb9c9]">Current focus</p>
                <p className="text-xl font-semibold text-white">
                  Autonomous AI Operations
                </p>
              </div>
              <span className="rounded-md bg-[#273244] px-3 py-1 text-xs text-[#70d6c7]">
                Production Systems
              </span>
            </div>
            <div className="grid gap-3">
              {strengths.map((item) => (
                <div
                  className="flex items-start gap-3 rounded-md bg-[#0d1117] p-3"
                  key={item}
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#f4c95d]" />
                  <span className="text-sm leading-6 text-[#d7dde7]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#273244] bg-[#101722]">
        <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 md:grid-cols-4">
          {proofPoints.map((point) => (
            <p
              className="rounded-lg border border-[#273244] bg-[#0d1117] p-4 text-sm leading-6 text-[#c4ccd8]"
              key={point}
            >
              {point}
            </p>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-14">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase text-[#70d6c7]">
            Featured projects
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Systems I can discuss in interviews
          </h2>
          <p className="mt-4 leading-7 text-[#c4ccd8]">
            Agency OS remains proprietary. The projects below focus on the
            architecture, engineering decisions, and public-safe implementation
            patterns behind the work.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              className="rounded-lg border border-[#273244] bg-[#121a25] p-5"
              key={project.name}
            >
              <p className="text-sm font-semibold text-[#f4c95d]">
                {project.label}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <dl className="mt-5 space-y-4 text-sm leading-6">
                <div>
                  <dt className="font-semibold text-white">Problem</dt>
                  <dd className="mt-1 text-[#c4ccd8]">{project.problem}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Solution</dt>
                  <dd className="mt-1 text-[#c4ccd8]">{project.solution}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Stack</dt>
                  <dd className="mt-1 text-[#c4ccd8]">{project.stack}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Lesson</dt>
                  <dd className="mt-1 text-[#c4ccd8]">{project.lesson}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section id="architecture" className="bg-[#f4f7fb] text-[#162033]">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <div className="mb-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase text-[#0b6b63]">
              Architecture
            </p>
            <h2 className="mt-3 text-3xl font-semibold">
              Diagrams for system design conversations
            </h2>
            <p className="mt-4 leading-7 text-[#405066]">
              These diagrams are intentionally public-safe. They explain
              system shape, control flow, state boundaries, and reliability
              decisions without exposing proprietary Agency OS implementation.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <figure className="rounded-lg border border-[#cbd5e1] bg-white p-4">
              <Image
                alt="Agency OS architecture diagram showing intake, AI workflow, browser automation, QA, approvals, and learning state."
                className="w-full"
                height={560}
                src="/architecture-agency-os.svg"
                width={920}
              />
              <figcaption className="mt-3 text-sm text-[#526073]">
                Agency OS: autonomous business operations with human approval
                and stateful learning loops.
              </figcaption>
            </figure>
            <figure className="rounded-lg border border-[#cbd5e1] bg-white p-4">
              <Image
                alt="Runtime Supervisor architecture diagram showing runner heartbeat, supervisor, failure classification, recovery, and reporting."
                className="w-full"
                height={560}
                src="/architecture-runtime-supervisor.svg"
                width={920}
              />
              <figcaption className="mt-3 text-sm text-[#526073]">
                Runtime Supervisor: heartbeat monitoring, failure
                classification, recovery actions, and operational reporting.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-[#70d6c7]">
              Experience
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white">
              Enterprise cloud background, AI systems focus.
            </h2>
          </div>
          <div className="space-y-4">
            <article className="rounded-lg border border-[#273244] bg-[#121a25] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  AI Systems Engineer, Agency OS (Founder)
                </h3>
                <p className="text-sm text-[#aeb9c9]">May 2026 - Present</p>
              </div>
              <p className="mt-3 leading-7 text-[#c4ccd8]">
                Architected and built a production AI operations platform for
                autonomous customer acquisition workflows, runtime supervision,
                browser automation, QA validation, approval routing, and
                operational learning.
              </p>
            </article>
            <article className="rounded-lg border border-[#273244] bg-[#121a25] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  Cloud Engineer, Chevron U.S.A. Inc.
                </h3>
                <p className="text-sm text-[#aeb9c9]">June 2023 - April 2026</p>
              </div>
              <p className="mt-3 leading-7 text-[#c4ccd8]">
                Built Microsoft Graph and PowerShell automation for enterprise
                identity compliance, Conditional Access, Azure DevOps
                pipelines, and cloud identity operations.
              </p>
            </article>
            <article className="rounded-lg border border-[#273244] bg-[#121a25] p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-white">
                  Systems Support Analyst, Acumera
                </h3>
                <p className="text-sm text-[#aeb9c9]">July 2022 - May 2023</p>
              </div>
              <p className="mt-3 leading-7 text-[#c4ccd8]">
                Supported POS systems, server infrastructure, networking
                equipment, desktop environments, and production incident
                resolution across retail deployments.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#273244] bg-[#101722]">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Ready for AI, platform, and cloud engineering conversations.
            </h2>
            <p className="mt-2 text-[#c4ccd8]">
              Houston, TX | Xavierwhite352@gmail.com | 352-514-8080
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#101722] hover:bg-[#dfe7f1]"
              href="https://github.com/XavierW23"
            >
              GitHub
            </a>
            <a
              className="rounded-md border border-[#4b5f78] px-4 py-2 text-sm font-semibold text-white hover:border-[#70d6c7]"
              href="https://linkedin.com/in/xavierwhite"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
