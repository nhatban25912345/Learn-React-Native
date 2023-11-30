import React, {useState} from 'react';
import {View, Text, ScrollView, RefreshControl, SectionList, FlatList} from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
    { name: 'Item 8' },
    { name: 'Item 9' },
    { name: 'Item 27' },
    { name: 'Item 78' },
  ]);

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
    },
    {
      title: 'Title 3',
      data: ['Item 3-1'],
    },
    {
      title: 'Title 4',
      data: ['Item 4-1', 'Item 4-2'],
    },
  ]

  const [Refreshing, setRefreshing] = useState(false);

  const handleRefreshing = () => {
    setRefreshing(true);
    setItems([...items, { name: 'Item 99' }]);
    setRefreshing(false);
  }

  return (
    <ScrollView
      overScrollMode="never"
      refreshControl={
        <RefreshControl
          refreshing={Refreshing}
          onRefresh={handleRefreshing}
          colors={['green']}
        />
      }
    >
      <View className="flex items-center justify-start">
          {items.map((item) => 
            <Text className=''>{item.name}</Text>
          )}
          <Text className="text-xl font-Bold text-green-500">Code by Nhat</Text>
      </View>
      <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => (
          <Text className='text-xl font-Bold text-green-500'>{item}</Text>
        )}
        renderSectionHeader={({section})=>(
          <View className=''>
            <Text className=''>{section.title}</Text>
          </View>
        )}
      ></SectionList>
      <FlatList
        // numColumns={2}
        // horizontal={true}
        // inverted
        keyExtractor={(items, index) => index.toString()}
        data={items}
        renderItem={({item}) => <Text className='p-8 text-center bg-yellow-500 border border-orange-500 '>{item.name}</Text>}
      ></FlatList>
    </ScrollView>
  );
};

export default App;
