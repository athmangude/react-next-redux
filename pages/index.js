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

  static async getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(appActions.updateAppState(false));
    return {};
  }

  componentDidMount() {
    this.updateAppState(true);
  }

  async updateAppState() {
    await this.props.appActions.updateAppState(true);
  }

  render() {
    return (
      <div>
        Hello Next <Link href="/about"><a>About</a></Link>
      </div>
    );
  }
}
