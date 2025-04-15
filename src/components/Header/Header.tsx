import React from "react";


const Header = () => {
    return (
        <section className="bg-[#11162f] mx-1 mt-3 mb-1 rounded-xs px-5 py-3 flex items-center justify-between">
            <div className="flex items-center justify-start space-x-8">
                <div className="">
                    <h1 className="text-2xl font-medium">DexBlaze</h1>
                </div>
                <div className="px-5 py-2">
                    <button className="text-lg font-medium bg-[#303d5d] px-5 py-2 text-center">
                        EUR/USD
                    </button>
                </div>
                <div className="flex items-center justify-start space-x-7 py-2">
                    <div className="flex-col items-start">
                        <p className="text-gray-500 text-sm uppercase">Mark</p>
                        <p className="text-gray-50 text-xl -mt-1">2,956.9303</p>
                    </div>
                    <div className="flex-col items-start">
                        <p className="text-gray-500 text-sm uppercase">24h high</p>
                        <p className="text-gray-50 text-xl -mt-1">2,962.0</p>
                    </div>
                    <div className="flex-col items-start">
                        <p className="text-gray-500 text-sm uppercase">24h low</p>
                        <p className="text-gray-50 text-xl -mt-1">2,904.1</p>
                    </div>
                    <div className="flex-col items-start">
                        <p className="text-gray-500 text-sm uppercase">24h volume</p>
                        <p className="text-gray-50 text-xl -mt-1">602,403,323.85</p>
                    </div>
                    <div className="flex-col items-start">
                        <p className="text-gray-500 text-sm uppercase">spread</p>
                        <p className="text-gray-50 text-xl -mt-1">1.30</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-end space-x-5">
                <div className="px-5 py-2">
                    <button className="text-lg font-medium bg-[#281d73] px-10 py-2 text-center">
                        Deposit
                    </button>
                </div>
                <div>
                    <div className="flex-col items-start pr-5 py-2">
                        <p className="text-gray-50 text-xl -mt-1">x89830580...2359</p>
                        <p className="text-red-500 text-sm uppercase font-semibold">Main 095839</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header;