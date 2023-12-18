import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    font-size:62.5%;
  
}
body{
    background-color:${props => props.theme.background};  
    font-family:${props => props.theme.font};
    overflow-x:hidden;
    color:${props => props.theme.text};
    
}

`

export default GlobalStyle;