import React from 'react';
import CandleStickChart from "@/components/CandleStickChart/CandleStickChart";

export default function Dashboard() {
    return (
        <div className="p-6 w-full">
            <div className="bg-white p-4 shadow rounded-xs w-full">
                <CandleStickChart />
            </div>
        </div>
    );
}
