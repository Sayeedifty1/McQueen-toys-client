import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="w-5/6 mx-auto mb-32 border border-yellow-500 p-10" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-center mb-1">Contact Us</h1>
        <form onSubmit={handleSubmit} >
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 text-sm font-bold text-white">
          Name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 text-sm font-bold text-white">
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 text-sm font-bold text-white">
          Description:
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-3 py-2 leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          rows={4}
          required
        />
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-600 hover:text-white hover:border-gray-900 mt-4 lg:mt-0"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;
