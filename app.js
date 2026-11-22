/* ==========================================================================
   Google Antigravity (agy) Mastery Roadmap — Interactive Logic & Data
   ==========================================================================
   Plain-English Guide to This File:
   1. Curriculum Data: Holds all 18 learning boxes ("nodes") across Stages 1–5
      plus the Stage 6 Mastery Milestone banner.
   2. Saved Progress: Uses browser localStorage (a tiny built-in memory box
      inside your web browser) so your checkmarks and notes stay saved even
      after you refresh or close the tab.
   3. Flowchart Renderer: Draws the vertical roadmap.sh-style tree with
      directional arrows, yellow core topics, and purple/blue practice branches.
   4. Slide-Over Drawer & Filters: Opens the right-hand help panel when you
      click any box, updates the progress bar, filters nodes, and exports/imports
      your backup JSON file.
   ========================================================================== */

/* --------------------------------------------------------------------------
   SECTION 1: CURRICULUM DATA (ALL 18 NODES + STAGE 6 MILESTONE)
   Each node comes directly from ROADMAP_SPEC.md, the Google Codelab, and the
   Hamodywe Antigravity Mastery Handbook.
   -------------------------------------------------------------------------- */
const CODELAB_URL = 'https://codelabs.developers.google.com/getting-started-google-antigravity';
const BUILDING_CODELAB_URL = 'https://codelabs.developers.google.com/building-with-google-antigravity';
const HANDBOOK_URL = 'https://github.com/hamodywe/antigravity-mastery-handbook';

