import React, { useEffect, useRef, useState, WheelEvent } from 'react'

import {
  BackDrop,
  ImgViewer,
  ImageWrapper,
  Tag,
  RemoveTagButton,
} from './styles'
import { useTags } from './useTags'

import { TPosition, TPreviewer } from './types'

const defaultPosition: TPosition = {
  x: 0,
  y: 0,
  z: 1,
}

export const Previewer = ({
  isOpen,
  url,
  onClose,
}: TPreviewer): JSX.Element => {
  const ref = useRef<HTMLImageElement>(null)
  const [position, setPosition] = useState<TPosition>(defaultPosition)

  const { tags, handleAddTag, removeTag, clearTags } = useTags()

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown, false)
    return () => {
      document.removeEventListener('keydown', onKeyDown, false)
      setPosition(defaultPosition)
      clearTags()
    }
  }, [isOpen])

  const onKeyDown = (event: KeyboardEvent): void => {
    const keyCode = event.key
    const isEscape = keyCode === 'Escape' || keyCode === 'Esc'
    if (isEscape && isOpen) onClose()
  }

  const onWheel = (
    e: WheelEvent<HTMLImageElement>,
    imageUrl: string,
    currentPosition: TPosition,
  ): void => {
    const image = new Image()
    image.src = imageUrl
    if (e.deltaY) {
      const sign = Math.sign(e.deltaY) / 10
      const scale = 1 - sign
      const {
        width = 0,
        x = 0,
        y = 0,
      } = ref.current?.getBoundingClientRect() || {}

      let newPos = {
        x: currentPosition.x * scale - (width / 2 - e.clientX + x) * sign,
        y:
          currentPosition.y * scale -
          ((image.height * width) / image.width / 2 - e.clientY + y) * sign,
        z: currentPosition.z * scale,
      }

      if (currentPosition.z * scale < 1)
        newPos = {
          x: 0,
          y: 0,
          z: 1,
        }

      if (currentPosition.z * scale >= 2) newPos = currentPosition

      setPosition(newPos)
    }
  }

  return (
    <BackDrop isOpen={isOpen} onClick={onClose}>
      <ImageWrapper>
        <ImgViewer
          id="test"
          ref={ref}
          src={url}
          onClick={(e) => handleAddTag(e, url, ref)}
          onWheelCapture={(e) => onWheel(e, url, position)}
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${position.z})`,
          }}
        />
        {tags.map(({ x, y, text, id }) => (
          <Tag key={id} style={{ left: x, top: y }}>
            {text}
            <RemoveTagButton onClick={(e) => removeTag(e, id)} />
          </Tag>
        ))}
      </ImageWrapper>
    </BackDrop>
  )
}
