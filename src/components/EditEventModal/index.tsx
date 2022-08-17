import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useContext,
  useRef,
  useState,
} from 'react'
import { useSpring, animated } from 'react-spring'

import { AiFillCloseCircle } from 'react-icons/ai'

import { Context } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'
import { BackgroundContainer } from '../EventCreationModal/styles'
import { EditEventModalContainer, TimeContainer } from './styles'
import { useFetch } from '../../hooks/useFetch'
import { BsArrowClockwise } from 'react-icons/bs'

interface EditEvent {
  id: number
  date: string
  timeStarts: string
  title: string
  locale: string
  description: string
}

interface ModalProps {
  edit: EditEvent
  openEdit: boolean
  setOpenEdit: Dispatch<SetStateAction<boolean>>
}

export default function EditModal({ edit, openEdit, setOpenEdit }: ModalProps) {
  const { dispatch } = useContext(Context)

  // eslint-disable-next-line no-unused-vars
  const [disabledButton, setDisabledButton] = useState([])
  const [locale, setLocale] = useState('')

  // eslint-disable-next-line no-unused-vars
  const { data } = useFetch(locale)

  const modalRef = useRef()
  const dataRef = useRef<HTMLInputElement>()
  const timeStartsRef = useRef<HTMLInputElement>()
  const timeEndsRef = useRef<HTMLInputElement>()
  const titleRef = useRef<HTMLInputElement>()
  const localeRef = useRef<HTMLInputElement>()
  const descriptionRef = useRef<HTMLTextAreaElement>()

  function handleCloseModal(event: MouseEvent) {
    if (modalRef.current === event.target) {
      setOpenEdit(false)
    }
  }

  function handleCloseModalButton() {
    setOpenEdit(false)
  }

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: openEdit ? 1 : 0,
    transform: openEdit ? 'translateY(0%)' : 'translateY(-100%)',
  })

  function handleCheckInputEmpty(event: ChangeEvent<HTMLInputElement>) {
    setDisabledButton([event.target.value])
  }

  function handleGetLocale(event: ChangeEvent<HTMLInputElement>) {
    setLocale(event.target.value)
  }

  function handleEditEventCard() {
    setOpenEdit(false)
    if (!isDateTitleEmpty) {
      dispatch({
        type: Types.Create,
        payload: {
          id: new Date().getMilliseconds(),
          date: dataRef.current.value,
          timeStarts: timeStartsRef.current.value,
          timeEnds: timeEndsRef.current.value,
          title: titleRef.current.value,
          locale: localeRef.current.value,
          description: descriptionRef.current.value,
        },
      })
      dispatch({ type: Types.Delete, payload: { id: edit.id } })
    }
  }

  const isDateTitleEmpty =
    titleRef.current?.value === '' || dataRef.current?.value.length === 0

  return (
    <>
      {openEdit ? (
        <BackgroundContainer ref={modalRef} onClick={handleCloseModal}>
          <animated.div style={animation}>
            <EditEventModalContainer>
              <AiFillCloseCircle onClick={handleCloseModalButton} />
              <h2>Edit an event</h2>
              <input
                ref={dataRef}
                type="date"
                min="1999-12-31"
                max="2102-12-31"
                onChange={handleCheckInputEmpty}
              />
              <TimeContainer>
                <input ref={timeStartsRef} type="time" />
                <BsArrowClockwise size={20} />
                <input ref={timeEndsRef} type="time" />
              </TimeContainer>

              <input
                ref={titleRef}
                type="text"
                placeholder={edit.title}
                onChange={handleCheckInputEmpty}
              />
              <input
                ref={localeRef}
                type="text"
                placeholder={edit.locale}
                onChange={handleGetLocale}
                value={locale}
              />
              <textarea ref={descriptionRef} placeholder={edit.description} />
              <button disabled={isDateTitleEmpty} onClick={handleEditEventCard}>
                Editar evento
              </button>
            </EditEventModalContainer>
          </animated.div>
        </BackgroundContainer>
      ) : null}
    </>
  )
}