const ROADMAP_STAGES = [
  {
    id: 'stage-1',
    number: 1,
    title: 'Stage 1: Setup & Architecture',
    subtitle: 'Install Antigravity, learn its two main screens, connect a project folder, and turn on safety locks.',
    sourceSummary: 'Getting Started Codelab & Handbook',
    rows: [
      {
        core: {
          id: '1.1',
          stage: 'Stage 1: Setup & Architecture',
          title: 'Installation & Account Quota',
          type: 'core',
          sources: ['codelab'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
          ],
          shortSummary: 'Install Antigravity 2.0 + Antigravity IDE and sign in with Google.',
          explanation:
            'Google Antigravity comes as a desktop mission-control app (Antigravity 2.0) and an AI-powered code editor (Antigravity IDE). Signing in with your personal Google account unlocks your Google AI Pro quota—your daily allowance of AI thinking and coding actions.',
          jargonTip:
            'Quota simply means your daily allowance of AI requests. Using the right mode and model helps that allowance last longer.',
          shortcuts: [
            'Open the Antigravity desktop app or IDE and click <strong>Sign in with Google</strong>.',
            'Finish the sign-in prompt in your web browser so your account quota connects automatically.',
            'Optional terminal launch: open your terminal and type <code>agy</code> to start the command-line assistant.',
          ],
          tryIt:
            'Verify that your Google profile picture or account name appears in the bottom-left or Settings panel before starting your first project.',
        },
      },
      {
        core: {
          id: '1.2',
          stage: 'Stage 1: Setup & Architecture',
          title: 'Two Interfaces (Antigravity 2.0 vs. IDE)',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Agent Manager vs. Editor View — and why Ctrl + E / Ctrl + L behave differently in agy 2.0.',
          explanation:
            'Older Codelab guides mention Ctrl + E (Agent Manager) and Ctrl + L (Chat) because Antigravity 1.x combined them in one editor window. In Antigravity 2.0 (the standalone desktop app), the whole window already IS your Agent Manager & Chat Canvas—so Ctrl + E and Ctrl + L are not needed there. Meanwhile, Antigravity IDE is a separate code editor window for hands-on file editing.',
          jargonTip:
            'Why shortcuts sometimes fail: Antigravity 2.0 (desktop app) and Antigravity IDE (VS Code-style editor) are two separate apps, and extensions or Windows keymaps can override keys.',
          shortcuts: [
            '<strong>In Antigravity 2.0 (Desktop App):</strong> Use the <strong>Left Sidebar</strong> (<em>New Conversation, Projects, Settings</em>) and the <strong>Right Auxiliary Pane tabs</strong> (<em>Artifacts, Files Changed, Terminals, Subagents</em>)—<code>Ctrl + E</code> / <code>Ctrl + L</code> are inactive here.',
            '<strong>In Antigravity IDE (Code Editor):</strong> Open Inline AI Edit with <kbd>Ctrl</kbd> + <kbd>I</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>I</kbd>), toggle Sidebar Chat with <kbd>Ctrl</kbd> + <kbd>L</kbd> (or <kbd>Ctrl</kbd> + <kbd>E</kbd> in 1.x / IDE mode), and open Command Palette with <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.',
            '<strong>Check or Fix Broken Keys in IDE:</strong> Press <kbd>Ctrl</kbd> + <kbd>K</kbd> then <kbd>Ctrl</kbd> + <kbd>S</kbd> (or go to <strong>Settings &rarr; Keyboard Shortcuts</strong>) to inspect or rebind keys in <code>keybindings.json</code>.',
          ],
          tryIt:
            'Check which window you have open: in Antigravity 2.0, click the Auxiliary Pane tabs on the right; in Antigravity IDE, highlight a line and press Ctrl + I or open Settings > Keyboard Shortcuts.',
        },
        rightBranch: {
          id: '1.3',
          stage: 'Stage 1: Setup & Architecture',
          title: 'Workspaces & Projects',
          type: 'practice',
          sources: ['codelab'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
          ],
          shortSummary: 'Create a local folder on your computer and link it as a Project.',
          explanation:
            'A Workspace (or Project) is just a regular folder on your computer where your website or app files live. Linking that folder tells Antigravity exactly where it is allowed to read, create, and update files safely.',
          jargonTip:
            'Workspace Root means the top-level folder of your project. Antigravity locks edits inside this folder by default so other personal files stay untouched.',
          shortcuts: [
            'In the Left Sidebar, click <strong>Projects</strong> &rarr; <strong>Create New Project</strong>.',
            'Or in Editor View, open a folder via <strong>File &gt; Open Folder...</strong> (<kbd>Ctrl</kbd> + <kbd>K</kbd>, then <kbd>Ctrl</kbd> + <kbd>O</kbd>).',
          ],
          tryIt:
            'Create an empty folder on your computer (for example, "my-first-site") and open it inside Projects so the agent has a safe home to build in.',
        },
      },
      {
        core: {
          id: '1.4',
          stage: 'Stage 1: Setup & Architecture',
          title: 'Safety & Permission Locks',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Choose Request Review vs. Autopilot for plans and terminal commands.',
          explanation:
            'Before the AI runs commands on your computer, you decide how much supervision you want. Request Review pauses the AI and asks you to click Approve before running commands or editing code. Autopilot lets it work automatically inside a safe Sandbox.',
          jargonTip:
            'A Sandbox is a protective test bubble around the terminal—it lets commands test your project without touching unrelated folders or system settings.',
          shortcuts: [
            'Open settings from the Left Sidebar &rarr; <strong>Settings</strong> (or press <kbd>Ctrl</kbd> + <kbd>,</kbd>).',
            'Set <strong>Artifact Review Policy</strong> to <code>Request Review</code> while learning.',
            'Set <strong>Terminal Execution Policy</strong> to <code>Request Review</code> or <code>Proceed in Sandbox</code> (avoid unrestricted Autopilot until confident).',
          ],
          tryIt:
            'Open Settings right now and verify that Request Review is turned on so the AI always explains its commands before running them.',
        },
      },
    ],
  },
  {
    id: 'stage-2',
    number: 2,
    title: 'Stage 2: The 6-Step Agentic Loop',
    subtitle: 'Direct the AI like a project manager through Initiation, Planning, Execution, Verification, Documentation, and Completion.',
    sourceSummary: 'Hamodywe Handbook',
    rows: [
      {
        core: {
          id: '2.1',
          stage: 'Stage 2: The 6-Step Agentic Loop',
          title: 'Initiation & Prompting',
          type: 'core',
          sources: ['handbook'],
          sourceLinks: [
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Write clear goal-based prompts instead of typing code line by line.',
          explanation:
            'The Hamodywe Handbook teaches a 6-Step Loop: Initiation, Planning, Execution, Verification, Documentation, and Completion. You start Step 1 (Initiation) by describing your finished goal in plain English—what the page should look like, do, and verify—instead of worrying about syntax.',
          jargonTip:
            'Prompting simply means writing your instructions in the chat box. Clear goals ("build a dark-mode toggle that saves in the browser") beat vague requests.',
          shortcuts: [
            'Click the main <strong>Chat Input Box</strong> (already visible on the main screen in Antigravity 2.0; in IDE, press <kbd>Ctrl</kbd> + <kbd>L</kbd>).',
            'Type 1–3 clear sentences describing the goal and what "done" looks like, then press <kbd>Enter</kbd>.',
          ],
          tryIt:
            'Practice writing a goal prompt that includes 3 parts: what to build, how it should look, and how to test that it works.',
        },
      },
      {
        core: {
          id: '2.2',
          stage: 'Stage 2: The 6-Step Agentic Loop',
          title: 'Operating Modes',
          type: 'core',
          sources: ['handbook'],
          sourceLinks: [
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Pick Planning Mode (blueprint first) vs. Fast Mode (instant small edits).',
          explanation:
            'Planning Mode tells the agent to stop, read your project, and write an approval blueprint before changing any files—best for new features or multi-file work. Fast Mode skips the blueprint and applies tiny edits right away—best for fixing a typo or tweaking a color.',
          jargonTip:
            'Think of Planning Mode like asking a builder for house blueprints first, and Fast Mode like asking them to paint one wall.',
          shortcuts: [
            'Look at the bottom toolbar of the <strong>Chat Input Box</strong> and click the <strong>Mode Selector</strong> (<code>Planning</code> vs. <code>Fast</code>).',
            'You can also type <code>/plan</code> in chat whenever you want the agent to draft a structured plan first.',
          ],
          tryIt:
            'Switch between Planning and Fast in the chat bar so you know how to choose Planning before big changes and Fast for quick polish.',
        },
        leftBranch: {
          id: '2.3',
          stage: 'Stage 2: The 6-Step Agentic Loop',
          title: 'Model Selection & Orchestrator',
          type: 'practice',
          sources: ['handbook'],
          sourceLinks: [
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Pick Orchestrator (Argon) so the Architect plans and Builder (Hydrogen) codes.',
          explanation:
            'Selecting Orchestrator (Argon) automatically pairs two specialized AI brains: a careful "Architect" model designs your blueprint and reviews risks, while a fast "Builder" model (Hydrogen) executes the file edits quickly. This gives higher quality while protecting your quota.',
          jargonTip:
            'Orchestrator means a lead coordinator model that plans the strategy and delegates the heavy typing to a faster helper model.',
          shortcuts: [
            'At the bottom of the <strong>Chat Input Box</strong>, click the <strong>Model Dropdown</strong>.',
            'Select <strong>Orchestrator (Argon)</strong> (also available under <strong>Settings &gt; Model Selection</strong>).',
          ],
          tryIt:
            'Check your active Model Dropdown and select Orchestrator (Argon) before launching a multi-step feature.',
        },
        rightBranch: {
          id: '2.4',
          stage: 'Stage 2: The 6-Step Agentic Loop',
          title: 'Execution & Terminal Logs',
          type: 'practice',
          sources: ['handbook'],
          sourceLinks: [
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Watch real-time file edits and safely approve terminal commands.',
          explanation:
            'During Step 3 (Execution), the agent creates files and runs commands in the terminal (for example, starting a local web server so you can preview your site). Each step shows live logs and pauses for your approval when a command needs permission.',
          jargonTip:
            'The Terminal is a text window where programs run commands behind the scenes—like starting a mini local web server on your computer.',
          shortcuts: [
            'Open the <strong>Auxiliary Right Pane</strong> &rarr; click the <strong>Terminals</strong> or <strong>Background Tasks</strong> tab.',
            'When a command card pauses for approval, read the short command summary and click <strong>Approve / Run</strong> (or <strong>Deny</strong> if unsure).',
          ],
          tryIt:
            'Watch the step cards in chat as the AI writes a file, then open the Terminals tab to see the exact commands it ran.',
        },
      },
    ],
  },
  {
    id: 'stage-3',
    number: 3,
    title: 'Stage 3: Artifacts & Human-in-the-Loop Review',
    subtitle: 'Stay in complete control by reading checklists, commenting on blueprints, and inspecting green/red code diffs.',
    sourceSummary: 'Codelab & Handbook',
    rows: [
      {
        core: {
          id: '3.1',
          stage: 'Stage 3: Artifacts & Human-in-the-Loop Review',
          title: 'Task List Artifact',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Watch live checkboxes tick off as the AI breaks down big goals.',
          explanation:
            'An Artifact is a readable document created by the AI so its work is never a mystery. The Task List (task.md) breaks your big goal into small numbered steps and checks off each box in real time as the agent finishes it.',
          jargonTip:
            'Human-in-the-Loop simply means you stay the boss—you see every step and approve key moments rather than trusting blind automation.',
          shortcuts: [
            'In the <strong>Auxiliary Right Pane</strong>, click the <strong>Artifacts</strong> tab &rarr; open <code>task.md</code>.',
            'Or click the <strong>Task List</strong> chip that appears directly inside the chat progress stream.',
          ],
          tryIt:
            'Ask the agent to plan a 3-step change and watch task.md update its checkboxes from [ ] to [/] to [x].',
        },
      },
      {
        core: {
          id: '3.2',
          stage: 'Stage 3: Artifacts & Human-in-the-Loop Review',
          title: 'Implementation Plan & Inline Comments',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Highlight text inside implementation_plan.md to leave Google-Doc-style comments.',
          explanation:
            'Before changing your files in Planning Mode, the agent writes implementation_plan.md explaining what it plans to build. Just like leaving a comment in Google Docs, you can highlight any sentence, write feedback (for example, "Use soft purple instead of red"), and steer the agent before it writes a single line of code.',
          jargonTip:
            'Markdown (.md) is just a plain text file that uses simple symbols like # for headings and * for bullet points.',
          shortcuts: [
            'Click the <code>implementation_plan.md</code> card in chat or under <strong>Artifacts</strong>.',
            'Drag your mouse over any line &rarr; click the floating <strong>Add Comment</strong> button &rarr; type your change request.',
            'Click <strong>Proceed</strong> when you are happy with the plan.',
          ],
          tryIt:
            'Next time you see an Implementation Plan, highlight one bullet point and add an inline comment before clicking Proceed.',
        },
        rightBranch: {
          id: '3.3',
          stage: 'Stage 3: Artifacts & Human-in-the-Loop Review',
          title: 'Code Diffs (Red/Green Review)',
          type: 'practice',
          sources: ['codelab'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
          ],
          shortSummary: 'Inspect removed (red) and added (green) lines before clicking Accept.',
          explanation:
            'A Code Diff (short for "difference") puts the old file and new file side by side or stacked together. Lines highlighted in red are being removed, and lines highlighted in green are being added—so you can double-check edits before keeping them.',
          jargonTip:
            'Diff simply means "difference"—it highlights only the lines that changed so you do not have to read an entire file from top to bottom.',
          shortcuts: [
            'Open the <strong>Auxiliary Right Pane</strong> &rarr; click <strong>Files Changed</strong> &rarr; click any filename.',
            'Review red and green lines, then click <strong>Accept</strong> (keep) or <strong>Reject</strong> (undo) in the editor review bar.',
          ],
          tryIt:
            'Click a file inside Files Changed after an edit and look for the green (+) and red (-) lines.',
        },
        leftBranch: {
          id: '3.4',
          stage: 'Stage 3: Artifacts & Human-in-the-Loop Review',
          title: 'Walkthrough Artifact',
          type: 'practice',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Read the final summary document generated after task completion.',
          explanation:
            'Once the agent finishes coding and testing your feature, it generates a final report called walkthrough.md. It summarizes what changed, lists the files touched, and shows the test results or screenshots proving everything works.',
          jargonTip:
            'Think of the Walkthrough as the agent’s final handoff note showing you what was built and how it was verified.',
          shortcuts: [
            'Click the <strong>Walkthrough</strong> card at the end of a completed response, or open <strong>Artifacts &gt; walkthrough.md</strong>.',
          ],
          tryIt:
            'Read the Walkthrough card after any build task to verify that every requested feature was actually tested.',
        },
      },
    ],
  },
  {
    id: 'stage-4',
    number: 4,
    title: 'Stage 4: Built-In Browser & Self-Verification',
    subtitle: 'Let Antigravity open your website in a clean browser window, click buttons itself, and show visual proof.',
    sourceSummary: 'Building with Antigravity Codelab & Handbook',
    rows: [
      {
        core: {
          id: '4.1',
          stage: 'Stage 4: Built-In Browser & Self-Verification',
          title: 'Browser Subagent',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Building Codelab', url: BUILDING_CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Antigravity opens an isolated Chrome profile to click and test your web app.',
          explanation:
            'Instead of making you click every button by hand to check for bugs, Antigravity launches a helper called the Browser Subagent. It opens a clean, separate Chrome browser window, visits your page, clicks links, fills out forms, and checks for visual or script errors automatically.',
          jargonTip:
            'A Subagent is a focused mini-helper spawned by your main AI agent to handle one specific job—here, acting like a real user testing your webpage.',
          shortcuts: [
            'Type <code>/browser</code> in chat or ask: <em>"Launch the site in the built-in browser and test clicking the buttons."</em>',
            'Watch live helper activity inside <strong>Auxiliary Right Pane &gt; Subagents</strong>.',
          ],
          tryIt:
            'Ask Antigravity to open your webpage in the built-in browser and verify that buttons and reload persistence work.',
        },
        rightBranch: {
          id: '4.2',
          stage: 'Stage 4: Built-In Browser & Self-Verification',
          title: 'Visual Verification Artifacts',
          type: 'practice',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Building Codelab', url: BUILDING_CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Inspect screenshots and browser recordings proving buttons and forms work.',
          explanation:
            'While testing your site, the Browser Subagent captures real screenshots and interaction recordings. It attaches these images directly to your chat and Walkthrough report so you can visually verify that your layout looks sharp on screen.',
          jargonTip:
            'Visual Verification means proving a website works with real pictures from the browser, not just guessing from code.',
          shortcuts: [
            'Open <strong>Auxiliary Right Pane &gt; Subagents</strong> or <strong>Artifacts &gt; walkthrough.md</strong>.',
            'Click any embedded screenshot thumbnail to expand and inspect the full browser view.',
          ],
          tryIt:
            'Check the screenshots produced at the end of a browser verification run to inspect button colors, spacing, and mobile sizing.',
        },
      },
    ],
  },
  {
    id: 'stage-5',
    number: 5,
    title: 'Stage 5: Customizations — Rules, Workflows & Skills',
    subtitle: 'Teach Antigravity your personal preferences, repeatable slash shortcuts, focused file mentions, and long-term memory.',
    sourceSummary: 'Codelab & Built-Not-Hired Guide',
    rows: [
      {
        core: {
          id: '5.1',
          stage: 'Stage 5: Customizations — Rules, Workflows & Skills',
          title: 'Workspace Rules (.agents/rules/)',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Create permanent project rules (like "Explain changes in simple beginner English").',
          explanation:
            'Workspace Rules are permanent instruction files stored inside your project’s .agents/rules/ folder (just like beginner-guide.md in this project!). Antigravity reads these rules automatically at the start of every prompt so you never have to repeat your preferences.',
          jargonTip:
            'Think of Rules as sticky notes taped to your agent’s desk—it always follows them before writing any code or reply.',
          shortcuts: [
            'Left Sidebar &rarr; click <strong>Skills &amp; Customizations &gt; Rules</strong>.',
            'Or create any <code>.md</code> file inside <code>.agents/rules/</code> in your project folder.',
          ],
          tryIt:
            'Open .agents/rules/beginner-guide.md in this workspace to see how plain-English rules are written.',
        },
        rightBranch: {
          id: '5.2',
          stage: 'Stage 5: Customizations — Rules, Workflows & Skills',
          title: 'Slash Workflows (.agents/workflows/)',
          type: 'practice',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Save repeatable multi-step checklists triggered by typing / commands.',
          explanation:
            'Whenever you notice yourself asking the AI to run the same multi-step checklist over and over (like "check links, run tests, and write a summary"), you can save those steps as a Markdown file in .agents/workflows/ (or as a reusable Skill) and trigger them anytime with a single slash command.',
          jargonTip:
            'A Slash Command is a quick shortcut starting with / (like /plan or /browser) that triggers an entire saved recipe in one keystroke.',
          shortcuts: [
            'Save a checklist file inside <code>.agents/workflows/your-command.md</code> (or create a Skill under <code>.agents/skills/</code>).',
            'In the <strong>Chat Input Box</strong>, type <code>/</code> to pop up the menu and pick your saved command.',
          ],
          tryIt:
            'Type / inside the Chat Input Box to browse built-in slash commands like /plan, /browser, and /learn.',
        },
      },
      {
        core: {
          id: '5.3',
          stage: 'Stage 5: Customizations — Rules, Workflows & Skills',
          title: '@ File Mentions & Fresh Context',
          type: 'core',
          sources: ['codelab', 'handbook'],
          sourceLinks: [
            { label: 'Google Codelab', url: CODELAB_URL },
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Target exact files with @filename and click + New Chat between features.',
          explanation:
            'Typing @ followed by a file name points the AI straight to the exact file you want edited so it does not waste quota searching around. And clicking + New Chat whenever you switch to a brand-new feature clears out old clutter ("context rot") so the AI stays sharp.',
          jargonTip:
            'Context Rot happens when one chat gets too long and full of old discarded ideas, making the AI slower or confused—starting a New Chat gives it a fresh desk.',
          shortcuts: [
            'Target an exact file: type <code>@</code> in the Chat Input Box &rarr; pick the file (like <code>@ROADMAP_SPEC.md</code>).',
            'Start a fresh chat between separate tasks: Left Sidebar &rarr; click <strong>+ New Conversation</strong> (or press <kbd>Ctrl</kbd> + <kbd>N</kbd>).',
          ],
          tryIt:
            'Next time you finish a feature, click + New Conversation and attach only the specific file you need next using @filename.',
        },
        leftBranch: {
          id: '5.4',
          stage: 'Stage 5: Customizations — Rules, Workflows & Skills',
          title: 'Persistent Knowledge Items',
          type: 'practice',
          sources: ['handbook'],
          sourceLinks: [
            { label: 'Hamodywe Handbook', url: HANDBOOK_URL },
          ],
          shortSummary: 'Save project patterns and lessons across sessions so future chats remember.',
          explanation:
            'Even when you start a fresh chat to prevent clutter, Antigravity can store long-term project lessons, setup tricks, and architectural patterns in its local Knowledge folder. Future conversations can reuse that saved memory automatically.',
          jargonTip:
            'Persistent simply means "sticks around after closing"—unlike chat memory that disappears when you start a new tab, Knowledge Items stay saved on disk.',
          shortcuts: [
            'Type <code>/learn</code> in chat after solving a tricky setup so Antigravity remembers that rule for next time.',
            'Inspect saved patterns in <code>.antigravity/knowledge/</code> or under <strong>Left Sidebar &gt; Skills &amp; Customizations</strong>.',
          ],
          tryIt:
            'After finishing a tough customization, type /learn in chat to turn that lesson into a reusable instruction.',
        },
      },
    ],
  },
];

/* --------------------------------------------------------------------------
   SECTION 2: HELPER LOOKUPS & BROWSER STORAGE STATE
   Builds a flat ordered list of all 18 nodes and manages saving to localStorage.
   -------------------------------------------------------------------------- */
const STORAGE_KEY = 'agy_roadmap_state_v1';
const THEME_KEY = 'agy_roadmap_theme';
const OVERVIEW_KEY = 'agy_roadmap_overview_collapsed';
const LANG_KEY = 'agy_roadmap_lang';

/* --------------------------------------------------------------------------
   SECTION 2A: ENGLISH & VIETNAMESE TRANSLATION DICTIONARIES (I18N)
   Holds all page labels, buttons, stage headings, and 18 node guides in
   both English ("en") and beginner-friendly Vietnamese ("vi").
   -------------------------------------------------------------------------- */
const I18N_UI = {
  en: {
    pageTitle: 'Google Antigravity (agy) Mastery Roadmap — Beginner Guide',
    compactTitle: '<code class="font-mono">agy</code> Mastery Roadmap',
    mainTitle: 'Google Antigravity (<code class="font-mono text-sm px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600">agy</code>) Mastery Roadmap',
    beginnerBadge: 'Beginner Path',
    mainSubtitle: 'Click any box to open its guide, or click <strong>?</strong> on a box to flag info to double-check (counts as 0.5x progress).',
    exportBtn: 'Export JSON',
    importBtn: 'Import JSON',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    hideBar: 'Hide Bar',
    expandBar: 'Expand Bar',
    filterLabel: 'Filter:',
    filterAll: 'All',
    filterCodelab: 'Codelab',
    filterHandbook: 'Handbook',
    filterCompleted: 'Completed',
    filterQuestion: '? Need Check',
    overviewHeading: 'What is Google Antigravity (<code class="font-mono text-xs px-1 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600">agy</code>)? — Quick Overview',
    overviewSubtitle: 'Start here if you are brand new to agentic AI coding.',
    hideOverview: 'Hide Overview ▴',
    showOverview: 'Show Overview ▾',
    overviewIntro: '<strong>Google Antigravity</strong> is an AI-first development platform from Google DeepMind. Instead of typing every line of code yourself, you describe your goal in plain English and act like a project director while AI agents <strong>plan the steps, edit files, run commands, and visually test your app in a browser</strong>—pausing so you stay in control.',
    surface1Title: '1. Antigravity 2.0 (App)',
    surface1Desc: 'Standalone desktop "mission control" app to chat with agents, run parallel tasks, and inspect plans & changed files side by side.',
    surface2Title: '2. Antigravity IDE',
    surface2Desc: 'AI-powered VS Code-style code editor with smart <kbd>Tab</kbd> autocomplete, inline edits (<kbd>Ctrl</kbd>+<kbd>I</kbd>), and red/green code diffs.',
    surface3Title: '3. Antigravity CLI (<code>agy</code>)',
    surface3Desc: 'Lightweight terminal command-line assistant for fast keyboard-only chats, quick project edits, and slash commands.',
    surface4Title: '4. SDK & Extensions',
    surface4Desc: 'Connects Antigravity agents to other editors (VS Code, JetBrains, Zed) or lets developers automate agents using the Python SDK.',
    flowLabel: 'How a task flows:',
    flowStep1: '1. Share your goal',
    flowStep2: '2. Review blueprint',
    flowStep3: '3. Approve edits & commands',
    flowStep4: '4. Verify in built-in browser',
    legendCore: 'Core Must-Learn Topic (Main Spine)',
    legendPractice: 'Hands-On Practice & Sub-Topics',
    legendInProgress: 'In Progress',
    legendQuestion: 'False Info / Need Check (0.5x)',
    legendCompleted: 'Completed (1x)',
    autoSaveNotice: 'Progress saves automatically in your browser.',
    showAllBtn: 'Show All 18 Nodes',
    returnFullRoadmap: 'Return to Full Roadmap',
    progressText: '{done} / {total} Nodes Completed — {percent}%',
    progressSubtext: '{inProgress} In Progress · {question} ? Need Check',
    filterBannerText: 'Showing {matching} of {total} nodes matching "{label}".',
    filterLabelCodelab: 'Google Codelab',
    filterLabelHandbook: 'Hamodywe Handbook',
    filterLabelCompleted: 'Completed',
    filterLabelQuestion: '? Need Check (0.5x)',
    emptyQuestionTitle: 'No nodes flagged with "?" yet!',
    emptyQuestionDesc: 'Click the <strong>?</strong> button on any box (or inside its guide drawer) when you spot outdated info or want to double-check a step. It counts as 0.5x progress.',
    emptyCompletedTitle: 'No completed nodes yet!',
    emptyCompletedDesc: 'Click any yellow or purple box on the roadmap and press <strong>Mark Done</strong> to track your first win.',
    badgeDone: '✓ Done',
    badgeCheck: '? Check (0.5x)',
    badgeWorking: 'Working',
    badgeCore: 'Core',
    badgePractice: 'Practice',
    openGuide: 'Open Guide →',
    quickQuestionTitle: 'Flag as ? (False Info / Need Check — counts as 0.5x)',
    sourceCodelab: 'Google Codelab',
    sourceBuildingCodelab: 'Building Codelab',
    sourceHandbook: 'Hamodywe Handbook',
    stageBadge: 'Stage {num}',
    sourcePrefix: 'Source:',
    stage6Badge: 'Stage 6: Autonomous Antigravity Mastery',
    stage6TitleAllDone: 'Congratulations! You Mastered All 18 Antigravity Topics!',
    stage6TitleDefault: 'Your Finish Line: Confident Agentic Building',
    stage6QuestionNote: ' (includes {count} flagged with ? counting as 0.5 each)',
    stage6Desc: 'Once you complete Stages 1 through 5 ({score} of {total} nodes done — {percent}%{note}), you can direct Google Antigravity to plan blueprints, write code, verify UI in the browser, and remember your personal rules across any new project.',
    stage6Step1: '1. Goal Prompt',
    stage6Step2: '2. Review Plan',
    stage6Step3: '3. Approve Edits',
    stage6Step4: '4. Verify in Browser',
    drawerRefSource: 'Reference Source',
    drawerPlainExplain: 'Plain-English Explanation',
    drawerShortcuts: 'Exact Click Path & Shortcuts',
    drawerTryIt: 'Quick Try-It Step',
    drawerUpdateProgress: 'Update Your Progress',
    btnMarkDone: 'Mark Done',
    btnInProgress: 'In Progress',
    btnCheckHalf: 'Check (0.5x)',
    btnReset: 'Reset',
    statusTip: 'Tip: <strong>? Check (0.5x)</strong> marks false/outdated info or steps to verify further and counts as half (0.5) of a completed topic.',
    drawerNotesLabel: 'Your Personal Notes',
    notesSaved: 'Saved automatically',
    notesPlaceholder: 'Write down what you tried, questions to ask the agent, or helpful reminders...',
    prevNodeBtn: '← Previous Node',
    nextNodeBtn: 'Next Node →',
    drawerTypeCore: 'Core Must-Learn Topic',
    drawerTypePractice: 'Hands-On Practice Task',
    statusDone: '✓ Completed (1x)',
    statusQuestion: '? Need Check (0.5x)',
    statusInProgress: '◔ In Progress',
    statusNotStarted: 'Not Started',
    jargonTipPrefix: 'Plain-English Tip:',
    toastDone: 'Marked as Done & saved to browser storage!',
    toastInProgress: 'Marked as In Progress!',
    toastQuestion: 'Flagged with ? (counts as 0.5 completed work)!',
    toastReset: 'Node status reset.',
    toastQuickCleared: 'Cleared ? flag on {id}.',
    toastQuickFlagged: 'Flagged {id} with ? (counts as 0.5 completed).',
    toastExported: 'Progress exported to antigravity-roadmap-progress.json!',
    toastInvalidBackup: 'Invalid backup file format.',
    toastRestored: 'Backup restored successfully!',
    toastJsonError: 'Could not read JSON file. Please pick a valid export file.',
    toastLangSwitched: 'Switched language to English.',
  },
  vi: {
    pageTitle: 'Lộ Trình Làm Chủ Google Antigravity (agy) — Dành Cho Người Mới',
    compactTitle: 'Lộ Trình <code class="font-mono">agy</code>',
    mainTitle: 'Lộ Trình Làm Chủ Google Antigravity (<code class="font-mono text-sm px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-600">agy</code>)',
    beginnerBadge: 'Cho Người Mới',
    mainSubtitle: 'Bấm vào từng ô để xem hướng dẫn dễ hiểu, hoặc bấm <strong>?</strong> trên ô để đánh dấu thông tin cần kiểm tra lại (tính 0.5 điểm).',
    exportBtn: 'Xuất JSON',
    importBtn: 'Nhập JSON',
    darkMode: 'Chế Độ Tối',
    lightMode: 'Chế Độ Sáng',
    hideBar: 'Thu Gọn',
    expandBar: 'Mở Rộng Thanh',
    filterLabel: 'Lọc:',
    filterAll: 'Tất cả',
    filterCodelab: 'Codelab',
    filterHandbook: 'Handbook',
    filterCompleted: 'Đã xong',
    filterQuestion: '? Cần xem lại',
    overviewHeading: 'Google Antigravity (<code class="font-mono text-xs px-1 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600">agy</code>) là gì? — Tổng Quan Nhanh',
    overviewSubtitle: 'Bắt đầu từ đây nếu bạn mới tiếp cận lập trình cùng AI Agent.',
    hideOverview: 'Ẩn Tổng Quan ▴',
    showOverview: 'Hiện Tổng Quan ▾',
    overviewIntro: '<strong>Google Antigravity</strong> là nền tảng lập trình AI của Google DeepMind. Thay vì tự gõ từng dòng code, bạn chỉ cần mô tả mục tiêu bằng ngôn ngữ tự nhiên như một người điều phối, còn AI Agent sẽ <strong>lập kế hoạch, sửa file, chạy lệnh và tự kiểm tra giao diện trên trình duyệt</strong>—và luôn dừng lại để bạn duyệt các thay đổi quan trọng.',
    surface1Title: '1. Antigravity 2.0 (Ứng dụng)',
    surface1Desc: 'Ứng dụng desktop độc lập đóng vai trò "trung tâm điều khiển" để chat với agent, chạy nhiều tác vụ song song và xem kế hoạch + file đã sửa cạnh nhau.',
    surface2Title: '2. Antigravity IDE',
    surface2Desc: 'Trình soạn thảo code dựa trên VS Code tích hợp gợi ý thông minh <kbd>Tab</kbd>, sửa nhanh tại chỗ (<kbd>Ctrl</kbd>+<kbd>I</kbd>) và xem thay đổi xanh/đỏ.',
    surface3Title: '3. Antigravity CLI (<code>agy</code>)',
    surface3Desc: 'Công cụ dòng lệnh gọn nhẹ trong Terminal giúp chat nhanh bằng bàn phím, chỉnh sửa dự án và gọi lệnh gạch chéo.',
    surface4Title: '4. SDK & Tiện ích mở rộng',
    surface4Desc: 'Kết nối agent Antigravity vào các trình soạn thảo khác (VS Code, JetBrains, Zed) hoặc tự động hóa agent bằng Python SDK.',
    flowLabel: 'Quy trình một tác vụ:',
    flowStep1: '1. Nêu mục tiêu',
    flowStep2: '2. Duyệt bản kế hoạch',
    flowStep3: '3. Duyệt sửa file & chạy lệnh',
    flowStep4: '4. Kiểm tra trên trình duyệt',
    legendCore: 'Kiến Thức Cốt Lõi (Trục chính)',
    legendPractice: 'Thực Hành & Chủ Đề Nhánh',
    legendInProgress: 'Đang học',
    legendQuestion: 'Thông tin sai / Cần kiểm tra (0.5x)',
    legendCompleted: 'Đã hoàn thành (1x)',
    autoSaveNotice: 'Tiến độ tự động lưu trong trình duyệt của bạn.',
    showAllBtn: 'Hiện tất cả 18 mục',
    returnFullRoadmap: 'Quay lại Lộ trình đầy đủ',
    progressText: 'Hoàn thành {done} / {total} mục — {percent}%',
    progressSubtext: '{inProgress} Đang học · {question} ? Cần kiểm tra',
    filterBannerText: 'Đang hiện {matching} / {total} mục khớp bộ lọc "{label}".',
    filterLabelCodelab: 'Google Codelab',
    filterLabelHandbook: 'Hamodywe Handbook',
    filterLabelCompleted: 'Đã xong',
    filterLabelQuestion: '? Cần kiểm tra (0.5x)',
    emptyQuestionTitle: 'Chưa có mục nào được gắn dấu "?"!',
    emptyQuestionDesc: 'Bấm nút <strong>?</strong> trên bất kỳ ô nào (hoặc trong khung hướng dẫn) khi bạn thấy thông tin cũ/sai hoặc cần kiểm tra thêm. Mục này được tính 0.5 điểm tiến độ.',
    emptyCompletedTitle: 'Chưa có mục nào hoàn thành!',
    emptyCompletedDesc: 'Bấm vào một ô màu vàng hoặc tím trên sơ đồ rồi chọn <strong>Đã Xong</strong> để ghi nhận bước đầu tiên.',
    badgeDone: '✓ Đã xong',
    badgeCheck: '? Kiểm tra (0.5x)',
    badgeWorking: 'Đang học',
    badgeCore: 'Cốt lõi',
    badgePractice: 'Thực hành',
    openGuide: 'Xem Hướng Dẫn →',
    quickQuestionTitle: 'Đánh dấu ? (Thông tin sai / Cần kiểm tra — tính 0.5x)',
    sourceCodelab: 'Google Codelab',
    sourceBuildingCodelab: 'Codelab Xây Dựng',
    sourceHandbook: 'Hamodywe Handbook',
    stageBadge: 'Giai Đoạn {num}',
    sourcePrefix: 'Nguồn:',
    stage6Badge: 'Giai Đoạn 6: Làm Chủ Antigravity Tự Động',
    stage6TitleAllDone: 'Chúc mừng! Bạn Đã Hoàn Thành Cả 18 Chủ Đề Antigravity!',
    stage6TitleDefault: 'Đích Đến: Tự Tin Xây Dựng Với AI Agent',
    stage6QuestionNote: ' (gồm {count} mục gắn dấu ? tính 0.5 mỗi mục)',
    stage6Desc: 'Khi hoàn thành Giai đoạn 1 đến 5 ({score} / {total} mục — {percent}%{note}), bạn đã sẵn sàng điều phối Google Antigravity lập kế hoạch, viết code, kiểm tra giao diện trên trình duyệt và ghi nhớ quy tắc riêng cho mọi dự án.',
    stage6Step1: '1. Nhập Mục Tiêu',
    stage6Step2: '2. Duyệt Kế Hoạch',
    stage6Step3: '3. Duyệt Chỉnh Sửa',
    stage6Step4: '4. Kiểm Tra Trình Duyệt',
    drawerRefSource: 'Nguồn Tham Khảo',
    drawerPlainExplain: 'Giải Thích Dễ Hiểu',
    drawerShortcuts: 'Thao Tác Click & Phím Tắt Chuẩn',
    drawerTryIt: 'Bước Thực Hành Nhanh',
    drawerUpdateProgress: 'Cập Nhật Tiến Độ',
    btnMarkDone: 'Đã Xong',
    btnInProgress: 'Đang Học',
    btnCheckHalf: 'Kiểm Tra (0.5x)',
    btnReset: 'Đặt Lại',
    statusTip: 'Mẹo: <strong>? Kiểm tra (0.5x)</strong> dùng để đánh dấu thông tin sai/cũ hoặc bước cần kiểm chứng thêm và được tính nửa điểm (0.5) hoàn thành.',
    drawerNotesLabel: 'Ghi Chú Cá Nhân',
    notesSaved: 'Đã tự động lưu',
    notesPlaceholder: 'Ghi lại những gì bạn đã thử, câu hỏi cần kiểm chứng hoặc mẹo hay...',
    prevNodeBtn: '← Mục Trước',
    nextNodeBtn: 'Mục Tiếp Theo →',
    drawerTypeCore: 'Kiến Thức Cốt Lõi',
    drawerTypePractice: 'Bài Tập Thực Hành',
    statusDone: '✓ Hoàn thành (1x)',
    statusQuestion: '? Cần kiểm tra (0.5x)',
    statusInProgress: '◔ Đang học',
    statusNotStarted: 'Chưa bắt đầu',
    jargonTipPrefix: 'Mẹo Hiểu Thuật Ngữ:',
    toastDone: 'Đã đánh dấu Xong và lưu vào trình duyệt!',
    toastInProgress: 'Đã đánh dấu Đang học!',
    toastQuestion: 'Đã gắn dấu ? (tính 0.5 phần hoàn thành)!',
    toastReset: 'Đã đặt lại trạng thái mục này.',
    toastQuickCleared: 'Đã bỏ dấu ? ở mục {id}.',
    toastQuickFlagged: 'Đã gắn dấu ? ở mục {id} (tính 0.5 phần hoàn thành).',
    toastExported: 'Đã xuất tiến độ ra file antigravity-roadmap-progress.json!',
    toastInvalidBackup: 'Định dạng file sao lưu không hợp lệ.',
    toastRestored: 'Đã khôi phục dữ liệu sao lưu thành công!',
    toastJsonError: 'Không đọc được file JSON. Vui lòng chọn đúng file đã xuất.',
    toastLangSwitched: 'Đã chuyển ngôn ngữ sang Tiếng Việt.',
  },
};

const VI_CONTENT = {
  stages: {
    'stage-1': {
      title: 'Giai Đoạn 1: Cài Đặt & Kiến Trúc',
      subtitle: 'Cài đặt Antigravity, làm quen hai giao diện chính, kết nối thư mục dự án và bật khóa an toàn.',
      sourceSummary: 'Getting Started Codelab & Handbook',
    },
    'stage-2': {
      title: 'Giai Đoạn 2: Vòng Lặp Agentic 6 Bước',
      subtitle: 'Điều phối AI như một người quản lý dự án qua 6 bước: Khởi tạo, Lập kế hoạch, Thực thi, Kiểm chứng, Tài liệu và Hoàn tất.',
      sourceSummary: 'Hamodywe Handbook',
    },
    'stage-3': {
      title: 'Giai Đoạn 3: Artifact & Duyệt Thủ Công (Human-in-the-Loop)',
      subtitle: 'Làm chủ hoàn toàn bằng cách theo dõi danh sách việc, góp ý trực tiếp lên kế hoạch và soi thay đổi xanh/đỏ.',
      sourceSummary: 'Codelab & Handbook',
    },
    'stage-4': {
      title: 'Giai Đoạn 4: Trình Duyệt Tích Hợp & Tự Kiểm Chứng',
      subtitle: 'Để Antigravity tự mở website trong trình duyệt riêng, tự bấm thử các nút và gửi ảnh chụp chứng minh.',
      sourceSummary: 'Building with Antigravity Codelab & Handbook',
    },
    'stage-5': {
      title: 'Giai Đoạn 5: Tùy Biến — Rules, Workflows & Skills',
      subtitle: 'Dạy Antigravity nhớ quy tắc riêng, tạo lệnh gạch chéo tái sử dụng, gắn đúng file bằng @ và giữ ngữ cảnh sạch.',
      sourceSummary: 'Codelab & Built-Not-Hired Guide',
    },
  },
  nodes: {
    '1.1': {
      title: 'Cài Đặt & Hạn Mức Tài Khoản (Quota)',
      shortSummary: 'Cài Antigravity 2.0 + Antigravity IDE và đăng nhập bằng tài khoản Google.',
      explanation:
        'Google Antigravity gồm ứng dụng điều khiển desktop (Antigravity 2.0) và trình soạn thảo code tích hợp AI (Antigravity IDE). Đăng nhập bằng tài khoản Google cá nhân giúp mở khóa hạn mức Google AI Pro—tức lượng lượt suy nghĩ và viết code mỗi ngày của AI.',
      jargonTip:
        'Quota (hạn mức) đơn giản là số lượt yêu cầu AI bạn có trong ngày. Chọn đúng chế độ và model sẽ giúp hạn mức dùng được lâu hơn.',
      shortcuts: [
        'Mở ứng dụng Antigravity hoặc IDE và bấm <strong>Sign in with Google</strong> (Đăng nhập với Google).',
        'Hoàn tất đăng nhập trên trình duyệt để tài khoản và hạn mức tự động kết nối.',
        'Cách mở nhanh qua Terminal (tùy chọn): mở cửa sổ lệnh và gõ <code>agy</code> để khởi động trợ lý dòng lệnh.',
      ],
      tryIt:
        'Kiểm tra xem ảnh đại diện hoặc tên tài khoản Google của bạn đã hiện ở góc dưới hoặc mục Settings trước khi bắt đầu dự án đầu tiên.',
    },
    '1.2': {
      title: 'Hai Giao Diện (Antigravity 2.0 và IDE)',
      shortSummary: 'Agent Manager vs. Editor View — và vì sao Ctrl + E / Ctrl + L khác nhau trên agy 2.0.',
      explanation:
        'Các tài liệu Codelab cũ nhắc đến phím Ctrl + E (Agent Manager) và Ctrl + L (Chat) vì bản Antigravity 1.x gộp cả hai trong một cửa sổ editor. Ở Antigravity 2.0 (app desktop độc lập), toàn bộ cửa sổ chính LÀ Agent Manager & khung Chat rồi nên Ctrl + E và Ctrl + L không hoạt động ở đó. Trong khi đó, Antigravity IDE là cửa sổ viết code riêng để chỉnh sửa file trực tiếp.',
      jargonTip:
        'Vì sao phím tắt đôi khi không chạy: Antigravity 2.0 (app desktop) và Antigravity IDE (trình soạn thảo kiểu VS Code) là hai ứng dụng khác nhau, hoặc phím tắt Windows/tiện ích mở rộng có thể ghi đè.',
      shortcuts: [
        '<strong>Trên Antigravity 2.0 (App Desktop):</strong> Dùng <strong>Thanh bên trái</strong> (<em>New Conversation, Projects, Settings</em>) và các <strong>tab bảng phụ bên phải</strong> (<em>Artifacts, Files Changed, Terminals, Subagents</em>)—<code>Ctrl + E</code> / <code>Ctrl + L</code> không dùng ở đây.',
        '<strong>Trên Antigravity IDE (Trình sửa code):</strong> Mở sửa nhanh tại chỗ bằng <kbd>Ctrl</kbd> + <kbd>I</kbd> (Mac: <kbd>Cmd</kbd> + <kbd>I</kbd>), bật/tắt khung chat bằng <kbd>Ctrl</kbd> + <kbd>L</kbd> (hoặc <kbd>Ctrl</kbd> + <kbd>E</kbd> ở bản 1.x), và mở Command Palette bằng <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>P</kbd>.',
        '<strong>Kiểm tra hoặc đổi phím tắt trong IDE:</strong> Bấm <kbd>Ctrl</kbd> + <kbd>K</kbd> rồi <kbd>Ctrl</kbd> + <kbd>S</kbd> (hoặc vào <strong>Settings &rarr; Keyboard Shortcuts</strong>) để xem và chỉnh sửa file <code>keybindings.json</code>.',
      ],
      tryIt:
        'Kiểm tra xem bạn đang mở app nào: ở Antigravity 2.0, hãy bấm thử các tab bên phải; ở Antigravity IDE, bôi đen một dòng code rồi bấm Ctrl + I hoặc mở Settings > Keyboard Shortcuts.',
    },
    '1.3': {
      title: 'Workspace & Dự Án (Projects)',
      shortSummary: 'Tạo một thư mục trên máy tính và liên kết vào mục Projects.',
      explanation:
        'Workspace (hay Project) thực chất chỉ là một thư mục bình thường trên máy tính nơi chứa toàn bộ file website hoặc ứng dụng của bạn. Việc liên kết thư mục giúp Antigravity biết chính xác phạm vi được phép đọc, tạo và sửa file an toàn.',
      jargonTip:
        'Workspace Root là thư mục gốc ngoài cùng của dự án. Mặc định Antigravity khóa quyền chỉnh sửa bên trong thư mục này để các file cá nhân khác trên máy không bị đụng tới.',
      shortcuts: [
        'Ở thanh bên trái, bấm <strong>Projects</strong> &rarr; <strong>Create New Project</strong>.',
        'Hoặc trong Editor View, mở thư mục qua <strong>File &gt; Open Folder...</strong> (<kbd>Ctrl</kbd> + <kbd>K</kbd>, sau đó <kbd>Ctrl</kbd> + <kbd>O</kbd>).',
      ],
      tryIt:
        'Tạo một thư mục trống trên máy tính (ví dụ "my-first-site") rồi mở nó trong Projects để AI có chỗ làm việc an toàn.',
    },
    '1.4': {
      title: 'Khóa An Toàn & Quyền Thực Thi',
      shortSummary: 'Chọn Request Review (Hỏi trước khi chạy) hoặc Autopilot cho kế hoạch và lệnh Terminal.',
      explanation:
        'Trước khi cho phép AI chạy lệnh trên máy tính, bạn là người quyết định mức độ giám sát. Chế độ Request Review sẽ dừng lại chờ bạn bấm duyệt trước khi chạy lệnh hoặc sửa code. Chế độ Autopilot cho phép AI tự chạy bên trong vùng an toàn Sandbox.',
      jargonTip:
        'Sandbox là một "vùng cách ly" bảo vệ cho Terminal—cho phép AI chạy thử lệnh kiểm tra dự án mà không làm hỏng hệ thống hay thư mục khác.',
      shortcuts: [
        'Mở cài đặt từ thanh bên trái &rarr; <strong>Settings</strong> (hoặc bấm <kbd>Ctrl</kbd> + <kbd>,</kbd>).',
        'Đặt <strong>Artifact Review Policy</strong> thành <code>Request Review</code> khi đang học.',
        'Đặt <strong>Terminal Execution Policy</strong> thành <code>Request Review</code> hoặc <code>Proceed in Sandbox</code> (tránh tự động hoàn toàn khi chưa quen).',
      ],
      tryIt:
        'Mở Settings ngay bây giờ và kiểm tra xem Request Review đang bật chưa để AI luôn hỏi ý kiến trước khi chạy lệnh.',
    },
    '2.1': {
      title: 'Khởi Tạo & Viết Prompt Mục Tiêu',
      shortSummary: 'Viết yêu cầu theo mục tiêu rõ ràng thay vì tự gõ từng dòng code.',
      explanation:
        'Tài liệu Hamodywe Handbook hướng dẫn vòng lặp 6 bước: Khởi tạo, Lập kế hoạch, Thực thi, Kiểm chứng, Tài liệu và Hoàn tất. Ở Bước 1 (Khởi tạo), bạn mô tả mục tiêu cuối cùng bằng tiếng Việt hoặc tiếng Anh tự nhiên—trang cần trông ra sao, làm được gì và kiểm tra thế nào—thay vì lo từng dòng cú pháp.',
      jargonTip:
        'Prompting đơn giản là viết yêu cầu vào ô chat. Mục tiêu rõ ràng ("tạo nút chế độ tối và lưu lại trong trình duyệt") luôn hiệu quả hơn câu hỏi chung chung.',
      shortcuts: [
        'Bấm vào <strong>Ô nhập Chat chính</strong> (đã mở sẵn trên màn hình chính ở Antigravity 2.0; trong IDE bấm <kbd>Ctrl</kbd> + <kbd>L</kbd>).',
        'Viết 1–3 câu rõ ràng mô tả sản phẩm mong muốn và tiêu chí hoàn thành, rồi nhấn <kbd>Enter</kbd>.',
      ],
      tryIt:
        'Thử viết một câu yêu cầu gồm 3 phần: cần tạo tính năng gì, giao diện trông thế nào, và cách kiểm tra xem nó có chạy đúng không.',
    },
    '2.2': {
      title: 'Hai Chế Độ Vận Hành (Planning vs. Fast)',
      shortSummary: 'Chọn Planning Mode (lập bản vẽ trước) hay Fast Mode (sửa nhỏ ngay lập tức).',
      explanation:
        'Planning Mode yêu cầu agent dừng lại đọc dự án và viết bản kế hoạch để bạn duyệt trước khi chạm vào file—rất hợp cho tính năng mới hoặc sửa nhiều file. Fast Mode bỏ qua bước lập kế hoạch và sửa ngay lập tức—phù hợp khi sửa lỗi chính tả hoặc đổi màu một nút.',
      jargonTip:
        'Hãy hình dung Planning Mode giống như yêu cầu kiến trúc sư vẽ bản thiết kế nhà trước, còn Fast Mode giống như nhờ thợ sơn lại một bức tường.',
      shortcuts: [
        'Nhìn thanh công cụ dưới <strong>Ô nhập Chat</strong> và bấm vào nút <strong>Chọn Chế Độ</strong> (<code>Planning</code> hoặc <code>Fast</code>).',
        'Bạn cũng có thể gõ <code>/plan</code> trong khung chat bất cứ lúc nào muốn agent phác thảo kế hoạch trước.',
      ],
      tryIt:
        'Thử chuyển qua lại giữa Planning và Fast ở thanh chat để quen chọn Planning cho việc lớn và Fast cho chỉnh sửa nhanh.',
    },
    '2.3': {
      title: 'Chọn Model & Orchestrator (Argon)',
      shortSummary: 'Chọn Orchestrator (Argon) để Kiến trúc sư lập kế hoạch và Thợ xây (Hydrogen) viết code.',
      explanation:
        'Chọn Orchestrator (Argon) sẽ tự động kết hợp hai bộ não AI: một model "Kiến trúc sư" suy nghĩ kỹ lưỡng để thiết kế kế hoạch và lường rủi ro, sau đó giao cho model "Thợ xây" tốc độ cao (Hydrogen) viết code nhanh gọn. Cách này cho chất lượng cao hơn mà vẫn tiết kiệm hạn mức.',
      jargonTip:
        'Orchestrator nghĩa là model điều phối trung tâm—lo việc vạch chiến lược rồi phân việc gõ code nặng cho model phụ nhanh hơn.',
      shortcuts: [
        'Ở phía dưới <strong>Ô nhập Chat</strong>, bấm vào menu <strong>Chọn Model</strong>.',
        'Chọn <strong>Orchestrator (Argon)</strong> (cũng có thể chỉnh tại <strong>Settings &gt; Model Selection</strong>).',
      ],
      tryIt:
        'Kiểm tra menu chọn Model hiện tại và chuyển sang Orchestrator (Argon) trước khi bắt đầu một tính năng nhiều bước.',
    },
    '2.4': {
      title: 'Thực Thi & Theo Dõi Log Terminal',
      shortSummary: 'Quan sát chỉnh sửa file theo thời gian thực và duyệt lệnh Terminal an toàn.',
      explanation:
        'Ở Bước 3 (Thực thi), agent sẽ tạo file và chạy các lệnh trong Terminal (ví dụ bật một máy chủ web cục bộ để bạn xem thử trang web). Từng bước đều hiện nhật ký trực tiếp và dừng xin phép khi cần chạy lệnh quan trọng.',
      jargonTip:
        'Terminal là cửa sổ dòng lệnh chạy ngầm cho các công cụ—ví dụ như bật một server nhỏ trên máy tính để mở trang web của bạn.',
      shortcuts: [
        'Mở <strong>Bảng Phụ Bên Phải (Auxiliary Pane)</strong> &rarr; chọn tab <strong>Terminals</strong> hoặc <strong>Background Tasks</strong>.',
        'Khi một thẻ lệnh hiện nút xin phép, đọc tóm tắt lệnh rồi bấm <strong>Approve / Run</strong> (hoặc <strong>Deny</strong> nếu chưa chắc chắn).',
      ],
      tryIt:
        'Quan sát các bước hiển thị trong chat khi AI chỉnh file, sau đó mở tab Terminals để xem chính xác các lệnh nó đã chạy.',
    },
    '3.1': {
      title: 'Artifact Danh Sách Công Việc (Task List)',
      shortSummary: 'Theo dõi các ô tick cập nhật trực tiếp khi AI chia nhỏ mục tiêu lớn.',
      explanation:
        'Artifact là một tài liệu dễ đọc do AI tạo ra để mọi việc không bị mù mờ. Task List (task.md) chia mục tiêu lớn của bạn thành từng bước nhỏ đánh số rõ ràng và tự động tick hoàn thành theo thời gian thực.',
      jargonTip:
        'Human-in-the-Loop nghĩa là con người luôn nắm quyền kiểm soát—bạn nhìn thấy từng bước và phê duyệt các mốc quan trọng thay vì phó mặc hoàn toàn.',
      shortcuts: [
        'Trong <strong>Bảng Phụ Bên Phải</strong>, bấm tab <strong>Artifacts</strong> &rarr; mở file <code>task.md</code>.',
        'Hoặc bấm trực tiếp vào thẻ <strong>Task List</strong> ngay trong luồng chat.',
      ],
      tryIt:
        'Yêu cầu agent lập kế hoạch một thay đổi gồm 3 bước và xem file task.md chuyển trạng thái từng ô từ [ ] sang [/] rồi [x].',
    },
    '3.2': {
      title: 'Kế Hoạch Thực Hiện & Bình Luận Trực Tiếp',
      shortSummary: 'Bôi đen văn bản trong implementation_plan.md để góp ý kiểu Google Docs trước khi chạy.',
      explanation:
        'Trước khi sửa file ở chế độ Planning Mode, agent sẽ viết file implementation_plan.md mô tả nó định làm gì. Giống hệt bình luận trên Google Docs, bạn có thể bôi đen bất kỳ câu nào, ghi góp ý (ví dụ: "Đổi nút màu đỏ sang xanh dịu") để nắn hướng agent trước khi nó viết code.',
      jargonTip:
        'Markdown (.md) chỉ là định dạng văn bản thuần sử dụng các ký hiệu đơn giản như # cho tiêu đề và * cho gạch đầu dòng.',
      shortcuts: [
        'Bấm vào thẻ <code>implementation_plan.md</code> trong khung chat hoặc mục <strong>Artifacts</strong>.',
        'Kéo chuột bôi đen một dòng &rarr; bấm nút <strong>Add Comment</strong> hiện lên &rarr; nhập yêu cầu chỉnh sửa.',
        'Bấm <strong>Proceed</strong> khi bạn đã ưng ý với kế hoạch.',
      ],
      tryIt:
        'Lần tới khi thấy Implementation Plan, hãy thử bôi đen một gạch đầu dòng và thêm một bình luận góp ý trước khi bấm Proceed.',
    },
    '3.3': {
      title: 'Soi Thay Đổi Code (Code Diffs Xanh/Đỏ)',
      shortSummary: 'Kiểm tra dòng bị xóa (đỏ) và dòng thêm mới (xanh) trước khi bấm Accept.',
      explanation:
        'Code Diff (viết tắt của "difference" — sự khác biệt) đặt phiên bản cũ và mới cạnh nhau hoặc lồng vào nhau. Những dòng tô màu đỏ là phần bị xóa, còn màu xanh lá là phần được thêm mới—giúp bạn kiểm tra kỹ mọi chỉnh sửa trước khi giữ lại.',
      jargonTip:
        'Diff đơn giản nghĩa là "điểm khác biệt"—chỉ tô màu những dòng có thay đổi để bạn không phải đọc lại toàn bộ file từ đầu đến cuối.',
      shortcuts: [
        'Mở <strong>Bảng Phụ Bên Phải</strong> &rarr; bấm tab <strong>Files Changed</strong> &rarr; chọn tên file bất kỳ.',
        'Xem các dòng xanh/đỏ rồi bấm <strong>Accept</strong> (giữ lại) hoặc <strong>Reject</strong> (hoàn tác) trên thanh duyệt.',
      ],
      tryIt:
        'Sau khi AI sửa xong một file, hãy bấm mở file đó trong mục Files Changed để quan sát các dòng thêm (+) màu xanh và xóa (-) màu đỏ.',
    },
    '3.4': {
      title: 'Artifact Tổng Kết (Walkthrough)',
      shortSummary: 'Đọc báo cáo tóm tắt cuối cùng được tạo sau khi hoàn thành tác vụ.',
      explanation:
        'Sau khi agent hoàn tất việc viết code và chạy thử, nó sẽ tạo bản báo cáo cuối cùng tên là walkthrough.md. Tài liệu này tóm tắt những gì đã thay đổi, liệt kê các file đã sửa và đính kèm kết quả kiểm tra hoặc ảnh chụp màn hình chứng minh mọi thứ chạy tốt.',
      jargonTip:
        'Hãy coi Walkthrough như biên bản bàn giao cuối cùng của AI để báo cáo kết quả và bằng chứng kiểm thử cho bạn.',
      shortcuts: [
        'Bấm thẻ <strong>Walkthrough</strong> ở cuối câu trả lời hoàn tất, hoặc mở <strong>Artifacts &gt; walkthrough.md</strong>.',
      ],
      tryIt:
        'Đọc thẻ Walkthrough sau mỗi lần AI xây xong tính năng để chắc chắn mọi yêu cầu của bạn đều đã được kiểm tra.',
    },
    '4.1': {
      title: 'Agent Trình Duyệt (Browser Subagent)',
      shortSummary: 'Antigravity tự mở một trình duyệt Chrome tách biệt để bấm thử và kiểm tra ứng dụng web.',
      explanation:
        'Thay vì bắt bạn tự bấm từng nút để tìm lỗi, Antigravity gọi một trợ lý chuyên biệt gọi là Browser Subagent. Nó tự mở một cửa sổ Chrome sạch và tách biệt, truy cập trang web, bấm các nút, nhập form và tự kiểm tra lỗi giao diện lẫn lỗi chạy script.',
      jargonTip:
        'Subagent là một trợ lý nhỏ được agent chính gọi ra để lo một việc chuyên biệt—ở đây là đóng vai người dùng thật để kiểm thử trang web.',
      shortcuts: [
        'Gõ <code>/browser</code> trong chat hoặc nhắn: <em>"Mở trang web trong trình duyệt tích hợp và bấm thử các nút."</em>',
        'Theo dõi hoạt động trực tiếp tại <strong>Bảng Phụ Bên Phải &gt; Subagents</strong>.',
      ],
      tryIt:
        'Yêu cầu Antigravity mở website của bạn trong trình duyệt tích hợp và kiểm tra xem các nút bấm cùng việc tải lại trang có hoạt động đúng không.',
    },
    '4.2': {
      title: 'Bằng Chứng Kiểm Chứng Trực Quan',
      shortSummary: 'Xem ảnh chụp màn hình và video ghi lại quá trình trình duyệt bấm thử nút và biểu mẫu.',
      explanation:
        'Trong lúc kiểm thử trang web, Browser Subagent sẽ tự động chụp ảnh màn hình và quay lại thao tác thực tế. Các hình ảnh này được gắn trực tiếp vào khung chat và báo cáo Walkthrough để bạn tận mắt kiểm chứng bố cục hiển thị.',
      jargonTip:
        'Visual Verification (kiểm chứng trực quan) nghĩa là chứng minh website chạy đúng bằng ảnh chụp thực tế từ trình duyệt chứ không chỉ đoán qua code.',
      shortcuts: [
        'Mở <strong>Bảng Phụ Bên Phải &gt; Subagents</strong> hoặc <strong>Artifacts &gt; walkthrough.md</strong>.',
        'Bấm vào ảnh chụp màn hình đính kèm để phóng to và kiểm tra toàn bộ giao diện trình duyệt.',
      ],
      tryIt:
        'Xem các ảnh chụp sinh ra ở cuối lượt kiểm thử trình duyệt để soi màu nút, khoảng cách và bố cục hiển thị.',
    },
    '5.1': {
      title: 'Quy Tắc Dự Án (.agents/rules/)',
      shortSummary: 'Tạo các quy tắc cố định cho dự án (ví dụ: "Luôn giải thích bằng ngôn ngữ dễ hiểu cho người mới").',
      explanation:
        'Workspace Rules là các file hướng dẫn cố định nằm trong thư mục .agents/rules/ của dự án (giống như file beginner-guide.md ngay trong dự án này!). Antigravity tự động đọc các quy tắc này trước mỗi lần trả lời nên bạn không bao giờ phải nhắc lại sở thích của mình.',
      jargonTip:
        'Hãy coi Rules như những tờ giấy ghi chú dán ngay trên bàn làm việc của AI—nó luôn đọc trước khi viết code hay trả lời bạn.',
      shortcuts: [
        'Thanh bên trái &rarr; bấm <strong>Skills &amp; Customizations &gt; Rules</strong>.',
        'Hoặc tự tạo bất kỳ file <code>.md</code> nào bên trong thư mục <code>.agents/rules/</code> của dự án.',
      ],
      tryIt:
        'Mở file .agents/rules/beginner-guide.md trong dự án này để xem cách viết một bộ quy tắc thân thiện cho người mới.',
    },
    '5.2': {
      title: 'Lệnh Quy Trình Gạch Chéo (.agents/workflows/)',
      shortSummary: 'Lưu các chuỗi hướng dẫn lặp đi lặp lại để gọi nhanh bằng lệnh bắt đầu bằng dấu /.',
      explanation:
        'Khi thấy mình cứ phải nhờ AI làm đi làm lại cùng một danh sách việc (như "kiểm tra link, chạy test và viết tóm tắt"), bạn có thể lưu các bước đó thành file Markdown trong .agents/workflows/ (hoặc tạo Skill) để kích hoạt toàn bộ quy trình chỉ bằng một lệnh gạch chéo.',
      jargonTip:
        'Slash Command (lệnh gạch chéo) là phím tắt bắt đầu bằng dấu / (như /plan hoặc /browser) giúp gọi cả một quy trình đã lưu chỉ trong một lần gõ.',
      shortcuts: [
        'Lưu file hướng dẫn vào <code>.agents/workflows/ten-lenh.md</code> (hoặc tạo Skill tại <code>.agents/skills/</code>).',
        'Trong <strong>Ô nhập Chat</strong>, gõ <code>/</code> để mở danh sách gợi ý và chọn lệnh bạn đã lưu.',
      ],
      tryIt:
        'Gõ dấu / trong ô chat để xem các lệnh có sẵn như /plan, /browser và /learn.',
    },
    '5.3': {
      title: 'Gắn File Bằng @ & Làm Mới Ngữ Cảnh',
      shortSummary: 'Chỉ đích danh file bằng @tenfile và bấm + New Chat giữa các tính năng để tránh loãng ngữ cảnh.',
      explanation:
        'Gõ @ kèm tên file sẽ trỏ thẳng AI đến đúng file bạn muốn sửa để không lãng phí hạn mức đi tìm lòng vòng. Còn bấm + New Chat mỗi khi chuyển sang tính năng mới sẽ dọn sạch mẩu hội thoại cũ ("context rot") giúp AI luôn tỉnh táo và chính xác.',
      jargonTip:
        'Context Rot (loãng ngữ cảnh) xảy ra khi một đoạn chat quá dài và chứa đầy ý tưởng cũ bỏ đi, làm AI chậm hoặc nhầm lẫn—mở New Chat giống như dọn sạch bàn làm việc.',
      shortcuts: [
        'Trỏ đúng một file cụ thể: gõ <code>@</code> trong <strong>Ô nhập Chat</strong> &rarr; chọn file (như <code>@ROADMAP_SPEC.md</code>).',
        'Mở hội thoại mới giữa các nhiệm vụ tách biệt: Thanh bên trái &rarr; bấm <strong>+ New Conversation</strong> (hoặc nhấn <kbd>Ctrl</kbd> + <kbd>N</kbd>).',
      ],
      tryIt:
        'Lần tới khi làm xong một tính năng, hãy bấm + New Conversation rồi đính kèm đúng file cần dùng tiếp theo bằng @tenfile.',
    },
    '5.4': {
      title: 'Kho Kiến Thức Lưu Trữ Dài Hạn (Knowledge)',
      shortSummary: 'Lưu lại cấu trúc và bài học dự án qua nhiều phiên để các đoạn chat sau tự nhớ.',
      explanation:
        'Ngay cả khi bạn mở chat mới để giữ bàn làm việc gọn gàng, Antigravity vẫn có thể lưu những kinh nghiệm thiết lập, mẹo hay và quy ước dự án vào thư mục Knowledge cục bộ. Các cuộc trò chuyện sau đó có thể tận dụng lại trí nhớ dài hạn này.',
      jargonTip:
        'Persistent (bền vững) đơn giản nghĩa là "còn giữ lại sau khi đóng"—khác với trí nhớ tạm trong một tab chat, Knowledge Items được lưu hẳn trên ổ đĩa.',
      shortcuts: [
        'Gõ <code>/learn</code> trong khung chat sau khi giải quyết xong một cấu hình khó để Antigravity ghi nhớ cho lần sau.',
        'Xem lại các mẫu kiến thức đã lưu tại <code>.antigravity/knowledge/</code> hoặc trong <strong>Thanh bên trái &gt; Skills &amp; Customizations</strong>.',
      ],
      tryIt:
        'Sau khi hoàn thành một tùy biến khó, thử gõ /learn trong chat để biến bài học đó thành quy tắc tái sử dụng.',
    },
  },
};

/* Helper to read saved language ('en' or 'vi') */
let currentLang = localStorage.getItem(LANG_KEY) === 'vi' ? 'vi' : 'en';

/* Look up a UI string and replace any {placeholder} tokens */
function t(key, vars = {}) {
  const dict = I18N_UI[currentLang] || I18N_UI.en;
  let text = dict[key] !== undefined ? dict[key] : (I18N_UI.en[key] || key);
  Object.keys(vars).forEach((varKey) => {
    text = text.replace(new RegExp(`\\{${varKey}\\}`, 'g'), String(vars[varKey]));
  });
  return text;
}

/* Return translated stage metadata (falling back cleanly to English) */
function getStageText(stage) {
  if (currentLang === 'vi' && VI_CONTENT.stages[stage.id]) {
    return {
      ...stage,
      ...VI_CONTENT.stages[stage.id],
    };
  }
  return stage;
}

/* Return translated node data (falling back cleanly to English) */
function getNodeText(node) {
  if (currentLang === 'vi' && VI_CONTENT.nodes[node.id]) {
    return {
      ...node,
      ...VI_CONTENT.nodes[node.id],
    };
  }
  return node;
}

/* Translate a source link badge label cleanly */
function translateSourceLabel(label) {
  if (label === 'Google Codelab') return t('sourceCodelab');
  if (label === 'Building Codelab') return t('sourceBuildingCodelab');
  if (label === 'Hamodywe Handbook') return t('sourceHandbook');
  return label;
}

/* Flatten all 18 nodes in display order so Next/Previous drawer buttons work smoothly */
const ALL_NODES = [];
const NODE_MAP = {};

ROADMAP_STAGES.forEach((stage) => {
  stage.rows.forEach((row) => {
    const rowNodes = [row.core, row.leftBranch, row.rightBranch].filter(Boolean);
    /* Sort row nodes by their numeric ID (1.1, 1.2, 1.3...) for clean reading order */
    rowNodes.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
    rowNodes.forEach((node) => {
      ALL_NODES.push(node);
      NODE_MAP[node.id] = node;
    });
  });
});

/* Load saved node statuses and notes from browser localStorage */
function loadSavedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { statuses: {}, notes: {} };
    }
    const parsed = JSON.parse(raw);
    return {
      statuses: parsed && typeof parsed.statuses === 'object' ? parsed.statuses : {},
      notes: parsed && typeof parsed.notes === 'object' ? parsed.notes : {},
    };
  } catch (err) {
    console.warn('Could not read saved roadmap state from localStorage:', err);
    return { statuses: {}, notes: {} };
  }
}

/* Save current node statuses and notes back into browser localStorage */
function persistState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
  } catch (err) {
    console.warn('Could not save roadmap state to localStorage:', err);
  }
}

