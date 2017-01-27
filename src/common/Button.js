import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {

	return (
		<TouchableOpacity>
			<Text> 
				{props.children}
			</Text>
		</TouchableOpacity>
	);
};

export { Button };