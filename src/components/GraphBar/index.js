import { useState } from 'react';
import './style.css';
import ApexCharts from 'react-apexcharts';
import menu from '../../assets/menu.svg';
import info from '../../assets/info.svg';
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

          toolbar: {
            show: true,
            offsetX: 0,
            offsetY: 0,
            tools: {
              download:`<img src=${menu}>`,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan:true,
              reset:true,
              customIcons: [{
                icon: `<img src=${info}>`,
                title: 'Gráfico Scatter',
                index:-50,
                class: 'custom-info',
                click: function (chart, options, e) {}
            }]
            },
            export: {
              csv: {
                filename: undefined,
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename: undefined,
              },
              png: {
                filename: undefined,
              }
            },
            autoSelected: 'zoom' 
          },
          
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

