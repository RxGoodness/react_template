// // import React from 'react';
// // import { BrowserRouter as Router, Route } from 'react-router-dom';

// // import AddToCart from '../components/AddToCart';
// // import ViewCart from '../components/ViewCart';
// // import DeleteFromCart from '../components/DeleteFromCart';
// // import UpdateQuantity from '../components/UpdateQuantity';

// // const App: React.FC = () => {
// // return (
// // <Router>
// // <div>
// // <Route exact path="/" component={AddToCart} />
// // <Route path="/view-cart" component={ViewCart} />
// // <Route path="/delete-from-cart" component={DeleteFromCart} />
// // <Route path="/update-quantity" component={UpdateQuantity} />
// // </div>
// // </Router>
// // );
// // }
// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route,  } from 'react-router-dom';

// import AddToCart from '../components/AddToCart';
// import ViewCart from '../components/ViewCarts';
// import DeleteFromCart from '../components/DeleteFromCart';
// import UpdateQuantity from '../components/UpdateQuantity';
// import { createBrowserHistory } from 'history';

// const history = createBrowserHistory();
// const Routes: React.FC = () => {
//   return (
//     <Router history ={history}>
//       <div>
//         <Route exact path="/" component={AddToCart} />
//         <Route path="/view-cart" component={ViewCart} />
//         <Route path="/delete-from-cart" component={DeleteFromCart} />
//         <Route path="/update-quantity" component={UpdateQuantity} />
//       </div>
//     </Router>
//   );
// }

// export default Routes;



// import React, { FC } from 'react';
// import {
//   Switch,
//   Route
// } from 'react-router-dom';

// import AddToCart from '../components/AddToCart';
// import ViewCart from '../components/ViewCarts';
// import DeleteFromCart from '../components/DeleteFromCart';
// import UpdateQuantity from '../components/UpdateQuantity';


// const Routes: FC = () => {
//   return (
//     <Switch>
//       <Route path="/" component={AddToCart} />
//       <Route path="/view-cart" component={ViewCart} />
//       <Route path="/delete-from-cart" component={DeleteFromCart} />
//       <Route path="/update-quantity" component={UpdateQuantity} />
//     </Switch>
//   );
// }

// export default Routes;






import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import AddToCart from '../components/AddToCart';
import ViewCart from '../components/ViewCarts';
import DeleteFromCart from '../components/DeleteFromCart';
import UpdateQuantity from '../components/UpdateQuantity';

const Routes = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Add to Cart</Link>
        </li>
        <li>
          <Link to="/view-cart">View Cart</Link>
        </li>
        <li>
          <Link to="/delete-from-cart">Delete From Cart</Link>
        </li>
        <li>
          <Link to="/update-quantity">Update Quantity</Link>
        </li>
      </ul>

      <hr />

      <Route path="/" element={AddToCart} />
      <Route path="/view-cart" element={ViewCart} />
      <Route path="/delete-from-cart" element={DeleteFromCart} />
      <Route path="/update-quantity" element={UpdateQuantity} />
    </div>
  </Router>
);

export default Routes;
