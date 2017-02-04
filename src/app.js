import React, { Component } from 'react';
import {View, Text } from 'react-native';
import firebase from 'firebase';

import config from '../config/firebase';

import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	componentWillMount() {

  	firebase.initializeApp(config);

	}
	
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
				<LoginForm />
			</View>
		);
	}
};

export default App;