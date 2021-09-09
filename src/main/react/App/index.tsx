import React from 'react'
import styled from 'styled-components'

import { Env } from '../_core/Env'

import logo from "../../resources/images/logo.svg"

const App: React.FunctionComponent = () => {
    return (
        <Container>
            <Header>
                <Logo src={logo} alt='logo' />
                <p>Starter React App</p>
                <Link
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Check starter on GIT
                </Link>
                <p>
                    STANDALONE: {Env.STANDALONE?.toString()}<br />
                    AUTH_API: {Env.AUTH_API}<br />
                </p>
            </Header>
        </Container>
    )
}

const Container = styled.div`
  text-align: center;
`
const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;
`
const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Link = styled.a`
  color: #61dafb;
`

export default App
