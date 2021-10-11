import React from "react";
import { View,SafeAreaView, Text, StyleSheet,FlatList} from "react-native";
import patika_data from './patika_data.json';
import PatikaStore from './components/PatikaStore/PatikaStore';
import SearchBox from './components/SearchBox/SearchBox';


function App () {
  const renderProduct = ({ item }) => <PatikaStore products={item} />
  return(
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE </Text>
      <SearchBox style={styles.searchBar}/>
      <View>
        <FlatList
        data={patika_data}
        renderItem={renderProduct}
        numColumns= "2"
        horizontal={false}
         
         />
        
        
      </View>
    </SafeAreaView>
  );

}

const styles =StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#77008E',
    paddingLeft: 13
  },
  searchBar: {
    padding: 10
  }
  

})
  

  
export default App;