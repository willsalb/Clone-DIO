import React from "react";

import logo from "../../../assets/logo.png"

import { Button } from "../buttons";

import {
  BuscarInputContainer,
  // Column,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPic,
  Wrapper
} from './styles';

const Header = ({autenticado}) => {
  return(
    <Wrapper>
      <Container>
      <Row>
          <img src={logo} alt="Logo" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
              <Input placeholder="Pesquisar" />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPic src='https://avatars.githubusercontent.com/u/105980879?v=4'/>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
          </>
          )}
        </Row>
      </Container>
    </Wrapper>
  )
}

export { Header }