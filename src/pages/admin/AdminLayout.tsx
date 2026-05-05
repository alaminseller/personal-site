import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { 
  LayoutDashboard, 
  FileText, 
  Tag, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  ChevronRight,
  Database,
  Briefcase,
  DollarSign
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Basic protection - should be admin, for now just check if logged in
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const navItems = [
    { label: "Overview", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Blog Posts", href: "/admin/blog", icon: FileText },
    { label: "Pricing & Addons", href: "/admin/pricing", icon: DollarSign },
    { label: "Portfolio", href: "/admin/portfolio", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#070711] flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-[#0d0b1f] border-r border-zinc-200 dark:border-white/[0.06] transition-transform duration-300 lg:translate-x-0 lg:static lg:block",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="bg-brand-gradient h-8 w-8 rounded-lg flex items-center justify-center text-white font-black text-xs">
                AR
              </div>
              <span className="font-black text-zinc-900 dark:text-white tracking-tighter">ADMIN PANEL</span>
            </Link>
            <button 
              className="lg:hidden" 
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close Sidebar"
            >
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>

          <nav className="flex-1 px-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors",
                  location.pathname === item.href
                    ? "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400"
                    : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/[0.05] hover:text-zinc-900 dark:hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="p-4 mt-auto">
            <div className="bg-zinc-50 dark:bg-white/[0.03] rounded-2xl p-4 border border-zinc-100 dark:border-white/[0.05]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 font-bold text-xs">
                  {user.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{user.name}</p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate">Administrator</p>
                </div>
              </div>
              <button 
                onClick={() => { logout(); navigate("/"); }}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold text-red-500 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 transition-colors"
              >
                <LogOut className="w-3 h-3" /> Logout
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white dark:bg-[#070711] border-b border-zinc-200 dark:border-white/[0.06] flex items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden p-2 -ml-2 text-zinc-400"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-lg font-bold text-zinc-900 dark:text-white">{title}</h1>
          </div>
          <div className="flex items-center gap-4">
             <Link to="/" className="text-xs font-bold text-zinc-500 hover:text-violet-600 transition-colors">
               View Site ↗
             </Link>
          </div>
        </header>

        <main className="p-6 lg:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
