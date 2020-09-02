import {Layout, Text, View, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';


export default function ResultsShowScreen({navigation}){
	const id = navigation.getParam('id');
	//console.log(id);

	const [result, setResult] = useState(null);
	const getResult = async id => {
		const response = await yelp.get(`/${id}`);
		setResult(response.data);
	};

	useEffect(
		()=>{getResult(id);}
	, []);


	if(!result){
		return null;
	}

	console.log(result);
	return(
		<View>
			<Text>Results</Text>
			<FlatList 
				data={result.photos}
				keyExtractor={(photo)=>photo}
				renderItem={
					({item})=> <Image style={styles.image} source={{uri: item}} />
				}

			/>
		</View>
	);
}

const styles = StyleSheet.create({
	image:{
		width: 100,
		height: 100
	}
});