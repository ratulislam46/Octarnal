import { ArrowUpRight } from 'lucide-react';

const StatsCard = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Total Users Card */}
            <div className="bg-[#1B5E3A] p-5 rounded-4xl text-white relative h-full">
                <p className="text-sm font-medium opacity-80">Total Products</p>
                <h2 className="text-4xl font-bold mt-2">{data?.overview?.totalUsers}</h2>
                <div className="mt-4 flex items-center gap-1 text-[10px]">
                    <span className="bg-white/20 p-1 rounded-md">5%</span> Increased from last month
                </div>
                <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Active Users Card */}
            <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm relative h-full">
                <p className="text-sm font-medium text-gray-500">Ended Products</p>
                <h2 className="text-4xl font-bold mt-2">{data?.overview?.activeUsers}</h2>
                <div className="mt-4 flex items-center gap-1 text-[10px] text-gray-400">
                    <span className="bg-gray-100 p-1 rounded-md">6%</span> Increased from last month
                </div>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Revenue Card */}
            <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm relative h-full group">
                <p className="text-sm font-medium text-gray-500">Running Products</p>
                <h2 className="text-4xl font-bold mt-2">
                    {data?.overview?.revenue ? `$${(data.overview.revenue / 1000).toFixed(0)}k` : '0'}
                </h2>
                <div className="mt-4 flex items-center gap-1 text-[10px] text-gray-400">
                    <span className="bg-gray-100 p-1 rounded-md ">2%</span> Increased from last month
                </div>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-colors border border-gray-100 group-hover:border-[#1B5E3A] duration-300">
                    <ArrowUpRight size={16}/>
                </button>
            </div>

            {/* Growth Card */}
            <div className="bg-white p-5 rounded-4xl border border-gray-100 shadow-sm relative h-full">
                <p className="text-sm font-medium text-gray-500">Pending Products</p>
                <h2 className="text-4xl font-bold mt-2">
                    {data?.overview?.growth ? `${data.overview.growth.toFixed(0)}` : '0'}
                </h2>
                <div className="mt-4 flex items-center gap-1 text-[10px] text-gray-400">
                    On Discuss
                </div>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default StatsCard;