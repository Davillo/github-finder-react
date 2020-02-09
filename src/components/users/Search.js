import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Search extends Component {

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onClick = () => {
        this.props.clearUsers()
    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.text.trim() === ''){
            this.props.setAlert('Por favor, digite algo','light');
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' });
        }
    }

    onChange = (event) => this.setState({ [event.target.name]: event.target.value })

    render() {
        
        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Procure usuários do Github..." value={this.state.text} onChange={this.onChange} />
                    <input type="submit" value="Buscar" className="btn btn-dark btn-block" />
                </form>

                {showClear && 
                    <button className="btn btn-danger btn-block" onClick={clearUsers}>Limpar busca</button>
                }   
                
            </div>
        )
    }
}

export default Search
