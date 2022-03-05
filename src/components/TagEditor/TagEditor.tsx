import React, { useRef, useState } from 'react'

import { useTags } from '../../hooks'
import { BewareModal } from '../BewareModal'
import {
  BackDrop,
  ImgViewer,
  ImageWrapper,
  Tag,
  RemoveTagButton,
  TagWrapper,
  Container,
  SaveButton,
  CloseButton,
} from './styles'

import { TTagEditor } from './types'

export const TagEditor = ({
  url,
  closeTagEditor,
  savedTags,
  applyTags,
}: TTagEditor): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isBewareModalOpen, setIsBewareModalOpen] = useState<boolean>(false)

  const { tags, addTag, removeTag, editTag } = useTags(savedTags)

  const saveAndClose = (): void => {
    applyTags(tags)
    closeTagEditor()
  }

  return (
    <BackDrop>
      <Container>
        <ImageWrapper ref={wrapperRef}>
          <ImgViewer src={url} onClick={(e) => addTag(e, wrapperRef)} />
          {tags.map(({ x, y, text, id }) => (
            <TagWrapper key={id} style={{ left: `${x}%`, top: `${y}%` }}>
              <Tag
                rows={text.length ? Math.ceil(text.length / 20) : 1}
                onChange={({ currentTarget }) =>
                  editTag(currentTarget.value, id)
                }
                value={text}
                autoFocus
              ></Tag>
              <RemoveTagButton onClick={() => removeTag(id)} />
            </TagWrapper>
          ))}
          <BewareModal
            isOpen={isBewareModalOpen}
            onYes={saveAndClose}
            onNo={closeTagEditor}
          />
        </ImageWrapper>
        <SaveButton isShow={Boolean(tags.length)} onClick={saveAndClose}>
          Save and close
        </SaveButton>
        <CloseButton
          onClick={
            savedTags === tags
              ? closeTagEditor
              : () => setIsBewareModalOpen(true)
          }
        />
      </Container>
    </BackDrop>
  )
}
