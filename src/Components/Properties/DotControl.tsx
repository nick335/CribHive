import React, { useState } from 'react'

interface props {
  activeIdx: number,
  idx: number,
  changeIndex: ( idx: number) => void
}

const DotControl = ({idx, changeIndex, activeIdx}: props) => {
  const [active, setActive] = useState(false)
  return (
    <div className={`w-2 h-2 rounded-full cursor-pointer ${ idx === activeIdx ? 'bg-bgOrange'  : 'bg-bgLight' } transition-all duration-100 ease-in `} onClick={() => changeIndex(idx)}>
    </div>
  )
}

export default DotControl