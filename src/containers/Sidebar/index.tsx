import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Eduardo Antunes</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        eduardoantune12
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Fullstack Python
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
