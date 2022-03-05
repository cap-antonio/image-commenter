import { MouseEvent, RefObject } from 'react'

export type TPreviewer = {
  isOpen: boolean
  url: string
  onClose: () => void
}

export type TPosition = Record<'x' | 'y' | 'z', number>

export type TContainer = Pick<TPreviewer, 'isOpen'>

export type TTag = {
  id: number
  x: number
  y: number
  text: string
}

export type TUseTagsOutPut = {
  tags: Array<TTag>
  handleAddTag: (
    e: MouseEvent<HTMLImageElement>,
    url: string,
    ref: RefObject<HTMLImageElement>,
  ) => void
  removeTag: (e: MouseEvent<HTMLDivElement>, id: number) => void
  clearTags: () => void
}
