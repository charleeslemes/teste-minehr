import { useState } from 'react';
import {} from './styled';
import ApexCharts from 'react-apexcharts'


export default function GraphBar(){

    const [series, setSeries] = useState({series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]})
      

    const [options, seetOptions] = useState({
        options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
              categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                'United States', 'China', 'Germany'
              ],
            }
          },
    })
   

    return(
        <>

        <ApexCharts
         options={options.options} 
         series={series.series} 
         type="bar"  
         height={350} 
         width={500} />

        </>
    )
}

