import styled from '@emotion/styled'

export const ImgPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  border-radius: 10px;
  border: ${({ theme }) => `1px solid ${theme.colors.basic}`};

  height: 100px;
  width: 100px;

  overflow: hidden;
  cursor: pointer;
  margin: 10px;
`

export const Image = styled.img`
  height: 80px;
  width: 100%;
  object-fit: cover;
`

export const ImgTitle = styled.div`
  height: 20px;
  width: 100%;
  text-align: center;
`

export const RemoveButton = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;

  border-radius: ${({ theme }) => theme.borderRadius.round};
  background: ${({ theme }) => theme.colors.accent};

  height: 15px;
  width: 15px;

  cursor: pointer;

  &:after {
    display: flex;
    justify-content: center;

    line-height: 15px;

    content: '⨯';
    color: ${({ theme }) => theme.textColors.white};
  }

  &:hover {
    transform: scale(1.1);

    &:after {
      transform: scale(1.1);
    }
  }
`

export const TagIndicator = styled.div`
  position: absolute;
  top: 8px;
  left: 7px;

  height: 5px;
  width: 5px;

  ${({ theme }) => `
    background: ${theme.colors.notice};
    border-radius: ${theme.borderRadius.round};
  
  `}
`
