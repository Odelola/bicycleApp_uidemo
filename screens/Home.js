import { Dimensions, Image, ScrollView, View } from "react-native"
import { AppNav, AppText, Screen } from "../components"
import { WoodImage, HeartIcon } from "../components/Icons"
import { StatusBar } from "expo-status-bar"
import { COLORS } from "../config/configUtilities"
import { universalScreenStyles } from "../components/Screen"

const Home = () => {
    const { height } = Dimensions.get("window");
    const heightOfBicycleSection = height / 1.7;

    const specifications = ["Special Branch Frame", "Seat Clamp", "Carbon 1.5 tapered fork", "Chris King i7 Headset", "Chris King i7 Headset", "Chris King i7 Headset"]
    return (
        <View className=" flex-1 bg-white relative">
            <View className="absolute left-0 top-0 w-full">
                <AppNav />
            </View>
            <StatusBar hidden={true} />
            <View>
                <View className="absolute top-0 -z-50">
                    {/* <WoodImage /> */}
                </View>
                {/* height: heightOfBicycleSection */}
                <View style={{ height: heightOfBicycleSection, paddingTop: universalScreenStyles.screen.paddingTop + 20 }} className="bg-red-500 relative">
                    <View className="text-center">
                        <AppText size={18} style={{ textAlign: 'center', marginBottom: 12, }}>SPECIAL BRANCH</AppText>
                        <AppText style={{ color: COLORS.grayTextColor, textAlign: 'center' }}>TRACK BIKE</AppText>
                    </View>
                    <View className="absolute left-0 bottom-0">

                        <Image source={require("../assets/images/HomeImages/HomeBicycle.png")} className="h-5" style={{}} alt="Home's Bicycle Image" />
                    </View>
                </View>
            </View>
            <ScrollView
                className="bg-white rounded-t-[36] -mt-24"
                contentContainerStyle={{ paddingTop: universalScreenStyles.screen.paddingTop, paddingHorizontal: universalScreenStyles.screen.paddingHorizontal, height: height - heightOfBicycleSection }}
            // showsVerticalScrollIndicator={false}
            bounces={false}
            >
                <AppText size={18} style={{ color: COLORS.blackTextColor, textAlign: "center" }}>Specifications</AppText>
                <AppText style={{ color: COLORS.grayTextColor, textAlign: "center", marginTop: 8 }}>Frameset</AppText>
                <View className="flex-row flex-wrap gap-y-6 mt-2 justify-between">
                    {specifications.map((spec, index) => (
                        <View key={index} className="flex-row w-[45%] gap-x-1">
                            <View className="w-1 h-1 rounded-lg mt-2" style={{ backgroundColor: COLORS.defaultTextColor }}></View>
                            <AppText style={{ color: COLORS.grayTextColor, }}>{spec}</AppText>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <View style={{ backgroundColor: COLORS.defaultTextColor }} className="rounded-3xl flex-row justify-between absolute left-0 bottom-0">
                <View style={{ backgroundColor: COLORS.darkBackground }} className="rounded-3xl px-6 py-6 w-[85%]">
                    <View className="flex-row items-center justify-between mb-10">
                        <AppText size={13} style={{ color: COLORS.whiteTextColor }}>Add to Cart</AppText>
                        <AppText size={20}>$1 220</AppText>
                    </View>
                    <View className="flex-row gap-x-3">
                        <HeartIcon />
                        <AppText style={{ color: "#FFFFFF" }}>Favourite</AppText>
                    </View>
                </View>
                <View className="rounded-r-3xl w-[15%] justify-center">
                    <AppText size={12} style={{ color: COLORS.whiteTextColor, transform: [{ rotate: "-90deg" }] }}>BUY USED</AppText>
                </View>
            </View>
        </View >
    )
}

export default Home