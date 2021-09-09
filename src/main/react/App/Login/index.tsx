import React from 'react';
import styled from "styled-components";

import {useController} from "./Controller";
import { Loading } from '../_components/Loading';

import logo from "../../../resources/images/logo.svg";



export function Login() {

    const {apiState, username, password, setUsername, setPassword, handleSubmit} = useController();
    if (apiState.status === "LOADING") return <Loading/>
    return (
        <Form onSubmit={handleSubmit}>

            <ImageContainer>
                <ImageAvatar src={logo} alt="Avatar"/>
            </ImageContainer>

            <Container>
                <label htmlFor="username"><b>Username</b></label>
                <Input type="text" placeholder="Enter Username" name="username" value={username}
                       onChange={setUsername}/>

                <label htmlFor="password"><b>Password</b></label>
                <Input type="password" placeholder="Enter Password" name="password" value={password}
                       onChange={setPassword}/>

                {apiState.status === "ERROR" && <Error>Error of authentication</Error>}
                <Button type="submit">Login</Button>
            </Container>
        </Form>
    )
}

const Error = styled.p`
  color: darkred;
  text-align: center;
`
const Form = styled.form`
    font-family: Arial,
    Helvetica, sans-serif;
    margin: auto;
    border: 3px solid #f1f1f1;
    max-width: 500px;
`
const ImageContainer = styled.div`
    text-align: center;
    margin: 24px 0 12px 0;
`
const ImageAvatar = styled.img`
    width: 40%;
    border-radius: 50%;
`
const Container = styled.div`
    padding: 16px;
`
const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
`
const Button = styled.button`
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    :hover {
      opacity: 0.8;
    }
`
