import styled from "styled-components";


export const Titulo_filtro = styled.div`
    width: 100%;
    align-items: center;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
`;


export const Titulo = styled.div`
    margin-top:34px ;
    h1{
        font-weight: bold;
        font-size: 28px;
        color: #5d405c;

    }

    h4{
        font-size: 14px;
        font-weight: 500;
        margin-top: 3px;
        color: #828282;
    }

`;

export const Filtro = styled.div`
    cursor: pointer;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: #5d405c;
    display: flex;
    justify-content: center;
    align-items: center;

    svg{
        color: #fff;
        font-size: 14px;
        margin-right: 5px;
    }

    span{
        font-size: 14px;
        color: #F7F7F7;
    }

`;