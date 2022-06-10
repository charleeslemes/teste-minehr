import { createGlobalStyle } from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap');
</style>

export default createGlobalStyle`*{

    margin:0;
    padding: 0;
    box-sizing: border-box;
    

}

html,body, #root{
    height: 100%;
    font-family: 'Montserrat', sans-serif;
}

`