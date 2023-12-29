import { StatusBar } from 'expo-status-bar';
import { TextInput } from 'react-native';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function Header({ activeMenuItem, onMenuItemPress }) {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          style={[
            styles.menuItem,
            activeMenuItem === 'Home' && styles.activeMenuItem,
          ]}
          onPress={() => onMenuItemPress('Home')}
        >
          <Image style={styles.image}
            source={require('../images/home.jpg')}
          />
        </TouchableOpacity>
      </View>
      {/* ------------------------------------------------------------------------ */}
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Cart' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('Cart')}
      >
        <Image style={styles.imagee}
          source={require('../images/cart.jpg')}
        />
      </TouchableOpacity>
      {/* ----------------------------------------------- */}
      <TouchableOpacity
        style={[
          styles.menuItem,
          activeMenuItem === 'Login' && styles.activeMenuItem,
        ]}
        onPress={() => onMenuItemPress('Login')}
      >
        <Image style={styles.imageee}
          source={require('../images/person.jpg')}
        />
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f2f2f2',
  },
  menuItem: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  image: {
    height: 40,
    width: 40,
    marginRight: 300,
    marginTop: 30,
    // borderWidth: 1,
    // padding: 10,
    //alignItems: 'center',
  },
  imagee: {
    height: 40,
    width: 40,
    marginRight: 300,
    marginTop: 30,
    marginLeft: 150,
  },
  imageee: {
    height: 30,
    width: 30,
    marginRight: 300,
    marginTop: 30,
    marginLeft: 250,
  },
});
