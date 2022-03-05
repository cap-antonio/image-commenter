export type TPreviewer = {
  isOpen: boolean
  url: string
  onClose: () => void
}

export type TPosition = Record<'x' | 'y' | 'z', number>

export type TContainer = Pick<TPreviewer, 'isOpen'>
