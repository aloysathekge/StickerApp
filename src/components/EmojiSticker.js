import { View, Image } from 'react-native';
import Animated from 'react-native-reanimated';
const AnimatedImage = Animated.createAnimatedComponent(Image);
import { TapGestureHandler } from 'react-native-gesture-handler';
import  {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler,
    withSpring,
} from 'react-native-reanimated';   



export default function EmojiSticker({ imageSize, stickerSource }) {
    const scaleImage = useSharedValue(imageSize);
    const onDoubleTap = useAnimatedGestureHandler({
        onActive: () => {
        if (scaleImage.value !== imageSize * 2) {
            scaleImage.value = scaleImage.value * 2;
        }
        },
    });
    const imageStyle = useAnimatedStyle(() => {
        return {
        width: withSpring(scaleImage.value),
        height: withSpring(scaleImage.value),
        };
    });
    



return (
    <View style={{ top: -350 }}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={1}>
            <AnimatedImage
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize }}
            />
        </TapGestureHandler>
    </View>
);
}
