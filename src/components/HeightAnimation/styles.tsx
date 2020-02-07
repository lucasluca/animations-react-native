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

const FadeButton = styled.TouchableWithoutFeedback`
    margin-bottom: 10px;
`

const FadeSquare = styled.View`
    width: 150px;
    height: 150px;
    background-color: burlywood;
    margin-bottom: 50px;
`

export {
    FadeWrapper,
    WelcomeText,
    FadeButton,
    FadeSquare
}