# Project Blueprint: Google Antigravity Mastery Roadmap (`roadmap.sh` Style)

## 1. Goal & Visual Style
Build a single-page, interactive learning roadmap website modeled after **roadmap.sh**, designed for a complete beginner mastering **Google Antigravity (`agy`)**.
- **Visual Layout:** Vertical interactive node tree (flowchart style) with a clean light/dark mode toggle, connected by directional lines/arrows from Stage 1 down to Stage 6.
- **Node Color Coding (roadmap.sh convention):**
  - **Yellow/Amber Nodes:** Core Must-Learn Topics.
  - **Purple/Blue Nodes:** Hands-On Practice Tasks & Sub-topics branching off the main spine.
  - **Green / Strikethrough State:** Completed items.
- **Interactive Slide-Over Drawer:** Clicking any node opens a clean side drawer (modal/panel) showing:
  1. Plain-English explanation (zero heavy jargon).
  2. Exact UI click path or keyboard shortcut.
  3. Reference source tag (`Google Codelab` or `Hamodywe Handbook`).
  4. A status button (`Mark as Done` / `In Progress` / `Reset`) that saves progress automatically to browser `localStorage`.
- **Top Progress Bar:** Displays overall completion percentage (e.g., `4 / 18 Nodes Completed — 22%`) and a filter bar (`All`, `Codelab`, `Handbook`, `Completed`).

## 2. Tech Stack & Constraints
- **Stack:** Pure HTML5, Tailwind CSS (via CDN), and Vanilla JavaScript (no complex build step needed so it runs immediately in the browser).
- **Persistence:** Save all node statuses and user notes in `localStorage`, plus include an `Export / Import JSON` button so progress is never lost.

## 3. Curriculum Nodes (Pulling from Codelab & Hamodywe Handbook)

### Stage 1: Setup & Architecture (Source: Getting Started Codelab & Handbook)
- **1.1 Installation & Account Quota:** Install Antigravity 2.0 + Antigravity IDE; sign in with personal Google account (Google AI Pro quota).
- **1.2 Two Interfaces (`Ctrl + E`):** Understand **Agent Manager** (mission control dashboard) vs. **Editor View** (code workbench) and toggle Chat (`Ctrl + L`).
- **1.3 Workspaces & Projects:** Create a local folder and link it via `Projects > Create New Project`.
- **1.4 Safety & Permission Locks:** Configure `Settings` for Artifact review and Terminal command execution (`Request Review` vs. `Autopilot`).

### Stage 2: The 6-Step Agentic Loop (Source: Hamodywe Handbook)
- **2.1 Initiation & Prompting:** Write clear goal-based prompts instead of manual line-by-line coding.
- **2.2 Operating Modes:** Choose **Planning Mode** (blueprint first) vs. **Fast Mode** (instant small edits).
- **2.3 Model Selection & Orchestrator:** Pick `Orchestrator (Argon)` so the Architect model plans and the Builder model (`Hydrogen`) codes.
- **2.4 Execution & Terminal Logs:** Watch real-time filesystem edits and approve terminal commands safely.

### Stage 3: Artifacts & Human-in-the-Loop Review (Source: Codelab & Handbook)
- **3.1 Task List Artifact:** Track live checkboxes as the agent breaks down complex goals.
- **3.2 Implementation Plan & Inline Comments:** Highlight text inside `implementation_plan.md` to leave Google-Doc-style comments steering the agent before execution.
- **3.3 Code Diffs (Red/Green Review):** Inspect added (green) and removed (red) lines before clicking Accept.
- **3.4 Walkthrough Artifact:** Review the final summary document generated after task completion.

### Stage 4: Built-In Browser & Self-Verification (Source: Building with Antigravity Codelab & Handbook)
- **4.1 Browser Subagent:** Understand how Antigravity launches an isolated Chrome profile to test web apps.
- **4.2 Visual Verification Artifacts:** Inspect automated screenshots and browser recordings proving buttons and forms work.

### Stage 5: Customizations — Rules, Workflows & Skills (Source: Codelab & Built-Not-Hired Guide)
- **5.1 Workspace Rules (`.agents/rules/`):** Create permanent project constraints (e.g., *"Explain changes in simple beginner English"*).
- **5.2 Slash Workflows (`.agents/workflows/`):** Save repeatable multi-step prompts triggered via `/` commands.
- **5.3 `@` File Mentions & Fresh Context:** Target exact files with `@filename` and click `+ New Chat` between features to prevent context rot.
- **5.4 Persistent Knowledge Items:** Understand how Antigravity saves project patterns across sessions.

## 4. Verification Requirements
After building the files, launch the website in the built-in browser, click at least 3 different roadmap nodes to verify the slide-over drawer opens, mark 1 node as **Done** to confirm the progress bar updates and persists on page reload, and capture screenshots for review.