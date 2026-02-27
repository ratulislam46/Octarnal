import { useState, useEffect } from 'react';
import { Play, Square, Pause } from 'lucide-react';

const TimeTracker = () => {
    const [seconds, setSeconds] = useState(5048); 
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    const formatTime = (totalSeconds) => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const handleReset = () => {
        setIsActive(false);
        setSeconds(0);
    };

    return (
        <div className="bg-[#0D1B10] p-6 rounded-3xl text-white overflow-hidden relative shadow-lg">
            <h4 className="text-sm font-medium text-gray-400">Time Tracker</h4>
            
            <div className="text-4xl font-mono my-6 tracking-wider">
                {formatTime(seconds)}
            </div>

            <div className="flex gap-4 relative z-10">
                {/* Play and Pause Button */}
                <button 
                    onClick={() => setIsActive(!isActive)}
                    className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95 cursor-pointer"
                >
                    {isActive ? <Pause fill="white" size={20} /> : <Play fill="white" size={20} />}
                </button>

                {/* Reset Button */}
                <button 
                    onClick={handleReset}
                    className="p-3 bg-red-500 rounded-full hover:bg-red-600 transition-all active:scale-95 cursor-pointer"
                >
                    <Square fill="white" size={18} stroke="none" />
                </button>
            </div>
        </div>
    );
};

export default TimeTracker;