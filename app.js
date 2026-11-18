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
  themeLabel.textContent = isDark ? 'Light Mode' : 'Dark Mode';
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
  progressText.textContent = `${formattedDone} / ${total} Nodes Completed — ${percent}%`;
  inProgressCountEl.textContent = `${inProgressCount} In Progress · ${questionCount} ? Need Check`;
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
      codelab: 'Google Codelab',
      handbook: 'Hamodywe Handbook',
      completed: 'Completed',
      question: '? Need Check (0.5x)',
    };
    filterBannerText.textContent = `Showing ${matchingCount} of ${total} nodes matching "${labelMap[activeFilter]}".`;
    filterBanner.classList.remove('hidden');
  }

  /* Show friendly empty message if Completed or ? filter has 0 matching nodes */
  if (matchingCount === 0) {
    if (activeFilter === 'question') {
      emptyFilterTitle.textContent = 'No nodes flagged with "?" yet!';
      emptyFilterDesc.innerHTML =
        'Click the <strong>?</strong> button on any box (or inside its guide drawer) when you spot outdated info or want to double-check a step. It counts as 0.5x progress.';
    } else {
      emptyFilterTitle.textContent = 'No completed nodes yet!';
      emptyFilterDesc.innerHTML =
        'Click any yellow or purple box on the roadmap and press <strong>Mark Done</strong> to track your first win.';
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
  const status = getNodeStatus(node.id);
  const matches = nodeMatchesFilter(node);
  const isStatusOnlyFilter = activeFilter === 'completed' || activeFilter === 'question';

  const card = document.createElement('div');
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.dataset.nodeId = node.id;
  card.setAttribute('aria-label', `${node.id} ${node.title} — ${status}`);

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
        ✓ Done
      </span>
    `;
  } else if (status === 'question') {
    statusBadgeHtml = `
      <span class="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-orange-600 text-white dark:bg-orange-400 dark:text-slate-950 shrink-0">
        ? Check (0.5x)
      </span>
    `;
  } else if (status === 'in-progress') {
    statusBadgeHtml = `
      <span class="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wide px-2 py-0.5 rounded-full bg-sky-600 text-white dark:bg-sky-400 dark:text-slate-950 shrink-0">
        <span class="w-1.5 h-1.5 rounded-full bg-white dark:bg-slate-950 pulse-dot"></span>
        Working
      </span>
    `;
  } else {
    const typeLabel = node.type === 'core' ? 'Core' : 'Practice';
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
      const label = src === 'codelab' ? 'Google Codelab' : 'Hamodywe Handbook';
      return `<span class="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-white/75 dark:bg-slate-950/50 border border-slate-900/15 dark:border-white/15">${label}</span>`;
    })
    .join('');

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
          aria-label="Flag ${node.id} with ? (False Info or Need Check — counts as 0.5x)"
          title="Flag as ? (False Info / Need Check — counts as 0.5x)"
          class="w-5 h-5 rounded-full text-[11px] font-black border transition cursor-pointer flex items-center justify-center shrink-0 ${quickQButtonClass}"
        >
          ?
        </button>
      </div>
    </div>
    <h3 class="node-title mt-2 text-sm sm:text-[15px] font-extrabold leading-snug">
      ${node.title}
    </h3>
    <p class="mt-1 text-xs opacity-85 leading-relaxed">
      ${node.shortSummary}
    </p>
    <div class="mt-2.5 flex flex-wrap items-center justify-between gap-1.5">
      <div class="flex flex-wrap gap-1">
        ${sourceTagsHtml}
      </div>
      <span class="text-[11px] font-bold opacity-70 group-hover:opacity-100 transition-opacity">
        Open Guide →
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
      showToast(`Cleared ? flag on ${node.id}.`);
    } else {
      appState.statuses[node.id] = 'question';
      showToast(`Flagged ${node.id} with ? (counts as 0.5 completed).`);
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
    questionNodes > 0 ? ` (includes ${questionNodes} flagged with ? counting as 0.5 each)` : '';

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
        <span>🏁</span> Stage 6: Autonomous Antigravity Mastery
      </div>
      <h2 class="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
        ${
          allComplete
            ? 'Congratulations! You Mastered All 18 Antigravity Topics!'
            : 'Your Finish Line: Confident Agentic Building'
        }
      </h2>
      <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 max-w-lg mx-auto leading-relaxed">
        Once you complete Stages 1 through 5 (${scoreText} of ${totalCount} nodes done — ${percent}%${questionNote}), you can direct Google Antigravity to plan blueprints, write code, verify UI in the browser, and remember your personal rules across any new project.
      </p>
      <div class="mt-4 flex flex-wrap justify-center gap-2 text-[11px] font-bold">
        <span class="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-900/40 text-amber-950 dark:text-amber-200 border border-amber-300 dark:border-amber-700">1. Goal Prompt</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-indigo-100 dark:bg-indigo-900/40 text-indigo-950 dark:text-indigo-200 border border-indigo-300 dark:border-indigo-700">2. Review Plan</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-sky-100 dark:bg-sky-900/40 text-sky-950 dark:text-sky-200 border border-sky-300 dark:border-sky-700">3. Approve Edits</span>
        <span class="self-center text-slate-400">→</span>
        <span class="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-emerald-950 dark:text-emerald-200 border border-emerald-300 dark:border-emerald-700">4. Verify in Browser</span>
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
          Stage ${stage.number}
        </span>
        <span class="text-[11px] font-semibold text-slate-300">
          Source: ${stage.sourceSummary}
        </span>
      </div>
      <h2 class="text-base sm:text-lg font-extrabold tracking-tight">
        ${stage.title.replace(/^Stage \d+:\s*/, '')}
      </h2>
      <p class="text-xs text-slate-300 mt-1">
        ${stage.subtitle}
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
    drawerTypeBadge.textContent = 'Core Must-Learn Topic';
    drawerTypeBadge.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full border bg-amber-100 text-amber-950 border-amber-400 dark:bg-amber-900/50 dark:text-amber-200 dark:border-amber-600';
  } else {
    drawerTypeBadge.textContent = 'Hands-On Practice Task';
    drawerTypeBadge.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full border bg-indigo-100 text-indigo-950 border-indigo-400 dark:bg-indigo-900/50 dark:text-indigo-200 dark:border-indigo-600';
  }

  /* Update Status Pill */
  if (status === 'done') {
    drawerStatusPill.textContent = '✓ Completed (1x)';
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 border border-green-400 dark:bg-green-900/60 dark:text-green-200 dark:border-green-600';
  } else if (status === 'question') {
    drawerStatusPill.textContent = '? Need Check (0.5x)';
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 border border-orange-400 dark:bg-orange-950/70 dark:text-orange-200 dark:border-orange-500';
  } else if (status === 'in-progress') {
    drawerStatusPill.textContent = '◔ In Progress';
    drawerStatusPill.className =
      'text-xs font-bold px-2.5 py-0.5 rounded-full bg-sky-100 text-sky-900 border border-sky-400 dark:bg-sky-900/60 dark:text-sky-200 dark:border-sky-600';
  } else {
    drawerStatusPill.textContent = 'Not Started';
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
  activeNodeId = nodeId;

  /* Fill text fields */
  drawerNodeId.textContent = node.id;
  drawerTitle.textContent = node.title;
  drawerStageLabel.textContent = node.stage;
  drawerExplanation.textContent = node.explanation;
  drawerTryIt.textContent = node.tryIt;

  /* Plain-English Term Tip (only shown if provided) */
  if (node.jargonTip) {
    drawerJargonTip.innerHTML = `<strong>Plain-English Tip:</strong> ${node.jargonTip}`;
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
        <span>${link.label}</span>
        <span class="opacity-60">↗</span>
      </a>
    `
    )
    .join('');

  /* Click Path & Shortcut list */
  drawerShortcutSteps.innerHTML = node.shortcuts
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
  showToast('Marked as Done & saved to browser storage!');
});

btnMarkProgress.addEventListener('click', () => {
  setActiveNodeStatus('in-progress');
  showToast('Marked as In Progress!');
});

btnMarkQuestion.addEventListener('click', () => {
  setActiveNodeStatus('question');
  showToast('Flagged with ? (counts as 0.5 completed work)!');
});

btnMarkReset.addEventListener('click', () => {
  setActiveNodeStatus('todo');
  showToast('Node status reset.');
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
  showToast('Progress exported to antigravity-roadmap-progress.json!');
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
        showToast('Invalid backup file format.');
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
      showToast('Backup restored successfully!');
    } catch (err) {
      showToast('Could not read JSON file. Please pick a valid export file.');
    } finally {
      importFileInput.value = '';
    }
  };
  reader.readAsText(file);
});

/* --------------------------------------------------------------------------
   SECTION 9: INITIAL PAGE STARTUP
   Sets the saved theme and draws the roadmap as soon as the page loads.
   -------------------------------------------------------------------------- */
initTheme();
renderRoadmap();
