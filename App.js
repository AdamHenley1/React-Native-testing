import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList, 
  SafeAreaView
} from 'react-native';

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


// this will be the home page that will default here and due to being local this will be profile page to see all of your art work
// for settings im going to add a lot of features to show of coding skills as im limited to being local however ill code it as its treated like its a server
const HomePage = () => {
  let ary = [
    {
       id:1,
       name:' - banner on the top page to go to setting',
    },
     {
       id:2,
       name:' - In settings have a section to change the colour of the app',
    }]
  return (
      <SafeAreaView style={styles.container}>
      <Text style = {styles.header}>To Do list</Text>
      <Text style = {styles.flatlistheader}>Settings</Text>
      <FlatList 
      style = {styles.flatlists}
        keyExtractor={item => item.id}
        data={ary}
        renderItem={({item}) => (<Item title={item.name}/>)}
      />
      <Text>temp</Text>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    fontSize: 15,
    backgroundColor: '#ffffff',
    padding: 0,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
  },
  header: {
    fontSize: 20,
  },
  flatlists:{
    flexGrow: 0,
    borderWidth: 1,
    },
  flatlistheader: {
    fontSize: 17,
    borderWidth: 1,
  }
});


export default HomePage;