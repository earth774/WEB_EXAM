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
    if(this.props.a.id!=undefined){
      return (
      <div >
        <div>Recieved ID: {this.props.a.id}</div>
        <div>Recieved NM: {this.props.a.nm}</div>
        <div>Recieved PP: {this.props.a.pp}</div>
        <div>Recieved Year: {this.props.a.tm}</div>
        <hr/>
      </div>
    );
    }else{
      return (
      <div >
        
      </div>
      );
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
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

