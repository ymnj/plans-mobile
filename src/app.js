import React, { Component } from 'react';
import {View, Text } from 'react-native';

import { Header, Button } from './common';


class App extends Component {

	render() {

		styles = {
			mainContainer: {
			flex: 1,
			flexDirection: 'column',
	    justifyContent: 'space-around',
	    alignItems: 'center'
			}
		};

		const { mainContainer, textStyle, buttonStyle } = styles;

		return (
			<View style={mainContainer}>
				<Header label="Plans" />
				<Button> 
					LOGIN
				</Button>
			</View>
		);
	}
};

export default App;