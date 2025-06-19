import { Text, TouchableOpacity } from 'react-native'

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-secondary rounded-xl w-full min-h-[52px] justify-center items-center first-line:${containerStyles} ${isLoading ? "opacity-50" : ""}`}
            disabled={isLoading}
        >
            <Text
                className={`text-lg text-primary font-psemibold ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton