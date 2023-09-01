import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './style'
import { CylceContext } from '../../contexts/CycleContext'

export function History() {
  const { cycles } = useContext(CylceContext)
  return (
    <HistoryContainer>
      <h1>Meu Histórico</h1>

      <pre>{JSON.stringify(cycles)}</pre>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="red">Interrompida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluida</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefa</td>
              <td>20 minutos</td>
              <td>Há cerca de 1 hora</td>
              <td>
                <Status statusColor="green">Concluida</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
