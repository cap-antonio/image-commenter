import React from 'react'
import { StyledLabel, StyledUploader } from './styles'

import { TFileUploader } from './types'

export const FileUploader = ({
  handleFilesUpload,
  inputKey,
  title = 'Choose image(s)',
}: TFileUploader): JSX.Element => (
  <StyledLabel>
    <StyledUploader
      key={inputKey}
      type="file"
      multiple
      onChange={handleFilesUpload}
      accept="image/jpeg"
    />
    {title}
  </StyledLabel>
)
