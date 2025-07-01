import { Link, router } from "expo-router"
import { useState } from 'react'
import { Alert, Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from "../../components/CustomButton"
import FormField from "../../components/FormField"
import { images } from "../../constants"
import { createUser } from "../../lib/appwrite"; // <-- Add this line


const SignUp = () => {

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = async () => {
        if (!form.username || !form.email || !form.password) {
            Alert.alert("Error", "Please fill in all the fields!")
        }

        setIsSubmitting(true)

        try {
            const result = await createUser(form.email, form.password, form.username)

            // set it to global state ...

            router.replace("/home")
        } catch (error) {
            Alert.alert("Error", error.message)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View className="justify-center items-center w-full min-h-[75vh] px-4 my-6">
                    <Image source={images.logo} resizeMode="contain"
                        className="w-[135px] h-[85px]"
                    />
                    <Text className="mt-1 mb-2 text-2xl text-white text-semibold font-psemibold ">Sign up to Aora</Text>

                    <FormField
                        title="Username"
                        value={form.username}
                        handleChangeText={(e) => setForm({ ...form, username: e })}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7 mb-[40px]"
                    />

                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles=""
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center gap-2 pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Have an account already?.
                        </Text>
                        <Link href="/sign-in" className="text-lg font-psemibold text-secondary">Sign In</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp