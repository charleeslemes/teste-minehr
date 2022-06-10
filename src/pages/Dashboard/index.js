import {Titulo_filtro,Titulo,Filtro} from './styled';
import Header from '../../components/Header';
import {FaFilter} from 'react-icons/fa'

export default function Dashboard(){
    return(
        <>
        <Header/>

            <Titulo_filtro>

                <Titulo>
                <h1>Dashboard</h1>
                <h4>Desafio Técnico Frontend</h4>
                </Titulo>

                <Filtro>
                        <FaFilter/>
                        <span>Filtrar</span>
                </Filtro>

            </Titulo_filtro>

        </>
    )
}