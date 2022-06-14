import { useState } from 'react';
import ApexCharts from 'react-apexcharts';
import menu from '../../assets/menu.svg';
import info from '../../assets/info.svg';
import './style.css';
import {Container} from './styled';

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
</style>



export default function GraphBar(props){

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
            offsetX: 0,
            offsetY: 0,
            tools: {
              download:`<img src=${menu}>`,
              customIcons: [{
                icon: `<img src=${info}  width="20px" alt="Gráfico Scatter"> `,
                title: 'Gráfico Barras',
                class: 'custom-info',
                index: -1,
                click: function (chart, options, e) {}
            }]
            },
            export: {
              csv: {
                filename: 'GráficoBarras',
                columnDelimiter: ',',
                headerCategory: 'category',
                headerValue: 'value',
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString()
                }
              },
              svg: {
                filename:'GráficoBarras',
              },
              png: {
                filename: 'GráficoBarras',
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

    function filtro(){
      if(props.filtro === 'all'){
        return(
          <>
          <Container>
          <ApexCharts
              options={GraphicBar.options} 
              series={GraphicBar.series} 
              type="bar"  
            />
            </Container>
          </>
        )
      }

      else if(props.filtro === 'barras'){
        return(
          <>
            <Container>
          <ApexCharts
              options={GraphicBar.options} 
              series={GraphicBar.series} 
              type="bar"  
            />
            </Container>
          </>
        )
      }

      else if(props.filtro === 'scatter'){
        return;
      }

    }

   

    return(
        <>

          {filtro()}

        </>
    )
}

