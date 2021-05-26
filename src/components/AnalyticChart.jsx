import React, { useEffect } from 'react'
import Chart from 'chart.js';

export default function AnalyticChart() {

    useEffect(() => {
        const canvas = document.getElementById('chart').getContext('2d');

        window.myLine = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ['May 20', 'May 21', 'May 22', 'May 23', 'May 24'],
                datasets: [
                    {
                        label: 'Death',
                        data: [0, 5, 2, 0, 3],
                        backgroundColor: "#F87171",
                        borderColor: "#F87171"
                    },
                    {
                        label: 'Active',
                        data: [4, 2, 1, 0, 2],
                        backgroundColor: "#6EE7B7",
                        borderColor: "#6EE7B7"
                    },
                    {
                        label: 'Recovered',
                        data: [3, 4, 6, 0, 1],
                        backgroundColor: "#93C5FD",
                        borderColor: "#93C5FD"
                    }
                ]
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    text: 'Covid 19 Chart',
                    display: true,
                    fontSize: '20',
                    fontColor: 'white'
                },
                legend: {
                    align: 'end',
                    position: 'top',
                    labels: {
                        fontColor: 'white'
                    }
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'white'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'white',
                                callback: function(tick, index, array) { return index % 2 === 0 ? tick : ''  }
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [10],
                                color: 'rgba(255,255,255,0.3)',
                                zeroLineColor: 'rgba(255,255,255,0.3)'
                            }
                        }
                    ]
                }
            }
        });

    }, [])

    return (
        <div className="w-11/12 mx-auto mt-10">
            <canvas id="chart" className="h-96" />            
        </div>
    )
}
