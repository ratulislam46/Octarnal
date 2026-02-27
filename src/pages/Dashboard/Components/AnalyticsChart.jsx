import React from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip, XAxis } from 'recharts';

const AnalyticsChart = ({ data }) => {
    if (!data || !data.analytics) return null;

    return (
        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm w-full">
            <h3 className="font-bold mb-8 text-gray-800">Product Analytics</h3>

            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={data.analytics}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                        barGap={0}>
                        <XAxis
                            dataKey="date"
                            hide={false}
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#94a3b8', fontSize: 10, fontWeight: 600 }}
                            tickFormatter={(value, index) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][index]}
                            interval={0}
                            dy={10} />

                        <Tooltip
                            cursor={{ fill: 'transparent' }}
                            contentStyle={{
                                borderRadius: '12px',
                                border: 'none',
                                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                                fontSize: '12px'
                            }} />

                        <Bar
                            dataKey="views"
                            barSize={120}
                            radius={[20, 20, 20, 20]}>
                            {data?.analytics?.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={
                                        index === 2 ? '#63D392' :
                                            index === 3 ? '#0D3D24' :
                                                '#1B5E3A'
                                    }
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnalyticsChart;