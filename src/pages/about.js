import React from 'react'
import { Link } from 'gatsby'
import styled, { ThemeProvider , createGlobalStyle } from 'styled-components'
import darkTheme from '../utils/theme.js'

console.table(darkTheme);

const GlobalStyle = createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
    }

    *, *::after, *::before {
        box-sizing: border-box;
    }
`

const Wrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;

    background-color: ${ ({theme})=>theme.colors.dark };
`

const H1 = styled.h1`
    font-size: ${ ({theme})=>theme.fonts.bold };
    color: ${ ({theme})=>theme.colors.white };
`

const Button = styled(Link)`
    color: ${ ({theme})=>theme.colors.primary };
    font-weight: ${ ({theme})=>theme.fonts.semiBold };
    padding: 10px 15px;
    text-decoration: none;

    border: 2px solid;
    transition: transform .3s ease-in-out;

    :hover {
        transform: scale(1.03);
    }
`

const About = () => (
    <ThemeProvider theme={darkTheme}>
        <>
        <GlobalStyle />
        <Wrapper>
            <H1>This is an about page!</H1>
            <Button to="/">GO BACK!</Button>
        </Wrapper>
        </>
    </ThemeProvider>
)

export default About