import React from "react";


const SideMenu = () => {
    return (
        <div className="flex-col my-1 mx-1 w-xs">
            <div className="flex flex-col items-start bg-[#11162f] rounded-xs px-5 py-2">
                <div className="p-2">
                    <p className="text-gray-400 uppercase font-bold text-lg">Stats</p>
                </div>
                <div className="w-full">
                    <div className="flex items-center justify-end py-3 px-2 space-x-2">
                        <div className="">
                            <button className="text-xs font-medium bg-[#281d73] px-5 py-1 text-center rounded-xs cursor-pointer">
                                Deposit
                            </button>
                        </div>
                        <div className="">
                            <button className="text-xs font-medium bg-[#303d5d] px-5 py-1 text-center rounded-xs cursor-pointer">
                                Withdraw
                            </button>
                        </div>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Profit</p>
                        <p className="text-green-400 text-lg">$18,965.65</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Reward</p>
                        <p className="text-green-400 text-lg">+865.85</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Initial Balance</p>
                        <p className="text-gray-50 text-lg">$10,000.00</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Model</p>
                        <p className="text-gray-50 text-lg">td3-fine-tuned</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Source</p>
                        <p className="text-gray-50 text-lg">HuggingFace</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col items-start bg-[#11162f] rounded-xs px-5 py-2 my-2">
                <div className="p-2">
                    <p className="text-gray-400 uppercase font-bold text-lg">Actions</p>
                </div>
                <div className="w-full">

                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Current action</p>
                        <p className="text-gray-50 text-lg">buy</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">Amt</p>
                        <p className="text-gray-50 text-lg">+1985.36</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">normalized val</p>
                        <p className="text-gray-50 text-lg">1.98726</p>
                    </div>
                    <div className="py-1.5 px-2 flex items-center justify-between">
                        <p className="text-gray-300 text-sm uppercase">portfolio</p>
                        <p className="text-gray-50 text-lg">2.04293</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SideMenu;