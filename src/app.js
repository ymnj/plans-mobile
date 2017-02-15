import React, { Component } from 'react';
import {View, Text } from 'react-native';
import firebase from 'firebase';

import config from '../config/firebase';

import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

	state = {
		loggedIn: null
	}

	componentWillMount() {

  	firebase.initializeApp(config);
  	firebase.auth().onAuthStateChanged((user) => {
  		if(user){
  			this.setState({loggedIn: true});
  		} else {
  			this.setState({loggedIn: false});
  		}
  	});
	}

	renderContent() {
		switch (this.state.loggedIn){
			case true: 
				return (
					<CardSection>
						<Button onPress={() => { firebase.auth().signOut() }}>
							Log out
						</Button>
					</CardSection>
				);
			case false: 
				return <LoginForm />;
			default:
				<Spinner size="large"/>;
		}
	}
	
	render() {
		return (
			<View>
				<Header label="Plans" />
				{this.renderContent()}
			</View>
		);
	}
};


export default App;