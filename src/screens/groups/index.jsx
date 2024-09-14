import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Button, FlatList} from 'react-native';
import GroupItem from '../../components/groups/GroupItem';
import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'myDataBase',
});

const Groups = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const initData = async () => {
      try {
        await createTable();
        await addNewGroups('All');
        const groups = await getGroups();
        setList(groups);
      } catch (error) {
        console.log('Hata:', error);
      }
    };

    initData();
  }, []);

  const createTable = () => {
    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          'CREATE TABLE IF NOT EXISTS groups (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)',
          [],
          (sqlTxn, res) => {
            console.log('Tablo Oluşturuldu', res.rows);
            resolve(res);
          },
          error => {
            console.log('Hata', error.message);
            reject(error);
          },
        );
      });
    });
  };

  const addNewGroups = title => {
    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          'INSERT INTO groups (title) VALUES (?)',
          [title],
          (sqlTxn, res) => {
            console.log('Veri Eklendi', res.rows);
            resolve(res);
          },
          error => {
            console.log('Hata', error.message);
            reject(error);
          },
        );
      });
    });
  };

  const getGroups = () => {
    return new Promise((resolve, reject) => {
      db.transaction(txn => {
        txn.executeSql(
          'SELECT * FROM groups',
          [],
          (sqlTxn, response) => {
            let result = [];
            if (response.rows.length > 0) {
              for (let i = 0; i < response.rows.length; i++) {
                let item = response.rows.item(i);
                result.push(item);
              }
            }
            resolve(result);
          },
          error => {
            console.log('Hata', error.message);
            reject(error);
          },
        );
      });
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: 10, flex: 1}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button title="Edit" onPress={() => {}} />
          <Button title="Add List" onPress={() => {}} />
        </View>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginVertical: 10}}>
          List
        </Text>
        <FlatList
          data={list}
          renderItem={({item}) => <GroupItem item={item} />}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Groups;
