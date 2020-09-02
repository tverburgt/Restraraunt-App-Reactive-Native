import axios from 'axios';


export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'bearer MFHANAFHP5K0_VP9IQkcZvRFPzD-JB__VSQoYXkW2r9S04W87LmV0LyR3Fqs5FhHpm4lZrzfy5wlZXxR8L9Pp8wcMwmbnQoFuam2o_P6DrGfq155YMiIfbhHUB20XnYx'
	}
});