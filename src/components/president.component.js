import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';

// import { Content } from '../components';

class Presider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
    console.log(this.props)
  }

  onChange(e) {
    const data = e.target.value;
    this.setState({name: data});
  }

  onSubmit(e) {
    this.setState({submit: this.state.name});
    this.props.setName(this.state.name);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        
        <div>Recieved ID: {this.props.user.id}</div>
        <div>Recieved NM: {this.props.user.nm}</div>
        <div>Recieved PP: {this.props.user.pp}</div>
        <div>Recieved Year: {this.props.user.tm}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.data,
    count: state.app
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getName: () => {
      dispatch(getName());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Presider));

