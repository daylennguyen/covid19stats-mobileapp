import React, { Component } from 'react';
import {
	Container,
	Header,
	Content,
	Card,
	CardItem,
	Text,
	Icon,
	Right
} from 'native-base';
export default class CardList extends Component {
	render() {
		return (
			<Container>
				<Header />
				<Content>
					<Card>
						<CardItem>
							<Icon active name='logo-googleplus' />
							<Text>Google Plus</Text>
							<Right>
								<Icon name='arrow-forward' />
							</Right>
						</CardItem>
					</Card>
                    <Card>
						<CardItem>
							<Icon active name='logo-googleplus' />
							<Text>Google Plus</Text>
							<Right>
								<Icon name='arrow-forward' />
							</Right>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
