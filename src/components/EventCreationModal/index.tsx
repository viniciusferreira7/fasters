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

import {
  BackgroundContainer,
  InfoTempContainer,
  ModalContainer,
} from './styles'
import { useFetch } from '../../hooks/useFetch'
import Image from 'next/image'
import { Context } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'
import { TimeContainer } from '../EditEventModal/styles'
import { BsArrowClockwise } from 'react-icons/bs'

interface ModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function EventCreationModal({
  showModal,
  setShowModal,
}: ModalProps) {
  const { dispatch } = useContext(Context)
  // eslint-disable-next-line no-unused-vars
  const [disabledButton, setDisabledButton] = useState([])
  const [locale, setLocale] = useState('')
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
      setShowModal(false)
    }
  }

  function handleCloseModalButton() {
    setShowModal(false)
  }

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  })

  function handleCheckInputEmpty(event: ChangeEvent<HTMLInputElement>) {
    setDisabledButton([event.target.value])
  }

  function handleGetLocale(event: ChangeEvent<HTMLInputElement>) {
    setLocale(event.target.value)
  }

  function handleCreateEventCard() {
    setShowModal(false)
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
    }
  }

  const isDateTitleEmpty =
    !titleRef.current?.value || dataRef.current?.value.length === 0

  return (
    <>
      {showModal ? (
        <BackgroundContainer ref={modalRef} onClick={handleCloseModal}>
          <animated.div style={animation}>
            <ModalContainer>
              <AiFillCloseCircle onClick={handleCloseModalButton} />
              <h2>Create an event</h2>
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
                placeholder="Event title"
                onChange={handleCheckInputEmpty}
              />
              <input
                ref={localeRef}
                type="text"
                placeholder="City"
                onChange={handleGetLocale}
                value={locale}
              />
              <InfoTempContainer>
                <span>{data.name}</span> <span>{data.main.temp} °C</span>{' '}
                <div>
                  <Image
                    src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${data.weather[0].icon}.svg`}
                    alt={data.weather.description}
                    width={30}
                    height={30}
                  />
                </div>
              </InfoTempContainer>
              <textarea
                ref={descriptionRef}
                required
                placeholder="Description of the event"
              />
              <button
                disabled={isDateTitleEmpty}
                onClick={handleCreateEventCard}
              >
                Criar Evento
              </button>
            </ModalContainer>
          </animated.div>
        </BackgroundContainer>
      ) : null}
    </>
  )
}
