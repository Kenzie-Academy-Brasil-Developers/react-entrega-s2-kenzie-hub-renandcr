import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        background-color: #000000;
    }
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
    }
    button{
        cursor: pointer;
    }
    :root{
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --Color-primary-negative:#59323f;

        --grey-4:#121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #868e96;
        --grey-0: #f8f9fa;

        --sucess: #3fe864;
        --negative: #e83f5b;
    }

`;

export const primary = "#ff577f";
export const focus = "#ff427f";
export const grey_4 = "#121214";
export const grey_3 = "#212529";
export const grey_2 = "#343b41";
export const grey_1 = "#868e96";
export const grey_0 = "#f8f9fa";
export const sucess = "#3fe864";
export const negative = "#59323f";

export { GlobalStyle };
