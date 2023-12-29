import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { AppRegistry } from 'react-native';

import Header from './component/Header';
import Footer from './component/Footer';
import Login from './layouts/Login';
import Home from './layouts/Home';
import Cart from './layouts/Cart';
import Detail from './layouts/Detail';
import Menu from './component/Menu';
import { ScrollView } from 'react-native-gesture-handler';

export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState('Home');

  const handleMenuItemPress = (menuItem) => {
    setActiveMenuItem(menuItem);
  };
  return (
    <View style={styles.container}>
      <Header
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      ></Header>
      {activeMenuItem === 'Home' && <Home
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      />}
      {activeMenuItem === 'Login' && <Login
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      />}
      {activeMenuItem === 'Detail' && <Detail />}
      {activeMenuItem === 'Cart' && <Cart
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      />}


      {/* <Menu
        activeMenuItem={activeMenuItem}
        onMenuItemPress={handleMenuItemPress}
      /> */}
    </View>

    // <View style={styles.container}>
    //   <Header></Header>
    //   <Home></Home>
    //   <Footer></Footer>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
// container: {
//   flex: 1,
//   backgroundColor: '#ddd',
//   alignItems: 'center',
//   justifyContent: 'center',
// },

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
