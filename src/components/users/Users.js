import React, { Component } from 'react';
import UserItem from './UserItem';

export default class Users extends Component {

    state = {
        users: [
            {
                id: 'id',
                login: 'mojombo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/mojombo'
            },
            {
                id: 'id',
                login: 'davillo',
                avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/Davillo'
            }
        ]
    };

    render() {
        return (
            <div style={userStyle}>
               {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
               ))}
            </div>
        );
    }
}

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
}

