import React, { Component } from 'react';

class AvailableSitterList extends Component {
	//mapp over book list that list each book title in the list
	//change to renderFeatureLis
	renderList() {
		
		return this.props.babysitters.filter((babysitter) => {
			// first check to see if project is featured
			return babysitter.isAvailable;
			
		}).map((babysitter) => {
			return (
					<li 
						key={babysitter._id} 
						onClick={() => onBabysitterSelect(babysitter)}
			      		className="col-sm-3 col-md-2 text-center sitterListItem favSitter"
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
				);
		});
	}

	//calls renderList fxn
	
	render() {
		return (
			<section className="projectSection container-fluid">
				<div className="row sitterRow availableRow">
					<h2>These Babysitters Are Available RIGHT NOW!</h2>
					<ul className="list-group col-md-12">
						{this.renderList()}
					</ul>
				</div>
			</section>
		)
	}

}

export default AvailableSitterList;