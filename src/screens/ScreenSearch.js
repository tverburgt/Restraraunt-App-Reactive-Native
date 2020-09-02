import {Text, View, StyleSheet, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';
import SearchBar from '../Components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../Components/ResultsList';




export default function ScreenSearch({navigation}){

	const [term, setTerm] = useState('');
	const [searchAPI, businesses, err] = useResults();
	//console.log(businesses);

	const filterResultsbyPrice = (price) => {
		return businesses.filter(result => {
				return result.price === price;
			});
	};



	return(
		<View style={{flex: 1}}>
		<SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchAPI} />
		{err ? <Text>{err}</Text>: null}
		<Text>{term}</Text>
		<Text>We have found {businesses.length} results</Text>
		<ScrollView>
			<ResultsList results={filterResultsbyPrice('$')} title='Cost Effective'/>
			<ResultsList results={filterResultsbyPrice('$$')} title='Bit Pricier'/>
			<ResultsList results={filterResultsbyPrice('$$')} title='Big Spender'/>
		</ScrollView>
		</View>
		);
	}

