import React from 'react';
import { Pressable, Text } from "react-native";

function ConfirmButton(props: any) {
    return ( 
        <Pressable
          className="mt-3"
          style={({pressed}) => [{backgroundColor: pressed ? 'green' : 'red'}]}
          onPress={props.onPressFunction}
          hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}>
          <Text className="text-xl text-white bg-green-800 px-5 py-2 rounded">
            {props.title}
          </Text>
        </Pressable>
    );
}

export default ConfirmButton;