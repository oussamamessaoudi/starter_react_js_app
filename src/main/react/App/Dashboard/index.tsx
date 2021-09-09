import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { Env } from '../../_core/Env'
import { IUser } from '../../_core/Controller/Client/Authentification/models';

import logo from "../../../resources/images/logo.svg";



export function Dashboard() {
    const { state } = useLocation<IUser>();

    return (
        <Container>
            <Header>
                <Logo src={logo} alt='logo' />
                <p>Username: {state.username}</p>
                <p>Token: {state.token}</p>
                <p>Roles: {JSON.stringify(state.roles)}</p>
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
