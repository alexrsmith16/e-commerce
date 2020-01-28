import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useRouteMatch
} from 'react-router-dom'

import Products from './components/products';
import Cart from './components/cart';
import Profile from './components/profile';
import Details from './components/details';
import { createStore } from 'redux';


function 	get(url) {
  return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
  });
}

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      break;
    case "REMOVE":
      break;
  }
  return state;
}

const store = createStore(reducer, {products: [], cart: []});

function CustomLink(props) {
  let match = useRouteMatch({
    path: props.to,
    exact: true
  });
  let styles = 'item';
  if (match) styles += ' active';
  return (<Link className={styles} to={props.to} >{props.children}</Link>);
}

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }

  render() {
    console.log(store.getState());
    return (
      <div>
        <Router>
          <div className='app'>
            <div className='ui four item menu'>
              <Link to='./' className='header item'>Store</Link>
              {/* <div className='center menu'> */}
                <CustomLink to='/products' >Products</CustomLink>
                <CustomLink to='/profile' >Profile</CustomLink>
                <CustomLink to='/cart' >Cart</CustomLink>
              {/* </div> */}
            </div>
            <Switch>
              <Route exact path='/' />
              <Route exact path='/products'><Products store={store} /></Route>
              <Route exact path='/cart'><Cart store={store} /></Route>
              <Route exact path='/profile'><Profile store={store} /></Route>
              <Route path='/products/:productId' component={Details} />
              <Route render={() => (<div>404</div>)} />
            </Switch>
            <div className='ui footer'>Footer</div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
