import React from 'react';

const BabysitterListItem = ({babysitter}) => {

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-body">
					<div className="media-heading">
						{babysitter.firstName}
					</div>
				</div>
			</div>


		</li>
	);
};

export default BabysitterListItem;