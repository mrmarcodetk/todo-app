import IconMoon from '@/assets/icons/icon-moon.svg';
import BgDesktopLight from '@/assets/images/bg-desktop-light.jpg';
import {
  BgBackgroundDown, BgFigureCenter, BgImageTop, Main, TitleAndTheme
} from '@/pages/styled-components/home.styles';

import { SearchBar } from '@/pages/components';

const Home = () => {
  return (
    <Main>
      <section>
        <BgImageTop>
          <figure>
            <img src={BgDesktopLight} alt="background image desktop light" />
          </figure>
        </BgImageTop>
        <BgFigureCenter>
          <TitleAndTheme>
            <h1>Todo</h1>
            <figure>
              <img src={IconMoon} alt="Icon sun" />
            </figure>
          </TitleAndTheme>
          <SearchBar />
        </BgFigureCenter>
        <BgBackgroundDown />
      </section>
    </Main>
  )
}

export default Home;