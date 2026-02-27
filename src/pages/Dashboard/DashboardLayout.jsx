import { useEffect, useState } from 'react';
import { LayoutDashboard, CheckSquare, Calendar, BarChart3, Users, Settings, HelpCircle, LogOut, Search, Bell, Mail, Menu, X, Medal } from 'lucide-react';
import DashboardViewport from './DashboardViewport';
import { useNavigate } from 'react-router';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);


  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

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
    <div className="flex gap-4 h-screen p-1.5 md:p-2 lg:p-4">

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 max-w-[80vw]  bg-white  transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} flex flex-col`}>

        <div className="flex flex-col h-full py-6 overflow-y-auto no-scrollbar bg-gray-100 rounded-2xl">

          {/* Logo */}
          <div className="flex items-center gap-2 mb-10 px-8 shrink-0">
            <div className="w-8 h-8 bg-[#1B5E3A] rounded-lg flex items-center justify-center shrink-0">
              <div className="w-4 h-4 border-2 border-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight truncate">Donezo</span>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-8">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-8">Menu</p>
              <ul className="space-y-1">
                {menuItems?.map((item) => (
                  <li key={item.label} className="relative group">
                    {/* Active Indicator */}
                    {item.active && (
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-[#1B5E3A] rounded-r-full" />
                    )}
                    <button
                      className="w-full flex items-center justify-between py-2.5 px-8 transition-all text-gray-500 hover:text-black hover:cursor-pointer rounded-xl">
                      <div className="flex items-center gap-3 min-w-0">
                        <span>
                          {item.icon}
                        </span>
                        <span className='font-semibold'>
                          {item.label}
                        </span>
                      </div>

                      {item.badge && (
                        <span className="text-[10px] bg-[#1B5E3A] text-white px-1.5 py-0.5 rounded-md font-bold">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-8">General</p>
              <ul className="space-y-1">
                {generalItems?.map((item) => (
                  <li key={item.label} className="px-5">
                    <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-500 hover:bg-white hover:text-gray-900 transition-all min-w-0 hover:cursor-pointer">
                      <span className="shrink-0 text-gray-400">{item.icon}</span>
                      <span className="font-medium truncate">{item.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Download add */}
          <div className="px-6 mt-10 shrink-0">
            <div className="relative p-5 rounded-3xl overflow-hidden bg-black text-white aspect-square flex flex-col justify-end bg-cover bg-center"
              style={{ backgroundImage: `url('https://i.ibb.co.com/B20rsMnN/aaaaaaaaaaaaa.jpg')` }}>

              {/* Content Area */}
              <div className="relative z-10">
                <Medal size={30} className="p-1.5 bg-white text-[#1B5E3A] rounded-full" />
                <h3 className="text-xl leading-tight">
                  <span className='font-bold '>Download</span> our <br />
                  <span className="text-gray-100">Mobile App</span>
                </h3>

                <p className="text-[10px] mt-2 mb-4 font-light">
                  Get easy in another way
                </p>

                <button className="w-full py-3 bg-[#1B5E3A] text-white rounded-2xl text-sm font-semibold hover:cursor-pointer">
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">

        {/* Topbar*/}
        <header className="h-20 bg-gray-100 border-b border-gray-100 flex items-center justify-between px-4 lg:px-8 rounded-2xl">
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
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/20 transition-all"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] bg-gray-100 text-gray-400 border px-1.5 py-0.5 rounded">⌘ F</span>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <div className="flex items-center gap-1 md:gap-2">
              <button className="p-2 text-gray-500 bg-white rounded-full hover:cursor-pointer"><Mail size={20} /></button>
              <button className="p-2 text-gray-500 bg-white rounded-full relative hover:cursor-pointer">
                <Bell size={20} />
              </button>
            </div>

            {/* User Profile */}
            <div className="flex flex-row-reverse items-center gap-3 border-l pl-6 border-gray-100">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold leading-none">Md Ratul Howlader</p>
                <p className="text-xs text-gray-400 mt-1">{userEmail}</p>
              </div>
              <img
                src="https://i.ibb.co.com/C5ZdtJgP/inbound6396756790424336379-removebg-preview.png"
                alt="User"
                className="w-14 h-14 p-0.5 rounded-full border border-white"
              />
            </div>
          </div>
        </header>

        {/* Main Viewport */}
        <DashboardViewport />
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