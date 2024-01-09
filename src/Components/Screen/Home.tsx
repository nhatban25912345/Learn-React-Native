import {Alert, Text, View} from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfirmButton from '../Utils/ConfirmButton';

function Home({navigation, route}: {navigation: any, route: any}) {
  const handleBackToB = () => {
    navigation.navigate('Login', {id: 2, name: "Shinha", age: 22, content: "Item from screen A"});
  };

  const s = require("../Utils/GlobalStyle");

  useEffect(() => {
    getData();
  }, [])

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData")
        .then((value: any) => {
          if (value != null) {
            let user = JSON.parse(value);
            setName(user.Name);
            setAge(user.Age);
          }
        })
    } catch (error) {
      console.log(error);
    }
  }

  const updateData = async () => {
    if (name.length == 0) {
        Alert.alert('Warning!', 'Please write your data.')
    } else {
        try {
            var user = {
                Name: name
            }
            await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
            Alert.alert('Success!', 'Your data has been updated.');
        } catch (error) {
            console.log(error);
        }
    }
  }

  const removeData = async () => {
    try {
      AsyncStorage.clear();
        navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="bg-gray-700 flex-1 items-center justify-center">
      <Text className='font-bold text-2xl text-white' style={s.CustomFont}>
        Welcome {name} !
      </Text>
      <ConfirmButton 
        title="Logout"
        onPressFunction={removeData}
      />
    </View>
  );
}

export default Home;
