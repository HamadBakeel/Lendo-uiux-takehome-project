import React, { Component, useState } from 'react';
import './Scss/App.scss'
import Chart from 'react-apexcharts'
import ReactApexChart from 'react-apexcharts';
import Accordion from './Components/Accordion';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';

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



function App() {
  const [active, setActive] = useState(true)
  return (
    <>
      <div className="body">
        <Sidebar/>
        <div className="page">
          <Header/>
          <div className="content">
            <div className="autoInvestment">
              <h1>Auto Investment</h1>

              <div className="activate">
                <span>{active ? 'Active' : 'Not Active'}</span>
                <label class="switch" for="checkbox">
                  <input type="checkbox" onChange={()=>setActive(!active)} checked={active} id="checkbox" />
                  <div class="slider round"></div>
                </label>
              </div>
            </div>

            <div className="card card-1">
              <div className="conservative">
                <h2>
                  Conservative  
                </h2>
                
                <h3>
                  10-14%
                </h3>

                <h4>
                  Interest Rate
                </h4>
              </div>

              <div className="cardContent">
                <div className="top">
                  <div className="item">
                    <h3 className='active'>
                      <span style={{color: !active ? 'red' : ''}}>{active ? 'Active' : 'Not Active'}</span>
                    </h3>
                    <p>Status</p>
                  </div>
                  <div className="item">
                    <h3 className=''>1500 SAR</h3>
                    <p>Max. Investement</p>
                  </div>
                  <div className="item">
                    <h3 className=''>26</h3>
                    <p>Loans Funded</p>
                  </div>
                </div>
                <div className="bottom">
                  <p className="note">
                    * Strategy started at 20th March 2021
                  </p>
                  <div className="buttons">
                    <button className="btn orange">
                      Stop
                    </button>
                    <button className="btn outline">
                      Change Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="stats">
              <div className="card">
                <h2 className="cardTitle">
                Invested
                <img src="./help.svg" alt="" />
                </h2>
                <div className="cardChart">
                  <LinesChart/>
                </div>
              </div>
              <div className="card">
                <h2 className="cardTitle">
                  Excepted Risk Score Distribution
                </h2>
                <div className="cardChart">
                  <ApexChart/>
                </div>
              </div>
            </div>

            <Accordion/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
