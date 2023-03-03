import { Outlet, NavLink } from 'react-router-dom';
import { Global } from '@emotion/react';
import { Logo } from '../../icons/Logo';
import { Nav } from '../../components/nav/Nav';
import { Links } from '../../components/links/Links';
import { Container } from '../../components/container/Container';
import { Wrapper } from '../../components/wrapper/Wrapper';
import { GlobalStyles } from '../../styles/global/Global';
import { Reset } from '../../styles/reset/Reset';

export const Navigation = () => (
  <>
    <Global styles={[Reset, GlobalStyles]} />
    <Container>
      <Wrapper>
        <Nav>
          <Logo />
          <Links nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </Links>
        </Nav>
        <Outlet />
      </Wrapper>
    </Container>
  </>
);
