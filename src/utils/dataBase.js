import {openDatabase} from 'react-native-sqlite-storage';

const db = openDatabase({
  name: 'myDataBase',
});

const createTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction(txn => {
      txn.executeSql(
        'CREATE TABLE IF NOT EXIST groups (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT)',
        [],
        (sqlTxn, response) => {
          let result = [];
          if (response.rows.length > 0) {
            for (let i = 0; i < response.rows.length; i++) {
              let item = response.rows.item(i);
              result.push(item);
            }
          }
          setList(result);
        },
        error => console.log('Hata', error.message),
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
        (sqlTxn, res) => console.log('Groups', res.rows),
        error => console.log('Hata', error.message),
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
        (sqlTxn, res) => console.log('Veri Eklendi', res.rows),
        error => console.log('Hata', error.message),
      );
    });
  });
};

export {createTable, getGroups, addNewGroups};
