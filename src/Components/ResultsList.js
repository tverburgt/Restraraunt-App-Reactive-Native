import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';


function ResultsList ({results, title, navigation}){
	return(
		<View>
			<Text style={styles.fontstyle}>{title}</Text>
			<FlatList
			showsHorizontalScrollIndicator = {false}
			horizontal
			data={results}
			keyExtractor={result=>result.id} 
			renderItem = {({item}) =>{
				return(
					<TouchableOpacity onPress={()=>navigation.navigate('ResultsShow', {id: item.id})}>
						<ResultsDetail result={item} />
					</TouchableOpacity>
				); 
			}}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	fontstyle: {
		fontSize: 18,
		fontWeight: 'bold'
	}
});

export default withNavigation(ResultsList);