import React from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const AnalyticsChart = ({ data }) => {
    if (!data?.analytics) return null;

    const formatDay = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { weekday: 'narrow' });
    };

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full">
            <h3 className="font-bold mb-6 text-lg">Analytics</h3>

            <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data.analytics}
                        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                        barGap={4}>
                        <XAxis
                            dataKey="date"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                            tickFormatter={formatDay}
                            dy={10} />

                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#cbd5e1', fontSize: 10 }} />

                        <Tooltip
                            cursor={{ fill: '#f8fafc', radius: 10 }}
                            contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontSize: '12px', }}
                        />

                        <Legend iconType="circle" verticalAlign="top" align="right" wrapperStyle={{ paddingBottom: '20px', fontSize: '12px' }} />

                        <Bar dataKey="views" name="Views" fill='#1B5E3A' radius={[4, 4, 0, 0]} barSize={50} />
                        <Bar dataKey="clicks" name="Clicks" fill="#4ece8a" radius={[4, 4, 0, 0]} barSize={50} />
                        <Bar dataKey="conversions" name="Conversions" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={50} />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;