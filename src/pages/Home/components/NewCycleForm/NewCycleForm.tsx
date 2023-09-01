import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './style'
import { useContext } from 'react'
import { CylceContext } from '../../../../contexts/CycleContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CylceContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        id="task"
        list="task-suggetions"
        placeholder="Dê um nome ao seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggetions">
        <option value="Project 1" />
        <option value="Project 2" />
        <option value="Project 3" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
