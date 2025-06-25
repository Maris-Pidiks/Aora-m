import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../components/CustomButton'


import { images } from "../constants"

const RootLayout = () => {
  return (
    <SafeAreaView className="h-full bg-primary">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="items-center justify-center w-full min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain" />
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain" />

          <View className="relative mt-5">
            <Text
              className="text-3xl font-bold text-center text-white">
              Discover Endless possibilities with {" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              style={{
                width: 136,
                height: 15,
                position: 'absolute',
                bottom: -8,
                right: 95
              }}
              resizeMode="contain" />
          </View>

          <Text className="mx-8 mt-8 text-sm leading-relaxed text-center text-gray-100 font-pregular">
            Where creativity meets innovations - embark on a journey of limitless exploration with Aora. 1:27:22.
          </Text>

          <CustomButton
            title="Continue with email"
            handlePress={() => router.push("./sign-in")}
            containerStyles="w-full mt-7 ml-10 mr-10" />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView >
  )
}

export default RootLayout
