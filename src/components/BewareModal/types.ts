export type TBewareModal = {
  isOpen: boolean
  onYes: () => void
  onNo: () => void
}

export type TBewareModalBack = Pick<TBewareModal, 'isOpen'>
