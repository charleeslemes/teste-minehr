import { useState } from 'react';
import {} from './styled';
import ApexCharts from 'react-apexcharts';
import menu from '../../assets/menu.svg';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>



export default function GraphBar(){

    const [series, setSeries] = useState({series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }]})


    const [options, seetOptions] = useState({
        options: {
            chart: {
              type: 'bar',
              height: 350,
              widtd: '100%'
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
            },

            title: {
                text:'Barras',
                align: 'left',
                margin: 10,
                offsetX: 50,
                offsetY: 0,
                floating: true,
                style: {
                  fontSize:  '16px',
                  fontWeight:  'bold',
                  fontFamily: 'Montserrat sans-serif' ,
                  color:  '#5D405C'
                },
        
            },

            colors: '#5D405C'

          },
    })
   

    return(
        <>

        <ApexCharts
         options={options.options} 
         series={series.series} 
         type="bar"  
         height={350} 
            />

        </>
    )
}

