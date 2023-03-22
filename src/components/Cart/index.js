import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../stores/cart";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const totalPrice = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="card">
      <div className="card-header">Sepet</div>
      <div className="card-body">
        <ul className="list-group list-group-flush">
          {cartItems.length > 0 ? (
            cartItems.map((product) => (
              <li
                className="list-group-item d-flex flex-column"
                key={product.id}
              >
                <span className="mb-2">{product.title}</span>
                <span className="mb-2">
                  {product.quantity} x ${product.price.toFixed(2)}
                </span>

                <button
                  onClick={() => handleRemoveFromCart(product)}
                  className="bg-dark border-0 p-0 text-white"
                >
                  Kaldır
                </button>
              </li>
            ))
          ) : (
            <li className="list-group-item">Sepet Boş</li>
          )}
        </ul>

        <hr />
        <h5 className="card-title">Toplam: ${totalPrice.toFixed(2)}</h5>
      </div>
    </div>
  );
}

export default Cart;
