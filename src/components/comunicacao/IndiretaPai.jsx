import React from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    
    // nome idade nerd
    function fornecerInormacoes(nome, idade, nerd) {
        console.log (nome, idade, nerd)
    }
    return (
        <div>
            
            <IndiretaFilho></IndiretaFilho>
        </div>
    )
}