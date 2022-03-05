import { TTag } from '../../hooks'

export type TFile = {
  url: string
  name: string
  id: number
  tags: Array<TTag>
}

export type TSelectedFile = { id: number; url: string; tags: Array<TTag> }
