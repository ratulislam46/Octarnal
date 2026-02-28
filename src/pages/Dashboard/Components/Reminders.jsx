import React from 'react';
import { Video } from 'lucide-react';

const Reminders = ({ reminderData }) => {

    const defaultData = {
        title: "Meeting with Arc Company",
        startTime: "02:00 pm",
        endTime: "04:00 pm",
    };

    const data = reminderData || defaultData;

    return (
        <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm w-full h-full flex flex-col justify-between transition-all duration-300 hover:shadow-md">

            {/* Header Section */}
            <div>
                <h3 className="font-bold text-gray-800 text-lg mb-4 sm:mb-6">Reminders</h3>

                <div className="space-y-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#1B5E3A] leading-tight wrap-break-word">
                        {data.title}
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base font-medium mt-2">
                        Time : {data.startTime} - {data.endTime}
                    </p>
                </div>
            </div>

            {/* Action Button Section */}
            <div className="mt-6 sm:mt-8">
                <button
                    className="w-full flex items-center justify-center gap-2 bg-[#1B5E3A] text-white px-6 py-3.5 rounded-full font-bold transition-transform active:scale-95 hover:opacity-90 cursor-pointer"
                >
                    <Video size={20} className="sm:w-6 sm:h-6" />
                    <span className="text-base sm:text-lg">Start Meeting</span>
                </button>
            </div>
        </div>
    );
};

export default Reminders;