import React, { useRef, useLayoutEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  tooltip: {
    display: true,
    callbacks: {
      label: function (tooltipItem) {
        return tooltipItem.dataset.data[tooltipItem.dataIndex];
      }
    }
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      ticks: {
        display: true,
        autoSkip: true,
        maxTicksLimit: 15,
      }
    }
  },
  
};

const labels = ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Oct 22', 'Nov 22', 'Dec 22', 'Jan 23', 'Feb 23', 'Mar 23', 'Apr 23', 'May 23', 'Jun 23', 'Jul 23', 'Aug 23'];

export const data = {
  labels,
  datasets: [
    {
      // label: 'Dataset 1',
      data: [2650, 2590, 2800, 3810, 3560, 2550, 1400, 700, 1750, 1900, 1950, 1600, 2610, 3450, 2500, 1770, 1780, 1910, 2920, 2620, 2630],
      fill: true,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.2,
      pointBackgroundColor: 'rgb(153, 102, 255)'
    },
  ],
};

const CryptoChart = () => {
  const chartRef = useRef(null);
  const parentDivRef = useRef(null);

  useLayoutEffect(() => {
    if (chartRef.current && parentDivRef.current) {
      const parentWidth = parentDivRef.current.clientWidth;

      chartRef.current.width = parentWidth;
    }
  }, [chartRef, parentDivRef]);

  return (
    <div ref={parentDivRef}>
      <Line ref={chartRef} options={options} data={data} />
    </div>
  );
};

export default CryptoChart;
