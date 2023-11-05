import React, { useEffect, useState } from 'react';
import Navbar from '../components//Navbar';
import Table from "../components/Table";
import useGet from "../hooks/useGet";
import Card from "../components/Card"

const Dashboard = () => {
	const { sendRequest } = useGet(`${process.env.REACT_APP_BACKEND_URL}/api/check`, null, null, true);
	const [checks, setChecks] = useState([]);

	useEffect(()=>{
		sendRequest((res)=>{
			setChecks(res);
		});
	},[sendRequest]);

	return <div>
		<Navbar />
		<div id='dash-content'>
			<Card variant='light' title='Total' data="3"/>
			<Table data={checks}/>
		</div>

	</div>;
};

export default Dashboard;
