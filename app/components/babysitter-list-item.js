import React from 'react';

const BabysitterListItem = ({babysitter, onBabysitterSelect}) => {

	return (
			<li key={babysitter._id}
			onClick={() => onBabysitterSelect(babysitter)}
			>
			{babysitter._userID.firstName}

		</li>
	);
};

export default BabysitterListItem;