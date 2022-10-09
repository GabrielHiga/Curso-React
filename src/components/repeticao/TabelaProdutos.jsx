import React from 'react'
import './TabelaProdutos.css'
import produtos from '../../data/produtos'

export default () => {
    const tabela = produtos.map(produtos => {
        return (
            <tr>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>{produtos.preco}</td>
            </tr>
        )
    })

    return (
        <table className="tabela">
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Preço</th>
            </tr>
            {tabela}
        </table>
    )
}