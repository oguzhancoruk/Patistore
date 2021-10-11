import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
        backgroundColor: '#EAEAEA',
        margin: 10,
        borderRadius: 10,
    },
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10
    },
    name: {
        fontWeight: 'bold',
        fontSize: 15,
        padding:5,
        color:'black'
    },
    price: {
        fontSize: 13,
        color: 'gray',
        padding:5
    },
    stock: {
        fontWeight: 'bold',
        color: 'red',
        fontSize:13,
        padding:5
    }
})