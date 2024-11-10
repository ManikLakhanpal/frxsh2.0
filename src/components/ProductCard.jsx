function ProductCard(props) {
    return (
        <div className="bg-white border-2 text-black overflow-hidden flex flex-col rounded-lg">
            <div className="h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                    className="w-full h-full object-contain sm:object-cover transition-transform duration-300 hover:scale-105"
                    src={props.image}
                    alt={props.name}
                />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h2 className="text-lg sm:text-xl font-bold mb-2 text-black">{props.name}</h2>
                    <p className="text-sm sm:text-base mb-4">{props.description}</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <span className="text-xl font-semibold">₹{props.price}</span>
                    <button
                        onClick={props.onAddToCart}
                        className="cart-button w-full sm:w-auto bg-white border-2 text-black font-semibold px-4 py-2 rounded-md hover:bg-black hover:text-white transition-colors duration-300"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;