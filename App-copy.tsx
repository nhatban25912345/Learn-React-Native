/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text style={styles.highlight}>App.tsx</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;



// Button/Image/Modal -------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Alert,
//   ToastAndroid,
//   Pressable,
//   TouchableOpacity,
//   Modal,
//   Image,
//   ImageBackground,
// } from 'react-native';
// import ConfirmButton from './Components/ConfirmButton';
// import { Header } from 'react-native/Libraries/NewAppScreen';
// import AppHeader from './Components/Header';

// const App = () => {
//   const [name, setName] = useState('');
//   const [submitted, setSubmitted] = useState(false);
//   const [warning, setwarning] = useState(false);

//   const onPressHandler = () => {
//     if (name.length > 3) {
//       setSubmitted(!submitted);
//       setwarning(false);
//       submitted ? setName('') : null;
//     } else {
//       // Alert.alert("title", "content", [
//       //   {text: 'do not show again', onPress: () => console.warn('Do not show again pressed')},
//       //   {text: 'cancel', onPress: () => console.warn('Cancel pressed')},
//       //   {text: 'ok', onPress: () => console.warn('Ok pressed')},
//       // ], {cancelable: true, })
//       // ToastAndroid.show(
//       //   'The name must be longer 3 characters!',
//       //   ToastAndroid.SHORT,
//       // );
//       setwarning(true);
//     }
//   };

//   return (
//     <ImageBackground className="h-full" source={require('../assets/imgs/bg-2.jpg')}>
//     <View className="w-full flex items-center">
//       <AppHeader />
//       <Modal
//         transparent
//         visible={false}
//         onRequestClose={() => {
//           setwarning(false);
//         }}
//         animationType="fade"
//         hardwareAccelerated>
//         <View className="bg-transparent flex flex-1 items-center justify-center">
//           <View className="w-[300px] h-[240px] bg-white border border-[#000] rounded-[20px] flex flex-col justify-between">
//             <View className="w-full h-[50px] flex items-center justify-center bg-[#ff0] rounded-t-[20px]">
//               <Text className="text-black text-base font-bold uppercase">
//                 Warning modal
//               </Text>
//             </View>
//             <View className="px-5">
//               <Text className="text-black text-base">
//                 The name must be longer 3 characters!
//               </Text>
//             </View>
//             <Pressable
//               onPress={() => setwarning(false)}
//               android_ripple={{color: '#fff'}}>
//               <View className="w-full h-[50px] flex items-center justify-center bg-[#00ffff] rounded-b-[20px]">
//                 <Text className="text-white text-lg font-bold ">Ok</Text>
//               </View>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Text className="w-[200px] mt-10 mb-4 text-xl text-white text-center">
//         Input your Name:
//       </Text>
//       <TextInput
//         className="w-[200px] h-[60px] bg-white text-lg text-[#419041] text-center rounded"
//         placeholderTextColor={'#649264'}
//         placeholder="Nhập tên"
//         value={name}
//         onChangeText={value => {
//           setName(value);
//           setSubmitted(false);
//         }}
//       />
//       {name.length >= 1 ? (
//         <ConfirmButton 
//           onPress={onPressHandler}
//           title={submitted ? 'Clear' : 'Submit'}
//         />
//       ) : null}

//       {submitted ? (
//         <View>
//           <Text className="w-[200px] mt-3 text-xl text-center">
//             Welcome to my app: {name}
//           </Text>
//           <Image
//             className="w-[200px] h-[200px] rounded-full mt-2"
//             source={require('../assets/imgs/ok.png')}
//           />
//         </View>
//       ) : null}
//       {warning ? (
//         <View>
//           <Text className="w-[200px] mt-3 text-xl text-center">
//             The name must be longer 3 characters!
//           </Text>
//           <Image
//             className="w-[200px] h-[200px] mt-2"
//             source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/017/172/379/small/warning-message-concept-represented-by-exclamation-mark-icon-exclamation-symbol-in-triangle-png.png"}}
//             resizeMode='contain'
//             // blurRadius={2}
//           />
//         </View>
//       ) : null}
//     </View>
//     </ImageBackground>
//   );
// };

// export default App;