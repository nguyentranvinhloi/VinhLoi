import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { Button, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Linking } from 'react-native';
import { Link } from '@react-navigation/native';
//import { useNavigation } from '@react-navigation/native';

//----------------------------------------------------------------------------------------------------
const productnew = [
    { id: 1, name: 'Giày Thể Thao Nam' + '\n' + 'Biti’s Hunter X Dune', price: '1,256,000vnđ', image: require('../images/hunter1.png') },
    { id: 2, name: 'Giày Thể Thao Nam ' + '\n' + 'Biti’s Hunter X Festival ', price: '981,000vnđ', image: require('../images/hunter12.png') },
    { id: 3, name: 'Giày Thể Thao Nam ' + '\n' + 'Biti’s Hunter X HSM003', price: '981,000vnđ', image: require('../images/hunter13.png') },
];
const productsale = [
    { id: 4, name: 'Product 1', price: '100.000vnđ', image: require('../images/hunter2.png') },
    { id: 5, name: 'Giày Thể Thao Nam ' + '\n' + 'Biti’s Hunter Core', price: '736,000vnđ', image: require('../images/hunter22.png') },
    { id: 6, name: 'Product 3', price: '300.000vnđ', image: require('../images/hitu.png') },
];
const productfast = [
    { id: 7, name: 'Product 1', price: '100.000vnđ', image: require('../images/hunter3.png') },
    { id: 8, name: 'Product 2', price: '200.000vnđ', image: require('../images/hitu.png') },
    { id: 9, name: 'Product 3', price: '300.000vnđ', image: require('../images/hitu.png') },
];

function Home({ activeMenuItem, onMenuItemPress }) {
    // const navigation = useNavigation();
    // const handleProductPress = (product) => {
    //     navigation.navigate('SingleProduct', { product });
    // };
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     getAllProduct();
    // }, []);

    // const getAllProduct = () => {
    //     axios.get('https://fakestoreapi.com/products')
    //         .then(function (response) {
    //             // Xử lý dữ liệu trả về
    //             setProducts(response.data);
    //         })
    //         .catch(function (error) {
    //             // Xử lý lỗi
    //             alert(error.message);
    //         })
    //         .finally(function () {
    //             // 
    //             alert('Finally called');
    //         });
    // }
    const renderProduct = (item) => (
        <View style={styles.productItem}>
            <TouchableOpacity
                style={[
                    styles.menuItem,
                    activeMenuItem === 'Detail' && styles.activeMenuItem,
                ]}
                onPress={() => onMenuItemPress('Detail')}
            >
                <Image source={item.image} style={styles.productImage} />
            </TouchableOpacity> 
            
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <Button
                style={styles.input}
                title="Mua"
                color="#FF0084"

            />
        </View>
    );
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>{'\n'}</Text>
                <TextInput

                    style={styles.input}
                    placeholder="Search"
                />

                {/* <Text style={styles.head} >
                Trang chủ
                {'\n'}
            </Text> */}
                <Image
                    source={require('../images/banner.png')}
                    style={{ width: 380, height: 150, margin: 3 }}
                />
                <StatusBar style="auto" />
            </View>

            <Text style={styles.headd}>
                <Text>Hunter</Text>    <Text>Sandal</Text>    <Text>Giày chạy bộ</Text>     <Text>Giày thể thao</Text>     <Text>Giày tây</Text>     <Text>Dép</Text>                 {'\n'}
            </Text>


            <Text style={styles.title}>
                Sản phẩm mới
                {'\n'}
            </Text>
            <ScrollView horizontal>
                {productnew.map((item) => renderProduct(item))}
            </ScrollView>

            <Text style={styles.title}>
                {'\n'}
                Sản phẩm khuyến mãi
                {'\n'}
            </Text>
            <ScrollView horizontal>
                {productsale.map((item) => renderProduct(item))}
            </ScrollView>

            <Text style={styles.title}>
                {'\n'}
                Sản phẩm bán chạy
                {'\n'}
            </Text>
            <ScrollView horizontal>
                {productfast.map((item) => renderProduct(item))}
            </ScrollView>
        </ScrollView>

 

        // <ScrollView style={styles.container}>
        //     <View style={styles.container}>
        //         {products.map((product) => (
        //             <TouchableOpacity
        //                 style={styles.item}
        //                 key={product.id}
        //                 onPress={() => handleProductPress(product)}
        //             >
        //                 <View>
        //                     <Image style={styles.img} source={{ uri: product.image }} />
        //                 </View>
        //                 <View style={styles.des}>
        //                     <Text style={styles.des_text}>{product.title}</Text>
        //                     <Text style={styles.price}>Price: ${product.price.toFixed(2)}</Text>
        //                     <View style={styles.ratingContainer}>
        //                         <Text style={styles.ratingText}>Rating: </Text>
        //                         <FontAwesome name="star" style={styles.starIcon} />
        //                         <Text style={styles.ratingValue}>{product.rating.rate.toFixed(1)}</Text>
        //                         <Text style={styles.ratingCount}>({product.rating.count} reviews)</Text>
        //                     </View>
        //                 </View>
        //             </TouchableOpacity>
        //         ))}
        //     </View>
        // </ScrollView>



    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
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
    logo: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    productItem: {
        alignItems: 'center',
        marginRight: 16,
    },
    productImage: {
        width: 150,
        height: 150,
        resizeMode: 'cover',
        marginBottom: 8,
        borderRadius: 4,
    },
    productName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    productPrice: {
        fontSize: 14,
        color: 'green',
        marginBottom: 30,
    },
});

