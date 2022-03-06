export type TBewareModal = {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
  modalText?: string
  confirmButtonText?: string
  cancelButtonText?: string
}

export type TBewareModalBack = Pick<TBewareModal, 'isOpen'>
