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
		return (
			<View >
				<Header label="Plans" />
				<LoginForm />
			</View>
		);
	}
};

export default App;