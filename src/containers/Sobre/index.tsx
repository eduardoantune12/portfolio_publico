import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laboriosam
      molestiae aliquam maxime et, necessitatibus perspiciatis facilis iure
      corrupti sed, dolorum ut doloremque nostrum beatae quo autem soluta
      consectetur quidem.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=eduardoantune12&show_icons=true&theme=dracula&include_all_commits=true&count_private=true&cache_seconds=1800" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=eduardoantune12&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
