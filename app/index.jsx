import { Link } from "expo-router"
import { Image, ImageBackground, StatusBar, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../assets/images/bgg.jpg")}
        className="items-center justify-center flex-1 w-full h-full"
      >
        <Image
          source={require("../assets/images/react-logo.png")}
          className="w-[130px] h-[130px] mb-4.5"
        />
        <Text className="px-10 py-2 my-3 text-3xl text-white bg-red-500">MY FIRST</Text>
        <Text className="text-2xl font-bold text-white">MOBILE APP</Text>
        <Link href="/profile" className="text-gray-500 mt-2.5 ">
          Go to profile
        </Link>
      </ImageBackground>
    </View>
  )
}

export default RootLayout
