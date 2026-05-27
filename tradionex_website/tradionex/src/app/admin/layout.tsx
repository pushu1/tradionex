import Link from "next/link";
import { LayoutDashboard, Users, FileText, Briefcase, Image as ImageIcon, LogOut } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import LogoutButton from "./LogoutButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const navigation = [
    { name: "Overview", href: "/admin", icon: <LayoutDashboard className="w-5 h-5 mr-3" /> },
    { name: "Inquiries", href: "/admin/inquiries", icon: <Users className="w-5 h-5 mr-3" /> },
    { name: "Blog Posts", href: "/admin/blog", icon: <FileText className="w-5 h-5 mr-3" /> },
    { name: "Careers", href: "/admin/careers", icon: <Briefcase className="w-5 h-5 mr-3" /> },
    { name: "Gallery", href: "/admin/gallery", icon: <ImageIcon className="w-5 h-5 mr-3" /> },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex-shrink-0 flex flex-col hidden md:flex">
        <div className="h-20 flex items-center justify-between px-6 border-b border-gray-200 dark:border-gray-800">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Tradionex <span className="text-blue-600 text-sm font-normal ml-1">Admin</span>
          </Link>
          <ThemeToggle isTransparent={false} />
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {navigation.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="flex items-center px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Topbar for mobile */}
        <div className="md:hidden flex items-center justify-between h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4">
          <span className="font-bold text-lg text-gray-900 dark:text-gray-100">Admin</span>
          <div className="flex items-center space-x-4">
            <ThemeToggle isTransparent={false} />
            <Link href="/" className="text-sm font-medium text-blue-600 dark:text-blue-400">Back to Site</Link>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10">
          {children}
        </div>
      </main>
    </div>
  );
}
