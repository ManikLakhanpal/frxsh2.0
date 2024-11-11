import React from 'react';

const CustomButton = ({ children, onClick, disabled, variant }) => {
  const baseStyle = "px-4 py-2 rounded-md transition-colors duration-200 font-semibold border-2 border-white";
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-600",
    destructive: "bg-red-600 text-white hover:bg-red-500",
    ghost: "bg-transparent text-gray-300 hover:bg-gray-700"
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

const CustomCard = ({ children }) => (
  <div className="bg-black rounded-lg border-2 border-white  shadow-lg overflow-hidden">
    {children}
  </div>
);

const CartItem = ({ item, onRemove }) => (
  <div className="flex items-center justify-between p-4 mb-4 border-b border-white">
    <img src={item.image} alt={item.name} className="w-24 h-24 mr-4 rounded-lg object-cover" />
    <div className="flex-grow">
      <p className="text-lg font-semibold text-gray-100">{item.name}</p>
      <p className="text-sm text-gray-400">{item.description}</p>
      <p className="text-lg font-bold text-gray-100">₹{item.price}</p>
    </div>
    <CustomButton variant="destructive" onClick={() => onRemove(item.id)}>
      Remove
    </CustomButton>
  </div>
);

const Checkout = ({ isOpen, onClose, items = [], onRemove }) => {
  if (!isOpen) return null;

  const cartTotal = items.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <div className="w-screen fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-end">
      <div className="w-screen bg-black text-gray-100 h-full overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-100">Cart</h1>
            <CustomButton variant="ghost" onClick={onClose} aria-label="Close cart">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </CustomButton>
          </div>
          <CustomCard>
            <div className="p-4">
              {items.length > 0 ? (
                items.map(item => (
                  <CartItem key={item.id} item={item} onRemove={onRemove} />
                ))
              ) : (
                <p className="text-center text-gray-400">Your cart is empty</p>
              )}
            </div>
          </CustomCard>
          <h2 className="text-xl font-bold mb-4 mt-6 text-gray-100">Cart Total: ₹{cartTotal}</h2>
          <div className="text-center mb-8">
            <CustomButton
              variant="primary"
              disabled={items.length === 0}
              onClick={() => console.log('Proceeding to checkout')}
            >
              Proceed to Checkout
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;