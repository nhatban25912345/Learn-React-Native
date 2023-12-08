import {Pressable, Text, View} from 'react-native';

function ScreenB({navigation, route}: {navigation: any, route: any}) {
  const handleGoBack = () => {
    navigation.goBack();
  };
  const handleGoToA = () => {
    navigation.navigate('screenA', {message: "Message from B"});
  };

  return (
    <View className="bg-gray-700 flex-1 items-center justify-center">
      <Text className="font-semibold text-xl">Screen B</Text>
      <Pressable
        className="mt-3"
        style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'red'}]}
        onPress={handleGoBack}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
        <Text className="text-xl text-white bg-green-800 px-5 py-2 rounded">
          Go back
        </Text>
      </Pressable>
      <Pressable
        className="mt-3"
        style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'red'}]}
        onPress={handleGoToA}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
        <Text className="text-xl text-white bg-green-800 px-5 py-2 rounded">
          Back to A
        </Text>
      </Pressable>
      <View className='flex flex-row mt-3'><Text>id: </Text><Text>{route?.params?.id}</Text></View>
    </View>
  );
}

export default ScreenB;