let appState = loadSavedState();
let activeFilter = 'all'; // Options: 'all' | 'codelab' | 'handbook' | 'completed' | 'question'
let activeNodeId = null;

/* Helper to read a node's current status ('todo' | 'in-progress' | 'question' | 'done') */
function getNodeStatus(nodeId) {
  return appState.statuses[nodeId] || 'todo';
}

/* Format half-step scores cleanly (e.g., 1.5 stays "1.5", 2.0 becomes "2") */
function formatScore(value) {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

/* Check whether a node matches the currently selected filter pill */
function nodeMatchesFilter(node) {
  if (activeFilter === 'all') return true;
  if (activeFilter === 'codelab') return node.sources.includes('codelab');
  if (activeFilter === 'handbook') return node.sources.includes('handbook');
  if (activeFilter === 'completed') return getNodeStatus(node.id) === 'done';
  if (activeFilter === 'question') return getNodeStatus(node.id) === 'question';
  return true;
}

/* --------------------------------------------------------------------------
   SECTION 3: DOM ELEMENT REFERENCES
   "DOM" stands for Document Object Model — the browser's live map of all
   buttons, boxes, and text visible on this HTML page.
   -------------------------------------------------------------------------- */
const headerCompactView = document.getElementById('header-compact-view');
const headerFullView = document.getElementById('header-full-view');
const headerCollapseBtn = document.getElementById('header-collapse-btn');
const headerExpandBtn = document.getElementById('header-expand-btn');
const compactProgressText = document.getElementById('compact-progress-text');
const compactProgressBarFill = document.getElementById('compact-progress-bar-fill');

const overviewToggleBtn = document.getElementById('overview-toggle-btn');
const overviewToggleLabel = document.getElementById('overview-toggle-label');
const overviewBody = document.getElementById('overview-body');

const roadmapContainer = document.getElementById('roadmap-container');
const progressText = document.getElementById('progress-text');
const inProgressCountEl = document.getElementById('in-progress-count');
const progressBarFill = document.getElementById('progress-bar-fill');

const countAllEl = document.getElementById('count-all');
const countCodelabEl = document.getElementById('count-codelab');
const countHandbookEl = document.getElementById('count-handbook');
const countCompletedEl = document.getElementById('count-completed');
const countQuestionEl = document.getElementById('count-question');

const filterButtons = document.querySelectorAll('.filter-btn');
const filterBanner = document.getElementById('filter-banner');
const filterBannerText = document.getElementById('filter-banner-text');
const clearFilterBtn = document.getElementById('clear-filter-btn');
const emptyFilterState = document.getElementById('empty-filter-state');
const emptyFilterTitle = document.getElementById('empty-filter-title');
const emptyFilterDesc = document.getElementById('empty-filter-desc');
const emptyResetFilterBtn = document.getElementById('empty-reset-filter-btn');

const langToggleBtn = document.getElementById('lang-toggle-btn');
const langToggleLabel = document.getElementById('lang-toggle-label');
const compactLangToggleBtn = document.getElementById('compact-lang-toggle-btn');
const compactLangLabel = document.getElementById('compact-lang-label');

const themeToggleBtn = document.getElementById('theme-toggle');
const themeIconSun = document.getElementById('theme-icon-sun');
const themeIconMoon = document.getElementById('theme-icon-moon');
const themeLabel = document.getElementById('theme-label');

const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFileInput = document.getElementById('import-file-input');
const toastBanner = document.getElementById('toast-banner');

/* Drawer elements */
const drawerBackdrop = document.getElementById('drawer-backdrop');
const nodeDrawer = document.getElementById('node-drawer');
const drawerCloseBtn = document.getElementById('drawer-close-btn');
const drawerNodeId = document.getElementById('drawer-node-id');
const drawerTypeBadge = document.getElementById('drawer-type-badge');
const drawerStatusPill = document.getElementById('drawer-status-pill');
const drawerTitle = document.getElementById('drawer-title');
const drawerStageLabel = document.getElementById('drawer-stage-label');
const drawerSources = document.getElementById('drawer-sources');
const drawerExplanation = document.getElementById('drawer-explanation');
const drawerJargonTip = document.getElementById('drawer-jargon-tip');
const drawerShortcutSteps = document.getElementById('drawer-shortcut-steps');
const drawerTryIt = document.getElementById('drawer-try-it');
const btnMarkDone = document.getElementById('btn-mark-done');
const btnMarkProgress = document.getElementById('btn-mark-progress');
const btnMarkQuestion = document.getElementById('btn-mark-question');
const btnMarkReset = document.getElementById('btn-mark-reset');
const drawerNotes = document.getElementById('drawer-notes');
const notesSaveStatus = document.getElementById('notes-save-status');
const drawerPrevBtn = document.getElementById('drawer-prev-btn');
const drawerNextBtn = document.getElementById('drawer-next-btn');

/* --------------------------------------------------------------------------
   SECTION 4: THEME (LIGHT / DARK MODE) & AUTO-MINIMIZING TOP BAR
   Applies dark mode and minimizes the header smoothly when scrolling down.
   -------------------------------------------------------------------------- */
let isHeaderMinimized = false;
let manualHeaderMode = null; // null | 'minimized' | 'expanded'
let headerToggleCooldownUntil = 0;

function setHeaderMinimized(minimized) {
  isHeaderMinimized = minimized;
  headerFullView.classList.toggle('hidden', minimized);
  headerCompactView.classList.toggle('hidden', !minimized);
  headerToggleCooldownUntil = Date.now() + 260;
}

headerCollapseBtn.addEventListener('click', () => {
  manualHeaderMode = 'minimized';
  setHeaderMinimized(true);
});

headerExpandBtn.addEventListener('click', () => {
  manualHeaderMode = window.scrollY > 110 ? 'expanded' : null;
  setHeaderMinimized(false);
});

window.addEventListener(
  'scroll',
  () => {
    if (Date.now() < headerToggleCooldownUntil) return;
    const y = window.scrollY;
    const scrollableDistance = document.documentElement.scrollHeight - window.innerHeight;

    if (y < 20) {
      if (manualHeaderMode === 'expanded') manualHeaderMode = null;
      if (manualHeaderMode !== 'minimized' && isHeaderMinimized) {
        setHeaderMinimized(false);
      }
    } else if (y > 120 && scrollableDistance > 260) {
      if (manualHeaderMode !== 'expanded' && !isHeaderMinimized) {
        setHeaderMinimized(true);
      }
    }
  },
  { passive: true }
);

function applyTheme(theme) {
  const isDark = theme === 'dark';
  document.documentElement.classList.toggle('dark', isDark);
  themeIconSun.classList.toggle('hidden', !isDark);
  themeIconMoon.classList.toggle('hidden', isDark);
  themeLabel.textContent = isDark ? t('lightMode') : t('darkMode');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    applyTheme(savedTheme);
  } else {
    applyTheme('light');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const currentlyDark = document.documentElement.classList.contains('dark');
  applyTheme(currentlyDark ? 'light' : 'dark');
});

