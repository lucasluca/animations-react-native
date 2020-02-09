import React, { useState } from 'react'
import { Animated, ScrollView, Text} from 'react-native'
import { FadeWrapper, BackgroundWrapper } from './styles'

export default function EventAnimation() {

    const [animation, setAnimation] = useState(new Animated.Value(0))

    const backgroundInterpolate = animation.interpolate({
        inputRange: [0, 3000],
        outputRange: ['rgb(255,99,71)', 'rgb(99,71,255)']
    })

    const animatedStyles = {
        backgroundColor: backgroundInterpolate
    }

    return (
        <FadeWrapper>
            <ScrollView
                scrollEventThrottle={16}
                onScroll={
                    Animated.event([
                        {
                            nativeEvent: {
                                contentOffset: {
                                    y: animation
                                }
                            }
                        }
                    ])
                }
            >
                <BackgroundWrapper as={Animated.View} style={animatedStyles}>

                </BackgroundWrapper>
            </ScrollView>
        </FadeWrapper>
    )
}
