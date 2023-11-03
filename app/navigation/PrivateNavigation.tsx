import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TypeRootStackParamList } from './navigation.types'
import { useAuth } from '@/hooks/useAuth'
import { routes } from './routes'
import Start from '@/components/screens/auth/Start'
import Login from '@/components/screens/auth/Login/Login'

const Stack = createNativeStackNavigator<TypeRootStackParamList>()

const PrivateNavigation = () => {
	const { user } = useAuth()

	return (
		<Stack.Navigator
			initialRouteName='Start'
			screenOptions={{
				headerShown: false,
				contentStyle: {
					backgroundColor: '#1E1C2E'
				}
			}}
		>
			{user ? (
				routes.map(route => <Stack.Screen key={route.name} {...route} />)
			) : (
				<>
					<Stack.Screen name='Start' component={Start} />
					<Stack.Screen name='Login' component={Login} />
				</>
			)}
		</Stack.Navigator>
	)
}

export default PrivateNavigation
