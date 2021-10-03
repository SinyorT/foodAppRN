import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{ 
        backgroundColor:'white',
        height:150,  
        margin:10, 
        borderRadius:10,  
        position:'relative'

    },
    image:{ 
        borderRadius:10, 
        width: null,
        height: null,
        resizeMode:'cover',
        flex:1
    },
    name:{
        fontSize:25,
        fontWeight:'500',
        color:'white',
    },
    body_container:{
        position:'absolute',
        padding:2,
        right:0,
        left:0,
        backgroundColor:'rgba(0, 0, 0,0.7)',  
        bottom:0,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        
    }
})