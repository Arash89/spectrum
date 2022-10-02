import { FC, ReactNode } from 'react'
import styled from 'styled-components'

export interface IBox {
  children: ReactNode;
  salam?: string;
  width: string;
  height: string;
}

export interface StyleDivProps {
  widthStyle: string;
  heightStyle: string;
}

export const Box: FC<IBox> = ({ children, width = "100px", height = "100px" }) => (
  <StyledDiv widthStyle={width} heightStyle={height}>
    {children}
  </StyledDiv>
)


const StyledDiv = styled.div`
  width: ${(props: StyleDivProps) => props.widthStyle};
  height: ${(props: StyleDivProps) => props.heightStyle};
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
`
