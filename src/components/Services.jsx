import React, { useState, useContext } from 'react';
import { TransactionContext } from '../../src/context/TransactionContext'; // Update with the correct path

const Services = () => {
  const { formData, handleChange, sendTransaction } = useContext(TransactionContext);

  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { name: 'Phone Recharge', icon: '📱' },
    { name: 'Gas Bill', icon: '⛽' },
    { name: 'Electricity Bill', icon: '⚡' },
    { name: 'Water Bill', icon: '💧' },
  ];
  const handleServiceClick = (service) => {
    if (selectedService === service.name) {
      setSelectedService(null); // If the clicked service is already selected, deselect it
    } else {
      setSelectedService(service.name); // Otherwise, select the clicked service
    }
  };

  const renderServiceOptions = () => {
    return (
      <div className="flex flex-wrap justify-between">
        {services.map(service => (
          <div
            key={service.name}
            className={`flex-1 m-2 bg-blue-200 rounded shadow-lg p-4 ${selectedService === service ? 'border-4 border-blue-500' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            <h5 className="font-bold">{service.icon} {service.name}</h5>
          </div>
        ))}
      </div>
    );
  };

  const renderServiceDetailsForm = () => {
    if (!selectedService) return null;

    return (
      <form className="mt-4 bg-white rounded shadow-lg p-4" onSubmit={sendTransaction}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Recipient Address:</label>
          <input
            type="text"
            name="addressTo"
            value={formData.addressTo}
            onChange={e => handleChange(e, 'addressTo')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Amount:</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={e => handleChange(e, 'amount')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
          <input
            type="text"
            name="message"
            value={formData.message}
            onChange={e => handleChange(e, 'message')}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
      </form>
    );
  };

  return (
    <div className="p-4">
      {renderServiceOptions()}
      {renderServiceDetailsForm()}
    </div>
  );
};

export default Services;