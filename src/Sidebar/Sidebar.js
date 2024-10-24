import Category from './Category/Category';
import Price from './Price/Price';
import Colors from './Colors/Colors';
import { GiShoppingCart } from "react-icons/gi";
import './Sidebar.css';

function Sidebar({ handleChange }) {
  return (
    <>
      <section className='sidebar'>
          <div className='logo-container'>
              <h1><GiShoppingCart /></h1>
          </div>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Colors handleChange={handleChange} />
      </section>
    
    </>
  );
}

export default Sidebar;