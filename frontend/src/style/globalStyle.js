import styled from 'styled-components'

export const VerticalDivider = styled.div`
  width: 100%;
  height: 1px;
  background: silver;
  margin: 0.5rem 0;

  @media(min-width: 996px) {
    width: 1px;
    height: 1rem;
    background: silver;
    margin-left: 2.5rem;
  }
`