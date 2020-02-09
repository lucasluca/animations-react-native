import React, { useState, useEffect } from 'react'
import { Animated, PanResponder } from 'react-native'
import { FadeWrapper, WelcomeText, FadeButton, FadeSquare } from './styles'

export default function PanHandlerAnimation() {

    const animation = React.useRef(new Animated.ValueXY(0))

    const _panResponder = React.useMemo(() => PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: animation.current.x,
                dy: animation.current.y
            }
        ]),
        onPanResponderGrant: (e, gestureState) => {
            animation.current.extractOffset()
        },
        onPanResponderRelease: (e, { vx, vy }) => {
            Animated.decay(animation.current, {
                velocity: { x: vx, y: vy },
                deceleration: 0.997
            }).start()
        }
    }), [])

    const animatedStyles = {
        transform: animation.current.getTranslateTransform()
    }

    return (
        <FadeWrapper>
            <WelcomeText>
                Arraste o quadrado
            </WelcomeText>
            <FadeSquare
                as={Animated.View}
                {..._panResponder.panHandlers}
                style={animatedStyles}
            />
        </FadeWrapper>
    )
}