import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, StyleSheet, Image, View} from 'react-native';
import { FlatList } from 'react-native';

global.mycart=[];

export default function Cart() {
    //const {navigation}=props;
    const data=navigation.getParam('data','');

    const [count,setCount]=useState(1);
    const [list,setList]=useState([]);
    const DanhSachSanPham=()=>
    {
        setList(global.mycart);
        const newList=[{data},global.mycart];
        setList(newList);
        global.mycart=newList;
        console.log("Gio hang sau khi them: ");
        console.log(global.mycart);
    }
    // const renderItems=({index,item})=>
    // {
    //     return(

    //     )
    // }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.d}></View>
            <View>
                <Text style={styles.title}>
                GIỎ HÀNG
                </Text>

                <FlatList
                    data={global.mycart}

                />

                <StatusBar style="auto" />
            </View>
        </ScrollView>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        flex: 10,
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: '#ddd',

    },
    headd: {
        flex: 10,
        fontSize: 11,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
    },
    d: {
        flex: 2,
        padding: 16,
        marginTop: 5,
    },
});
