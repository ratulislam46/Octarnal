import { Plus } from 'lucide-react';
import React from 'react';

const TeamCollaboration = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Team Collaboration</h3>
                <button className="text-xs font-bold border border-[#1B5E3A] text-[#1B5E3A] rounded-full px-3 py-1 flex items-center gap-1 hover:cursor-pointer">
                    <Plus size={14} /> Add Member
                </button>
            </div>
            <div className="space-y-4">
                {data?.users?.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                                {user?.name[0]}
                            </div> 
                            <div>
                                <p className="text-sm font-bold">{user?.name}</p>
                                <p className="text-[11px] text-gray-400 mt-0.5">
                                    {user?.email} • <span className="font-medium">Joined {user?.joinDate}</span>
                                </p>
                            </div>
                        </div>
                        <span className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase ${user?.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                            {user?.status}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeamCollaboration;