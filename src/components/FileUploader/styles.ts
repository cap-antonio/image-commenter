import styled from '@emotion/styled'

export const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  height: 40px;
  ${({ theme }) => `
    background: ${theme.colors.basic};
    color: ${theme.textColors.white};
    border-radius: ${theme.borderRadius.s};

  `}

  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.accent};
  }

  &:active {
    background: ${({ theme }) => theme.colors.basic};
  }
`

export const StyledUploader = styled.input`
  display: none;
`
