import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import CardList from './components/CardList';
async function getStatFromApiAsync(callback) {
	try {
		let response = await fetch({
			url: 'https://thevirustracker.com/timeline/map-data.json',
			mode: 'no-cors'
		});
		console.log(response);
		let json = await response.text();
		console.log('jsonis', json);
		callback(json);
		return json;
	} catch (error) {
		console.error(error);
	}
}
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { countries: [], global: {}, date: [] };

		console.log(props);
	}

	componentDidMount(props) {
		// console.log(props);
		// getStatFromApiAsync((result)=>{console.log(result)})
		fetch('https://api.covid19api.com/summary')
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				if (responseJson.Global) {
					this.setState({ global: responseJson.Global });
					console.log(responseJson.Global);
				}
			})
			.catch((error) => console.log(error)); //to catch the errors if any

		// console.log(props, "123")
	}

	render(props) {
		// console.log(props)
		// console.log("testtest11111")
		return (
			// <View style={styles.container}>
			<CardList />
			/* <Text>New Confirmed(Globally): {this.state.global.NewConfirmed}</Text>
				<Text>
					Total Confirmed(Globally): {this.state.global.TotalConfirmed}
				</Text>
				<Text>New Deaths(Globally): {this.state.global.NewDeaths}</Text>
				<Text>Total Deaths(Globally): {this.state.global.TotalDeaths}</Text>
				<Text>Newly Recovered(Globally): {this.state.global.NewRecovered}</Text>
				<Text>
					Total Recovered(Globally): {this.state.global.TotalRecovered}
				</Text> */
			// </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		width: '100%'
		// flex: 1,
		// backgroundColor: 'white',
		// alignItems: 'center',
		// justifyContent: 'space-around'
	}
});
