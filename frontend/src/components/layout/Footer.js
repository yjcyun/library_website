import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterStyled className='d-flex'>
      <p className='page-center'>
        <span>Inspired by <a href='https://www.torontopubliclibrary.ca/'>Toronto Public Library</a>.</span> 
        <span>Coded by <a href='https://christinayun.ca'>Christina Yun</a>.</span>
      </p>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  background: var(--primary-clr);
  height: 5rem;
  color: #fff;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  text-align: center;

  a {
    color: #acc0ff;
  }

  span {
    display: inline-block;

    :last-child{
      margin-left: 5px;
    }
  }
`

export default Footer