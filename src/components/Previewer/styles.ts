import styled from '@emotion/styled'
import { TContainer } from './types'

export const BackDrop = styled.div<TContainer>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  position: fixed;

  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  position: relative;
`

export const ImgViewer = styled.img`
  max-height: 90vh;
  max-width: 90vw;
  z-index: 2;
`
