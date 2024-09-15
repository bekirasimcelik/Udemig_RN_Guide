import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';
import {ArrowRight2, People} from 'iconsax-react-native';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'myDataBase',
});

const GroupItem = ({item, showDelete, deleteItem}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'row',
        }}>
        <People size="32" color={Colors.BLUE} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          marginLeft: 10,
          borderBottomWidth: 0.5,
        }}>
        <Text>{item.title}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: Colors.GRAY}}>{item.id}</Text>
        <ArrowRight2 size="24" color={Colors.GRAY} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    padding: 10,
    borderRadius: 10,
  },
});

export default GroupItem;
