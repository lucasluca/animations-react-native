import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'

export default function HeightAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(150))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: 300,
            duration: 1500
        }).start(() => {
            Animated.timing(animation, {
                toValue: 150,
                duration: 3000
            }).start()
        })
    }

    const animatedStyles = {
        height: animation
    }

    return (
        <FadeWrapper>
            <WelcomeText>
                Clique no quadrado
            </WelcomeText>
            <FadeButton onPress={startAnimation}>
                <FadeSquare
                    as={Animated.View}
                    style={animatedStyles}
                />
            </FadeButton>
            <FadeButton onPress={startAnimation}>
                <FadeSquare
                    as={Animated.View}
                    style={animatedStyles}
                />
            </FadeButton>
        </FadeWrapper>
    )
}