import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScreenSearch from './src/screens/ScreenSearch';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
	search: ScreenSearch,
	ResultsShow: ResultsShowScreen
},{
	initialRouteName: 'search',
	defaultNavigationOptions: {
		title: 'Business Search'
	}
});


export default createAppContainer(navigator);



