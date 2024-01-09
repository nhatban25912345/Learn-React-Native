import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TextInput, View, Button, Pressable } from 'react-native';
import ConfirmButton from '../Utils/ConfirmButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation}:{navigation:any}) {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    useEffect(() => {
        // getData();
    })

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('Home');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (name.length == 0 || age.length == 0) {
            Alert.alert('Warning!', 'Please write your data.')
        } else {
            try {
                var user = {
                    Name: name,
                    Age: age
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('Home');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (  
        <View className='flex flex-1 bg-[#0080ff]'>
            <View className='flex items-center mt-[100px]'>
                <Image
                    className='w-[100px] h-[100px] m-5'
                    source={require("../../../assets/imgs/case.png")}
                />
                <Text className='text-3xl text-white mb-[30px]'>Async Storage</Text>
                <TextInput 
                    className='w-[300px] border border-[#555] rounded-[10px] bg-white text-center text-black text-xl mb-[10px] !placeholder-gray-500' 
                    placeholder="Enter your name:"
                    onChangeText={(value)=> setName(value)}
                />
                <TextInput 
                    className='w-[300px] border border-[#555] rounded-[10px] bg-white text-center text-black text-xl mb-[10px] !placeholder-gray-500' 
                    placeholder="Enter your age:"
                    onChangeText={(value)=> setAge(value)}
                />
                <ConfirmButton 
                    title="login"
                    onPressFunction={setData}
                />
            </View>

        </View>
    );
}

export default Login;