import React from 'react'

import {
  BewareModalBack,
  Button,
  ButtonWrapper,
  Container,
  DialogWrapper,
  MessageWrapper,
} from './styles'

import { TBewareModal } from './types'

export const BewareModal = ({
  isOpen,
  onNo,
  onYes,
}: TBewareModal): JSX.Element => {
  return (
    <BewareModalBack isOpen={isOpen}>
      <Container>
        <DialogWrapper>
          <MessageWrapper>Save tags?</MessageWrapper>
          <ButtonWrapper>
            <Button onClick={() => onYes()}>Yes</Button>
            <Button onClick={() => onNo()}>No</Button>
          </ButtonWrapper>
        </DialogWrapper>
      </Container>
    </BewareModalBack>
  )
}
