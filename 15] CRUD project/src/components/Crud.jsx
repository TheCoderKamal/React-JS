import React, { useEffect, useState } from "react";

export default function Crud() {
  // UseStates
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    hobbies: [],
    city: "",
  });
  const [record, setRecord] = useState([]);
  const [editID, setEditID] = useState(null);

  // useEffect - Load initial data from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setRecord(data);
  }, []);

  // Handle Input Change
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle Form Submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (editID === null) {
      // Add new record
      const newData = [...record, { ...formData, id: Date.now() }];
      setRecord(newData);
      localStorage.setItem("students", JSON.stringify(newData));
    } else {
      // Update existing record
      const updatedData = record.map((item) =>
        item.id === editID ? { ...formData, id: editID } : item
      );
      setRecord(updatedData);
      localStorage.setItem("students", JSON.stringify(updatedData));
    }

    resetForm();
  };

  // Reset Form Fields
  const resetForm = () => {
    setFormData({ name: "", age: "", gender: "", hobbies: [], city: "" });
    setEditID(null);
  };

  // Handle Edit
  const handleEdit = (id) => {
    const dataToEdit = record.find((item) => item.id === id);
    setFormData(dataToEdit);
    setEditID(id);
  };

  // Handle Delete
  const handleDelete = (id) => {
    const filteredData = record.filter((item) => item.id !== id);
    setRecord(filteredData);
    localStorage.setItem("students", JSON.stringify(filteredData));
  };

  // Check if form is valid
  const isFormValid = () => {
    return (
      formData.name &&
      formData.age &&
      formData.gender &&
      formData.hobbies.length > 0 &&
      formData.city
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen text-gray-200 py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 rounded-xl p-6 max-w-xl mx-auto shadow-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-6">
          Student Information Form
        </h1>

        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Enter your name ..."
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Age Input */}
        <input
          type="text"
          name="age"
          placeholder="Enter your age ..."
          value={formData.age}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Gender Radio Buttons */}
        <div className="mb-4">
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === "Male"}
              className="mr-2"
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === "Female"}
              className="mr-2"
            />
            Female
          </label>
        </div>

        {/* Hobbies Checkboxes */}
        <div className="mb-4">
          {["ReactJS", "NodeJS", "MongoDB", "ExpressJS", "AI"].map((hobby) => (
            <label key={hobby} className="block">
              <input
                type="checkbox"
                value={hobby}
                onChange={handleChange}
                checked={formData.hobbies.includes(hobby)}
                className="mr-2"
              />
              {hobby}
            </label>
          ))}
        </div>

        {/* City Dropdown */}
        <select
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 mb-4 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="" disabled>
            --Select City--
          </option>
          {["Rajkot", "Ahmedabad", "Surat", "Jamnagar", "Bhuj"].map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={`w-full py-2 rounded-lg font-bold ${
            isFormValid()
              ? "bg-purple-500 text-gray-100 hover:bg-purple-600"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          {editID === null ? "Submit" : "Update"}
        </button>
      </form>

      {/* Data Table */}
      <table className="w-full mt-10 text-sm bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-700 text-gray-200">
            <th className="py-2 px-4">#</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Age</th>
            <th className="py-2 px-4">Gender</th>
            <th className="py-2 px-4">Hobbies</th>
            <th className="py-2 px-4">City</th>
            <th className="py-2 px-4">Edit</th>
            <th className="py-2 px-4">Delete</th>
          </tr>
        </thead>
        <tbody>
          {record.length > 0 ? (
            record.map((data, index) => (
              <tr key={data.id} className="hover:bg-gray-700">
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{data.name}</td>
                <td className="py-2 px-4">{data.age}</td>
                <td className="py-2 px-4">{data.gender}</td>
                <td className="py-2 px-4">
                  <ul>
                    {data?.hobbies.map((hobby, idx) => (
                      <li key={idx}>{hobby}</li>
                    ))}
                  </ul>
                </td>
                <td className="py-2 px-4">{data.city}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleEdit(data.id)}
                    className="text-blue-400 hover:underline"
                  >
                    Edit
                  </button>
                </td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => handleDelete(data.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center py-4 text-gray-400">
                No data found...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
