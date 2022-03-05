import { MouseEvent } from 'react'
import { TFile, TSelectedFile } from '../types'

export type TImgPreview = {
  setSelectedFile: (file: TSelectedFile) => void
  removeFile: (e: MouseEvent<HTMLDivElement>, selectedId: number) => void
} & TFile
