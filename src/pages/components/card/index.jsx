import { FiThumbsUp } from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPic
} from './styles'

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://hermes.digitalinnovation.one/articles/cover/7a264c6c-8f6b-42a7-ad5a-d91f93f6776d.png'/>
        <Content>
          <UserInfo>
            <UserPic src='https://avatars.githubusercontent.com/u/105980879?v=4'/>
            <div>
              <h4>Will Souza</h4>
              <p>Há 10 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Pokedex</h4>
            <p>Eu meio que ja tinha visto essa pokeapi antes e ja tinha começado um mini-projeto, mas... <strong>Saiba Mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>#HTML #CSS #JavaScript</h4>
            <p>
              <FiThumbsUp /> 11
            </p>
          </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }