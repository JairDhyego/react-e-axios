import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    font-family: 'Blinker', sans-serif;
}

body{
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
}

ul{
    list-style: none;
}

a{
    text-decoration: none;
    color: #fff;
    opacity: .7;
    transition: .3s;
}

a:hover{
    opacity: 1;
}
p{
    color: #a9abb3;
}


.container{
    max-width: 1000px;
    margin: 2rem auto;
    padding: 0 2rem;
}
`;