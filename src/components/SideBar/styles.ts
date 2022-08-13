import styled from 'styled-components'

interface StatusMenu {
  active: boolean
}

export const MenuContainer = styled.div<StatusMenu>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  max-width: ${(props) => (props.active ? '16.8rem' : '5rem')};
  padding-top: 1rem;

  & > svg {
    color: ${(props) => props.theme['blue-800']};
  }
`

export const SideBarContainer = styled.aside<StatusMenu>`
  display: flex;
  flex-direction: column;

  padding: 0rem 1.68rem 3.46rem 1.43rem;

  position: relative;
  top: 0;
  left: 0;
  left: ${(props) => (props.active ? '0' : '-200%')};
  transition: position, 500ms ease-in-out;
`

export const LogoContainer = styled.div`
  padding: 1rem 0.43rem 0.87rem 0.37rem;
  background-color: ${(props) => props.theme['blue-500']};
`

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.56rem 0 2rem 0;
`
export const MyAccountContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-weight: 400;
    color: ${(props) => props.theme['gray-300']};
    margin-bottom: 1.12rem;
  }
`
export const SystemContainer = styled(MyAccountContainer)`
  margin-top: 9rem;
`
