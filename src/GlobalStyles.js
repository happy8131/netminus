import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    html,body{
        width:100%;
        height:100vh;
    }
    a{
        all:unset;
    }
`;
export default GlobalStyles;
