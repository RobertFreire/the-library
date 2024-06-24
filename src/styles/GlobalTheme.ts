import { createGlobalStyle } from 'styled-components';

export type Roundness = 'full' | 'lg' | 'md' | 'sm';
export const getBorderRadius = (roundness: Roundness) => {
	switch (roundness) {
		case 'full':
			return '50%';
		case 'lg':
			return '10rem';
		case 'md':
			return '0.8rem';
		case 'sm':
			return '0.4rem';
		default:
			return '0.8rem'; // default to md
	}
};

export const GlobalTheme = createGlobalStyle`
  :root {
    --primary-green: #067C7A; 
    --primary-orange: #EA7C2D;
    --light-green: #0B9D9A;
    --light-gray: #F7F7F7;
    --light-gray2: #F0F1F5;
    --dark-gray: #B3B3C1;

    --black: #000000;
    --white: #FFF;


    font-size: 62.5%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "DM Sans", sans-serif;
    
  }

  html, body {
    height: 100%;
    background-color: #F6F7F9;
  }

  html {
    scroll-behavior: smooth;
  }
      
  body {
    background: var(--white);
    color: var(--black);
    -webkit-font-smoothing: antialiased;
    font-family: 'Poppins', sans-serif;
    & pre {
      background: var(--white);
      color: var(--dark-gray);
      -webkit-font-smoothing: antialiased;
      font-family: 'Poppins', sans-serif;
    }
  }

  a, button {
    cursor: pointer;
    text-decoration: 0;
    border: none;
    transition: all 0.2s;
    -webkit-font-smoothing: antialiased;
   font-family: "DM Sans", sans-serif;
    &:hover {
      filter: brightness(0.9);
    }
    &:disabled {
      opacity: .6;
      cursor: not-allowed;
      background-color: #C5C5C5;
      border: none;
      &:hover{
        filter: none;
      }   
    }
  }
  input {
    -webkit-font-smoothing: antialiased;
   font-family: "DM Sans", sans-serif;
    &:disabled {
      opacity: .75;
      cursor: not-allowed;
    }
  }

  @media(max-width: 700px) {
    :root {
      font-size: 56%;
    }
  }

    
  //Removing steps from input number
  //
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;
