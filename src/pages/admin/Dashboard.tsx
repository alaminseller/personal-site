import AdminLayout from "./AdminLayout";
import { Link } from "react-router-dom";
import { FileText, DollarSign, Briefcase, Users, Eye, TrendingUp } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Posts", value: "4", icon: FileText, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-500/10" },
    { label: "Site Visitors", value: "1,240", icon: Eye, color: "text-violet-500", bg: "bg-violet-50 dark:bg-violet-500/10" },
    { label: "New Leads", value: "12", icon: Users, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-500/10" },
    { label: "Project Requests", value: "8", icon: TrendingUp, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-500/10" },
  ];

  return (
    <AdminLayout title="Overview">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-[#0d0b1f] p-6 rounded-3xl border border-zinc-200 dark:border-white/[0.08] shadow-sm">
            <div className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <p className="text-2xl font-black text-zinc-900 dark:text-white">{stat.value}</p>
            <p className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-[#0d0b1f] p-8 rounded-3xl border border-zinc-200 dark:border-white/[0.08]">
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/admin/blog" className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-100 dark:border-white/[0.05] hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors text-center">
              <FileText className="w-6 h-6 text-violet-500 mb-3" />
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200">New Blog Post</span>
            </Link>
            <Link to="/admin/pricing" className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-100 dark:border-white/[0.05] hover:bg-zinc-50 dark:hover:bg-white/[0.02] transition-colors text-center">
              <DollarSign className="w-6 h-6 text-emerald-500 mb-3" />
              <span className="text-sm font-bold text-zinc-700 dark:text-zinc-200">Manage Pricing</span>
            </Link>
          </div>
        </div>

        <div className="bg-brand-gradient p-8 rounded-3xl text-white">
          <h3 className="text-lg font-bold mb-2">System Status</h3>
          <p className="text-white/80 text-sm mb-6">Everything is running smoothly. Your website is currently highly optimized.</p>
          <div className="space-y-4">
             <div className="flex items-center justify-between text-sm">
                <span>Core Performance</span>
                <span className="font-bold">98/100</span>
             </div>
             <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[98%]" />
             </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
