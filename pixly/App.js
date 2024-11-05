import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';



// this will be the home page that will default here and due to being local this will be profile page to see all of your art work
// for settings im going to add a lot of features to show of coding skills as im limited to being local however ill code it as its treated like its a server
const HomePage = () => {
  let ary = [
    {
       id:1,
       name:'"banner on the top page to go to setting',
    },
     {
       id:2,
       name:'yash',
    },
     {
       id:3,
       name:'aniket',
    }],
  return (
    <View style={styles.container}>
      <Text>header</Text>
      <Text>To Do list</Text>
      <SafeAreaView style={styles.container}>
      <FlatList
       keyExtractor={item => item.id}
        data={ary}
        renderItem={({item}) => (<Item title={item.name}/>);}
      />
    </SafeAreaView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  }
});


export default HomePage;