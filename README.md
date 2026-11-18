# Google Antigravity (`agy`) Mastery Roadmap

An interactive, beginner-friendly learning roadmap modeled after **roadmap.sh**, built to help newcomers master **Google Antigravity (`agy`)** step by step—from first installation and safety permissions to autonomous browser verification and custom rules.

---

## Live Preview & Quick Start

Because this project uses pure HTML, Tailwind CSS (via CDN), and Vanilla JavaScript with zero build steps, it runs immediately in any modern browser:

1. **Open Locally:** Download or clone this folder, then double-click `index.html` to open it directly in your browser.
2. **Host on GitHub Pages:** Upload `index.html`, `app.js`, and `README.md` to a public GitHub repository, enable **Settings → Pages → Branch: `main`**, and share your live URL (`https://<your-username>.github.io/<your-repo-name>/`).

---

## Key Features

- **`roadmap.sh`-Style Interactive Flowchart:**
  - **Yellow / Amber Nodes:** Core Must-Learn Topics along the main vertical spine.
  - **Purple / Blue Nodes:** Hands-On Practice Tasks & Sub-Topics branching off the spine with dashed connectors.
  - **Sky Blue Nodes:** Topics currently **In Progress**.
  - **Orange `?` Nodes:** Topics flagged as **False Info / Need Check (`?`)**, counting as **half (`0.5x`)** completed work.
  - **Green / Strikethrough Nodes:** **Completed (`1x`)** topics.
- **Auto-Minimizing Top Bar:** Automatically shrinks into a compact slim bar when you scroll down so you get maximum screen space for the flowchart, and expands when scrolling back up or clicking **Expand Bar**.
- **Slide-Over Learning Drawer:** Click any node to open a right-hand guide containing:
  1. **Plain-English Explanation** & beginner term tips (no heavy jargon).
  2. **Exact UI Click Path & Keyboard Shortcuts** (covering both **Antigravity 2.0** desktop app navigation and **Antigravity IDE** shortcuts like `Ctrl + I` / `Ctrl + K, Ctrl + S`).
  3. **Quick Try-It Step** to practice right away.
  4. **Reference Source Links** (`Google Codelab` and/or `Hamodywe Handbook`).
  5. **Status Controls** (`Mark Done`, `In Progress`, `? Check (0.5x)`, `Reset`) and **Personal Notes**.
- **Progress Tracking & Filtering:** Live completion bar (`X / 18 Nodes Completed — %`, counting `✓ = 1` and `? = 0.5`) and one-click filters (`All`, `Codelab`, `Handbook`, `Completed`, `? Need Check`).
- **Automatic Persistence + JSON Backup:** Saves all statuses, notes, and Light/Dark Mode preference automatically in browser `localStorage`, plus **Export JSON** and **Import JSON** buttons so your progress is never lost.

---

## Curriculum Overview (18 Nodes Across Stages 1–6)

1. **Stage 1: Setup & Architecture** — Installation & Account Quota, Two Interfaces (`Antigravity 2.0` vs. `IDE` keybindings), Workspaces & Projects, Safety & Permission Locks.
2. **Stage 2: The 6-Step Agentic Loop** — Initiation & Prompting, Operating Modes (`Planning` vs. `Fast`), Model Selection & `Orchestrator (Argon)`, Execution & Terminal Logs.
3. **Stage 3: Artifacts & Human-in-the-Loop Review** — Task List Artifact (`task.md`), Implementation Plan & Inline Comments (`implementation_plan.md`), Red/Green Code Diffs, Walkthrough Artifact (`walkthrough.md`).
4. **Stage 4: Built-In Browser & Self-Verification** — Browser Subagent and Visual Verification Artifacts (screenshots & recordings).
5. **Stage 5: Customizations — Rules, Workflows & Skills** — Workspace Rules (`.agents/rules/`), Slash Workflows (`.agents/workflows/`), `@` File Mentions & Fresh Context, Persistent Knowledge Items.
6. **Stage 6: Autonomous Antigravity Mastery** — Finish-line milestone summarizing the end-to-end agentic build loop.

---

## Tech Stack & Project Structure

- **HTML5** (`index.html`) — Single-page layout, semantic header, flowchart container, and slide-over drawer.
- **Tailwind CSS (CDN)** — Responsive utility styling and Light/Dark Mode (`darkMode: 'class'`).
- **Vanilla JavaScript** (`app.js`) — Curriculum dataset, SVG flowchart renderer, filter/progress state, JSON export/import, and `localStorage` persistence.

```text
├── index.html         # Page layout, Tailwind setup, flowchart styles, and drawer UI
├── app.js             # All 18 curriculum nodes, rendering logic, and localStorage state
├── ROADMAP_SPEC.md    # Original project blueprint
└── README.md          # Portfolio overview and usage guide
```

---

## References

- [Getting Started with Google Antigravity Codelab](https://codelabs.developers.google.com/getting-started-google-antigravity)
- [Building with Google Antigravity Codelab](https://codelabs.developers.google.com/building-with-google-antigravity)
- [Hamodywe Antigravity Mastery Handbook](https://github.com/hamodywe/antigravity-mastery-handbook)
