import './app.css'
import React from 'react'

import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import card from './components/layout/card'

export default props => {
    return (
        <div className="app">
            <h1>Fundamentos React</h1>

            <div className="cards">
                <Card titulo="#07 - Desafio Tabela Repetição" color="#C315E0">
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color="#FF4C65">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
                    <Familia sobrenome="Higa Bastos">
                        <FamiliaMembro nome="Gabriel" />
                        {/* <FamiliaMembro nome="Silvia" />
                        <FamiliaMembro nome="Ana" /> */}
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color="#E94C6F">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#02 - Parâmetro" color="#E8B71A">
                    <ComParametro
                        titulo="Segundo Componente"
                        aluno="Gabriel"
                        nota={9.5}> 
                    </ComParametro>
                </Card>
                
                <Card titulo="#01 - Primeiro Componente" color="#588C73">
                    <Primeiro></Primeiro>
                </Card>
            </div>

        </div>
    )
}
