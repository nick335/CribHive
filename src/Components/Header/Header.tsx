import React from 'react'
import ResponsiveImage from '../Utility/ResponsiveImage';
import Logo from '../../../public/images/header/Logo.svg'
import styles from './header.module.css'
import MenuBar from './MenuBar';
import MenuLists from './MenuLists';
import NavBtn from './NavBtn';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-bgPrimary border-b border-textSecondary shadow-navShadow'>
     <nav className=' w-[90%] mx-auto flex items-center justify-center py-2 lg:justify-between lg:py-7   '>
      <Link href='/' className='w-fit ml-auto lg:ml-0'>
        <ResponsiveImage 
          url={Logo}
          alt={'logo'}
          style={styles.logo}
          addons=' '
        />
      </Link> 
      <MenuLists />
      <MenuBar />
      <NavBtn />
     </nav>
    </header>
  )
}

export default Header;