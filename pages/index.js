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
    updateAppState: bindActionCreators(appActions.updateAppState, dispatch),
    dispatch,
  }),
)
export default class Index extends Component {
  static getInitialProps({store, isServer, pathname, query}) {
    store.dispatch({type: 'FOO', payload: 'foo'}); // component will be able to read from store's state when rendered
    return {custom: 'custom'}; // you can pass some custom props to component from here
  }

  static getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(appActions.updateAppState(true));
    return { name: 'Athman' };
  }

  render() {
    console.log('we are in here at the moment', this.props);
    return (
      <div>
        Hello Next <Link href="/about"><a>About</a></Link>
      </div>
    );
  }
}

// Index = withRedux(configureStore, (state) => ({
//   ...state
// }))(Index);

// export default Index;
