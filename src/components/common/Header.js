import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ label }) => {

	const { viewStyles, textStyles } = styles;

	return (
		<View style={viewStyles}>
			<Text style={textStyles}>{label}</Text>
		</View>
	);
};

const styles = {
	viewStyles: {
		backgroundColor: 'steelblue',
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyles: {
		fontSize: 90
	}
}

export { Header };