import React, { useState } from 'react'
import { Animated } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'

export default function WidthPercentage() {

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

    const heightInterPolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['10%', '60%']
    })

    const animatedStyles = {
        height: heightInterPolation
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
