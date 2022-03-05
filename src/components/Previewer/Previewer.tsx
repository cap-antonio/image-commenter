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

import { TPreviewer } from './types'

export const Previewer = ({
  url,
  closePreviewer,
  savedTags,
  applyTags,
}: TPreviewer): JSX.Element => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [isBewareModalOpen, setIsBewareModalOpen] = useState<boolean>(false)

  const { tags, addTag, removeTag, editTag } = useTags(savedTags)

  const saveAndClose = (): void => {
    applyTags(tags)
    closePreviewer()
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
            onNo={closePreviewer}
          />
        </ImageWrapper>
        <SaveButton isShow={Boolean(tags.length)} onClick={saveAndClose}>
          Save and close
        </SaveButton>
        <CloseButton
          onClick={
            tags.length ? () => setIsBewareModalOpen(true) : closePreviewer
          }
        />
      </Container>
    </BackDrop>
  )
}
