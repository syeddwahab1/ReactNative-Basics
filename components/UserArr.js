import {Text, View, StyleSheet} from 'react-native';
import React from 'react';
export default UserArrayData = props => {
  const item = props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    color: 'red',
    flex: 1,
    textAlign: 'center',
  },
  box: {
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
  },
});
