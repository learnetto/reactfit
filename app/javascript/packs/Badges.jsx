import React from 'react'

const Badges = ({badges}) =>
	<div className="panel panel-default">
		<div className="panel-heading"><h4>Badges</h4></div>
		<div className="panel-body">
			{badges.map((badge, i) => {
				return(
					<div key={i}>
						<h5>{badge.shortName}</h5>
						<p><img src={badge.image100px} /></p>
						<p>{badge.description}</p>
						<p>Earned {badge.timesAchieved} times</p>
						<p>Last on {badge.dateTime}</p>
					</div>
				)
			})}
		</div>
	</div>

export default Badges
