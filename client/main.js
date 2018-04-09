import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players, calculatePlayerPositions} from './../imports/api/players';
import App from './../imports/ui/App';

// function inside gets called once DOM is ready
Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, {sort: {score:-1, name: 1}}).fetch();
        let positionedPlayers = calculatePlayerPositions(players);
        let title = 'Score Keep';
        let subtitle = 'created by Rich'
        ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'));
    })
});