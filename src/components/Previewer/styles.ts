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

  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`

export const ImgViewer = styled.img`
  max-height: 90vh;
  max-width: 90vw;
`

export const RemoveTagButton = styled.div`
  display: none;
  align-items: center;

  cursor: pointer;
  background: ${({ theme }) => theme.textColors.notice};

  &:after {
    display: flex;
    justify-content: center;

    line-height: 10px;
    content: '⨯';
    color: ${({ theme }) => theme.textColors.white};
  }
`

export const TagWrapper = styled.div`
  display: flex;

  position: absolute;

  &:hover {
    ${RemoveTagButton} {
      display: flex;
    }
  }
`

export const Tag = styled.input`
  display: flex;

  height: 100%;
  outline: none;
  border: none;
  cursor: text;
  ${({ theme }) => `
    background: ${theme.colors.grey};
    color: ${theme.textColors.notice};
  `}
`
