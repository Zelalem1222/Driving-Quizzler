import React , {useState} from "react";
import { View , Image , StyleSheet , Text , FlatList } from 'react-native'
import Title from "../components/title";
import Icon from "../components/icon";
import signs from "../asset/signs";

const Item = ({src , text}) => {
    return(
    <View style={styles.item}>
         <Icon imageAddress={src}/>
        <Text style={styles.text}>{text}</Text>
    </View>
    );
    }


export default function Signs() { 
    
    const renderItem = ({item}) => (
        <Item src={item.src} text={item.text} />
    )
    return (
       <View style={styles.container}>
        <Title titleText='ምልክቶች' />
            <FlatList 
            data={signs}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        paddingLeft: 15,
       },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15
    } ,
   text: {
    color: '#434242',
    fontWeight:'bold',
    width: '70%',
    marginLeft: 8
   }
})




