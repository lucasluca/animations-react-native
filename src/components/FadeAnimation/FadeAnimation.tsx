import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'


export default function FadeAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(1))

    function startAnimation() {
        Animated.timing(animation, {
            toValue: 0,
            duration: 350
        }).start(() => {
            Animated.timing(animation, {
                toValue: 1,
                duration: 500
            }).start()
        })
    }

    const animatedStyles = {
        opacity: animation
    }

    return (
        <FadeWrapper>
            <WelcomeText>
                Ola mundo
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