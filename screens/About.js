import { useState } from "react"
import { Dimensions, Image, ImageBackground, ScrollView, TouchableOpacity, View, Alert, StyleSheet } from "react-native"
import { AppNav, AppText, Screen } from "../components"
import { WoodImage, HeartIcon, FacebookIcon, PlayIcon } from "../components/Icons"
import { StatusBar } from "expo-status-bar"
import { COLORS } from "../config/configUtilities"
import { universalScreenStyles } from "../components/Screen"
import YoutubePlayer from 'react-native-youtube-iframe';

const { width, height } = Dimensions.get("window")
const About = () => {
    const [playing, setPlaying] = useState(false);
    const [showYTPlayer, setShowYTPlayer] = useState(false)
    const togglePlaying = () => {
        setShowYTPlayer((prev) => !prev)
        setPlaying((prev) => !prev);
    }
    const onStateChange = (state) => {
        if (state === 'ended') {
            setPlaying(false);
        }
    }

    return (
        // <View className="flex-1 relative">
        <>
            {showYTPlayer && (<YoutubePlayer
                height={220}
                play={true}
                initialPlayerParams={{ preventFullScreen: true }}
                webViewStyle={{ justifySelf: "center", zIndex: 30, }}
                videoId={'WKQRzYv-Iv8'}
                onChangeState={onStateChange}
            />)}
            {/* DNRJGZNCRSs */}
            <View className="relative w-full bg-red-500 flex-1">
                <Image className="absolute left-0 top-0 w-full h-full" source={require("../assets/images/AboutImages/AboutBicycle.png")} />

                <StatusBar hidden={true} />

                <View className="bg-white/50 relative py-8">
                    <AppNav />
                </View>
                {/* absolute bottom-0 w-full */}
                <View className="gap-y-24 py-8 justify-end h-full" style={{ paddingHorizontal: universalScreenStyles.screen.paddingHorizontal }}>
                    <View className="items-center">
                        <TouchableOpacity activeOpacity={0.65} className="w-16 h-16 rounded-full justify-center items-center mb-4" style={{ backgroundColor: COLORS.defaultTextColor }} onPress={togglePlaying}>
                            <PlayIcon />
                        </TouchableOpacity>
                        <AppText style={{ color: COLORS.whiteTextColor }}>ABOUT</AppText>
                        <AppText style={{ color: COLORS.whiteTextColor }}>WOODELO</AppText>
                    </View>
                    {/* <TouchableOpacity activeOpacity={0.65} className="flex-row justify-center items-center gap-x-2 rounded-xl py-6" style={{ backgroundColor: COLORS.defaultTextColor }}>
                        <AppText style={{ color: COLORS.whiteTextColor }}>SIGN UP WITH FACEBOOK</AppText>
                        <FacebookIcon />
                    </TouchableOpacity> */}
                </View>
            </View>
        </>

        // </View>

    )
}

export default About