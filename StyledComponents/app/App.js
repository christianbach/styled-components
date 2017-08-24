import React, { Component } from "react"
import styled, { ThemeProvider } from "styled-components/native"
import { COLORS } from "./constants/styles"
import Button, {SecondaryButton} from "./Button"

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.main};
  justify-content: center;
  height: 100%;
  padding: 10px;

`

const themeLight = {
  name: 'light',
  main: COLORS.WHITE.WHITE,
  buttonMain: COLORS.RED.FIRE_ENGINE_RED
}

const themeDark = {
  name: 'dark',
  main: COLORS.GREY.BLACK_RUSSIAN,
  buttonMain: COLORS.WHITE.WHITE
}

class App extends Component {
  state = {
    theme: themeLight
  }
  changeTheme() {
    const {theme} = this.state

    if(theme.name === 'light') {
      this.setState({theme: themeDark})
      return
    }

    this.setState({theme: themeLight})
  }
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container testID="root">
          <Button onPress={() => this.changeTheme()} text={'Ändra tema'} />
          <SecondaryButton text={'En annan knapp'} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App
