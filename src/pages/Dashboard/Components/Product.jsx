import { ArrowUpRight } from 'lucide-react';
import React from 'react';

const ProductList = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-4xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">Products</h3>
                <button className="text-xs font-bold border border-[#1B5E3A] text-[#1B5E3A] rounded-full px-3 py-1 hover:cursor-pointer">+ New</button>
            </div>
            <div className="space-y-6">
                {data?.products?.map((product) => (
                    <div key={product.id} className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                            <ArrowUpRight size={18} />
                        </div>
                        <div> 
                            <p className="text-sm font-bold">{product?.name}</p>
                            <p className="text-[10px] text-gray-400">Sales: {product?.sales}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;