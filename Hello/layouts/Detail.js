import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Detail(props) {
    //const {navigation}=props;
    //const data=navigation.getParam('data','');
    // const handlePress=()=>{
    //     console.log(data);
    //     props.navigation.navigate('Cart',{data:data});
    // }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                CHI TIẾT SẢN PHẨM
            </Text>
            <Image style={styles.img}
                source={require('../images/hunter1.png')}
            />
            <Text>
                {"\n"}
                <Text style={styles.head}>
                    Tên sản phẩm:
                </Text>
                <Text>   </Text>
                <Text style={styles.headd}>
                    Giày Thể Thao Nam Biti’s Hunter X Dune
                </Text>
            </Text>

            <Text>
                {"\n"}
                <Text style={styles.head}>
                    Gía:
                </Text>
                <Text>   </Text>
                <Text style={styles.headd}>
                    1,256,000vnđ
                </Text>
            </Text>
            <Button
                style={styles.input}
                title="Chọn mua"
                color="#FF0084"
                //onPress={handlePress}
            />
            <StatusBar style="auto" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    title: {
        flex: 5,
        alignItems: 'center',
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
        backgroundColor: '#ddd',
        marginLeft: 55,
        //marginBottom:0,
        marginTop:30,
    },
    head: {
        flex: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue',
        backgroundColor: '#ddd',
    },
    headd: {
        flex: 10,
        fontSize: 22,
        fontWeight: 'bold',
        color: 'red',
        backgroundColor: '#ddd',
    },
    img: {
        flex: 18,
        width: 300,
        height: 200,
        //margin: 5,
    }
});