import React from "react";
import { Container, Progress, NameText, UserPicture } from './styles'

const UserInfo = ({nome, img, percentual}) => {
  return (
    <Container>
      <UserPicture src={img}/>
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual}/>
      </div>
    </Container>
  )
}

export { UserInfo }