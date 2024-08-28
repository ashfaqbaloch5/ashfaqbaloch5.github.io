// src/components/Form.js
const Form = ({ type, onSubmit }) => {
    return (
      <form onSubmit={onSubmit}>
        <div className="mb-4">
          <label className="block mb-2">{type === 'user' ? 'Name' : 'Product Name'}</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder={type === 'user' ? 'Enter user name' : 'Enter product name'}
          />
        </div>
        {type !== 'user' && (
          <div className="mb-4">
            <label className="block mb-2">Price</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter price"
            />
          </div>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    );
  };
  
  export default Form;
  