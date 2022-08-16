import { AiFillCloseCircle } from 'react-icons/ai'
import { BackgroundContainer } from '../EventCreationModal/styles'

import { useSpring, animated } from 'react-spring'
import { Dispatch, SetStateAction, useContext, useRef } from 'react'
import { Context } from '../../contexts/EventsProvider'
import { Types } from '../../contexts/reducer'
import { FlagDeleteEventContainer } from './styles'

interface FlagProps {
  event: number
  openFlag: boolean
  setOpenFlag: Dispatch<SetStateAction<boolean>>
}

export default function FlagDeleteEvent({
  event,
  openFlag,
  setOpenFlag,
}: FlagProps) {
  const { dispatch } = useContext(Context)

  const modalRef = useRef()

  function handleCloseModalButton() {
    setOpenFlag(false)
  }

  const animation = useSpring({
    config: {
      duration: 400,
    },
    opacity: openFlag ? 1 : 0,
    transform: openFlag ? 'translateY(0%)' : 'translateY(-70%)',
  })

  function handleDeleteEvent() {
    dispatch({ type: Types.Delete, payload: { id: event } })
    setOpenFlag(false)
  }
  return (
    <BackgroundContainer ref={modalRef}>
      <animated.div style={animation}>
        <FlagDeleteEventContainer>
          <AiFillCloseCircle size={30} onClick={handleCloseModalButton} />
          <p>Tem certeza que deseja excluir o evento?</p>
          <button onClick={handleDeleteEvent}>Excluir</button>
        </FlagDeleteEventContainer>
      </animated.div>
    </BackgroundContainer>
  )
}
