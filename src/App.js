import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { addToCart } from "./stores/cart";

function App() {
  const [products, setProducts] = React.useState([]);
  const { cartShow } = useSelector((state) => state.site);
  const dispatch = useDispatch();
  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      getProducts();
    } else {
      const value = e.target.value.toLowerCase();
      const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(value);
      });
      setProducts(filteredProducts);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row mt-3">
          <div className="col-md">
            <div className="row mb-3">
              <div className="col-md-12">
                <input
                  type="text"
                  onChange={(e) => handleSearch(e)}
                  className="form-control"
                  placeholder="Ürün Adı giriniz..."
                />
              </div>
            </div>
            <div className="row">
              {products.length > 0 ? (
                products.map((product) => (
                  <div className="col-md-4 mb-3" key={product.id}>
                    <div className="card h-100">
                      <img
                        src={product.image}
                        className="card-img-top p-3"
                        style={{ height: "250px", objectFit: "contain" }}
                        alt={product.title}
                      />
                      <div className="card-body d-flex flex-column align-items-center justify-content-center">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className="mt-auto text-center">
                          <p className="card-text">
                            <small className="text-muted">
                              Kategori: {product.category}
                            </small>
                          </p>
                          <p className="card-text lead">
                            ${product.price.toFixed(2)}
                          </p>
                          <button
                            onClick={() => handleAddToCart(product)}
                            className="btn btn-primary"
                          >
                            Sepete Ekle
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-md-12">
                  <div className="alert alert-info">Ürün Bulunamadı</div>
                </div>
              )}
            </div>
          </div>
          {cartShow && (
            <div className="col-md-3">
              <Cart />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
