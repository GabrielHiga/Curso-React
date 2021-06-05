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
            <h1>Fundamentos React</h1>

            <Card titulo="#04 - Desafio Aleatório">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="#02 - Parâmetro">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Gabriel"
                    nota={9.5}> 
                </ComParametro>
            </Card>
            
            <Card titulo="#01 - Primeiro Componente">
                <Primeiro></Primeiro>
            </Card>

            
            
            
            
        </div>
    )
}
