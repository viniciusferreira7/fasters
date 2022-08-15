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
  Delete = 'DELETE_EVENT',
  Add = 'ADD_DATE',
}

type EventType = {
  id: number
  date: Date
  time: Date
  title: string
  locale: string
  description: string
}

type EventPayload = {
  [Types.Create]: {
    id: number
    date: Date
    time: Date
    title: string
    locale: string
    description: string
  }
  [Types.Delete]: {
    id: number
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
        ...state,
        {
          id: new Date().getMilliseconds(),
          date: action.payload.date,
          time: action.payload.time,
          title: action.payload.title,
          locale: action.payload.locale,
          description: action.payload.description,
        },
      ]
    case 'DELETE_EVENT':
      return [...state.filter((event) => event.id !== action.payload.id)]
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
