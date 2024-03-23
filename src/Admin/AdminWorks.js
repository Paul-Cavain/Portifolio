import AdminNavbar from "../components/AdminNavbar";
import { useState } from "react";
import axios from "axios";

const AdminWorks = () => {
  const [inputs, setInputs] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:80/myPortifolioApi/books/save", inputs)
      .then(function (response) {
        console.log(response.data);
        setSuccessMessage("Form submitted successfully!");
        setErrorMessage("");
        setInputs({}); // Clear the form inputs after successful submission
        window.location.reload(); // Automatically refresh the page
      })
      .catch(function (error) {
        console.error(error);
        setSuccessMessage("");
        setErrorMessage("Form submission failed!");
      });
  };

  return (
    <section className="pt-32 pb-20 md:pb-0 md:pt-24 md:px-28">
    <div>
      <AdminNavbar />
    </div>
    <div className="text-2xl text-center">
      <h3>Uploading my works</h3>
    </div>
    <div className="md:flex md:justify-center bg-gradient-to-r from-pink-400 to-violet-700 mt-10 mx-4 md:mx-72 rounded-md">
      
        <form onSubmit={handleSubmit} className="px-10 w-full py-6 space-y-4">
            <div className="w-full">
                <label for="project_title" className="text-white">Project Title</label>
                <input type="text" name="project_title" placeholder="Enter project name" className="h-10 w-full px-2 rounded-md focus:outline-none" onChange={handleChange} />
            </div>
            <div className="w-full">
                <label for="project_image" className="text-white">Project Image</label>
                <input type="file" name="project_image" placeholder="Enter project name" className="h-10 w-full py-1 px-2 rounded-md bg-white focus:outline-none" onChange={handleChange} />
            </div>
            <div className="w-full">
                <label for="project_contents" className="text-white">Project Contents</label>
                <textarea type="text" name="project_contents" placeholder="Write Project Contents here....!!" className="h-20 w-full px-2 rounded-md focus:outline-none" onChange={handleChange} />
            </div>
            <div className="w-full">
                <label for="project_link" className="text-white">Project Link</label>
                <textarea type="text" name="project_link" placeholder="Write Project link here....!!" className="h-10 w-full px-2 rounded-md focus:outline-none" onChange={handleChange} />
            </div>
            <div className="w-full">
                <label for="created_at" className="text-white">Project Created Time</label>
                <input type="date" name="created_at" className="h-10 w-full px-2 rounded-md focus:outline-none" onChange={handleChange} />
            </div>
            <div className="flex justify-end mt-8">
                <button type="submit" name="submit" className="text-white bg-black w-20 h-10 rounded-md">Submit</button>
            </div>
        </form>
    </div>
  </section>
  );
};

export default AdminWorks;
