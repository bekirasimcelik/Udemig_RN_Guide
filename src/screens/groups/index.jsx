import React from 'react';
import {View, Text, SafeAreaView, Pressable, Button} from 'react-native';

const Groups = () => {
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title="Edit" />
          <Button title="Add List" />
        </View>
        <Text style={{fontSize: 30, fontWeight: 'bold'}}>List</Text>
      </View>
    </SafeAreaView>
  );
};

export default Groups;
