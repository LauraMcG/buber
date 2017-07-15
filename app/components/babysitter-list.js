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
		<ul className="col-md-4 list-group">
			{babysitterItems}
		</ul>
	);
};

export default BabysitterList;