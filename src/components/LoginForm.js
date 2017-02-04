import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import { Card, CardSection, Button } from './common';

class LoginForm extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<TextInput 
						value ={this.state.text}
						onChangeText={ text => this.setState({ text })}
						style={{ height: 20, width: 100 }}/>
				</CardSection>
				<CardSection>
					<Text>Password</Text>
				</CardSection>
				<CardSection>
					<Button>
						LOG IN
					</Button>
				</CardSection>
			</Card>
		)
	}
}

export default LoginForm;
