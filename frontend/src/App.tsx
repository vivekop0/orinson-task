import React, { useState } from 'react';
import axios from 'axios';
import contact from './assets/contact.png';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
interface FormData {
  name: string;
  email: string;
  number: string;
  requirement: string;
  message: string;
}

export const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    number: '',
    requirement: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
     
      const response = await axios.post('https://orinson-task.onrender.com/api/signup', formData);

   if(response.status ==201){
     toast.success(`Form submitted successfully:`);
   }
    setFormData({
      name: '',
      email: '',
      number: '',
      requirement: '',
      message: '',
    });
  
   
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
    
      toast.error('There was an error submitting the form:');
    
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex w-full h-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="w-1/2 flex items-center justify-center p-5">
          <img src={contact} alt="Contact" className="w-full h-auto" />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500">
              <span>📞 +91-7587259564</span>
              <span className="ml-4">✉️ info@orinson.com</span>
            </div>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="number" className="block text-sm font-medium text-gray-700">
                    Number
                  </label>
                  <input
                    type="text"
                    name="number"
                    id="number"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    placeholder="Enter your phone number"
                    value={formData.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="requirement" className="block text-sm font-medium text-gray-700">
                    What are your requirements?
                  </label>
                  <select
                    name="requirement"
                    id="requirement"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    value={formData.requirement}
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option value="Requirement 1">Requirement 1</option>
                    <option value="Requirement 2">Requirement 2</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="mt-6 w-fit bg-violet-500 text-white py-2 px-5 rounded-md shadow-sm hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
            <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
          </div>
        </div>
      </div>
    </div>
  );
};
