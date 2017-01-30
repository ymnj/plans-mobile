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
			},
			buttonStyle: {
				borderRadius: 4,
		    borderWidth: 1,
		    borderColor: 'black',
		    paddingVertical: 10,
		    paddingHorizontal: 20
			}
		};

		const { mainContainer, buttonStyle } = styles;

		return (
			<View style={mainContainer}>
				<Header label="Plans" />
				<Button styles={buttonStyle}> 
					LOGIN
				</Button>
			</View>
		);
	}
};

export default App;