export default Home;
//------------------------------------------------------------------------------------
// export default function Home() {

//     return (
//         <ScrollView >

//             <Text style={styles.headd}>
//                 <Text>Hunter</Text>    <Text>Sandal</Text>    <Text>Giày chạy bộ</Text>     <Text>Giày thể thao</Text>     <Text>Giày tây</Text>     <Text>Dép</Text>
//                 {'\n'}
//             </Text>
//             {/* ----------------------------------------------------------------------- */}
//             <View >
//                 <Text style={styles.title}>
//                     Sản phẩm mới
//                     {'\n'}
//                 </Text>
//                 <View >
//                     {/* style={styles.content} */}
//                     <Image
//                         source={require('../images/hunter1.png')}
//                         style={{ width: 150, height: 150, margin: 3 }}
//                     />
//                     <Text>
//                     Giày Thể Thao Nam Biti’s Hunter X Dune
//                     </Text>

//                     {/* <Button
//                         style={styles.button}
//                         title="Thêm vào giỏ hàng"
//                         color="#841570"
//                     /> */}
//                 </View>
//             </View>
//             {/* ----------------------------------------------------------------------- */}
//             <View >
//                 <Text style={styles.title}>
//                 {'\n'}
//                     Sản phẩm khuyến mãi
//                     {'\n'}
//                 </Text>
//                 <View >
//                     {/* style={styles.content} */}
//                     <Image
//                         source={require('../images/hunter2.png')}
//                         style={{ width: 150, height: 150, margin: 3 }}
//                     />
//                     {/* <Button
//                         style={styles.button}
//                         title="Thêm vào giỏ hàng"
//                         color="#841570"
//                     /> */}
//                 </View>
//             </View>

//             {/* ----------------------------------------------------------------------- */}
//             <View >
//                 <Text style={styles.title}>
//                 {'\n'}
//                     Sản phẩm bán chạy
//                     {'\n'}
//                 </Text>
//                 <View >
//                     {/* style={styles.content} */}
//                     <Image
//                         source={require('../images/hunter3.png')}
//                         style={{ width: 150, height: 150, margin: 3 }}
//                     />
//                     {/* <Button
//                         style={styles.button}
//                         title="Thêm vào giỏ hàng"
//                         color="#841570"
//                     /> */}
//                 </View>
//             </View>

//             {/* ----------------------------------------------------------------------- */}
//             <StatusBar style="auto" />
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     ccc: {
//         flex: 1,
//         backgroundColor: '#ddd',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     head: {
//         flex: 10,
//         color: 'red',
//         fontSize: 25,
//         fontWeight: 'bold',
//         backgroundColor: '#ddd',
//         //alignItems: 'center',
//         //justifyContent: 'center',
//     },
//     headd: {
//         flex: 10,
//         fontSize: 10,
//         fontWeight: 'bold',
//         backgroundColor: '#ddd',

//     },
//     title: {
//         flex: 10,
//         color: 'red',
//         fontSize: 15,
//         fontWeight: 'bold',
//         backgroundColor: '#ddd',

//     },
//     content: {
//         flex: 100,
//         fontSize: 10,
//         fontWeight: 'bold',
//         backgroundColor: '#fff',
//     },
//     input: {
//         height: 35,
//         width: 300,
//         margin: 15,
//         borderWidth: 1,
//         padding: 10,
//     },
//     phu: {
//         flex: 1,
//         backgroundColor: '#ddd',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     button: {
//         height: 25,
//         width: 50,

//     },

// });