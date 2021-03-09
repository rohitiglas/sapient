import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Item = ({title, indexNumber}) => (
  <View style={styles.item}>
    <Text style={{fontSize: 10 * indexNumber}}>{title}</Text>
  </View>
);
function add(a, b) {
  return a + b;
}

const App = () => {
  const result = DATA.reduce(add, 0);
  const renderItem = ({item, index}) => (
    <Item id={index} title={item} indexNumber={index + 1} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Text style={styles.total}>Total Sum is : {result}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  total: {margin: 20, fontSize: 40, textAlign: 'center'},
});

export default App;