/* --------------------------------------------------------------------------
   SECTION 5: TOAST POPUP & PROGRESS BAR UPDATES
   Shows quick confirmations and counts Done = 1.0 and ? Need Check = 0.5.
   -------------------------------------------------------------------------- */
let toastTimeout = null;

function showToast(message) {
  toastBanner.textContent = message;
  toastBanner.classList.remove('opacity-0');
  toastBanner.classList.add('opacity-100');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastBanner.classList.remove('opacity-100');
    toastBanner.classList.add('opacity-0');
  }, 2600);
}

function updateStatsAndFilters() {
  const total = ALL_NODES.length;
  let doneCount = 0;
  let inProgressCount = 0;
  let questionCount = 0;
  let codelabCount = 0;
  let handbookCount = 0;

  ALL_NODES.forEach((node) => {
    const status = getNodeStatus(node.id);
    if (status === 'done') doneCount += 1;
    if (status === 'in-progress') inProgressCount += 1;
    if (status === 'question') questionCount += 1;
    if (node.sources.includes('codelab')) codelabCount += 1;
    if (node.sources.includes('handbook')) handbookCount += 1;
  });

  /* Done counts as 1 full step; "?" (False Info / Need Check) counts as 0.5 (half) step */
  const effectiveDone = doneCount + questionCount * 0.5;
  const formattedDone = formatScore(effectiveDone);
  const percent = total > 0 ? Math.round((effectiveDone / total) * 100) : 0;

  /* Update both the full header meter and the minimized compact bar meter */
  progressText.textContent = t('progressText', {
    done: formattedDone,
    total,
    percent,
  });
  inProgressCountEl.textContent = t('progressSubtext', {
    inProgress: inProgressCount,
    question: questionCount,
  });
  progressBarFill.style.width = `${percent}%`;
  compactProgressText.textContent = `${formattedDone} / ${total} (${percent}%)`;
  compactProgressBarFill.style.width = `${percent}%`;

  /* Update filter chip counters */
  countAllEl.textContent = String(total);
  countCodelabEl.textContent = String(codelabCount);
  countHandbookEl.textContent = String(handbookCount);
  countCompletedEl.textContent = String(doneCount);
  countQuestionEl.textContent = String(questionCount);

  /* Highlight active filter button */
  filterButtons.forEach((btn) => {
    const isActive = btn.dataset.filter === activeFilter;
    if (isActive) {
      btn.className =
        'filter-btn px-2.5 py-1 text-xs font-bold rounded-md border-2 border-slate-900 dark:border-amber-300 bg-slate-900 dark:bg-amber-300 text-white dark:text-slate-900 transition cursor-pointer';
    } else {
      btn.className =
        'filter-btn px-2.5 py-1 text-xs font-bold rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition cursor-pointer';
    }
  });

  /* Show or hide the active filter notice banner */
  const matchingCount = ALL_NODES.filter(nodeMatchesFilter).length;
  if (activeFilter === 'all') {
    filterBanner.classList.add('hidden');
  } else {
    const labelMap = {
      codelab: t('filterLabelCodelab'),
      handbook: t('filterLabelHandbook'),
      completed: t('filterLabelCompleted'),
      question: t('filterLabelQuestion'),
    };
    filterBannerText.textContent = t('filterBannerText', {
      matching: matchingCount,
      total,
      label: labelMap[activeFilter],
    });
    filterBanner.classList.remove('hidden');
  }

  /* Show friendly empty message if Completed or ? filter has 0 matching nodes */
  if (matchingCount === 0) {
    if (activeFilter === 'question') {
      emptyFilterTitle.textContent = t('emptyQuestionTitle');
      emptyFilterDesc.innerHTML = t('emptyQuestionDesc');
    } else {
      emptyFilterTitle.textContent = t('emptyCompletedTitle');
      emptyFilterDesc.innerHTML = t('emptyCompletedDesc');
    }
    emptyFilterState.classList.remove('hidden');
  } else {
    emptyFilterState.classList.add('hidden');
  }
}

