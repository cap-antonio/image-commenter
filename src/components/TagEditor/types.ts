import { TTag } from '../../hooks'

export type TTagEditor = {
  url: string
  closeTagEditor: () => void
  savedTags: Array<TTag>
  applyTags: (tags: Array<TTag>) => void
}

export type TSaveButton = { isShow: boolean }
