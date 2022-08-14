import { Dispatch, MouseEvent, SetStateAction, useRef } from 'react'
import { useSpring, animated } from 'react-spring'

import { AiFillCloseCircle } from 'react-icons/ai'

import { Background, ModalContainer } from './styles'

interface ModalProps {
  showModal: boolean
  setShowModal: Dispatch<SetStateAction<boolean>>
}

export default function EventCreationModal({
  showModal,
  setShowModal,
}: ModalProps) {
  const modalRef = useRef()

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

  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={handleCloseModal}>
          <animated.div style={animation}>
            <ModalContainer>
              <AiFillCloseCircle onClick={handleCloseModalButton} />
              <h2>Crie um evento</h2>
              <input type="time" required placeholder="Data do evento" />
              <input type="date" required placeholder="Hora do evento" />
              <input type="text" required placeholder="Título do evento" />
              <textarea required placeholder="Descrição do evento" />
              <button>Criar Evento</button>
            </ModalContainer>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}
