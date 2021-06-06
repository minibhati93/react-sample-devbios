import React from 'react';

function DeveloperBio(props) {
  return(
    <div className="card d-inline-block text-dark">
            <div className="card-body">
                <h3 className="card-title">{ props.developers.firstName } {props.developers.lastName}</h3>
                <p className="card-text">
                    <span className="bold">Favorite Language:</span>{props.developers.favoriteLanguage}
                </p>
                <p className="card-text">
                    <span className="bold">Year Started:</span>{props.developers.yearStarted}
                </p>
            </div>
        </div>
  )
}

export default DeveloperBio;