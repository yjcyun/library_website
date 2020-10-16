import React from 'react'
import styled from 'styled-components'

const Burger = ({ open, setOpen, setOpenAccount }) => {
  return (
    <BurgerStyled open={open} onClick={() => {
      setOpen(!open);
      setOpenAccount(false);
    }}>
      <div />
      <div />
      <div />
    </BurgerStyled>
  )
}

const BurgerStyled = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index:10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.15rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.2s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${props => props.open ? '0' : '1'};
      transform: ${props => props.open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (min-width: 996px) {
    display: none;
  }
`

export default Burger