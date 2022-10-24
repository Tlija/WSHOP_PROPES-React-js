import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from "./Components/ProductList";
import { products } from "./data";
import { ProductTable } from './Components/ProductTable';

function App() {
const tlija=(name)=>alert(`the ${name} is clicked`)
  return (
    <div className="App">
<ProductList list={products}/>
<ProductTable list={products} handleClick={tlija}/>

    </div>
  );
}

export default App;
