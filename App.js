import React, { Component } from 'react';
import { Root, StyleSheet, Text, View, Picker, FlatList } from 'react-native';
import { Header } from 'react-native-elements';
import { useState } from 'react';
import CardList from './components/CardList';
import { ListItem } from 'react-native-elements';



const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		// paddingTop: 40,
		width: '100%',
		// backgroundColor: '#c7c7c7',
		alignItems: 'center'
	}
});

const StatStyle = { marginTop: 20, fontSize: 21, color: 'white' };

export default class App extends Component
{
	constructor(props)
	{
		super(props);
		this.state = { countries: [], global: {}, date: "", selectedValue: {} };

		console.log(props);
	}

	async componentDidMount(props)
	{
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
				}

			})
			.catch((error) => console.log(error)); //to catch the errors if any


	}

	render(props)
	{
		return (
			<View style={styles.container}>
				<Header
					leftComponent={{ icon: 'menu', color: '#fff' }}
					centerComponent={{ text: 'COVID-19 BASIC STATS', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff' }}
				/>
				<Picker
					selectedValue={this.state.selectedValue.CountryCode}
					style={{
						marginBottom:10,
						height: 50,
						width: '90%',
						// border: 'solid black 1px'
						// backgroundColor: 'white',
						// color: 'blue'
					}}
					onValueChange={(itemValue, itemIndex) => {
						this.setState({
							selectedValue: this.state.countries[itemIndex]
						});
						console.log(this.state.countries[itemIndex]);
					}}>
					{this.state.countries === [] ? (
						<Picker.Item key={420} label='Loading' value='Loading' />
					) : (
						this.state.countries.map((country) => {
							return (
								<Picker.Item
									key={country.CountryCode}
									label={`(${country.CountryCode}) ${country.Country}`}
									value={country.CountryCode}
								/>
							);
						})
					)}
				</Picker>
				<View style={{ backgroundColor: 'blue', flex: 3, width: '100%' }}>
					<ListItem
						key={444412}
						title={'Country'}
						badge={{
							value: this.state.selectedValue.Country,
							textStyle: { color: 'white' }
						}}
						bottomDivider
					/>
					<ListItem
						key={123123}
						title={'Country Code'}
						badge={{
							value: this.state.selectedValue.CountryCode,
							textStyle: { color: 'white' }
						}}
						bottomDivider
					/>
					<ListItem
						key={1234123}
						title={'New Confirmed Cases'}
						badge={{
							value: this.state.selectedValue.NewConfirmed,
							textStyle: { color: 'white', fontSize: 13 }
						}}
						bottomDivider
					/>
					<ListItem
						key={12351234}
						title={'New Confirmed Deaths'}
						badge={{
							value: this.state.selectedValue.NewDeaths,
							textStyle: { color: 'white', fontSize: 13 },
							status: 'error'
						}}
						bottomDivider

					/>
					<ListItem
						key={12361233}
						title={'New Confirmed Recoveries'}
						badge={{
							value: this.state.selectedValue.NewRecovered,
							// badgeStyle: { backgroundColor: 'black' },
														textStyle: { color: 'white', fontSize:13 }

,							status: 'success'
						}}
						bottomDivider
					/>
				</View>

				{/* </View> */}

				{/* <Text style={ { display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' } }>
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
				</Text> */}
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
