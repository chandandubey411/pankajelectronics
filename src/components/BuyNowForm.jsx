const BuyNowForm = ({ product, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="bg-zinc-900 p-6 rounded-lg w-[350px] text-white"
      >
        {/* Web3Forms Key */}
        <input
          type="hidden"
          name="access_key"
          value="4c31e106-ed27-43ec-9811-03a496832d22"
        />

        {/* Product Info */}
        <input type="hidden" name="Product Name" value={product.name} />
        <input type="hidden" name="Price" value={`₹${product.price}`} />

        <h2 className="text-xl font-semibold mb-4">
          Buy Now
        </h2>

        <p className="text-sm mb-2">
          <b>{product.name}</b>
        </p>
        <p className="text-[#12DAAA] mb-4">
          ₹{product.price}
        </p>

        {/* USER DETAILS */}
        <input
          type="text"
          name="Customer Name"
          placeholder="Your Name"
          required
          className="w-full mb-2 px-3 py-2 rounded bg-black border border-zinc-700"
        />

        <input
          type="tel"
          name="Mobile Number"
          placeholder="Mobile Number"
          required
          className="w-full mb-2 px-3 py-2 rounded bg-black border border-zinc-700"
        />

        <textarea
          name="Address"
          placeholder="Delivery Address"
          required
          className="w-full mb-4 px-3 py-2 rounded bg-black border border-zinc-700"
        ></textarea>

        {/* BUTTONS */}
        <div className="flex gap-2">
          <button
            type="submit"
            className="flex-1 bg-[#12DAAA] text-black py-2 rounded font-medium"
          >
            Place Order
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-zinc-700 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyNowForm;
