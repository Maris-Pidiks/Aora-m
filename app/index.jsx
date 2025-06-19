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
      <Text className="text-2xl text-white font-pextralight">TEST MOBILE APP</Text>
      <Text className="mb-5 text-2xl text-white font-pbold">53:11</Text>
      <Link href="/home" className="mt-4 mb-5 text-2xl text-gray-500 ">
        Home
      </Link>
    </View>
  )
}

export default RootLayout