/* --------------------------------------------------------------------------
   SECTION 6: ROADMAP.SH FLOWCHART RENDERER
   Builds each stage, directional SVG arrows, yellow core spine cards, and
   purple/blue practice cards connected by dashed branch lines.
   -------------------------------------------------------------------------- */

/* Creates a single interactive node card with a one-click "?" check toggle */
function createNodeCard(node) {
  const localized = getNodeText(node);
  const status = getNodeStatus(node.id);
  const matches = nodeMatchesFilter(node);
  const isStatusOnlyFilter = activeFilter === 'completed' || activeFilter === 'question';

  const card = document.createElement('div');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.dataset.nodeId = node.id;
  card.setAttribute('aria-label', `${node.id} ${localized.title} — ${status}`);

  /* Choose color classes: completed (green) > question (orange) > in-progress (sky) > core (amber) vs practice (purple) */
  let styleClass = node.type === 'core' ? 'node-core' : 'node-practice';
  if (status === 'done') {
    styleClass = 'node-done';
  } else if (status === 'question') {
    styleClass = 'node-question';
  } else if (status === 'in-progress') {
    styleClass = 'node-in-progress';
  }

  /* Dim non-matching nodes instead of breaking flowchart lines, or hide if using a status-only filter */
  let visibilityClass = '';
  if (!matches) {
    visibilityClass = isStatusOnlyFilter ? 'hidden' : 'opacity-25 saturate-50';
  }

  card.className = `roadmap-node ${styleClass} ${visibilityClass} w-full text-left rounded-xl px-4 py-3 cursor-pointer relative group focus:outline-none focus:ring-2 focus:ring-indigo-500`;

  /* Status indicator badge in the top-right corner of the card */
  let statusBadgeHtml = '';
  if (status === 'done') {
    statusBadgeHtml = `
      <span class="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-green-700 text-white dark:bg-green-500 dark:text-slate-950 shrink-0">
        ${t('badgeDone')}
      </span>
    `;
  } else if (status === 'question') {
    statusBadgeHtml = `
      <span class="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-orange-600 text-white dark:bg-orange-400 dark:text-slate-950 shrink-0">
        ${t('badgeCheck')}
      </span>
    `;
  } else if (status === 'in-progress') {
    statusBadgeHtml = `
      <span class="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-950 shrink-0">
        <span class="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950 pulse-dot"></span>
        ${t('badgeWorking')}
      </span>
    `;
  } else {
    const typeLabel = node.type === 'core' ? t('badgeCore') : t('badgePractice');
    const typePillClass =
      node.type === 'core'
        ? 'bg-amber-950/10 text-amber-950 dark:bg-amber-300/20 dark:text-amber-200'
        : 'bg-indigo-950/10 text-indigo-950 dark:bg-indigo-300/20 dark:text-indigo-200';
    statusBadgeHtml = `
      <span class="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${typePillClass} shrink-0">
        ${typeLabel}
      </span>
    `;
  }

  /* Quick one-click "?" button so you can flag false/unclear info right on the flowchart */
  const quickQButtonClass =
    status === 'question'
      ? 'bg-orange-600 text-white border-orange-800 dark:bg-orange-400 dark:text-slate-950 dark:border-orange-200'
      : 'bg-white/80 dark:bg-slate-950/60 text-slate-700 dark:text-slate-200 border-slate-900/25 dark:border-white/25 hover:bg-orange-500 hover:text-white hover:border-orange-700';

  /* Source mini tags at the bottom of the card */
  const sourceTagsHtml = node.sources
    .map((src) => {
      const label = src === 'codelab' ? t('sourceCodelab') : t('sourceHandbook');
      return `<span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/75 dark:bg-slate-950/50 border border-slate-900/15 dark:border-white/15">${label}</span>`;
    })
    .join('');

  const quickTitle = t('quickQuestionTitle');

  card.innerHTML = `
    <div class="flex items-start justify-between gap-2">
      <span class="font-mono text-[11px] font-extrabold px-1.5 py-0.5 rounded bg-white/80 dark:bg-slate-950/60 border border-slate-900/20 dark:border-white/20">
        ${node.id}
      </span>
      <div class="flex items-center gap-1.5">
        ${statusBadgeHtml}
        <button
          type="button"
          data-quick-question="${node.id}"
          aria-label="${node.id} — ${quickTitle}"
          title="${quickTitle}"
          class="w-5 h-5 rounded-full text-[11px] font-black border transition cursor-pointer flex items-center justify-center shrink-0 ${quickQButtonClass}"
        >
          ?
        </button>
      </div>
    </div>
    <h3 class="node-title mt-2 text-sm sm:text-[15px] font-extrabold leading-snug">
      ${localized.title}
    </h3>
    <p class="mt-1 text-xs opacity-85 leading-relaxed">
      ${localized.shortSummary}
    </p>
    <div class="mt-2.5 flex flex-wrap items-center justify-between gap-1.5">
      <div class="flex flex-wrap gap-1">
        ${sourceTagsHtml}
      </div>
      <span class="text-[11px] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
        ${t('openGuide')}
      </span>
    </div>
  `;

  /* Clicking the "?" button toggles the half-credit flag without opening the drawer */
  const quickQBtn = card.querySelector('[data-quick-question]');
  quickQBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const current = getNodeStatus(node.id);
    if (current === 'question') {
      delete appState.statuses[node.id];
      showToast(t('toastQuickCleared', { id: node.id }));
    } else {
      appState.statuses[node.id] = 'question';
      showToast(t('toastQuickFlagged', { id: node.id }));
    }
    persistState();
    if (activeNodeId === node.id) {
      refreshDrawerStatusUI(node);
    }
    renderRoadmap();
  });

  /* Clicking anywhere else on the card opens the slide-over guide drawer */
  card.addEventListener('click', () => openDrawer(node.id));
  card.addEventListener('keydown', (event) => {
    if (event.target === card && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      openDrawer(node.id);
    }
  });

  return card;
}

