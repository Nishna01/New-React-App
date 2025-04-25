
import './App.css';
import Navbar from './component/Navbar';
import Header from './component/header';
import Filter from './component/FilterSidebar';
import ProductGrid from './component/ProductGrid';
import Footer from './component/Footer';

import img1 from './asset/p1.jpg';
import img2 from './asset/p2.jpg';
import img3 from './asset/p3.jpg';
import img4 from './asset/p4.jpg';
import img5 from './asset/p5.jpg';
import img6 from './asset/p6.jpg';

const products = [
  { image: img1, name: 'Product 1' },
  { image: img2, name: 'Product 2' },
  { image: img3, name: 'Product 3' },
  { image: img4, name: 'Product 4' },
  { image: img5, name: 'Product 5' },
  { image: img6, name: 'Product 6' },
];

function App() {
  return (
    <>
      <Header /> {/* <-- Added your Header at the very top */}
      <Navbar />
      <main className="main-container">
        <div className="filter">
          <Filter />
        </div>
        <ProductGrid products={products} />
      </main>
      <Footer />
    </>
  );
}

export default App;
