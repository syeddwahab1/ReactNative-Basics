/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import UserArrayData from './components/UserArr';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  SectionList,
  Button,
  TouchableHighlight,
  ActivityIndicator,
  
} from 'react-native';

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);
  useEffect(() => {
    console.warn(count);
  }, [count]);
  const SectArr = [
    {
      name: 'john',
      data: ['html', 'js'],
    },
    {
      name: 'alex',
      data: ['html', 'js'],
    },
  ];
  const userArray = [
    {
      id: 1,
      name: 'john',
      email: 'john@example.com',
      data: ['html', 'json', 'css', 'js'],
    },
    {
      id: 2,
      name: 'bruce',
      email: 'bruce@example.com',
      data: ['html', 'json', 'css', 'js'],
    },
    {
      id: 3,
      name: 'konnor',
      email: 'konnor@example.com',
      data: ['html', 'json', 'css', 'js'],
    },
  ];
  return (
    <View>
      {/* {Componenet in loop with flatlist} */}
      <Text>Component in loop with FlatList</Text>
      <FlatList
        data={userArray}
        renderItem={({item}) => <UserArrayData item={item} />}
      />
      <Text>Section lists in react native</Text>
      <SectionList
        sections={SectArr}
        renderItem={({item}) => <Text>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={{color: 'red'}}>{name}</Text>
        )}
      />
      {/* {useEffect in life cycles} */}
      <Text style={{fontSize: 15}}>useEffect as componentDidUpdate{count}</Text>
      <Button title="Update Counter" onPress={() => setCount(count + 1)} />
      <Button title="Update Data" onPress={() => setData(data + 1)} />
      <UserComp info={{data}} />
      <Button
        title="Hide component"
        onPress={() => setShow(false)}
        color={'green'}
      />
      <Button title="show component" onPress={() => setShow(true)} />
      <Button
        title="Toggle component"
        onPress={() => setShow(!show)}
        color={'darkblue'}
      />
      {show ? <ToggleComponent /> : null}
      <Text style={{fontSize: 20}}>useEffect for ComponentUnmount</Text>
      <Button title="Toggle" onPress={() => setToggle(!toggle)} />
      {toggle ? <ToggleuserComponent /> : null}
      <TouchableHighlight>
        <Text style={styles.button}>Button</Text>
      </TouchableHighlight>
      <ActivityIndicator size={50} />

    </View>
  );
};
const UserComp = props => {
  useEffect(() => {
    console.warn('run this when data prop is updated');
  }, [props.info.data]);
  return (
    <View>
      <Text>Data:{props.info.data}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
const ToggleComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 15, color: 'red'}}>Sample text</Text>
    </View>
  );
};
const ToggleuserComponent = () => {
  useEffect(() => {
    return () => {
      console.warn('useEffect called on unmount');
    };
  });
  return (
    <View>
      <Text style={{fontSize: 15, color: 'red'}}>Dummy text</Text>
    </View>
  );
};

export default App;
