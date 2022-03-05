import styled from '@emotion/styled'

import type { TContainer } from './types'

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

export const RemoveTagButton = styled.div`
  display: none;
  align-items: center;

  cursor: pointer;
  height: 100%;
  margin-left: 5px;

  &:after {
    display: flex;
    justify-content: center;

    content: '⨯';
    color: ${({ theme }) => theme.textColors.notice};
  }
`

export const Tag = styled.div`
  position: absolute;
  display: flex;
  cursor: text;
  ${({ theme }) => `
    background: ${theme.colors.grey};
    color: ${theme.textColors.notice};
  `}
  padding: 2px 5px;

  &:hover {
    ${RemoveTagButton} {
      display: flex;
    }
  }
`
