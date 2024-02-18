import { useState } from 'react'
import { Linking, Pressable, TouchableOpacity, View } from 'react-native'
import { WoodeloLogo, NavMenuIcon, NavMenuIcon_active } from '../Icons'
import { universalScreenStyles } from '../Screen'
import AppText from '../AppText'
import { COLORS } from '../../config/configUtilities'

const AppNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const _openMenu = () => {
    setToggleMenu(prev => !prev);
  }
  const navList = ["WHY WOOD", "OUR BIKES", "WANT ONE", "THE GRAIN"];
  const socialMediaHandles = [
    {
      title: "FB",
      url: "http://www.facebook.com",
    },
    {
      title: "X",
      url: "http://www.twitter.com",
    },
    {
      title: "INS",
      url: "http://www.instgram.com",
    }
  ];
  return (
    <View className={`py-6 z-50 absolute left-0 w-full ${toggleMenu ? "bg-white rounded-b-3xl" : ""}`} style={{ paddingHorizontal: universalScreenStyles.screen.paddingHorizontal }}>
      <View className="flex-row justify-between items-center">
        <WoodeloLogo />
        <Pressable onPress={() => _openMenu()} className="w-[19] h-[19] justify-center">
          {toggleMenu ? <NavMenuIcon_active /> : <NavMenuIcon />}
        </Pressable>
      </View>
      {toggleMenu && <View className="mt-6">

        <View className="items-center gap-y-2">
          {navList.map((navItem, index) => (
            <TouchableOpacity key={index}>
              <AppText style={{ color: COLORS.blackTextColor }}>{navItem}</AppText>
            </TouchableOpacity>
          ))}
        </View>
        <View className="flex-row justify-between mt-10">
          <AppText size={12} style={{ color: COLORS.blackTextColor }}>HOW TO ORDER</AppText>
          <View className="flex-row gap-x-2">
            {socialMediaHandles.map((socialMedia, index) => (
              <TouchableOpacity onPress={() => Linking.openURL(socialMedia.url)} key={index}>
                <AppText size={12}>{socialMedia.title}</AppText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>}
    </View>
  )
}

export default AppNav