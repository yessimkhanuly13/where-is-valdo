import React from 'react'
import DropdownItem from './DropdownItem'

function Dropdown({pos, coordinates, setVisible}) {
    return (
        <div  style={{position:'absolute', left : pos.x, top : pos.y }}>
            <div style={{width:"4rem", height:"4rem", border:"0.2rem solid", borderRadius:"3rem"}}>

            </div>
                {coordinates.map((el)=>(
                    <DropdownItem data={el} setVisible={setVisible}/>
                ))}
        </div>
  )
}

export default Dropdown