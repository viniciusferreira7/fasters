/* eslint-disable no-unused-vars */
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export enum Types {
  Create = 'CREATE_EVENT',
  FIlter = 'FILTER_EVENT',
  Delete = 'DELETE_EVENT',
  INIT = 'INIT_STORED',
  Add = 'ADD_DATE',
}

type EventType = {
  id: number
  date: string
  timeStarts: string
  timeEnds: string
  title: string
  locale: string
  description: string
}

type EventPayload = {
  [Types.Create]: {
    id: number
    date: string
    timeStarts: string
    timeEnds: string
    title: string
    locale: string
    description: string
  }
  [Types.Delete]: {
    id: number
  }
  [Types.INIT]: EventType[]
  [Types.FIlter]: {
    title: string
  }
}

type DatePayload = {
  [Types.Add]: {
    date: Date
  }
}

export type EventActions =
  ActionMap<EventPayload>[keyof ActionMap<EventPayload>]

export type DateActions = ActionMap<DatePayload>[keyof ActionMap<DatePayload>]

export const EventReducer = (
  state: EventType[],
  action: EventActions | DateActions,
) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      return [
        {
          id: action.payload.id,
          date: action.payload.date,
          timeStarts: action.payload.timeStarts,
          timeEnds: action.payload.timeEnds,
          title: action.payload.title,
          locale: action.payload.locale,
          description: action.payload.description,
        },
        ...state,
      ]
    case 'FILTER_EVENT':
      return state.filter((event) => event.title.includes(action.payload.title))

    case 'DELETE_EVENT':
      return [...state.filter((event) => event.id !== action.payload.id)]

    case 'INIT_STORED':
      return action.payload
    default:
      return state
  }
}

export const DateReducer = (
  state: Date,
  action: EventActions | DateActions,
) => {
  switch (action.type) {
    case 'ADD_DATE':
      return action.payload.date
    default:
      return state
  }
}
