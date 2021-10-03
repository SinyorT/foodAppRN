import { StyleSheet, Dimensions } from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    button: {
        backgroundColor: 'red',
        margin: 10,
        padding:8,
        flex: 1,
        borderRadius: 4
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    image: {
        width: '100%',
        minHeight: deviceSize.height / 3,
        resizeMode: 'cover',
        backgroundColor: 'white'
    },
    name: {
        fontSize: 35,
        fontWeight: '500',
        color: 'red',
        borderBottomWidth: 1,
        borderColor: '#cccccc',
        padding: 10
    },
    desc: {
        padding: 10,
        fontSize: 20,
    }
})