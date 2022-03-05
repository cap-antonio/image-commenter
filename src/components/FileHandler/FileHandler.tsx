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
  TagIndicator,
} from './styles'
import { truncateFileName } from './utils'

import { TFile, TSelectedFile } from './types'
import { TTag } from '../../hooks'

export const FileHandler = (): JSX.Element => {
  const [files, setFiles] = useState<Array<TFile>>([])
  const [inputKey, setInputKey] = useState<string>('')
  const [selectedFile, setSelectedFile] = useState<TSelectedFile>()

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
          tags: [],
        },
      ])
    } else {
      const newFileList: Array<TFile> = []
      Array.from(fileList).forEach((file, i) =>
        newFileList.push({
          id: Date.now() + i,
          name: file.name,
          url: URL.createObjectURL(file),
          tags: [],
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

  const applyTags = (tags: Array<TTag>): void => {
    const news = files.map((file) => {
      if (file.id === selectedFile?.id) {
        return { ...file, tags }
      } else {
        return file
      }
    })
    setFiles(news)
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
        {files.map(({ id, url, name, tags }) => (
          <ImgPreviewWrapper
            key={id}
            onClick={() => setSelectedFile({ id, url, tags })}
          >
            {Boolean(tags.length) && <TagIndicator />}
            <RemoveButton onClick={(e) => removeFile(e, id)} />
            <ImgPreview src={url} />
            <ImgTitle>{truncateFileName(name)}</ImgTitle>
          </ImgPreviewWrapper>
        ))}
      </UploadedImagesWrapper>
      {selectedFile && (
        <Previewer
          url={selectedFile.url}
          closePreviewer={() => setSelectedFile(undefined)}
          savedTags={selectedFile.tags}
          applyTags={applyTags}
        />
      )}
    </Wrapper>
  )
}
