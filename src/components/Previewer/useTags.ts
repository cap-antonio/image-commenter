import {
  useState,
  MouseEvent,
  useCallback,
  RefObject,
  ChangeEvent,
} from 'react'

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

      console.log(e, image.height, image.width)

      setTags((tags) => [
        ...tags,
        {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          text: '',
        },
      ])
    },
    [setTags],
  )

  const removeTag = useCallback(
    (e: MouseEvent<HTMLDivElement>, selectedId: number): void => {
      e.stopPropagation()
      setTags((prev) => prev.filter(({ id }) => selectedId !== id))
    },
    [setTags],
  )

  const clearTags = useCallback(() => {
    setTags([])
  }, [])

  const editTag = (e: ChangeEvent<HTMLInputElement>, selecetdId: number) => {
    e.stopPropagation()
    const tag = tags.find(({ id }) => id === selecetdId)
    if (!tag) return
    const modifiedTag = { ...tag, text: e.target.value }
    setTags([...tags.filter(({ id }) => id !== selecetdId), modifiedTag])
  }

  return { tags, handleAddTag, removeTag, clearTags, editTag }
}
