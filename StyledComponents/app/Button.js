import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components/native"
import { COLORS, METRICS } from "./constants/styles"

const Primary = styled.TouchableOpacity`
  padding: ${METRICS.baseMargin};
  margin-bottom: ${METRICS.baseMargin};
  background-color: ${props => props.theme.buttonMain};
`

const Text = styled.Text`
  color: ${props => props.theme.main};
`

const TextSecondary = styled.Text`
  color: ${props => props.theme.buttonMain};
`

const Secondary = Primary.extend`
  background-color: transparent;
  border-width: 1px;
	border-color: ${props => props.theme.buttonMain};
`;

export default ({text, onPress}) => (
  <Primary onPress={onPress}><Text>{text}</Text></Primary>
)

export const SecondaryButton = ({text, onPress}) => (
  <Secondary><TextSecondary>{text}</TextSecondary></Secondary>
)
