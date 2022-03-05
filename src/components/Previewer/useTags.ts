import { useState, MouseEvent, useCallback, RefObject } from 'react'

import { TTag, TUseTagsOutPut } from './types'

export const useTags = (): TUseTagsOutPut => {
  const [tags, setTags] = useState<Array<TTag>>([])

  const handleAddTag = useCallback(
    (
      e: MouseEvent<HTMLImageElement>,
      url: string,
      ref: RefObject<HTMLImageElement>,
    ): void => {
      e.stopPropagation()
      const image = new Image()
      image.src = url

      setTags((tags) => [
        ...tags,
        {
          id: Date.now(),
          x: e.clientX - 100,
          y: e.clientY,
          text: 'sdfdsf',
        },
      ])
    },
    [setTags],
  )

  const removeTag = useCallback(
    (e: MouseEvent<HTMLDivElement>, selectedId: number) => {
      e.stopPropagation()
      setTags((prev) => prev.filter(({ id }) => selectedId !== id))
    },
    [setTags],
  )

  const clearTags = useCallback(() => {
    setTags([])
  }, [])

  return { tags, handleAddTag, removeTag, clearTags }
}
