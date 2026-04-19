import { createContext, useContext, useState, useEffect } from "react";

/* ─── Types ─────────────────────────────────────────────────────── */
export interface User {
    id: string;
    name: string;
    email: string;
}

export interface Order {
    id: string;
    userId: string;
    packageName: string;
    addons: string[];
    total: number;
    status: "Pending" | "In Progress" | "Completed" | "Cancelled";
    note: string;
    createdAt: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => { ok: boolean; error?: string };
    signup: (name: string, email: string, password: string) => { ok: boolean; error?: string };
    logout: () => void;
    getOrders: () => Order[];
}

/* ─── Storage helpers ───────────────────────────────────────────── */
const USERS_KEY = "portfolio_users";
const SESSION_KEY = "portfolio_session";
const ORDERS_KEY = "portfolio_orders";

type StoredUser = User & { password: string };

function getStoredUsers(): StoredUser[] {
    try { return JSON.parse(localStorage.getItem(USERS_KEY) || "[]"); }
    catch { return []; }
}
function saveStoredUsers(users: StoredUser[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
}
function getStoredOrders(): Order[] {
    try { return JSON.parse(localStorage.getItem(ORDERS_KEY) || "[]"); }
    catch { return []; }
}

/* ─── Demo seed orders (shown for any new user as examples) ────── */
function seedDemoOrders(userId: string) {
    const existing = getStoredOrders();
    if (existing.some((o) => o.userId === userId)) return;
    const demos: Order[] = [
        {
            id: `ORD-${Date.now()}-1`,
            userId,
            packageName: "Standard",
            addons: ["Logo Design", "Fast Delivery"],
            total: 530,
            status: "Completed",
            note: "Business website for a local café",
            createdAt: new Date(Date.now() - 14 * 86400000).toISOString(),
        },
        {
            id: `ORD-${Date.now()}-2`,
            userId,
            packageName: "Basic",
            addons: [],
            total: 250,
            status: "In Progress",
            note: "Personal portfolio website",
            createdAt: new Date(Date.now() - 3 * 86400000).toISOString(),
        },
    ];
    localStorage.setItem(ORDERS_KEY, JSON.stringify([...existing, ...demos]));
}

/* ─── Context ───────────────────────────────────────────────────── */
const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        try { return JSON.parse(localStorage.getItem(SESSION_KEY) || "null"); }
        catch { return null; }
    });

    useEffect(() => {
        if (user) localStorage.setItem(SESSION_KEY, JSON.stringify(user));
        else localStorage.removeItem(SESSION_KEY);
    }, [user]);

    const login = (email: string, password: string) => {
        const users = getStoredUsers();
        const found = users.find(
            (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
        );
        if (!found) return { ok: false, error: "Invalid email or password." };
        const { password: _, ...safeUser } = found;
        setUser(safeUser);
        seedDemoOrders(safeUser.id);
        return { ok: true };
    };

    const signup = (name: string, email: string, password: string) => {
        const users = getStoredUsers();
        if (users.some((u) => u.email.toLowerCase() === email.toLowerCase()))
            return { ok: false, error: "An account with this email already exists." };
        const newUser: StoredUser = {
            id: `USR-${Date.now()}`,
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password,
        };
        saveStoredUsers([...users, newUser]);
        const { password: _, ...safeUser } = newUser;
        setUser(safeUser);
        seedDemoOrders(safeUser.id);
        return { ok: true };
    };

    const logout = () => setUser(null);

    const getOrders = (): Order[] =>
        getStoredOrders().filter((o) => o.userId === user?.id);

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, getOrders }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
