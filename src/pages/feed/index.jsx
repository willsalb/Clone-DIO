// import { Button } from '../components/buttons';
import { Header } from '../components/header';
import { Container, Column, Title, TitleHighLight} from './styles';
import  { Card }  from '../components/card';
import { UserInfo } from '../components/userinfo';

const Feed = () => {
  return (<>
    <Header autenticado={true}/>
    <Container>
      <Column flex={3}>
        <Title>Feed</Title>
        <Card />
        <Card />
        <Card />
        <Card />
      </Column>
      <Column flex={1}>
        <TitleHighLight>TOP 5 DA SEMANA</TitleHighLight>
        <UserInfo percentual={80} nome="Will Souza" img='https://avatars.githubusercontent.com/u/105980879?v=4'/>
        <UserInfo percentual={90} nome="Will Souza" img='https://avatars.githubusercontent.com/u/105980879?v=4'/>
        <UserInfo percentual={70} nome="Will Souza" img='https://avatars.githubusercontent.com/u/105980879?v=4'/>
        <UserInfo percentual={60} nome="Will Souza" img='https://avatars.githubusercontent.com/u/105980879?v=4'/>
        <UserInfo percentual={50} nome="Will Souza" img='https://avatars.githubusercontent.com/u/105980879?v=4'/>
      </Column>
    </Container>
  </>)
}

export { Feed }