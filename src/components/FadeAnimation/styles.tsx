import styled from 'styled-components'

const FadeWrapper = styled.View`
    flex: 1;
    background-color: #eaeaea;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const WelcomeText = styled.Text`
    font-size: 20px;
`

const FadeButton = styled.TouchableHighlight`

`

const FadeSquare = styled.View`
    width: 150px;
    height: 150px;
    background-color: rgba(0,89,156,1);
`

export {
    FadeWrapper,
    WelcomeText,
    FadeButton,
    FadeSquare
}