/* Draws a crisp vertical SVG connector arrow pointing down along the main spine */
function createVerticalArrowConnector(height = 38) {
  const wrapper = document.createElement('div');
  wrapper.className = 'flex justify-center items-center w-full select-none pointer-events-none';
  wrapper.setAttribute('aria-hidden', 'true');
  wrapper.innerHTML = `
    <svg width="24" height="${height}" viewBox="0 0 24 ${height}" fill="none" class="text-slate-800 dark:text-slate-400">
      <line x1="12" y1="0" x2="12" y2="${height - 7}" stroke="currentColor" stroke-width="2.5" />
      <path d="M6 ${height - 11} L12 ${height - 2} L18 ${height - 11}" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
  `;
  return wrapper;
}

/* Draws the horizontal dashed branch connector between a central spine node and a side branch */
function createHorizontalBranchLine(direction) {
  const connector = document.createElement('div');
  connector.className = 'hidden md:flex items-center justify-center w-8 shrink-0 select-none pointer-events-none';
  connector.setAttribute('aria-hidden', 'true');

  if (direction === 'left') {
    connector.innerHTML = `
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none" class="text-indigo-700 dark:text-indigo-400">
        <line x1="2" y1="10" x2="30" y2="10" stroke="currentColor" stroke-width="2.2" stroke-dasharray="4 3" />
        <circle cx="4" cy="10" r="3" fill="currentColor" />
      </svg>
    `;
  } else {
    connector.innerHTML = `
      <svg width="32" height="20" viewBox="0 0 32 20" fill="none" class="text-indigo-700 dark:text-indigo-400">
        <line x1="2" y1="10" x2="30" y2="10" stroke="currentColor" stroke-width="2.2" stroke-dasharray="4 3" />
        <circle cx="28" cy="10" r="3" fill="currentColor" />
      </svg>
    `;
  }
  return connector;
}

