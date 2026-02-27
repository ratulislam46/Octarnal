import { Play } from 'lucide-react';

const TimeTracker = () => {
    return (
        <div className="bg-[#0D1B10] p-6 rounded-4xl text-white overflow-hidden relative">
            <h4 className="text-sm font-medium text-gray-400">Time Tracker</h4>
            <div className="text-4xl font-mono my-6">01:24:08</div>
            <div className="flex gap-4">
                <button className="p-3 bg-white/10 rounded-full">
                    <Play fill="white" size={20} />
                </button>
                <button className="p-3 bg-red-500 rounded-full">
                    <div className="w-5 h-5 bg-white rounded-sm" />
                </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-900/20 blur-3xl rounded-full translate-x-10 -translate-y-10"></div>
        </div>
    );
};

export default TimeTracker;