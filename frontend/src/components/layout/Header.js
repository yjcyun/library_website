import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { VerticalDivider } from '../../style/globalStyle'
import Burger from '../Burger'

const Header = ({ open, setOpen, openAccount, setOpenAccount }) => {
  return (
    <HeaderStyled className='d-flex'>
      <Burger
        open={open}
        setOpen={setOpen}
        setOpenAccount={setOpenAccount}
      />
      <div className='page-center d-flex header-center'>
        <div className='d-flex logo-container'>
          <Link to='/' className='logo'>library</Link>
        </div>
        <div className='d-flex header-links'>
          {/* Desktop */}
          <div className='desktop'>
            <Link to='/books' className='nav-link'>Books</Link>
            <VerticalDivider />
            <Link to='/login' className='nav-link'>Login</Link>
            <Link to='/user/dashboard' className='nav-link'>Account</Link>
          </div>
          {/* Mobile */}
          <div className='mobile'>
            <button className='mobile-btn'onClick={() => {
              setOpenAccount(!openAccount);
              setOpen(false);
            }}>
              <FaUserCircle className='icon' />
            </button>
          </div>
        </div>
      </div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.nav`
  padding: 1rem;
  align-items: center;
  background: var(--primary-clr);
  height: 5rem;

  a {
    color: #fff;
  }

  .header-center{
    justify-content: space-between;
    width: 100%;
  }

  .nav-link {
    margin-left: 2.5rem;
  }

  .logo-container {
    font-size: 2rem;
    margin-left: 1rem;
  }

  .header-links {
    align-items: center;
    .desktop {
      display: none;
    }
    .icon {
      font-size: 1.5rem;
      margin-top: 3px;
    }
  }

  .mobile-btn {
    background: transparent;
    border: none;
    color: #fff;
  }

  @media (min-width: 996px) {
    .logo-container {
      font-size: 2.5rem;
    }

    .header-links {
      .desktop {
        display: flex;
        align-items: center;
      }
      .mobile {
        display: none;
      }
    }
  }
`

export default Header