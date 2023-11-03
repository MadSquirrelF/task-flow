import { View, Text, Pressable } from 'react-native'
import React, { FC } from 'react'
import { IMenuItem, TypeNav } from './menu.interface'
import { Feather } from '@expo/vector-icons'
import { AppConstants } from '@/app.constants'

interface IMenuItemProps {
	item: IMenuItem
	nav: TypeNav
	currentRoute?: string
}

const MenuItem: FC<IMenuItemProps> = ({ item, nav, currentRoute }) => {
	const isActive = currentRoute === item.path

	return (
		<Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
			<Feather
				name={item.iconName}
				size={26}
				color={isActive ? AppConstants.primary : AppConstants.gray}
			/>
		</Pressable>
	)
}

export default MenuItem
