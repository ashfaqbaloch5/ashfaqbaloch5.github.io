// Modal.js
const Modal = ({ setShowModal, type }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-1/3">
          <h2 className="text-2xl mb-4">{type === 'user' ? 'Add/Edit User' : 'Form'}</h2>
          <form>
            {/* Add fields for user, product, or order based on 'type' */}
            <div className="mb-4">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Enter name"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
          <button onClick={() => setShowModal(false)} className="mt-4 text-red-500">
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default Modal;
  