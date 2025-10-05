import React from 'react'

const Form = () => {
  return (
    <div className="w-full h-full bg-black flex justify-center items-center p-4">
      <form className="w-full max-w-lg bg-black p-4 rounded space-y-4">
        {/* Full Name & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white text-xs font-medium mb-1">
              FULL NAME*
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>
          <div>
            <label className="block text-white text-xs font-medium mb-1">
              PHONE NO*
            </label>
            <input
              type="text"
              placeholder="Phone"
              className="w-full p-2 rounded bg-white text-black text-sm outline-none"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-white text-xs font-medium mb-1">
            EMAIL ADDRESS*
          </label>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-white text-black text-sm outline-none"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-white text-xs font-medium mb-1">
            MESSAGE*
          </label>
          <textarea
            placeholder="Message"
            rows="3"
            className="w-full p-2 rounded bg-white text-black text-sm outline-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded hover:bg-orange-700 transition"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  )
}

export default Form