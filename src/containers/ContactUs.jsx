export default function ContactUs() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <div className="border-2 border-white p-8 rounded-md w-full max-w-4xl mx-8 gap-8 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-around">
          <h2 className="text-2xl font-bold mb-6 text-center text-white">
            Write to us
          </h2>
          <form className="flex flex-col justify-between h-fit grow">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="Subject"
                  className="block text-white font-semibold mb-2"
                >
                  Subject
                </label>
                <textarea
                  type="text"
                  id="password"
                  name="Subject"
                  className="w-full p-3 border border-gray-500 bg-black text-white focus:ring-2 focus:ring-white"
                  placeholder="What is it about"
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="w-full text-white py-3 border-2 border-opacity-75 border-white font-semibold hover:bg-white hover:text-black focus:ring-2 focus:ring-white transition-all duration-200"
                >
                  SEND
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden justify-center items-center lg:flex">
          <img
            src="https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/icons/digital-contract.svg "
            alt="Image"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
