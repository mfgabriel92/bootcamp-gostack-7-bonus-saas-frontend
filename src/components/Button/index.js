import styled, { css } from 'styled-components'

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,
  default: css`
    height: 36px;
    font-size: 14px;
  `,
  big: css`
    height: 44px;
    font-size: 16px;
  `,
}

const colors = {
  primary: css`
    background: #7289da;

    &:hover {
      background: #5f73bc;
    }
  `,
  danger: css`
    background: #e04848;

    &:hover {
      background: #a43d3d;
    }
  `,
  default: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #999;
    }
  `,
}

const Button = styled.button.attrs({
  type: 'button',
})`
  border-radius: 4px;
  transition: background 0.2s;
  color: #fff;
  border: 0;
  padding: 0 10px;
  font-weight: bold;

  ${props => sizes[props.size || 'default']}
  ${props => colors[props.size || 'primary']}
  ${props => !props.filled && colors.primary}
`

export default Button
