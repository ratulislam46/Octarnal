import { ArrowUpRight } from 'lucide-react';

const ProductList = ({ data }) => {
    return (
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-gray-100 shadow-sm w-full overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 text-lg">Products</h3>
                <button className="text-xs font-bold border border-[#1B5E3A] text-[#1B5E3A] rounded-full px-3 py-1 hover:bg-green-50 transition-colors cursor-pointer shrink-0">
                    + New
                </button>
            </div>
            
            {/* List Container */}
            <div className="space-y-6">
                {data?.products?.map((product) => (
                    <div key={product.id} className="flex items-center justify-between gap-3 group">
                        
                        {/* Icon & Details */}
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                                <ArrowUpRight size={18} />
                            </div>
                            
                            {/* Product Info */}
                            <div className="min-w-0"> 
                                <p className="text-sm font-bold text-gray-900 truncate leading-tight uppercase">
                                    {product?.name}
                                </p>
                                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded uppercase tracking-tighter shrink-0">
                                        {product?.category}
                                    </span>
                                    <span className="text-[10px] text-gray-400 whitespace-nowrap">
                                        Sales: {product?.sales}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                            <p className="text-sm font-bold text-[#1B5E3A] leading-none">
                                ${product?.price}
                            </p>
                            <p className="text-[8px] text-gray-400 font-semibold uppercase tracking-tighter mt-1">
                                Unit Price
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;