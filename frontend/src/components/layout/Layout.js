import React, { useState } from 'react'
import Footer from './Footer';
import Header from './Header'
import MobileAccount from './MobileAccount';
import MobileMenu from './MobileMenu';


const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);

  return (
    <>
      <Header
        open={open}
        setOpen={setOpen}
        openAccount={openAccount}
        setOpenAccount={setOpenAccount}
      />
      {open && <MobileMenu open={open} setOpen={setOpen} />}
      {openAccount && <MobileAccount open={openAccount} setOpen={setOpenAccount} />}
      <main className='page-center'>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
