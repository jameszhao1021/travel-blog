import React from "react";
import CountrySelectForm from "../components/CountrySelectForm";

function BlogForm({
  handleChange,
  formRef,
  setPreview,
  newBlog,
  setNewBlog,
  selectedCountry,
  setSelectedCountry,
}) {
  function handleChange(e) {
    if (e.target.name === "preview") {
      // If the input is for the preview picture and a file is selected
      const selectedFile = e.target.files[0];
      setPreview(selectedFile); // Optionally, you can set the preview state
      setNewBlog({ ...newBlog, preview: selectedFile }); // Set the selected file in the newBlog state
    } else {
      // For other inputs, update the value in the newBlog state
      setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    }
  }

  return (
    <div className="row">
      <form
        className="container d-flex flex-column"
        autoComplete="off"
        style={{ maxHeight: "750px", overflowY: "hidden" }}
        ref={formRef}
      >
        <select className="col-lg-3" name="view" value={newBlog.view} onChange={handleChange}>
          <option value="Public Post">Public Post</option>
          <option value="Private Post">Private Post</option>
        </select>
        <div className="col-lg-12 d-flex align-items-center gap-3">
          <CountrySelectForm
            handleChange={handleChange}
            newBlog={newBlog}
            setNewBlog={setNewBlog}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
          <label>Where did you go?</label>
        </div>
        <div className=" d-flex align-items-center gap-3">
          <input type="file" name="preview" onChange={handleChange} />
          {/* <input type="file" name="preview" onChange={(e) => e.target.files[0]} /> */}
          <label>Upload preview piacture</label>
        </div>
        <input
          type="text"
          name="title"
          placeholder="Type your title here"
          value={newBlog.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          id="text"
          rows="23"
          placeholder="Write your blog here"
          value={newBlog.text}
          onChange={handleChange}
          required
        ></textarea>
        {/* <div className='justify-content-center'>
                    <button className='btn btn-secondary col-lg-2 ' type='submit'>Submit</button>
                </div> */}
      </form>
    </div>
  );
}
export default BlogForm;
