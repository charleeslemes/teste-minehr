import { useState } from 'react';
import {} from './styled';
import ApexCharts from 'react-apexcharts';
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>



export default function GraphBar(){

    const [GraphicBar, setGraphicBar] = useState({series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
      }],
      
      options: {
        chart: {
          type: 'bar',
          height: 359,
          widtd: '100%',
          fontFamily: 'Montserrat, sans-serif',
          
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
            margin: 0,
            offsetX: 0,
            offsetY: -3,
            floating: true,
            style: {
              fontSize:  '16px',
              fontWeight:  'bold',
              color:  '#5D405C'
            },
    
        },

        colors: '#5D405C'

      },
    
    })

   

    return(
        <>

        <ApexCharts
         options={GraphicBar.options} 
         series={GraphicBar.series} 
         type="bar"  
         height={350} 
            />

        </>
    )
}

