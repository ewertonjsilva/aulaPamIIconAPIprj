import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import Login from '../screens/login';
// import Tab from '../routes/rotasTab';
import CadCliente from '../screens/usuario/cadastro';
// import CadEndCli from '../enderecoCliente';
// import Carrinho from '../carrinho';
// import Produto from '../produto/produto';

const Stack = createNativeStackNavigator();

export default function StackContainer() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                statusBarColor: '#7F0000',
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            {/* <Stack.Screen name="Tab" component={Tab} /> */}
            <Stack.Screen name="CadCliente" component={CadCliente} />
            {/* <Stack.Screen name="CadEndCli" component={CadEndCli} /> */}
            {/* <Stack.Screen name="Carrinho" component={Carrinho} /> */}
            {/* <Stack.Screen name="Produto" component={Produto} /> */}
        </Stack.Navigator>
    );
}
