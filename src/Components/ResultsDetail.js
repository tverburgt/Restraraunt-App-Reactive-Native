import {Text, View, Layout, StyleSheet, Image} from 'react-native';
import React from 'react';



export default function ResultsDetail({result}) {
	return(
		<View>
			<Image style={styles.image} source={{uri: result.image_url}} />
			<Text>{result.name}</Text>
			<Text>Review: {result.review_count}, Stars: {result.rating}</Text>
		</View>
	);

}

const styles = StyleSheet.create({
	image: {
		height: 180,
		width: 250,
		borderRadius: 4
	}
});