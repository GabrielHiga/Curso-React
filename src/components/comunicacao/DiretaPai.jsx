import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Filho 1" numero={23} bool={true}></DiretaFilho>
            <DiretaFilho texto="Gabriel" numero={21} bool={false}></DiretaFilho>
        </div>
    )
}