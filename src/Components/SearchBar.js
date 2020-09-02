import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function ({term, onTermChange, onTermSubmit}){
	return(
		<View style={styles.search}>
			<Feather name="search" size={50} />
			<TextInput 
				placeholder="Search" 
				style={styles.inputStyle}
				value={term}
				onChangeText = {(newterm) => onTermChange(newterm)} 
				autoCapalize="false"
				autoCorrect={false}
				onEndEditing={()=>onTermSubmit()}
				/>
		</View>
		);
}


const styles = StyleSheet.create({
	search: {
		flexDirection: 'row',
		height: 50,
		backgroundColor: 'grey',
		marginHorizontal: 15,
		borderRadius: 5,
		marginTop: 10
	},
	inputStyle: {
		borderColor: 'grey',
		borderWidth: 1,
		flex: 1
	}
});