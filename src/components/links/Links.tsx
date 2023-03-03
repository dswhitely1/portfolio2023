import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface LinksProps {
  nav?: boolean;
}

export const Links = styled.div<LinksProps>`
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  width: 30.9rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  ${(props) =>
    props.nav &&
    css`
      display: none;
      @media (min-width: 501px) {
        display: inherit;
      }
    `}
`;
