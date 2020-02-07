import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'


export default function ScaleAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(1))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: -3,
            duration: 1500
        }).start(() => {
            Animated.timing(animation, {
                toValue: 2,
                duration: 1500
            }).start()
        })
    }

    const animatedStyles = {
        transform: [
            {
                scaleX: animation
            }
        ]
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