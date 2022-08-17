// import { createContext } from 'react'

import React, { createContext, Dispatch, useEffect, useReducer } from 'react'
import {
  DateActions,
  DateReducer,
  EventActions,
  EventReducer,
  Types,
} from './reducer'

type EventStateType = {
  id: number
  date: string
  timeStarts: string
  timeEnds: string
  title: string
  locale: string
  description: string
}

type EventContextType = {
  events: EventStateType[]
  date: Date
}

export const initialState = {
  events: [
    {
      id: 555445,
      date: 'string',
      timeStarts: '01:00',
      timeEnds: '03:00',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
    {
      id: 54445,
      date: 'string',
      timeStarts: '04:10',
      timeEnds: '05:30',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
    {
      id: 445,
      date: 'string',
      timeStarts: '06:35',
      timeEnds: '09:10',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
    {
      id: 59445,
      date: 'string',
      timeStarts: '03:00',
      timeEnds: '05:10',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
    {
      id: 54545445,
      date: 'string',
      timeStarts: '22:00',
      timeEnds: '21:20',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
    {
      id: 44567,
      date: 'string',
      timeStarts: '15:45',
      timeEnds: '18:30',
      title: 'string',
      locale: 'string',
      description: 'stringstringstringstringstringstringstring',
    },
  ],
  date: new Date(),
}

interface ChildrenProps {
  children: React.ReactNode
}

export const Context = createContext<{
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

export const EventProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(mainReducer, initialState)

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  )
}
