import {
	View,
	Text,
	Image,
	TouchableWithoutFeedback,
	Keyboard,
	TextInput,
	Pressable
} from 'react-native'
import React, { FC } from 'react'
import TestImage from '../../../../../assets/logo.png'
import Loader from '@/components/ui/Loader/Loader'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface'
import { useAuth } from '@/hooks/useAuth'
import { validEmail } from '../email.rgx'
import cn from 'clsx'
import Button from '@/components/ui/Button/Button'

const Login: FC = () => {
	const { control, reset, handleSubmit } = useForm<IAuthFormData>({
		mode: 'onChange'
	})

	const { setUser } = useAuth()

	const onSubmit: SubmitHandler<IAuthFormData> = data => {
		setUser({
			_id: '',
			...data
		})
	}

	const isLoading = false

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View className='items-center justify-center flex-1'>
				<Image className='w-[200] h-[115] mb-20' source={TestImage} />
				<View className='w-3/4'>
					<Text className='text-white text-5xl font-bold text-center mb-3'>
						Login
					</Text>

					{isLoading ? (
						<Loader />
					) : (
						<>
							<Controller
								control={control}
								name='email'
								rules={{
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Email is not valid!'
									}
								}}
								render={({
									field: { value, onChange, onBlur },
									fieldState: { error }
								}) => (
									<>
										<View
											className={cn(
												'rounded-full py-4 px-6 bg-[#272541] border-solid mb-5',
												!!error ? 'border-red-500' : 'border-transparent'
											)}
										>
											<TextInput
												placeholder='Enter email'
												value={value}
												onChangeText={onChange}
												onBlur={onBlur}
												autoCapitalize='none'
												className='text-white text-lg placeholder-white'
											/>
										</View>
										{error && (
											<Text className='text-red-500'>{error.message}</Text>
										)}
									</>
								)}
							/>

							<Button onPress={handleSubmit(onSubmit)} classname='mb-2'>
								Let's go
							</Button>

							<Pressable
								// onPress={}
								className='w-16'
							>
								<Text className='text-opacity-60 text-white text-base mt-3 text-center'></Text>
							</Pressable>
						</>
					)}
				</View>
			</View>
		</TouchableWithoutFeedback>
	)
}

export default Login
