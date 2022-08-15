// import { createContext } from 'react'

import React, { createContext, Dispatch, useReducer } from 'react'
import { DateActions, DateReducer, EventActions, EventReducer } from './reducer'

type EventStateType = {
  id: number
  date: Date
  time: Date
  title: string
  locale: string
  description: string
}

type EventContextType = {
  events: EventStateType[]
  date: Date
}

export const initialState = {
  events: [],
  date: new Date(),
}

interface ChildrenProps {
  children: React.ReactNode
}

const Context = createContext<{
  state: EventContextType
  dispatch: Dispatch<EventActions | DateActions>
}>({
  state: initialState,
  dispatch: () => null,
})

const mainReducer = (
  { events, date }: EventContextType,
  action: EventActions | DateActions,
) => ({
  events: EventReducer(events, action),
  date: DateReducer(date, action),
})

export const EventContext = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
