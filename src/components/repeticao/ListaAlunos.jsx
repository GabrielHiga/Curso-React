import alunos from '../../data/alunos'

export default () => {
    const listaAlunos = alunos.map(item => {
        let status = (item.nota) > 5 ? 'Aprovado!' : 'Reprovado!';
        return (
            <li key={item.id} className={ status == 'Reprovado!' ? 'reprovado' : 'aprovado'}>
                {item.nome} {item.nota} <span className='status'>{status}</span>
            </li>
        )
    })

    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {listaAlunos}
            </ul>
        </div>
    )

}