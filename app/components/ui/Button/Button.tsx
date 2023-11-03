import { View, Text, Pressable, PressableProps } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IButton extends PressableProps {
	classname: string
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, classname }) => {
	return (
		<Pressable
			className={cn(
				'self-center mt-3 bg-primary py-3 px-8 rounded-3xl',
				classname
			)}
		>
			<Text className='font-semibold text-white text-xl'>{children}</Text>
		</Pressable>
	)
}

export default Button
