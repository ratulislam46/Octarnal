import { ArrowUpRight } from 'lucide-react';

const StatsCard = ({ data }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* Total Users Card */}
            <div className="bg-[#1B5E3A] p-5 rounded-3xl text-white relative h-full flex flex-col justify-between overflow-hidden">
                <p className="text-sm font-medium opacity-80">Total Users</p>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 wrap-break-word leading-tight">
                    {data?.overview?.totalUsers}
                </h2>
                <button className="absolute top-4 right-4 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                    <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Active Users Card */}
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative h-full flex flex-col justify-between overflow-hidden">
                <p className="text-sm font-medium text-gray-500">Active Users</p>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-slate-900 wrap-break-word leading-tight">
                    {data?.overview?.activeUsers}
                </h2>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100">
                    <ArrowUpRight size={16} />
                </button>
            </div>

            {/* Revenue Card */}
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative h-full flex flex-col justify-between overflow-hidden">
                <p className="text-sm font-medium text-gray-500">Revenue</p>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-slate-900 wrap-break-word leading-tight">
                    {data?.overview?.revenue}
                </h2>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100">
                    <ArrowUpRight size={16}/>
                </button>
            </div>

            {/* Growth Card */}
            <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm relative h-full flex flex-col justify-between overflow-hidden">
                <p className="text-sm font-medium text-gray-500">Growth</p>
                <h2 className="text-3xl lg:text-4xl font-bold mt-2 text-slate-900 wrap-break-word leading-tight">
                    {data?.overview?.growth}
                </h2>
                <button className="absolute top-4 right-4 p-2 bg-gray-50 text-gray-400 rounded-full hover:bg-gray-100 transition-colors">
                    <ArrowUpRight size={16} />
                </button>
            </div>
        </div>
    );
};

export default StatsCard;