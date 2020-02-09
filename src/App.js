import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import axios from 'axios';

import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false,
    alert: null
  }

  //search github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const response = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GIHTUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: response.data.items, loading: false });
  }


  //clear container users
  clearUsers = () => this.setState({ users: [], loading: false });

  //showAlert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({alert: null}), 3500);
  }


  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Alert alert={this.state.alert} />
        <Navbar />
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={users.length > 0 ? true : false} setAlert={this.setAlert} />
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
