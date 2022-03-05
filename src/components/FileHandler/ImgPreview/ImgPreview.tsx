import React from 'react'

import {
  ImgPreviewWrapper,
  RemoveButton,
  TagIndicator,
  Image,
  ImgTitle,
} from './styles'
import { truncateFileName } from './utils'

import { TImgPreview } from './types'

export const ImgPreview = ({
  setSelectedFile,
  tags,
  removeFile,
  url,
  id,
  name,
}: TImgPreview): JSX.Element => (
  <ImgPreviewWrapper onClick={() => setSelectedFile({ id, url, tags })}>
    {Boolean(tags.length) && <TagIndicator />}
    <RemoveButton onClick={(e) => removeFile(e, id)} />
    <Image src={url} />
    <ImgTitle>{truncateFileName(name)}</ImgTitle>
  </ImgPreviewWrapper>
)
