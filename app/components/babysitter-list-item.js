import React from 'react';


const BabysitterListItem = ({babysitter, onBabysitterSelect}) => {

	return (

		
			<div>
			      <li 
			      	key={babysitter._id}
			      	onClick={() => onBabysitterSelect(babysitter)}
			      	className="col-xs-4 col-md-2 text-center sitterListItem favSitter"

			      >

			      <div className="listContainer">
				       <h2 className="sitterName">{babysitter._userID.firstName} {babysitter._userID.lastName}</h2> 

				       <div className="hexa">
				          <div className="hex1">
				            <div className="hex2">
				              <img src={babysitter.photo} alt={babysitter._userID.firstName} width="130" height="130" />
				            </div>
				          </div>
				        </div>
				       <p>Bio: {babysitter.bio}</p>
				       <br />
				       
				       <h2><strong>${babysitter.ratePerHour} / Hour</strong></h2>
				       <br />
				  	</div>

			       <button type="button" className="btn btn-default">Book</button>

			      </li>

			</div>
			        
				            

				    
				    
				    
				    
				        
				    






		// <li key={babysitter._id}
		// 	onClick={() => onBabysitterSelect(babysitter)}
		// 	>
		// 	{babysitter._userID.firstName}

		// </li>
	);
};

export default BabysitterListItem;