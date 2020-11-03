import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const MobileAccount = ({ open, setOpen }) => {
  return (
    <MobileHeaderItemsStyled className='d-flex' open={open}>
      <div className='d-flex'>
        <ul>
          <li onClick={() => setOpen(!open)}>
            <Link to='/books/fiction' className='nav-link'>Account</Link>
          </li>
          <li onClick={() => setOpen(!open)}>
            <Link to='/books/non-fiction' className='nav-link'>Login</Link>
          </li>
        </ul>
      </div>
    </MobileHeaderItemsStyled>
  )
}

const MobileHeaderItemsStyled = styled.div`
  background: var(--primary-clr-2);
  padding: 1rem 0;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  a {
    color: #fff;
    padding: 1rem;
  }

  .d-flex {
    flex-direction: column;
    width: 100%;
  }

  li {
    padding: 1rem 0;
  }

  @media (min-width: 996px) {
    display: none;
  }
`

export default MobileAccount