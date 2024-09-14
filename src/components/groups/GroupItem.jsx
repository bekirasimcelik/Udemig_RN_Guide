//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Colors from '../../theme/colors';
import {ArrowRight2, People} from 'iconsax-react-native';

// create a component
const GroupItem = ({item}) => {
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
        <Text>{item}</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, color: Colors.GRAY}}>3</Text>
        <ArrowRight2 size="24" color={Colors.GRAY} />
      </View>
    </View>
  );
};

// define your styles
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

//make this component available to the app
export default GroupItem;
