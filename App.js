import React, { Component } from 'react';
import {Root, StyleSheet, Text, View, Picker } from 'react-native';
import { Header } from 'react-native-elements';
import { useState } from 'react';
import CardList from './components/CardList';

// import React, { useState } from "react";


const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 40,
		width: '100%',
		backgroundColor: "black",
		alignItems: "center"
	}
});

const StatStyle = { marginTop: 20, fontSize: 21, color: 'white' };

export default class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = { countries: [], global: {}, date: "", selectedValue: "" };

		console.log(props);
	}

	async componentDidMount(props)
	{
		// console.log(props);
		// getStatFromApiAsync((result)=>{console.log(result)})
		await fetch('https://api.covid19api.com/summary')
			.then((response) => response.json())
			.then((responseJson) =>
			{
				console.log(responseJson);
				if (responseJson.Global)
				{
					this.setState({ global: responseJson.Global });
					console.log(responseJson.Global);
				}
				if (responseJson.Countries)
				{
					this.setState({ countries: responseJson.Countries });
					// console.log()
				}

			})
			.catch((error) => console.log(error)); //to catch the errors if any

		// console.log(props, "123")
	}

	render(props)
	{
		console.log(this.state);
		return (
			// <View style={styles.container}>
			// <CardList />
			<View style={ styles.container }>
				<Header
				style={{position:'absolute', top:0, width:'100vw'}}
					leftComponent={ { icon: 'menu', color: '#fff' } }
					centerComponent={ { text: 'MY TITLE', style: { color: '#fff' } } }
					rightComponent={ { icon: 'home', color: '#fff' } }
				/>
				<Picker
					selectedValue={ this.state.selectedValue }
					style={ { height: 50, width: "90%", backgroundColor: 'white', color: 'black' } }
					onValueChange={ (itemValue, itemIndex) =>
					{
						this.setState({ selectedValue: itemValue });
						console.log(itemValue);
					} }
				>
					{ this.state.countries === [] ? <Picker.Item key={ 420 } label="Loading" value="Loading" /> : this.state.countries.map((country) => { return <Picker.Item key={ country.CountryCode } label={ `(${country.CountryCode}) ${country.Country}` } value={ country.CountryCode } />; }) }
				</Picker>
				<Text style={ { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' } }>
					<Text style={ StatStyle }>{ "\n" }New Confirmed Cases: { "\n" }{ this.state.global.NewConfirmed } (Globally)</Text>
					<Text style={ StatStyle }>
						{ "\n" }Total Confirmed: { "\n" }{ this.state.global.TotalConfirmed } (Globally)
					</Text>
					<Text style={ StatStyle }>{ "\n" }New Deaths: { "\n" }{ this.state.global.NewDeaths } (Globally)</Text>
					<Text style={ StatStyle }>{ "\n" }Total Deaths: { "\n" }{ this.state.global.TotalDeaths } (Globally)</Text>
					<Text style={ StatStyle }>{ "\n" }Newly Recovered: { "\n" }{ this.state.global.NewRecovered } (Globally)</Text>
					<Text style={ StatStyle }>
						{ "\n" }Total Recovered: { "\n" }{ this.state.global.TotalRecovered } (Globally)
					</Text>
				</Text>
			</View>
			// </View>
		);
	}
}

// const styles = StyleSheet.create({
// 	container: {
// 		width: '100%'
// 		// flex: 1,
// 		// backgroundColor: 'white',
// 		// alignItems: 'center',
// 		// justifyContent: 'space-around'
// 	}
// });
