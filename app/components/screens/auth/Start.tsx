import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import Button from '@/components/ui/Button/Button'
import TestImage from '../../../../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

const Start: FC = () => {
	const navigation = useNavigation()

	return (
		<View className='items-center justify-center flex-1'>
			<Image className='w-[200] h-[115] mb-20' source={TestImage} />
			<Text className='text-white text-xl mb-10'>Create a free account</Text>
			<Button classname={'mb-3'}>Create an account</Button>
			<Button classname={'mb-3'}>Login</Button>
		</View>
	)
}

export default Start
