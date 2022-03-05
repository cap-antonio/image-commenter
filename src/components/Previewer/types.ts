import { TTag } from '../../hooks'

export type TPreviewer = {
  url: string
  closePreviewer: () => void
  savedTags: Array<TTag>
  applyTags: (tags: Array<TTag>) => void
}

export type TSaveButton = { isShow: boolean }
