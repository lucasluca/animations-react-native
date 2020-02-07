import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'


export default function TranslateAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(1))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: 300,
            duration: 500
        }).start(() => {
            // Animated.timing(animation, {
            //     toValue: -300,
            //     duration: 500
            // }).start()
            animation.setValue(0)
        })
    }

    const animatedStyles = {
        translateY: animation
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