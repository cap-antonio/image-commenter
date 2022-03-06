import { ChangeEvent } from 'react'

export type TFileUploader = {
  handleFilesUpload: (e: ChangeEvent<HTMLInputElement>) => void
  inputKey: string
  title?: string
}
