import { View, Text, ActivityIndicator } from 'react-native'
import React, { FC } from 'react'
import { AppConstants } from '@/app.constants'

const Loader: FC = () => {
	return <ActivityIndicator color={AppConstants.primary} size='large' />
}

export default Loader
