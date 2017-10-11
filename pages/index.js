import Link from 'next/link';
import withRedux from 'next-redux-wrapper';

import configureStore from './store';

let Index = (props, context) => {
  console.log(props);
  return (
    <div>
      Hello Next <Link href="/about"><a>About</a></Link>
    </div>
  );
}

Index = withRedux(configureStore, (state) => ({
  ...state
}))(Index);

export default Index;
