import { Text, View } from "react-native";

function AppHeader() {
    return (   
        <View className="w-full h-[70px] flex items-center justify-center bg-gray-900">
            <Text className="text-lg text-white">React Native Tutourial</Text>
        </View>
    );
}

export default AppHeader;