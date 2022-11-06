import { useNavigate } from 'react-router-dom'; 

import { Button } from '../components/buttons';
import { Header } from '../components/header';
import { Container, TextContent, Title, TitleHighLight } from './styles'
import Banner from '../../assets/banner.png'

const Home = () => {

  const navigate = useNavigate();

  const HandleClikSignIn = () => {
    navigate('/login')
  }

  return(<>
    <Header />
    <Container>
      <div>
        <Title>
          <TitleHighLight>
            Codifique
            <br />
          </TitleHighLight>
          o seu futuro global agora!
        </Title>
        <TextContent>
        Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
        </TextContent>
        <Button title='Começar agora' variant='secondary' onClick={HandleClikSignIn} />
      </div>
      <div>
        <img src={ Banner } alt="Banner" />
      </div>
    </Container>
  </>)
}

export { Home }