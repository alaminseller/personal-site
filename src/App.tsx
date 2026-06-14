import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/AuthContext";
import Index from "./pages/Index";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import DashboardPage from "./pages/Dashboard";
import ProjectTrackerPage from "./pages/ProjectTracker";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import PortfolioPage from "./pages/Portfolio";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminBlog from "./pages/admin/AdminBlog";
import AdminPricing from "./pages/admin/AdminPricing";
import NotFound from "./pages/NotFound";
import AboutMe from "./pages/AboutMe";
import AdminProjects from "./pages/AdminProjects";
import ProfessionalPage from "./pages/Professional";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/project/:id" element={<ProjectTrackerPage />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/blog" element={<AdminBlog />} />
              <Route path="/admin/pricing" element={<AdminPricing />} />
              <Route path="/admin/portfolio" element={<AdminProjects />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/professional" element={<ProfessionalPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>

        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
