import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0
    return (
        <div>
            <h2>O número {props.numero} é:</h2>
            { isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>
    )
}