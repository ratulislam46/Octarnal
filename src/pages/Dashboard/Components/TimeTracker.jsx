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
        <div className="bg-[#0D1B10] p-6 rounded-3xl text-white overflow-hidden relative shadow-lg min-h-50 flex flex-col justify-center">
            
            {/* Background Image Layer */}
            <div 
                className="absolute inset-0 z-0 opacity-40 transition-opacity duration-500 hover:opacity-50"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/B20rsMnN/aaaaaaaaaaaaa.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    mixBlendMode: 'luminosity' 
                }}
            ></div>

            {/* Content Layer  */}
            <div className="relative z-10">
                <h4 className="text-sm font-medium text-gray-300">Time Tracker</h4>
                
                <div className="text-5xl font-bold my-6 tracking-tight">
                    {formatTime(seconds)}
                </div>

                <div className="flex gap-4">
                    {/* Play and Pause Button */}
                    <button 
                        onClick={() => setIsActive(!isActive)}
                        className="p-4 bg-white text-black rounded-full hover:bg-gray-200 transition-all active:scale-90 cursor-pointer shadow-xl"
                    >
                        {isActive ? <Pause fill="currentColor" size={24} /> : <Play fill="currentColor" size={24} />}
                    </button>

                    {/* Reset Button */}
                    <button 
                        onClick={handleReset}
                        className="p-4 bg-[#EF4444] rounded-full hover:bg-red-600 transition-all active:scale-90 cursor-pointer shadow-xl"
                    >
                        <Square fill="white" size={20} stroke="none" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TimeTracker;