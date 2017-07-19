import React from 'react';
import BabysitterListItems from './babysitter-list-item';

const BabysitterList = (props) => {
	const babysitterItems = props.babysitters.map((babysitter) => {
		return (
				<BabysitterListItems 
				onBabysitterSelect={props.onBabysitterSelect}
				key={babysitter._id}
				babysitter={babysitter} 
				/>
		);
	});

	return (
		<div className="row sitterRow">
			<div className="col-md-12 col-xs-12">
		    	<h2>Our Babysitters</h2>
		    	<ul>
		    		{babysitterItems}
		    	</ul>
		    </div>
		</div>
	);
};

export default BabysitterList;