/* Renders the Stage 6 Mastery Milestone endpoint at the bottom of the flowchart */
function createStage6Milestone(effectiveDone, totalCount, doneNodes, questionNodes) {
  const percent = totalCount > 0 ? Math.round((effectiveDone / totalCount) * 100) : 0;
  const allComplete = doneNodes === totalCount;
  const scoreText = formatScore(effectiveDone);
  const questionNote =
    questionNodes > 0 ? t('stage6QuestionNote', { count: questionNodes }) : '';

  const section = document.createElement('section');
  section.id = 'stage-6';
  section.className = 'w-full max-w-2xl mt-1';

  section.innerHTML = `
    <div class="rounded-2xl p-6 text-center border-2 ${
      allComplete
        ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-700 dark:border-emerald-400'
        : 'bg-white dark:bg-slate-900 border-slate-900 dark:border-slate-600'
    } shadow-[4px_4px_0px_#0f172a] dark:shadow-[4px_4px_0px_#020617]">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-900 dark:bg-amber-300 text-white dark:text-slate-900 mb-3">
        <span>🏁</span> ${t('stage6Badge')}
      </div>
      <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
        ${allComplete ? t('stage6TitleAllDone') : t('stage6TitleDefault')}
      </h2>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
        ${t('stage6Desc', {
          score: scoreText,
          total: totalCount,
          percent,
          note: questionNote,
        })}
      </p>
      <div class="mt-4 flex flex-wrap justify-center gap-2 text-[11px] font-bold">
        <span class="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700">${t('stage6Step1')}</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-950 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-700">${t('stage6Step2')}</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-900/40 text-sky-950 dark:text-sky-200 border border-sky-300 dark:border-sky-700">${t('stage6Step3')}</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">${t('stage6Step4')}</span>
      </div>
    </div>
  `;

  return section;
}

/* Main render function: clears and redraws the entire interactive flowchart */
function renderRoadmap() {
  updateStatsAndFilters();
  roadmapContainer.innerHTML = '';

  const totalNodes = ALL_NODES.length;
  const doneNodes = ALL_NODES.filter((n) => getNodeStatus(n.id) === 'done').length;
  const questionNodes = ALL_NODES.filter((n) => getNodeStatus(n.id) === 'question').length;
  const effectiveDone = doneNodes + questionNodes * 0.5;
  const isStatusOnlyFilter = activeFilter === 'completed' || activeFilter === 'question';
  const matchingCount = ALL_NODES.filter(nodeMatchesFilter).length;

  /* If filtering by Completed or "?" and nothing matches yet, keep canvas clean */
  if (isStatusOnlyFilter && matchingCount === 0) {
    return;
  }

  ROADMAP_STAGES.forEach((stage, stageIndex) => {
    const localizedStage = getStageText(stage);

    /* For status-only filters, skip stages that have 0 matching nodes */
    const stageHasMatch = stage.rows.some((row) =>
      [row.core, row.leftBranch, row.rightBranch].filter(Boolean).some(nodeMatchesFilter)
    );
    if (isStatusOnlyFilter && !stageHasMatch) {
      return;
    }

    /* Stage Header Pill Banner */
    const stageSection = document.createElement('section');
    stageSection.id = stage.id;
    stageSection.className = 'w-full flex flex-col items-center';

    const stageHeader = document.createElement('div');
    stageHeader.className =
      'w-full max-w-xl text-center px-5 py-3.5 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white border-2 border-slate-900 dark:border-slate-500 shadow-[3px_3px_0px_#6366f1]';
    stageHeader.innerHTML = `
      <div class="flex flex-wrap items-center justify-center gap-2 mb-1">
        <span class="text-[11px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded bg-amber-300 text-slate-900">
          ${t('stageBadge', { num: stage.number })}
        </span>
        <span class="text-[11px] font-semibold text-slate-300">
          ${t('sourcePrefix')} ${localizedStage.sourceSummary}
        </span>
      </div>
      <h2 class="text-base sm:text-lg font-extrabold tracking-tight">
        ${localizedStage.title.replace(/^Stage \d+:\s*|^Giai Đoạn \d+:\s*/i, '')}
      </h2>
      <p class="text-xs text-slate-300 mt-1">
        ${localizedStage.subtitle}
      </p>
    `;
    stageSection.appendChild(stageHeader);

    /* Render each row inside this stage with vertical spine arrows + side branches */
    stage.rows.forEach((row) => {
      const rowNodes = [row.core, row.leftBranch, row.rightBranch].filter(Boolean);
      const rowHasMatch = rowNodes.some(nodeMatchesFilter);
      if (isStatusOnlyFilter && !rowHasMatch) {
        return;
      }

      /* Vertical arrow from stage banner (or previous row) down to this row */
      stageSection.appendChild(createVerticalArrowConnector(34));

      /* 3-part row layout: Left Practice Branch | Center Spine Node | Right Practice Branch */
      const rowEl = document.createElement('div');
      rowEl.className =
        'w-full flex flex-col md:flex-row items-center md:items-center justify-center gap-3 md:gap-0';

      /* LEFT COLUMN (Desktop left branch OR spacer so the central spine stays dead center) */
      const leftSlot = document.createElement('div');
      leftSlot.className = 'w-full md:flex-1 flex items-center justify-end order-2 md:order-1';

      if (row.leftBranch && (!isStatusOnlyFilter || nodeMatchesFilter(row.leftBranch))) {
        const branchWrap = document.createElement('div');
        branchWrap.className = 'w-full md:max-w-[270px]';
        branchWrap.appendChild(createNodeCard(row.leftBranch));
        leftSlot.appendChild(branchWrap);
        leftSlot.appendChild(createHorizontalBranchLine('left'));
      } else {
        /* Empty invisible spacer on desktop keeps the central spine aligned straight down */
        leftSlot.className = 'hidden md:block md:flex-1 order-1';
      }

      /* CENTER COLUMN (Core Spine Node) */
      const centerSlot = document.createElement('div');
      centerSlot.className = 'w-full md:w-[330px] shrink-0 order-1 md:order-2';
      if (row.core && (!isStatusOnlyFilter || nodeMatchesFilter(row.core))) {
        centerSlot.appendChild(createNodeCard(row.core));
      }

      /* RIGHT COLUMN (Desktop right branch OR spacer) */
      const rightSlot = document.createElement('div');
      rightSlot.className = 'w-full md:flex-1 flex items-center justify-start order-3';

      if (row.rightBranch && (!isStatusOnlyFilter || nodeMatchesFilter(row.rightBranch))) {
        rightSlot.appendChild(createHorizontalBranchLine('right'));
        const branchWrap = document.createElement('div');
        branchWrap.className = 'w-full md:max-w-[270px]';
        branchWrap.appendChild(createNodeCard(row.rightBranch));
        rightSlot.appendChild(branchWrap);
      } else {
        rightSlot.className = 'hidden md:block md:flex-1 order-3';
      }

      rowEl.appendChild(leftSlot);
      rowEl.appendChild(centerSlot);
      rowEl.appendChild(rightSlot);
      stageSection.appendChild(rowEl);
    });

    /* Directional arrow leading out of this stage down into the next stage */
    if (stageIndex < ROADMAP_STAGES.length - 1 || !isStatusOnlyFilter) {
      stageSection.appendChild(createVerticalArrowConnector(44));
    }

    roadmapContainer.appendChild(stageSection);
  });

  /* Append Stage 6 Milestone endpoint connected at the bottom of the flowchart */
  if (activeFilter === 'all' || isStatusOnlyFilter) {
    roadmapContainer.appendChild(createStage6Milestone(effectiveDone, totalNodes, doneNodes, questionNodes));
  }
}

