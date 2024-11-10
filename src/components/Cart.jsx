function Cart(props) {
  return (
    <div
      id="cart"
      className={`fixed top-0 right-0 h-full bg-black p-6 sm:p-10 bg-opacity-90 backdrop-blur-lg rounded-l-lg z-50 transition-transform duration-300 ease-in-out transform w-full sm:w-2/5 flex-col ${
        props.isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Cart</h2>
        <button
          onClick={props.onClose}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Close cart"
        >
          X
        </button>
      </div>
      {props.items.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {props.items.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 border-b border-gray-800 pb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-grow">
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="text-sm text-gray-400">₹{item.price}</p>
              </div>
              <button
                onClick={() => props.onRemove(index)}
                className="text-red-500 hover:text-red-400 transition-colors"
                aria-label={`Remove ${item.name} from cart`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6">
        <button
          className="w-full bg-white text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300"
          disabled={props.items.length === 0}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
