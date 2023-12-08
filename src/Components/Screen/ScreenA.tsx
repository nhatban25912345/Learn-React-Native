import {Pressable, Text, View} from 'react-native';

function ScreenA({navigation}: {navigation: any}) {
  const handleBackToB = () => {
    navigation.navigate('screenB');
  };

  const handleOpenDrawer = () => {
    navigation.toggleDrawer();
  }

  return (
    <View className="bg-gray-700 flex-1 items-center justify-center">
      <Text className="font-semibold text-xl">Screen A</Text>
      <Pressable
        className="mt-3"
        style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'red'}]}
        onPress={handleBackToB}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
        <Text className="text-xl text-white bg-green-800 px-5 py-2 rounded">
          Go to B
        </Text>
      </Pressable>
      <Pressable
        className="mt-3"
        style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'red'}]}
        onPress={handleOpenDrawer}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
        <Text className="text-xl text-white bg-green-800 px-5 py-2 rounded">
          Toggle drawer
        </Text>
      </Pressable>
    </View>
  );
}

export default ScreenA;
