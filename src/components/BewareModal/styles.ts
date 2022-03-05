import { css } from '@emotion/react'
import styled from '@emotion/styled'

import { TBewareModalBack } from './types'

const flexAlign = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BewareModalBack = styled.div<TBewareModalBack>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

  position: absolute;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.colors.backdrop};
`

export const Container = styled.div`
  position: relative;

  ${flexAlign};

  height: 100%;
  width: 100%;
`

export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 150px;
  height: 100px;
  ${({ theme }) => `
    background: ${theme.colors.grey};
    border-radius: ${theme.borderRadius.s};
  `}
  overflow: hidden;
`

export const MessageWrapper = styled.div`
  ${flexAlign};
  flex: 1;

  width: 100%;
  text-transform: uppercase;
  font-weight: 900;
`

export const ButtonWrapper = styled.div`
  ${flexAlign};

  height: 30px;
  width: 100%;
`

export const Button = styled.button`
  border: none;
  ${({ theme }) => `
    background: ${theme.colors.basic};
    color: ${theme.textColors.white};
    border-radius: ${theme.borderRadius.xs};
  `}
  margin: 0 2px;
  padding: 5px;
  cursor: pointer;

  &:active {
    transform: scale(1.1);
  }

  &:hover {
    ${({ theme }) => `
      background: ${theme.colors.accent};
      color: ${theme.textColors.basic};
    `}
  }
`
