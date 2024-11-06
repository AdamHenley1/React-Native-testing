import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList, 
  SafeAreaView
} from 'react-native';

const Item = ({title}) => (
  <View style={Liststyle.main}>
    <Text style={Liststyle.text}>{title}</Text>
  </View>
);

// this will be the home page that will default here and due to being local this will be profile page to see all of your art work
// for settings im going to add a lot of features to show of coding skills as im limited to being local however ill code it as its treated like its a server
const HomePage = () => {
  let ary = [
    {
       id:1,
       name:'- banner on the top page to go to setting',
    },
     {
       id:2,
       name:'- In settings have a section to change the colour of the app',
    }]
  let imagehomepage = [
    {
      id:1,
      name: "- when you go to home page have it find images locally and add them to the home page (like its a server but locally)",
    },
    {
      id:2,
      name: "- have it put it nicely into a grid on the homepage",
    },
    {
      id:3,
      name: "- have a way to open the images making them bigger and clearer to see",
    }
  ]
  return (
      <SafeAreaView style={bodystyle.container}>
      {/* the to do list heading */}
      <Text style = {styles.header}>To Do list</Text>
      {/* list for the things in settings that i will need to do */}
      <Text style = {Liststyle.flatlistheader}>- Settings</Text>
      <FlatList 
        style = {Liststyle.flatlists}
        keyExtractor={item => item.id}
        data={ary}
        renderItem={({item}) => (<Item title={item.name}/>)}
      />
      
      <Text>- Add a page that allows for me to add theimages</Text>
      {/* another list on what i will need to do on the home page */}
      <Text style = {Liststyle.flatlistheader}>- Have the home page show the images you have added</Text>
      <FlatList
        style = {Liststyle.flatlists}
        keyExtractor = {item => item.id}
        data = {imagehomepage}
        renderItem = {({item}) => (<Item title = {item.name}/>)}
      />

    </SafeAreaView>
  );
};

const bodystyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
});
const Liststyle = StyleSheet.create({
  main: {
    fontSize: 15,
    backgroundColor: '#ffffff',
    padding: 0,
    marginVertical: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
  },
  flatlists:{
    flexGrow: 0,
    borderWidth: 1,
    },
  flatlistheader: {
    flexGrow: 0,
    paddingLeft: 10,
    fontSize: 14,
    borderWidth: 1,
  }
});
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
});


export default HomePage;