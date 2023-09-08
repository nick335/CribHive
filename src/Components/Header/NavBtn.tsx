import React from 'react'
import Link from 'next/link'

const NavBtn = () => {
  return (
    <div className='hidden lg:flex items-center gap-6 font-jhengHei font-bold'>
     <button className='btnSecondary rounded-lg h-10 w-36'>
      <Link href='/login'>
        Login
      </Link>
      </button>
     <button className='btnPrimary h-10 w-[156px] rounded-lg'><Link href='addaproperty'>Add a Property</Link></button>
    </div>
  )
}

export default NavBtn