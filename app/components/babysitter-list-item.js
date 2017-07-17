import React from 'react';

const BabysitterListItem = ({babysitter, onBabysitterSelect}) => {

	return (
			<li key={babysitter._id}
			onClick={() => onBabysitterSelect(babysitter)}
			>
			{babysitter.phoneNumber}
		</li>
	);
};

export default BabysitterListItem;