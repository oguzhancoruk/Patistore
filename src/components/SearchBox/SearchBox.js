import React from "react";
import {View, TextInput, StyleSheet} from 'react-native';

const SearchBox = () => {
    return(
        <View style={styles.container}> 
            <TextInput 
            placeholder='Ara..'
            style={styles.searchInput} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: '#D6D6D6',
        borderRadius: 10,
        margin: 10,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 10,
        fontSize: 15,
    }
})

export default SearchBox;