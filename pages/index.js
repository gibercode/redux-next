import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { changeState } from '../store/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const home = ({test, action}) => {

  const changeTittle = () => {
    action.changeState('Hola mundoooo')
  }

  return (
    <div>
      <h1> {test.title} </h1>
      <button onClick={changeTittle}> click! </button>
    </div>
  )
}

const mapStateToProps = ({ test }) => ({ test });

const mapDispatchToProps = dispatch => {
  const actions = {
    changeState
  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(home);
