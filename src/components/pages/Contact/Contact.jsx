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
          className="relative border-2 rounded-2xl border-white bg-transparent py-2.5 px-5 font-medium text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] hover:text-black before:hover:scale-y-100 before:rounded-2xl"
        >
          Submit
        </button>
      </div>
    </form>
    </div>
  );
};

export default Contact;
