import React from 'react';
import { Link } from "react-router-dom";

const mongoose = require('mongoose');
    mongoose.connect("mongodb://data/db");

    mongoose.connection.once('open',function(){
        console.log('Connection has been made!');
    });

function Users() {
    return <div className="usersContent">
        <p>The admin users that are allowed within this database are stored in MongoDB (in the data directory).< br/>
                db.users.find( {user:'appuser'})
                db.users.find( {user:'appuser1'})
                db.users.find( {user:'appuser2'})
                db.users.find( {user:'appuser3'})
        </p>
    </div>
}

export default Users;