import React, { Component } from 'react';
import { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {
	state = {
		email: "",
		password: ""
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input 
						placeholder="user@email.ca"
						label="Email"
						value={this.state.email}
						onChangeText={ text => this.setState({ email: text })}
					/>
				</CardSection>
				<CardSection>
					<Input 
						secureTextEntry
						placeholder="passworld123"
						label="Password"
						value={this.state.password}
						onChangeText={ text => this.setState({ password: text })}
					/>
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
