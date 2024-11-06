import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList, 
  SafeAreaView
} from 'react-native';

//Text Colour to make it easier to change
var textcolour = "#d6d6d6"

// Items in the list and how it will show them in the list
const Item = ({text}) => (
  <View style = {Liststyle.main}>
    <Text style = {Liststyle.text}>{text}</Text>
  </View>
);

// this will be the home page that will default here and due to being local this will be profile page to see all of your art work
// for settings im going to add a lot of features to show of coding skills as im limited to being local however ill code it as its treated like its a server
const HomePage = () => {
  {/*this the list of things i need to do in settings */}
  let Settingslist = [
    {
       id:1,
       name:"- banner on the top page to go to setting",
    },
     {
       id:2,
       name:"- In settings have a section to change the colour of the app",
    }]
  {/*this the list of things i need to do on the home page */}
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
      <SafeAreaView style = {bodystyle.container}>
      {/* the to do list heading */}
      <Text style = {styles.header}>To Do list</Text>
      {/* list for the things in settings that i will need to do */}
      <Text style = {Liststyle.flatlistheader}> - Settings</Text>
      <FlatList 
        style = {Liststyle.flatlists}
        keyExtractor = {item => item.id}
        data = {Settingslist}
        renderItem = {({item}) => (<Item text={item.name}/>)}
      />
      
      <Text style = {styles.text}> - Add a page that allows for me to add the images</Text>
      {/* another list on what i will need to do on the home page */}
      <Text style = {Liststyle.flatlistheader}> - Have the home page show the images you have added</Text>
      <FlatList
        style = {Liststyle.flatlists}
        keyExtractor = {item => item.id}
        data = {imagehomepage}
        renderItem = {({item}) => (<Item text = {item.name}/>)}
      />

    </SafeAreaView>
  );
};

const bodystyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#6c1c97',
  },
});
const Liststyle = StyleSheet.create({
  main: {
    marginVertical: 1,
    marginHorizontal: 16,
  },
  text: {
    fontSize: 12,
    color: textcolour,
    textAlign: "center",
  },
  flatlists:{
    flexGrow: 0,
    borderColor: textcolour,
    textAlign: "center",
    
    },
  flatlistheader: {
    fontSize: 14,
    color: textcolour,
    textAlign: "center",


    flexGrow: 0,
    paddingLeft: 10,
  }
});
const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textcolour,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: textcolour,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 5,
    textAlign: "center",
  }
});


export default HomePage;