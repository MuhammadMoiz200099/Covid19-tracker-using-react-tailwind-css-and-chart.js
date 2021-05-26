import React from 'react';
import AnalyticChart from './components/AnalyticChart';
import ListOfStat from './components/ListOfStat';
import Navbar from './components/Navbar';

export default function App() {
	return (
		<div className="font-inter bg-gray-900 min-h-screen pb-36">
			<Navbar />
			<ListOfStat />
			<AnalyticChart />
		</div>
	);
}