/* --------------------------------------------------------------------------
   SECTION 7: SLIDE-OVER DETAIL DRAWER LOGIC
   Populates and animates the right-hand detail drawer when you click a node.
   -------------------------------------------------------------------------- */
function refreshDrawerStatusUI(node) {
  const status = getNodeStatus(node.id);

  /* Update Type Badge */
  if (node.type === 'core') {
    drawerTypeBadge.textContent = t('drawerTypeCore');
    drawerTypeBadge.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full border bg-amber-100 text-amber-950 border-amber-400 dark:bg-amber-900/50 dark:text-amber-200 dark:border-amber-600';
  } else {
    drawerTypeBadge.textContent = t('drawerTypePractice');
    drawerTypeBadge.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full border bg-indigo-100 text-indigo-950 border-indigo-400 dark:bg-indigo-900/50 dark:text-indigo-200 dark:border-indigo-600';
  }

  /* Update Status Pill */
  if (status === 'done') {
    drawerStatusPill.textContent = t('statusDone');
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-400 dark:bg-green-900/60 dark:text-green-200 dark:border-green-600';
  } else if (status === 'question') {
    drawerStatusPill.textContent = t('statusQuestion');
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-400 dark:bg-orange-950/70 dark:text-orange-200 dark:border-orange-500';
  } else if (status === 'in-progress') {
    drawerStatusPill.textContent = t('statusInProgress');
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-400 dark:bg-sky-900/60 dark:text-sky-200 dark:border-sky-600';
  } else {
    drawerStatusPill.textContent = t('statusNotStarted');
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300';
  }

  /* Visually highlight whichever status button is currently active */
  btnMarkDone.classList.toggle('ring-2', status === 'done');
  btnMarkDone.classList.toggle('ring-offset-2', status === 'done');
  btnMarkDone.classList.toggle('ring-green-500', status === 'done');

  btnMarkProgress.classList.toggle('ring-2', status === 'in-progress');
  btnMarkProgress.classList.toggle('ring-offset-2', status === 'in-progress');
  btnMarkProgress.classList.toggle('ring-sky-500', status === 'in-progress');

  btnMarkQuestion.classList.toggle('ring-2', status === 'question');
  btnMarkQuestion.classList.toggle('ring-offset-2', status === 'question');
  btnMarkQuestion.classList.toggle('ring-orange-500', status === 'question');
}

function openDrawer(nodeId) {
  const node = NODE_MAP[nodeId];
  if (!node) return;
  const localized = getNodeText(node);
  const parentStage = ROADMAP_STAGES.find((s) => s.number === Number(node.id.split('.')[0]));
  const localizedStageTitle = parentStage ? getStageText(parentStage).title : node.stage;
  activeNodeId = nodeId;

  /* Fill text fields */
  drawerNodeId.textContent = node.id;
  drawerTitle.textContent = localized.title;
  drawerStageLabel.textContent = localizedStageTitle;
  drawerExplanation.textContent = localized.explanation;
  drawerTryIt.textContent = localized.tryIt;

  /* Plain-English Term Tip (only shown if provided) */
  if (localized.jargonTip) {
    drawerJargonTip.innerHTML = `<strong>${t('jargonTipPrefix')}</strong> ${localized.jargonTip}`;
    drawerJargonTip.classList.remove('hidden');
  } else {
    drawerJargonTip.classList.add('hidden');
  }

  /* Source Tags with direct reference links */
  drawerSources.innerHTML = node.sourceLinks
    .map(
      (link) => `
      <a
        href="${link.url}"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:border-indigo-500 transition"
      >
        <span>📖</span>
        <span>${translateSourceLabel(link.label)}</span>
        <span class="opacity-60">↗</span>
      </a>
    `
    )
    .join('');

  /* Click Path & Shortcut list */
  drawerShortcutSteps.innerHTML = localized.shortcuts
    .map(
      (step, idx) => `
      <div class="flex items-start gap-2.5">
        <span class="w-5 h-5 rounded-full bg-slate-900 dark:bg-slate-700 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
          ${idx + 1}
        </span>
        <div class="leading-relaxed">${step}</div>
      </div>
    `
    )
    .join('');

  /* Load personal notes for this node */
  drawerNotes.value = appState.notes[node.id] || '';
  notesSaveStatus.classList.add('opacity-0');

  /* Update status pills and Prev/Next buttons */
  refreshDrawerStatusUI(node);
  const currentIndex = ALL_NODES.findIndex((n) => n.id === nodeId);
  drawerPrevBtn.disabled = currentIndex <= 0;
  drawerNextBtn.disabled = currentIndex >= ALL_NODES.length - 1;

  /* Animate drawer open */
  drawerBackdrop.classList.remove('opacity-0', 'pointer-events-none');
  drawerBackdrop.classList.add('opacity-100', 'pointer-events-auto');
  nodeDrawer.classList.remove('translate-x-full');
  nodeDrawer.classList.add('translate-x-0');
}

function closeDrawer() {
  activeNodeId = null;
  drawerBackdrop.classList.add('opacity-0', 'pointer-events-none');
  drawerBackdrop.classList.remove('opacity-100', 'pointer-events-auto');
  nodeDrawer.classList.add('translate-x-full');
  nodeDrawer.classList.remove('translate-x-0');
}

/* Change node status ('todo' | 'in-progress' | 'done'), save to localStorage, and redraw */
function setActiveNodeStatus(newStatus) {
  if (!activeNodeId) return;
  if (newStatus === 'todo') {
    delete appState.statuses[activeNodeId];
  } else {
    appState.statuses[activeNodeId] = newStatus;
  }
  persistState();
  refreshDrawerStatusUI(NODE_MAP[activeNodeId]);
  renderRoadmap();
}

/* --------------------------------------------------------------------------
   SECTION 8: EVENT LISTENERS (CLICKS, TYPING NOTES, FILTERS & EXPORT/IMPORT)
   -------------------------------------------------------------------------- */
drawerCloseBtn.addEventListener('click', closeDrawer);
drawerBackdrop.addEventListener('click', closeDrawer);

/* Press Escape key to close the side drawer quickly */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && activeNodeId) {
    closeDrawer();
  }
});

btnMarkDone.addEventListener('click', () => {
  setActiveNodeStatus('done');
  showToast(t('toastDone'));
});

btnMarkProgress.addEventListener('click', () => {
  setActiveNodeStatus('in-progress');
  showToast(t('toastInProgress'));
});

btnMarkQuestion.addEventListener('click', () => {
  setActiveNodeStatus('question');
  showToast(t('toastQuestion'));
});

btnMarkReset.addEventListener('click', () => {
  setActiveNodeStatus('todo');
  showToast(t('toastReset'));
});

/* Save personal notes immediately while typing */
let notesTimer = null;
drawerNotes.addEventListener('input', () => {
  if (!activeNodeId) return;
  const text = drawerNotes.value;
  if (text.trim() === '') {
    delete appState.notes[activeNodeId];
  } else {
    appState.notes[activeNodeId] = text;
  }
  persistState();
  notesSaveStatus.classList.remove('opacity-0');
  clearTimeout(notesTimer);
  notesTimer = setTimeout(() => {
    notesSaveStatus.classList.add('opacity-0');
  }, 1500);
});

/* Previous & Next Node navigation buttons inside the drawer */
drawerPrevBtn.addEventListener('click', () => {
  if (!activeNodeId) return;
  const idx = ALL_NODES.findIndex((n) => n.id === activeNodeId);
  if (idx > 0) openDrawer(ALL_NODES[idx - 1].id);
});

drawerNextBtn.addEventListener('click', () => {
  if (!activeNodeId) return;
  const idx = ALL_NODES.findIndex((n) => n.id === activeNodeId);
  if (idx >= 0 && idx < ALL_NODES.length - 1) openDrawer(ALL_NODES[idx + 1].id);
});

/* Filter button clicks */
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    activeFilter = btn.dataset.filter;
    renderRoadmap();
  });
});

clearFilterBtn.addEventListener('click', () => {
  activeFilter = 'all';
  renderRoadmap();
});

emptyResetFilterBtn.addEventListener('click', () => {
  activeFilter = 'all';
  renderRoadmap();
});

/* Export JSON: Downloads a clean backup file of all node statuses and notes */
exportBtn.addEventListener('click', () => {
  const payload = {
    app: 'Google Antigravity Mastery Roadmap',
    exportedAt: new Date().toISOString(),
    statuses: appState.statuses,
    notes: appState.notes,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'antigravity-roadmap-progress.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(t('toastExported'));
});

/* Import JSON: Opens file picker and safely restores exported statuses and notes */
importBtn.addEventListener('click', () => {
  importFileInput.click();
});

importFileInput.addEventListener('change', (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed || typeof parsed.statuses !== 'object') {
        showToast(t('toastInvalidBackup'));
        return;
      }

      /* Keep only valid node IDs and safe string values */
      const nextStatuses = {};
      const nextNotes = {};

      Object.keys(parsed.statuses).forEach((id) => {
        if (NODE_MAP[id] && ['todo', 'in-progress', 'question', 'done'].includes(parsed.statuses[id])) {
          if (parsed.statuses[id] !== 'todo') {
            nextStatuses[id] = parsed.statuses[id];
          }
        }
      });

      if (parsed.notes && typeof parsed.notes === 'object') {
        Object.keys(parsed.notes).forEach((id) => {
          if (NODE_MAP[id] && typeof parsed.notes[id] === 'string' && parsed.notes[id].trim() !== '') {
            nextNotes[id] = parsed.notes[id];
          }
        });
      }

      appState = { statuses: nextStatuses, notes: nextNotes };
      persistState();
      renderRoadmap();
      if (activeNodeId) openDrawer(activeNodeId);
      showToast(t('toastRestored'));
    } catch (err) {
      showToast(t('toastJsonError'));
    } finally {
      importFileInput.value = '';
    }
  };
  reader.readAsText(file);
});

/* --------------------------------------------------------------------------
   SECTION 9: LANGUAGE SWITCHER, OVERVIEW TOGGLE & INITIAL PAGE STARTUP
   Handles English/Vietnamese switching, collapsing/expanding the overview
   card, setting the saved theme, and drawing the roadmap on startup.
   -------------------------------------------------------------------------- */
function applyOverviewState(collapsed) {
  if (!overviewBody || !overviewToggleBtn || !overviewToggleLabel) return;
  overviewBody.classList.toggle('hidden', collapsed);
  overviewToggleBtn.setAttribute('aria-expanded', String(!collapsed));
  overviewToggleLabel.textContent = collapsed ? t('showOverview') : t('hideOverview');
  localStorage.setItem(OVERVIEW_KEY, collapsed ? '1' : '0');
}

function initOverview() {
  if (!overviewToggleBtn) return;
  const savedCollapsed = localStorage.getItem(OVERVIEW_KEY) === '1';
  applyOverviewState(savedCollapsed);
  overviewToggleBtn.addEventListener('click', () => {
    const isCurrentlyHidden = overviewBody.classList.contains('hidden');
    applyOverviewState(!isCurrentlyHidden);
  });
}

function applyLanguage(lang, announce = false) {
  currentLang = lang === 'vi' ? 'vi' : 'en';
  localStorage.setItem(LANG_KEY, currentLang);

  /* Update HTML lang attribute and browser tab title */
  document.documentElement.lang = currentLang;
  document.title = t('pageTitle');

  /* Update static elements tagged with data-i18n, data-i18n-html, or data-i18n-placeholder */
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder));
  });

  /* Update language toggle button labels to show the alternate language */
  if (langToggleLabel) {
    langToggleLabel.textContent = currentLang === 'en' ? 'Tiếng Việt' : 'English';
  }
  if (compactLangLabel) {
    compactLangLabel.textContent = currentLang === 'en' ? 'VI' : 'EN';
  }

  /* Refresh dynamic button labels (Theme + Overview) and redraw flowchart */
  const currentlyDark = document.documentElement.classList.contains('dark');
  themeLabel.textContent = currentlyDark ? t('lightMode') : t('darkMode');
  if (overviewBody && overviewToggleLabel) {
    const isCollapsed = overviewBody.classList.contains('hidden');
    overviewToggleLabel.textContent = isCollapsed ? t('showOverview') : t('hideOverview');
  }

  renderRoadmap();
  if (activeNodeId) {
    openDrawer(activeNodeId);
  }
  if (announce) {
    showToast(t('toastLangSwitched'));
  }
}

function initLanguage() {
  const toggleHandler = () => {
    const nextLang = currentLang === 'en' ? 'vi' : 'en';
    applyLanguage(nextLang, true);
  };
  if (langToggleBtn) langToggleBtn.addEventListener('click', toggleHandler);
  if (compactLangToggleBtn) compactLangToggleBtn.addEventListener('click', toggleHandler);
  applyLanguage(currentLang, false);
}

initTheme();
initOverview();
initLanguage();
