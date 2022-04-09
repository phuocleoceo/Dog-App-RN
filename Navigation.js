import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomNavigationBar from './components/CustomNavigationBar';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import Detail from './components/Detail';
import Home from './components/Home';
import useDog from "./hooks/useDog";


const Stack = createNativeStackNavigator();

export default function Navigation()
{
    const { Create_Table_Dog, Drop_Table_Dog,
        Get_Dog_From_DB, Destroy_All_Dog } = useDog();

    useEffect(() => Create_Table_Dog(), []);

    useEffect(() => Get_Dog_From_DB(), []);

    // useEffect(() => Destroy_All_Dog(), []);

    // useEffect(() => Drop_Table_Dog(), []);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="DogApp" screenOptions={{
                header: CustomNavigationBar,
            }}>
                <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
                <Stack.Screen name="Detail" component={Detail} options={{ title: "Detail" }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}