import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '01',
    title: 'DevSprint — Kanban & Project Workspace',
    slug: 'devsprint-task-management',
    shortDescription: 'Interactive sprint board featuring drag-and-drop workflow columns, priority tagging, and optimistic state persistence.',
    description: 'A personal productivity and task management web application built to understand complex UI state synchronization, drag-and-drop interaction physics, and persistent local storage caching.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5 Drag & Drop API', 'Zustand', 'Vite'],
    category: 'frontend',
    year: '2024',
    image: '/projects/devsprint.svg',
    githubUrl: 'https://github.com/placeholder-developer/devsprint-workspace',
    liveUrl: 'https://devsprint.placeholder.domain',
    featured: true,
    problem: 'I needed a structured way to organize my daily coding tasks and study goals without getting lost in bloated, over-complicated commercial project management tools.',
    approach: 'I designed a lightweight board interface with three core columns: Backlog, In Progress, and Completed. I implemented the native HTML5 Drag and Drop API to learn browser drag events without relying on heavy third-party drag libraries.',
    keyFeatures: [
      'Interactive card drag-and-drop between columns with smooth position indicator',
      'Instant task search and tag filtering (Feature, Bug, Study, Refactor)',
      'Optimistic state updates paired with localStorage persistence',
      'Accessible keyboard navigation for moving tasks between columns',
      'Export and import board data as structured JSON files'
    ],
    technicalDecisions: [
      {
        title: 'Native Drag and Drop API vs Library',
        decision: 'Used native HTML5 Drag & Drop event handlers instead of third-party libraries.',
        rationale: 'My goal was to understand native browser drag events (`onDragStart`, `onDragOver`, `onDrop`) deeply rather than relying on external abstractions.'
      },
      {
        title: 'State Management with Zustand',
        decision: 'Selected Zustand for column and task state instead of React Context.',
        rationale: 'Avoided unnecessary re-renders of the entire board when only a single task card description was being edited.'
      }
    ],
    challenges: [
      {
        challenge: 'Preventing unnecessary re-renders during rapid drag events over multiple column drop targets.',
        solution: 'Debounced hover position calculations and stored active drag IDs in a ref to avoid triggering React component renders on every pixel of cursor movement.'
      },
      {
        challenge: 'Maintaining column order consistency when reloading saved state from localStorage.',
        solution: 'Implemented a strict Zod schema validator on startup that sanitizes stored JSON and provides fallback default data if schema corruption is detected.'
      }
    ],
    whatILearned: [
      'How the native HTML5 Drag and Drop API handles data transfer payloads and drop effects.',
      'How to structure normalized state objects (tasks by ID, columns by array of task IDs) for O(1) lookups.',
      'How to make drag-and-drop interfaces accessible to keyboard-only users using ARIA live regions.'
    ],
    futureImprovements: [
      'Add backend synchronization using Node.js and PostgreSQL with user authentication.',
      'Implement task due date reminders and calendar timeline view.',
      'Support sub-task checklists within individual task detail modals.'
    ]
  },
  {
    id: '02',
    title: 'Aura Storefront — Accessible E-Commerce Catalog',
    slug: 'aura-commerce-storefront',
    shortDescription: 'Responsive product catalog with instant multi-facet filtering, debounced query search, and accessible cart management.',
    description: 'A frontend e-commerce web application focused on high-performance product browsing, responsive layout adaptability, and accessible checkout state interactions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Lucide React', 'Vite'],
    category: 'frontend',
    year: '2024',
    image: '/projects/aura-commerce.svg',
    githubUrl: 'https://github.com/placeholder-developer/aura-storefront',
    liveUrl: 'https://aura-store.placeholder.domain',
    featured: true,
    problem: 'Many e-commerce templates are cluttered, slow to filter, and difficult to navigate on mobile devices or with keyboard-only controls.',
    approach: 'Built a clean, minimal shopping interface with instant client-side multi-parameter filtering (category, price range, stock availability) and a slide-out cart drawer with animated item quantity updates.',
    keyFeatures: [
      'Faceted client-side filtering by category, price threshold, and rating',
      'Debounced search input with auto-suggestions and zero-result fallbacks',
      'Slide-over cart drawer with quantity increments, removals, and price calculations',
      'Fully responsive product grid adjusting from 1 column on mobile to 4 on desktop',
      'Semantic HTML with proper ARIA labels and visible focus rings throughout'
    ],
    technicalDecisions: [
      {
        title: 'Client-Side Memoized Filtering',
        decision: 'Wrapped search and filter combinations in React `useMemo`.',
        rationale: 'Ensures instantaneous response times when users toggle category chips or slide price filters without re-filtering unchanged lists.'
      },
      {
        title: 'Custom Debounce Hook',
        decision: 'Authored a reusable `useDebounce` hook with TypeScript generics.',
        rationale: 'Prevented expensive search calculations from firing on every keystroke, reducing lag on lower-powered devices.'
      }
    ],
    challenges: [
      {
        challenge: 'Synchronizing cart drawer state without causing layout shifts when the drawer opens.',
        solution: 'Locked the background body scroll using CSS overflow controls while maintaining the current scroll position.'
      }
    ],
    whatILearned: [
      'The importance of semantic HTML tags (`<main>`, `<article>`, `<aside>`) for assistive screen readers.',
      'Techniques for handling image loading states and preventing cumulative layout shifts (CLS) using fixed aspect ratios.',
      'Writing custom generic TypeScript utility hooks for reusable client behaviors.'
    ],
    futureImprovements: [
      'Integrate Stripe Elements in test mode for simulated end-to-end checkout.',
      'Add user product reviews and rating submission forms.',
      'Implement light/dark mode preference toggle.'
    ]
  },
  {
    id: '03',
    title: 'PulseChat — Real-Time WebSocket Messenger',
    slug: 'pulse-chat-application',
    shortDescription: 'Full-stack chat application with real-time room messaging, user presence detection, and typing indicators.',
    description: 'A full-stack communication tool built to explore WebSocket protocols, bidirectional event architectures, and multi-user room isolation using Node.js and React.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Socket.io', 'Express', 'Tailwind CSS'],
    category: 'fullstack',
    year: '2023 - 2024',
    image: '/projects/pulsechat.svg',
    githubUrl: 'https://github.com/placeholder-developer/pulse-chat',
    liveUrl: 'https://pulsechat.placeholder.domain',
    featured: true,
    problem: 'Wanted to learn how real-time applications handle continuous state streaming compared to traditional request-response REST APIs.',
    approach: 'Built a lightweight Node.js/Express server utilizing Socket.io to manage room channels and broadcast messages to connected clients, paired with a clean React interface showing active user lists and typing status.',
    keyFeatures: [
      'Instant message delivery and receipt across multiple browser tabs',
      'Channel room switching (General, Projects, Random)',
      'Real-time user online/offline status indicators',
      'Typing indicator events broadcasted with auto-reset timers',
      'Clean message timeline with sender alignment and relative timestamps'
    ],
    technicalDecisions: [
      {
        title: 'Socket.io vs Raw WebSockets',
        decision: 'Chose Socket.io for automatic reconnection handling and room abstraction.',
        rationale: 'Provided reliable fallback polling when WebSocket connections temporarily drop on unstable networks.'
      },
      {
        title: 'Typed Event Contracts',
        decision: 'Defined shared TypeScript interfaces for all socket message events.',
        rationale: 'Guaranteed that the client and server agree on event payloads (`JOIN_ROOM`, `RECEIVE_MESSAGE`, `TYPING_STATUS`).'
      }
    ],
    challenges: [
      {
        challenge: 'Handling duplicate messages on client re-connections after temporary network disconnects.',
        solution: 'Assigned unique client-generated UUIDs to each outgoing message and filtered out duplicates using a Set lookup.'
      }
    ],
    whatILearned: [
      'The lifecycle of WebSocket handshakes and bi-directional event emission.',
      'Managing asynchronous connection states (Connecting, Connected, Disconnected, Reconnecting) in React UI.',
      'Cleaning up socket event listeners in `useEffect` return functions to avoid memory leaks.'
    ],
    futureImprovements: [
      'Persist conversation history into a PostgreSQL database with Prisma ORM.',
      'Add end-to-end encrypted direct messaging between two users.',
      'Implement file attachment upload previews.'
    ]
  },
  {
    id: '04',
    title: 'SyntaxFlow — Code Snippet & Notes Tool',
    slug: 'syntaxflow-developer-snippets',
    shortDescription: 'Developer notebook for organizing programming snippets with syntax highlighting and quick-copy utilities.',
    description: 'A focused developer utility application allowing users to save, organize, and search frequently used code snippets, terminal commands, and configuration templates.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'PrismJS', 'Vite'],
    category: 'devtools',
    year: '2023',
    image: '/projects/syntaxflow.svg',
    githubUrl: 'https://github.com/placeholder-developer/syntaxflow-tool',
    liveUrl: 'https://syntaxflow.placeholder.domain',
    featured: false,
    problem: 'I constantly found myself searching Stack Overflow and old project repositories for the same boilerplate configurations and utility algorithms.',
    approach: 'Created an offline-capable snippet manager with instant tag filtering, multi-language syntax highlighting, and one-click clipboard copying.',
    keyFeatures: [
      'Syntax highlighting for TypeScript, JavaScript, Python, SQL, and Bash',
      'Tag-based filtering (React, Algorithms, CSS, Git, Config)',
      'Instant one-click copy to clipboard with visual confirmation feedback',
      'Full-text search querying both snippet titles and code content',
      'Local storage persistence with JSON backup export'
    ],
    technicalDecisions: [
      {
        title: 'PrismJS for Highlighting',
        decision: 'Integrated lightweight PrismJS core instead of heavy web editors.',
        rationale: 'Kept the initial bundle size minimal while providing accurate code syntax coloring.'
      }
    ],
    challenges: [
      {
        challenge: 'Reliably copying formatted multiline code blocks across different desktop and mobile browsers.',
        solution: 'Implemented the modern `navigator.clipboard.writeText` API with a fallback textarea method for older browser environments.'
      }
    ],
    whatILearned: [
      'How to safely render formatted text while avoiding XSS vulnerabilities.',
      'Clipboard API security permissions and user-triggered interaction requirements.'
    ],
    futureImprovements: [
      'Add GitHub Gist synchronization integration.',
      'Support Markdown rendering alongside code blocks.'
    ]
  }
];
