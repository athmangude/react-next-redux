import React, { Component } from 'react';
import Link from 'next/link';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import configureStore from './store';
import * as appActions from './flux/actions';

@withRedux(
  configureStore,
  state => ({
    ...state
  }),
  dispatch => ({
    appActions: bindActionCreators(appActions, dispatch),
    dispatch,
  }),
)
export default class Index extends Component {

  static getInitialProps({ store, isServer, pathname, query }) {
    console.log(store, isServer, pathname, query);
    store.dispatch(appActions.updateAppState(true));
  }

  componentDidMount() {
    setTimeout(() => {
      // console.log('WILL DISPATCH AN ACTION', this.props);
      this.props.appActions.updateAppState(true);
    }, 1000);
  }

  render() {
    return (
      <div>
        Hello Next <Link href="/about"><a>About</a></Link>
      </div>
    );
  }
}
