import { useState, useEffect } from 'react';
import axios from 'axios';
import { Plus } from 'lucide-react';
import TeamCollaboration from './Components/TeamCollaboration';
import StatsCard from './Components/StatsCard';
import TimeTracker from './Components/TimeTracker';
import AnalyticsChart from './Components/AnalyticsChart';
import ProductList from './Components/Product';

const DashboardViewport = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://task-api-eight-flax.vercel.app/api/dashboard', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      }
      catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="p-10">Loading Dashboard...</div>;

  return (
    <div className="flex-1 p-4 lg:p-8 overflow-y-auto no-scrollbar bg-gray-100 mt-3 rounded-xl">
      {/* Header*/}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Plan, prioritize, and accomplish your tasks with ease.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-[#1B5E3A] hover:bg-[#155a36] text-white rounded-full text-sm font-semibold hover:opacity-90 hover:cursor-pointer">
            <Plus size={18} /> Add Project
          </button>
          <button className="px-4 py-2.5 border border-gray-200 rounded-full text-sm font-semibold hover:bg-gray-50 hover:cursor-pointer">
            Import Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Site */}
        <div className="col-span-12 lg:col-span-8 space-y-6">
          <StatsCard data={data} />
          <AnalyticsChart data={data} />
          <TeamCollaboration data={data} />
        </div>

        {/* Right Site */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          <ProductList data={data} />
          <TimeTracker />
        </div>

      </div>
    </div>
  );
};

export default DashboardViewport;