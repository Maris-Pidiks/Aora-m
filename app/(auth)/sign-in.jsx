import { Link } from "expo-router"
import { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from "../../components/CustomButton"
import FormField from "../../components/FormField"
import { images } from "../../constants"

import { createUser } from "../../lib/appwrite"


const SignIn = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const submit = () => {
        createUser();
    }

    return (
        <SafeAreaView className="h-full bg-primary">
            <ScrollView>
                <View className="justify-center items-center w-full min-h-[75vh] px-4 my-6">
                    <Image source={images.logo} resizeMode="contain"
                        className="w-[135px] h-[85px]"
                    />
                    <Text className="mt-1 mb-2 text-2xl text-white text-semibold font-psemibold ">Log in to Aora</Text>

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
                        title="Sign In"
                        handlePress={submit}
                        containerStyles=""
                        isLoading={isSubmitting}
                    />

                    <View className="flex-row justify-center gap-2 pt-5">
                        <Text className="text-lg text-gray-100 font-pregular">
                            Don&apos;t have an account?.
                        </Text>
                        <Link href="/sign-up" className="text-lg font-psemibold text-secondary">Sign Up</Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn