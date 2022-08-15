import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import { useSpring, animated } from 'react-spring'

import { AiFillCloseCircle } from 'react-icons/ai'

import { Background, InfoTempContainer, ModalContainer } from './styles'
import { useFetch } from '../../hooks/useFetch'
import Image from 'next/image'

interface ModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function EventCreationModal({
  showModal,
  setShowModal,
}: ModalProps) {
  const [disabledButton, setDisabledButton] = useState([])
  const [nameCity, setNameCity] = useState('')
  const { data } = useFetch(nameCity)

  const modalRef = useRef()
  const dataRef = useRef<HTMLInputElement>()
  const titleRef = useRef<HTMLInputElement>()

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  })

  function handleCloseModal(event: MouseEvent) {
    if (modalRef.current === event.target) {
      setShowModal(false)
    }
  }

  function handleCloseModalButton() {
    setShowModal(false)
  }

  function handleCheckInputEmpty(event: ChangeEvent<HTMLInputElement>) {
    setDisabledButton([event.target.value])
  }

  function handleGetNameCity(event: ChangeEvent<HTMLInputElement>) {
    setNameCity(event.target.value)
  }

  const isDateTitleEmpty =
    titleRef.current?.value.length === 0 || dataRef.current?.value.length === 0

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={handleCloseModal}>
          <animated.div style={animation}>
            <ModalContainer>
              <AiFillCloseCircle onClick={handleCloseModalButton} />
              <h2>Crie um evento</h2>
              <input
                ref={dataRef}
                type="date"
                placeholder="Hora do evento"
                onChange={handleCheckInputEmpty}
              />
              <input type="time" placeholder="Data do evento" />

              <input
                ref={titleRef}
                type="text"
                placeholder="Título do evento"
                onChange={handleCheckInputEmpty}
              />
              <input
                type="text"
                placeholder="Cidade"
                onChange={handleGetNameCity}
                value={nameCity}
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
              <textarea required placeholder="Descrição do evento" />
              <button
                disabled={isDateTitleEmpty}
                onClick={handleCloseModalButton}
              >
                Criar Evento
              </button>
            </ModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}
