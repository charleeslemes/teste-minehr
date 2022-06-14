import styled from "styled-components";


export const Titulo_filtro = styled.div`
    padding: 0 3%;
    width: 100%;
    align-items: center;
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    position: relative;
`;


export const Titulo = styled.div`
    margin-top: 34px;
    h1{
        font-weight: 700;
        color:#5D405C;
        font-size: 28px;
    }
    h4{
        margin-top: 3px;
        font-size: 14px;
        color: #828282;
        font-weight: 500;
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


export const ContainerGraficos = styled.div`
    width: 100%;
    border-radius: 10px;
    max-width: 1300px;
    position: relative;
    margin: 50px auto 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media screen and (max-width: 1000px){
        flex-direction: column;
    }

`;

export const BoxBar = styled.div`
    margin: 10px;
    padding: 20px;
    width: 50%;
    box-shadow: 0 0 20px #0000001A;
    @media screen and (max-width: 1000px){
        width: 90%;
        margin: 10px auto;
    }
`;

export const BoxScatter = styled.div`
    margin: 10px;
    padding: 20px;
    width: 50%;
    box-shadow: 0 0 20px #0000001A;

    @media screen and (max-width: 1000px){
        width: 90%;
        margin: 10px auto;
    }
`;


export const Form = styled.form`
    position: absolute;
    bottom: 2%;
    right: 5%;

    @media screen and (max-width: 768px){
        right: 5%;
    }
`;