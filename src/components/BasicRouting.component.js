import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getData, setName,cleData } from '../actions/User.actions';
import { Presider} from './'

// import { Content } from '../components';

class BasicRouting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      submit:''
    }
    
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
        <Presider />
        <button onClick={() => {this.props.getData()}}>Get Data</button>
        <button onClick={() => {this.props.cleData()}}>Clear</button>
      </div>
    );
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
    getData: () => {
      dispatch(getData());
    },
    cleData: () => {
      dispatch(cleData());
    },
    setName: (name) => {
      dispatch(setName(name));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BasicRouting));
