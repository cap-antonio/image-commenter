import { useState, MouseEvent, useCallback, RefObject } from 'react'

import { TTag, TUseTagsInput, TUseTagsOutPut } from './types'

export const useTags = (savedTags: TUseTagsInput): TUseTagsOutPut => {
  const [tags, setTags] = useState<Array<TTag>>(savedTags)

  const addTag = useCallback(
    (
      { clientX, clientY }: MouseEvent<HTMLImageElement>,
      ref: RefObject<HTMLDivElement>,
    ): void => {
      const c = ref.current?.getBoundingClientRect()

      const posX = c?.left ? clientX - c?.left : 0
      const posY = c?.top ? clientY - c?.top : 0
      const imgWidth = c?.width || 0
      const imgHeight = c?.height || 0

      setTags((tags) => [
        ...tags,
        {
          id: Date.now(),
          x: (posX * 100) / imgWidth,
          y: (posY * 100) / imgHeight,
          text: '',
        },
      ])
    },
    [setTags],
  )

  const removeTag = useCallback(
    (selectedId: number): void => {
      setTags((prev) => prev.filter(({ id }) => selectedId !== id))
    },
    [setTags],
  )

  const editTag = useCallback(
    (text: string, selecetdId: number): void => {
      const tag = tags.find(({ id }) => id === selecetdId)
      if (!tag) return
      const modifiedTag = { ...tag, text }
      setTags([...tags.filter(({ id }) => id !== selecetdId), modifiedTag])
    },
    [tags, setTags],
  )

  return { tags, addTag, removeTag, editTag }
}
