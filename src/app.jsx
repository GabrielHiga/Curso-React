import React from 'react'

import Card from './components/layout/card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import card from './components/layout/card'

export default props => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>

            <Card titulo="Exemplo de card"></Card>
            <Fragmento></Fragmento>
            <ComParametro
                titulo="Segundo componente"
                aluno="Gabriel"
                nota={9.5}> 
            </ComParametro>
            <Primeiro></Primeiro>
            <Aleatorio
                min={1}
                max={60}
            ></Aleatorio>
        </div>
    )
}
