import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import tw from "tailwind-react-native-classnames";

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
		screen: "EatsScreen",
	}
]

const NavOptions = () => {
	return (
	<FlatList 
	data={data} style={tw `pr-8 pl-8`}
	horizontal
	keyExtractor={(item) => item.id}
	renderItem={({ item }) => (
		<TouchableOpacity style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
			<View>
				<Image
				style={{ width: 120, height:120, resizeMode: "contain" }}
				source = {{ uri: item.image }}
				/>
				<Text style={tw `mt-2 text-lg font-semibold`}>{item.title}</Text>
			</View>
		</TouchableOpacity>
	)}
	
	/>
	);
};

export default NavOptions;
