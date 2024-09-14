import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Button} from 'react-native';
import {createTable, getGroups, addNewGroups} from '../../utils/dataBase';
import {FlatList} from 'react-native-gesture-handler';
import GroupItem from '../../components/groups/GroupItem';

const Groups = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    createTable();
    getGroups();
    addNewGroups('All');

    return () => {};
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title="Edit" />
          <Button title="Add List" />
        </View>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginVertical: 10}}>
          List
        </Text>
        <FlatList data={list} renderItem={item => <GroupItem item={item} />} />
      </View>
    </SafeAreaView>
  );
};

export default Groups;
