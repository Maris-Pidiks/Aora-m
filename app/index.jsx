import { Link } from "expo-router"
import { Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <ImageBackground
        source={require("../assets/images/bgg.jpg")}
        style={{ flex: 1, width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("../assets/images/react-logo.png")}
          style={{ width: 130, height: 130, marginBottom: 18 }}
        />
        <Text style={styles.h1}>MY FIRST</Text>
        <Text style={styles.h1}>MOBILE APP</Text>
        <Link href="/profile" style={{ color: "gray", marginTop: 10 }}>
          Go to profile
        </Link>
      </ImageBackground>
    </View>
  )
}

export default RootLayout

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: "#e3e3e3",
    marginBottom: 5,
  },
})