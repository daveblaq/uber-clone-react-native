import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from "tailwind-react-native-classnames";
import { NavigationContainer } from '@react-navigation/native';

const data = [
	{
		id: "123",
		title: "Get a ride",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		image: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	}
]

const NavOptions = ({ navigation }) {
	const navigation = NavigationContainer();
	return (
	<FlatList 
	data={data} style={tw `pt-4 pb-8 pl-8 pr-8`}
	horizontal
	keyExtractor={(item) => item.id}
	renderItem={({ item }) => (
		<TouchableOpacity 
		onPress={() => navigation.navigate(item.screen)}>
			<View style={tw `p-2 pl-8 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
				<Image
				style={{ width: 120, height:120, resizeMode: "contain" }}
				source = {{ uri: item.image }}
				/>
				<Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
				<Icon
				style={tw `p-2 bg-black rounded-full w-10 mt-4`}
				name="arrowright" color="white"
				type='antdesign'
				/>
			</View>
		</TouchableOpacity>
	)}
	
	/>
	);
};

export default NavOptions;
