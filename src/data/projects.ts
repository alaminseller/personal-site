/* ─────────────────────────────────────────────────────────────
   Project Tracker — Data Store
   Admin can edit via /admin/projects (password protected).
   Client views via /project/:id (no login needed).
───────────────────────────────────────────────────────────── */

export type ProjectStatus = "Active" | "In Progress" | "Completed" | "On Hold";

export type Step =
    | "Requirement Received"
    | "Design Phase"
    | "Development"
    | "Testing"
    | "Final Delivery";

export const STEPS: Step[] = [
    "Requirement Received",
    "Design Phase",
    "Development",
    "Testing",
    "Final Delivery",
];

export interface ProjectUpdate {
    date: string;          // ISO string
    message: string;
}

export interface Project {
    id: string;            // URL slug, e.g. "novatech-001"
    clientName: string;
    projectName: string;
    description: string;
    status: ProjectStatus;
    currentStep: number;   // 0-indexed into STEPS
    progress: number;      // 0–100
    currentMessage: string;
    nextUpdateIn: string;  // e.g. "24 hours", "2 days"
    updates: ProjectUpdate[];
    whatsapp: string;      // phone number with country code, no +
    email: string;
    deliverableUrl?: string;
}

/* ── Default demo projects ─────────────────────────────────── */
export const DEFAULT_PROJECTS: Project[] = [
    {
        id: "novatech-001",
        clientName: "NovaTech Solutions",
        projectName: "Business Website",
        description: "A modern 6-page business website with contact form, SEO setup, and mobile-responsive design.",
        status: "In Progress",
        currentStep: 2,
        progress: 55,
        currentMessage: "Homepage and About page are complete. Working on Services section now.",
        nextUpdateIn: "24 hours",
        updates: [
            { date: "2026-04-20T08:00:00Z", message: "Development started. Project folder created and base template set up." },
            { date: "2026-04-19T10:30:00Z", message: "Design phase complete. Client approved the mockups." },
            { date: "2026-04-18T14:00:00Z", message: "Requirements confirmed. Design phase started in Figma." },
            { date: "2026-04-17T09:00:00Z", message: "Project kicked off. Requirements document received and reviewed." },
        ],
        whatsapp: "8801917443161",
        email: "hello@alaminrafi.com",
    },
    {
        id: "urbanshop-002",
        clientName: "Urban Shop BD",
        projectName: "E-Commerce Store",
        description: "WooCommerce-based online store with product management, payment gateway, and order tracking.",
        status: "Active",
        currentStep: 1,
        progress: 25,
        currentMessage: "Finalising UI design and preparing homepage wireframe for approval.",
        nextUpdateIn: "48 hours",
        updates: [
            { date: "2026-04-20T07:00:00Z", message: "Design phase started. Working on homepage and product listing layout." },
            { date: "2026-04-19T11:00:00Z", message: "Requirements received and confirmed with client." },
        ],
        whatsapp: "8801917443161",
        email: "hello@alaminrafi.com",
    },
];

/* ── localStorage helpers ──────────────────────────────────── */
const LS_KEY = "ar_projects";

export function loadProjects(): Project[] {
    try {
        const raw = localStorage.getItem(LS_KEY);
        if (raw) return JSON.parse(raw) as Project[];
    } catch { /* ignore */ }
    return DEFAULT_PROJECTS;
}

export function saveProjects(projects: Project[]): void {
    localStorage.setItem(LS_KEY, JSON.stringify(projects));
}

export function getProject(id: string): Project | undefined {
    return loadProjects().find(p => p.id === id);
}
