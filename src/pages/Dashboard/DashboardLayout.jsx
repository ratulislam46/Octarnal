import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart3, 
  Users, 
  Settings, 
  HelpCircle, 
  LogOut, 
  Search, 
  Bell, 
  Mail, 
  Menu, 
  X,
  Plus
} from 'lucide-react';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', active: true },
    { icon: <CheckSquare size={20} />, label: 'Tasks', badge: '12+' },
    { icon: <Calendar size={20} />, label: 'Calendar' },
    { icon: <BarChart3 size={20} />, label: 'Analytics' },
    { icon: <Users size={20} />, label: 'Team' },
  ];

  const generalItems = [
    { icon: <Settings size={20} />, label: 'Settings' },
    { icon: <HelpCircle size={20} />, label: 'Help' },
    { icon: <LogOut size={20} />, label: 'Logout' },
  ];

  return (
    <div className="flex h-screen bg-[#F8F9FA] font-sans text-gray-800">
      
      {/* --- Sidebar Component --- */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-100 transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10 px-2">
            <div className="w-8 h-8 bg-[#1B5E3A] rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">Donezo</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-8">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Menu</p>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.label}>
                    <button className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all ${item.active ? 'bg-[#1B5E3A] text-white shadow-lg shadow-green-100' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}>
                      <div className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {item.badge && <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md">{item.badge}</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">General</p>
              <ul className="space-y-1">
                {generalItems.map((item) => (
                  <li key={item.label}>
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-all">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Mobile App Promo (Bottom Sidebar) */}
          <div className="mt-auto p-4 bg-black rounded-2xl text-white relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-xs font-light mb-1">Download our</p>
                <p className="text-sm font-bold mb-3">Mobile App</p>
                <button className="w-full py-2 bg-[#1B5E3A] rounded-lg text-xs font-medium">Download</button>
             </div>
             {/* Abstract background shape */}
             <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-green-900 opacity-30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        
        {/* --- Topbar Component --- */}
        <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4 flex-1">
            {/* Mobile Menu Toggle */}
            <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-gray-600">
              {isSidebarOpen ? <X /> : <Menu />}
            </button>

            {/* Search Bar */}
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search task" 
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-mono text-gray-400 border px-1.5 py-0.5 rounded">⌘ F</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full"><Mail size={20} /></button>
              <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
            </div>
            
            {/* User Profile */}
            <div className="flex items-center gap-3 border-l pl-6 border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Totok Michael</p>
                <p className="text-xs text-gray-400 mt-1">tmichael20@mail.com</p>
              </div>
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="User" 
                className="w-10 h-10 rounded-full bg-orange-100 border border-white shadow-sm"
              />
            </div>
          </div>
        </header>

        {/* --- Main Viewport (Children) --- */}
        <section className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header section with buttons */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-gray-500 mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 bg-[#1B5E3A] text-white px-5 py-2.5 rounded-full font-medium hover:bg-[#14452b] transition-colors">
                  <Plus size={18} /> Add Project
                </button>
                <button className="px-5 py-2.5 border border-gray-200 rounded-full font-medium hover:bg-white transition-colors">
                  Import Data
                </button>
              </div>
            </div>

            {/* Content goes here (Cards, Analytics, etc.) */}
            {children}
          </div>
        </section>
      </main>

      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;