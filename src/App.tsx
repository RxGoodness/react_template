// import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

// import AddToCart from './AddToCart';
// import ViewCart from './ViewCart';
// import DeleteFromCart from './DeleteFromCart';
// import UpdateQuantity from './UpdateQuantity';

// function App() {
//   const [cart, setCart] = useState([]);

//   return (
//     <Router>
//       <div>
//         <Route exact path="/" component={() => <AddToCart cart={cart} setCart={setCart} />} />
//         <Route path="/view-cart" component={() => <ViewCart cart={cart} />} />
//         <Route path="/delete-from-cart" component={() => <DeleteFromCart cart={cart} setCart={setCart} />} />
//         <Route path="/update-quantity" component={() => <UpdateQuantity cart={cart} setCart={setCart} />} />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Routes />
  );
}

export default App;
