import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        backgroundColor:'orange', 
        flexDirection:'row',
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
    },
    button:{
        position: 'absolute',
        left:10
    },
    buttonText:{
        color:'white',
    },
    title:{ 
        fontSize:25,
        color:'white', 
    }
})