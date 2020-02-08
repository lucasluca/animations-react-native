import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'

export default function InterpolationAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(0))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: 1,
            duration: 1500
        }).start(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 3000
            }).start()
        })
    }

    const backInterPolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['rgba(0,89,156,1)', 'rgba(255,142,0,1)']
    })

    const animatedStyles = {
        backgroundColor: backInterPolation
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