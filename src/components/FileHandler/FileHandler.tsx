import React, { ChangeEvent, MouseEvent, useState } from 'react'

import { FileUploader } from '../FileUploader'
import { Previewer } from '../Previewer'
import {
  UploaderWrapper,
  Wrapper,
  ImgPreview,
  UploadedImagesWrapper,
  ImgPreviewWrapper,
  ImgTitle,
  RemoveButton,
} from './styles'
import { truncateFileName } from './utils'

import { OneFile } from './types'

export const FileHandler = (): JSX.Element => {
  const [files, setFiles] = useState<Array<OneFile>>([])
  const [inputKey, setInputKey] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<string>('')

  const handleFilesUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    const fileList = e.target.files

    if (!fileList?.length) return

    if (fileList.length < 2) {
      setFiles((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: fileList[0].name,
          url: URL.createObjectURL(fileList[0]),
        },
      ])
    } else {
      const newFileList: Array<OneFile> = []
      Array.from(fileList).forEach((file, i) =>
        newFileList.push({
          id: Date.now() + i,
          name: file.name,
          url: URL.createObjectURL(file),
        }),
      )
      setFiles((prev) => [...prev, ...newFileList])
    }
    setInputKey(fileList[0].name)
  }

  const removeFile = (
    e: MouseEvent<HTMLDivElement>,
    selectedId: number,
  ): void => {
    e.stopPropagation()
    setFiles((prev) => prev.filter(({ id }) => id !== selectedId))
    setInputKey('')
  }

  return (
    <Wrapper>
      <UploaderWrapper>
        <FileUploader
          handleFilesUpload={handleFilesUpload}
          inputKey={inputKey}
        />
      </UploaderWrapper>
      <UploadedImagesWrapper>
        {files.map(({ id, url, name }) => (
          <ImgPreviewWrapper key={id} onClick={() => setSelectedFile(url)}>
            <RemoveButton onClick={(e) => removeFile(e, id)} />
            <ImgPreview src={url} />
            <ImgTitle>{truncateFileName(name)}</ImgTitle>
          </ImgPreviewWrapper>
        ))}
      </UploadedImagesWrapper>
      <Previewer
        isOpen={Boolean(selectedFile)}
        url={selectedFile}
        onClose={() => setSelectedFile('')}
      />
    </Wrapper>
  )
}
