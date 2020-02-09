import React, { useState } from 'react'
import { Animated, Easing } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'

export default function EasingAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(150))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: 300,
            duration: 1500,
            // easing: Easing.bounce,
            // easing: Easing.back(5),
            // easing: Easing.elastic(3),
            easing: Easing.bezier(.06, 1, .86, .23)

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
        </FadeWrapper>
    )
}