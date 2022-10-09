import React from 'react'
import DiretaFilho from './DiretaFilho'

export default () => {
    return (
        <div>
            <DiretaFilho texto="Ana Harume" numero={28} bool={true}></DiretaFilho>
            <DiretaFilho texto="Gabriel" numero={25} bool={false}></DiretaFilho>
        </div>
    )
}