import React from 'react'

import { report, valueColor } from "./../constant";
import { StatCard } from './StatCard';

export default function ListOfStat() {
    return (
        <div className="w-11/12 mx-auto mt-10 grid gap-2">
            {report.casese.map((stat, idx) => (
                <StatCard stat={stat} key={idx} valueColor={valueColor[idx]} />
            ))}
        </div>
    )
}
