import React from 'react'

const ContactForm = () => {
  return (
    <div className="mt-[90px] w-full p-4 h-screen bg-[var(--primary-beige)]">
      <h1 className="text-2xl font-bold text-center p-4 text-[var(--primary-blue)]">
        Contact Us!
      </h1>
      <form className="max-w-[600px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 focus:outline-none text-[var(--primary-yellow)]"
            type="text"
            placeholder="Name"
            style={{ caretColor: 'var(--primary-yellow)' }}
          />
          <input
            className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 focus:outline-none text-[var(--primary-yellow)]"
            type="email"
            placeholder="Email"
            style={{ caretColor: 'var(--primary-yellow)' }}
          />
        </div>
        <input
          className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 w-full my-4 focus:outline-none text-[var(--primary-yellow)]"
          type="text"
          placeholder="Subject"
          style={{ caretColor: 'var(--primary-yellow)' }}
        />
        <textarea
          className="border border-[var(--primary-blue)] bg-[var(--primary-teal)] rounded-3xl shadow-lg p-3 w-full focus:outline-none text-[var(--primary-yellow)]"
          cols="30"
          rows="10"
          placeholder="Message"
          style={{ caretColor: 'var(--primary-yellow)' }}
        ></textarea>
        <button className="w-full mt-2 text-[var(--primary-yellow)] py-3 px-7">
          Submit
        </button>
      </form>
    </div>
  )
}

export default ContactForm
