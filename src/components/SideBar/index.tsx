import Image from 'next/image'
import {
  LogoContainer,
  MenuContainer,
  MyAccountContainer,
  ServicesContainer,
  SideBarContainer,
  SystemContainer,
} from './styles'

import { BsCalendar4Week, BsGear } from 'react-icons/bs'
import { BiTask, BiUserCircle } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'
import { IoExitOutline } from 'react-icons/io5'
import { TbMessage2 } from 'react-icons/tb'
import { RiCloseFill, RiTeamLine } from 'react-icons/ri'
import { VscGraphLine } from 'react-icons/vsc'

import fastersLogo from '../../../public/fastersLogo.png'
import Button from '../Button'
import { useState } from 'react'

export default function SideBar() {
  const [closeMenu, setCloseMenu] = useState(false)

  function handleCloseMenu() {
    setCloseMenu((menu) => !menu)
  }

  const isCloseMenu = !closeMenu ? (
    <FiMenu size={36} onClick={handleCloseMenu} />
  ) : (
    <RiCloseFill size={32} onClick={handleCloseMenu} />
  )

  return (
    <SideBarContainer active={closeMenu}>
      {isCloseMenu}
      <MenuContainer active={closeMenu}>
        <LogoContainer>
          <Image
            src={fastersLogo}
            alt="Logo da Fasters"
            width={205}
            height={41}
          />
        </LogoContainer>
        <ServicesContainer>
          <Button selected={true} icon={<BsCalendar4Week size={18} />}>
            Agenda
          </Button>
          <Button icon={<TbMessage2 size={26} />}>Mensagens</Button>
          <Button icon={<VscGraphLine size={20} />}>Relatórios</Button>
        </ServicesContainer>

        <MyAccountContainer>
          <h4>My Account</h4>
          <Button icon={<BiUserCircle size={20} />}>Meus Eventos</Button>
          <Button icon={<RiTeamLine size={24} />}>Meu Time</Button>
          <Button icon={<BiTask size={24} />}>Minha Atividade</Button>
        </MyAccountContainer>

        <SystemContainer>
          <h4>System</h4>
          <Button icon={<BsGear size={21.52} />}>Configurações</Button>
          <Button icon={<IoExitOutline size={24} />}>Sair</Button>
        </SystemContainer>
      </MenuContainer>
    </SideBarContainer>
  )
}
