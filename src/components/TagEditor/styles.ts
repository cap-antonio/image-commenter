import styled from '@emotion/styled'

import { TSaveButton } from './types'

export const BackDrop = styled.div`
  position: fixed;

  height: 100vh;
  width: 100vw;
  background: ${({ theme }) => theme.colors.backdrop};
  z-index: 1;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
`

export const ImageWrapper = styled.div`
  position: relative;
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

export const Tag = styled.textarea`
  display: flex;

  resize: none;
  max-width: 100px;
  outline: none;
  border: none;
  cursor: text;
  ${({ theme }) => `
    background: ${theme.colors.grey};
    color: ${theme.textColors.notice};
  `}
`

export const SaveButton = styled.div<TSaveButton>`
  position: absolute;
  bottom: 20px;

  display: ${({ isShow }) => (isShow ? 'block' : 'none')};

  cursor: pointer;
  padding: 5px;
  ${({ theme }) => `
    background: ${theme.colors.accent};
    border-radius: ${theme.borderRadius.s};
  `}

  &:hover {
    background: ${({ theme }) => theme.colors.basic};
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 30px;
  border-radius: ${({ theme }) => theme.borderRadius.s};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.dark};
  }

  &:after {
    content: '⨯';
    color: ${({ theme }) => theme.textColors.white};
    transform: scale(1.5);
  }
`
