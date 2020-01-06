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

function CustomLink(props) {
  let match = useRouteMatch({
    path: props.to,
    exact: true
  });
  console.log(match);
  let styles = 'item';
  if (match) styles += ' active';
  return (<Link className={styles} to={props.to} >{props.children}</Link>);
}

class App extends React.Component {
  
  render() {
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
              <Route exact path='/products' component={Products} />
              <Route exact path='/cart' component={Cart} />
              <Route exact path='/profile' component={Profile} />
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
