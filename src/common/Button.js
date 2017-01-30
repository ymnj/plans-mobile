import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Button = (props) => {

	return (
		<TouchableOpacity>
			<View style={props.styles}>
				<Text> 
					{props.children}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export { Button };