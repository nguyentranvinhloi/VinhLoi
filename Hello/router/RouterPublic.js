import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../layouts/Login';
import Detail from '../layouts/Detail';
import Cart from '../layouts/Cart';
const Stack = createNativeStackNavigator();

function RouterPublic() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Detail} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
export default RouterPublic;