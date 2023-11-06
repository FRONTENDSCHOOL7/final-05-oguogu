import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /*======== Variable CSS ========*/
    :root {
        /*---------- Color ----------*/
        --white: #FFFFFF;
        --black: #000000;

        --red-01: #EB5757;
        
        --main-color-01: #FF6875;
        --main-color-02: #FFC5CA;
        --main-color-03: #FFFBFB;

        --gray-01: #767676;
        --gray-02: #DBDBDB;
        --gray-03: #F2F2F2;
        --gray-04: #c4c4c4;

        /*---------- Font ----------*/
        --main-font: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        
        --regular: 400;
        --medium: 500;

    }


    /*======== Common Style ========*/
    .a11y-hidden {
        overflow: hidden;
        clip: rect(0 0 0 0); /* IE 6,7 */
        clip: rect(0,0,0,0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
        position: absolute;
        top: 0;
        left: 0;
    }
    
    *, :after, :before {
        box-sizing:border-box;
    }

    button {
        border: none;
        background-color: transparent;
        font-family: var(--main-font);
        cursor: pointer;
    }

    a {
        color: inherit;
        text-decoration: none;
        outline: none;
        cursor: pointer;
    }
    
    input,input:focus,textarea,textarea:focus {
        color: inherit;
        text-decoration: none;
        outline: none;
    }

    body {
        font-family: var(--main-font);
        font-weight: var(--regular);
        background-color: var(--gray-03);
    }

    #root {
        width: 390px;
        height: 100vh;
        margin: 0 auto;
        background-color: var(--white);
        position: relative;
    }
`;

export default GlobalStyle;
