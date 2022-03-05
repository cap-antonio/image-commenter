import { MouseEvent, RefObject } from 'react'

export type TTag = {
  id: number
  x: number
  y: number
  text: string
}

export type TUseTagsOutPut = {
  tags: Array<TTag>
  addTag: (
    e: MouseEvent<HTMLImageElement>,
    ref: RefObject<HTMLDivElement>,
  ) => void
  removeTag: (id: number) => void
  editTag: (text: string, selecetdId: number) => void
}

export type TUseTagsInput = Array<TTag>
