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
  onCancel,
  onConfirm,
  modalText = 'Save tags?',
  confirmButtonText = 'Yes',
  cancelButtonText = 'No',
}: TBewareModal): JSX.Element => (
  <BewareModalBack isOpen={isOpen}>
    <Container>
      <DialogWrapper>
        <MessageWrapper>{modalText}</MessageWrapper>
        <ButtonWrapper>
          <Button onClick={onConfirm}>{confirmButtonText}</Button>
          <Button onClick={onCancel}>{cancelButtonText}</Button>
        </ButtonWrapper>
      </DialogWrapper>
    </Container>
  </BewareModalBack>
)
