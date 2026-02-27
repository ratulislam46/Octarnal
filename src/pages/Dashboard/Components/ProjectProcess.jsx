import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const ProjectProgress = ({ data }) => {
    
    if (!data || !data?.overview?.totalUsers) {
        return (
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full h-72 flex items-center justify-center">
                <p className="text-gray-400 font-medium animate-pulse">Loading Analytics...</p>
            </div>
        );
    }

    const total = Number(data?.overview?.totalUsers) || 0;
    const active = Number(data?.overview?.activeUsers) || 0;
    const revenue = Number(data?.overview?.revenue) || 0;
    
    const percentage = total > 0 ? Math.round((active / total) * 100) : 0;
    
    const chartData = [
        { name: 'Active', value: percentage, fill: '#1B5E3A' },
        { name: 'Remaining', value: 100 - percentage, fill: '#F1F5F9' },
    ];

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full h-full flex flex-col justify-between transition-all duration-300">
            {/* Header */}
            <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="font-bold text-gray-800 text-lg">User Activity</h3>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Real-time Engagement</p>
                </div>
                <div className="bg-green-50 text-[#1B5E3A] text-[10px] font-bold px-2 py-1 rounded-lg">
                    {percentage}% Active
                </div>
            </div>

            {/* Chart Area */}
            <div className="relative w-full h-48 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%" cy="100%"
                            startAngle={180} endAngle={0}
                            innerRadius="75%" outerRadius="100%"
                            dataKey="value" stroke="none" cornerRadius={10}
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.fill} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute bottom-4 text-center">
                    <h2 className="text-4xl font-extrabold text-slate-900 leading-none">
                        {percentage}<span className="text-xl font-bold">%</span>
                    </h2>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">Project Status</p>
                </div>
            </div>

            {/* Footer Metrics */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-4 pt-4 border-t border-gray-50">
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Active</span>
                    <span className="text-sm font-bold text-slate-800">{active.toLocaleString()}</span>
                </div>
                <div className="w-px h-8 bg-gray-100" />
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Total</span>
                    <span className="text-sm font-bold text-slate-800">{total.toLocaleString()}</span>
                </div>
                <div className="w-px h-8 bg-gray-100" />
                <div className="flex flex-col items-center">
                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">Revenue</span>
                    <span className="text-sm font-bold text-[#1B5E3A]">
                        ${revenue > 0 ? (revenue / 1000).toFixed(1) : "0"}k
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjectProgress;