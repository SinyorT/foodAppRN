import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{ 
        backgroundColor:'white',
        height:100, 
        flexDirection:'row',
        margin:10, 
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    image:{
        margin:5,
        height:100,
        width:100,
        resizeMode:'contain', 
        borderRadius:100
    },
    name:{
        flex:1,
        fontSize:25,
        fontWeight:'500'
    }
})