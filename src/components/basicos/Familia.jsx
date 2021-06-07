import React from 'react'
import FamiliaMembro from './FamiliaMembro'

export default props => {
    return (
        <div>
            <FamiliaMembro nome="Gabriel" sobrenome={props.sobrenome}></FamiliaMembro>
            <FamiliaMembro nome="Silvia"></FamiliaMembro>
            <FamiliaMembro nome="Ana" sobrenome="Higa"></FamiliaMembro>
        </div>
    )
}