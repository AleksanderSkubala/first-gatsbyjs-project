import React from "react"
import { Link } from 'gatsby'
import styled, { createGlobalStyle , ThemeProvider } from "styled-components"
import darkTheme from './utils/theme.js'

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;

    font-family: 'Montserrat', sans-serif;
    text-align: center;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${ ({theme})=>theme.colors.pink };
  width: 100vw;
  height: 100vh;
  color: ${ ({theme})=>theme.colors.white };
`

const H1 = styled.h1`
  font-weight: ${ ({theme})=>theme.fonts.bold };
  font-size: 2.5em;
`

const Button = styled(Link)`
  border: 2px solid;
  border-radius: 50px;
  cursor: pointer;
  position: relative;

  padding: 10px 15px;
  text-decoration: none;
  color: white;
  font-weight: ${ ({theme})=>theme.fonts.semiBold };

  box-shadow: none;
  transition: box-shadow .2s ease-in-out;
  will-change: box-shadow;

  :hover{
    box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.2);
  }
`

const IndexPage = () => (
  <ThemeProvider theme={darkTheme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <H1>Hi People</H1>
        <Button to='about'>About</Button>
      </StyledWrapper>
    </>
  </ThemeProvider>
)

export default IndexPage
