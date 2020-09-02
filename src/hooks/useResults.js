import yelp from '../api/yelp';
import {useState, useEffect} from 'react';

export default () => {

	const [businesses, setBusiness] = useState([]);
	const [err, setErr] =useState('');

	const searchAPI = async (pasta) => {
		console.log('Hi there!');
		try{
			const response = await yelp.get('/search',{
				params:{
					term: pasta,
					location: 'san jose',
					limit: 50
				}
			});
			setBusiness(response.data.businesses);
		}catch(err){
			setErr("Something went wrong with your API");
		}

	}


	useEffect(()=>{
		searchAPI('pasta')
	}, []);




	return([searchAPI, businesses, err]);
}