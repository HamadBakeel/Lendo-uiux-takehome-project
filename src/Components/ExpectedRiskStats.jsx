import React from 'react'
import ReactApexChart from 'react-apexcharts';


class ApexChart extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        series: [20, 30, 20, 30],
        options: {
          chart: {
            type: 'donut',
            offsetY: 20, // Adjust the value to set the desired top margin
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 144,
              },
              legend: {
                position: 'bottom',
              },
            },
          }],
          dataLabels: {
            enabled: false, // Enable data labels
          },
          plotOptions: {
            pie: {
              // offsetY: 20, // Adjust the value to set the desired top margin for the pie chart
              offsetX: -60, // Adjust the value to set the desired left alignment for the pie chart
            },
          },
          labels: ['A', 'B', 'C', 'D'], // Custom names for each partition
          colors: ['rgba(255, 103, 105, 1)', 'rgba(75, 223, 255, 1)', 'rgba(255, 195, 89, 1)', 'rgba(45, 145, 254, 1)'], // Custom colors for each partition
          legend: {
            show: true,
            position: 'right',
            offsetX: 20,
            formatter: function (seriesName, opts) {
              const percent = opts.w.config.labels[opts.seriesIndex] + ' - ' + opts.w.config.series[1] + '%';
              return '<div style="display: flex; justify-content: space-between; align-items: center;"><span style="margin-left: 5px;">' + percent + '</span></div>';
            },
          },
        },
      };
      
      
      
    }
  
  
  
    render() {
      return (
        <div>
          <div id="chart">
            <ReactApexChart options={this.state.options} series={this.state.series} type="donut" height={150} />
          </div>
          <div id="html-dist"></div>
        </div>
      );
    }
  }

function ExpectedRiskStats() {
  return (
    <div className="card">
        <h2 className="cardTitle">
        Excepted Risk Score Distribution
        </h2>
        <div className="cardChart">
            <ApexChart/>
        </div>
  </div>  
  )

}

export default ExpectedRiskStats