import { Link } from "expo-router"
import { Image, StatusBar, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View className="items-center justify-center flex-1 bg-primary">
      <StatusBar barStyle="light-content" />

      <Image
        source={require("../assets/images/logo.png")}
        className="w-[170px] h-[50px] mb-10"
      />
      <Text className="text-2xl font-bold text-white">MY FIRST</Text>
      <Text className="mb-5 text-2xl font-bold text-white">MOBILE APP</Text>
      <Link href="/profile" className="mt-4 mb-5 text-gray-500 ">
        Go to profile
      </Link>
    </View>
  )
}

export default RootLayout
