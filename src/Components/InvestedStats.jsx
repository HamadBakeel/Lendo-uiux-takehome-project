import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class LinesChart extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
          },
          yaxis: {
            categories: ['0', '10k SAR', '20k SAR', '30k SAR'],
            labels: {
              formatter: function (value) {
                return value + 'K SAR';
              }
            }
          },
          dataLabels: {
            enabled: false // Disable data labels inside the columns
          },
          plotOptions: {
            bar: {
              borderRadius: 5, // Set border radius to make columns a bit rounded
              horizontal: false,
              stacked: true // Enable stacking to hide the second series column
            }
          },
          chart: {
            toolbar: {
              show: false // Hide the download option
            },
            offsetY: 20,
          }
        },
        series: [{
          name: 'spent',
          data: [4, 25, 18, 10, 26, 19, 0],
        },
        {
          name: 'expected',
          data: [null, null, null, null, null, null, 30], // Use null for the series you want to hide
        },
      ]
      }
    }
  
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type="bar" width={'100%'} height={194} />
      )
    }
  }
  

function InvestedStats() {
  return (
    <div className="card">
    <h2 className="cardTitle">
    Invested
    <img src="./help.svg" alt="" />
    </h2>
    <div className="cardChart">
      <LinesChart/>
    </div>
  </div>
  )
}

export default InvestedStats