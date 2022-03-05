import React from 'react'
import { css, Global } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        background: white;
        min-height: 100vh;
        font-family: Rubik, sans-serif;
        line-height: 1.5;
        scroll-behavior: smooth;
      }

      html,
      body,
      button,
      input,
      textarea {
        font-family: Rubik, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
)
