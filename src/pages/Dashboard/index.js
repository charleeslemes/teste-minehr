import {Titulo_filtro,Titulo,Filtro, ContainerGraficos,Form} from './styled';
import {FaFilter} from 'react-icons/fa';
import GraphBar from '../../components/GraphBar';
import GraphicScatter from '../../components/GraphScatter';
import { useState } from 'react';


export default function Dashboard(props){
 const [filtro, setFiltro] = useState('all');
 const [modal, setModal] = useState(false);

    function handleSelect(el){
        setFiltro(el.target.value);
    }

    function btnFiltrar(){
     if(modal){
        setModal(false);
     }
     else{
        setModal(true);
     }
    }

    return(
        <>
            <Titulo_filtro>
                <Titulo>
                <h1>Dashboard</h1>
                <h4>Desafio Técnico Frontend</h4>
                </Titulo>
                <Filtro onClick={btnFiltrar}>
                    <FaFilter/>
                    <span>Filtrar</span>
                </Filtro>
                {
                modal?
                <Form >
                    <select onChange={handleSelect}>
                        <option value="all" selected>Todos</option>
                        <option value="barras">Barras</option>
                        <option value="scatter">Scatter</option>
                    </select>
                </Form>
                :
                <></>
 
            }

            </Titulo_filtro>

            <ContainerGraficos>
                <GraphBar filtro={filtro}/>
                <GraphicScatter filtro={filtro}/>
            </ContainerGraficos>

        </>
    )
}