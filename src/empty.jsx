import React from 'react'

function Empty() {
    let scrnWidth = window.innerWidth
    let scrnHeight = window.innerHeight

  return (
    <div style={{width:scrnWidth,minHeight:scrnHeight/2, display:"flex",justifyContent:"center",alignItems:"center"}}>
        <img src="/images/empty.png" alt="" />
    </div>
  )
}

export default Empty