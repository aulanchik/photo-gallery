import React from "react";
import { Progress } from ".";

const UploadForm = () => {
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState(null);

  const fileTypes = ["image/png", "image/jpeg"];

  const handleChange = (e) => {
    if (e.target.value.length > 0) {
      //checking whether selected file conforms to our file extensions policy
      let selectedFile = e.target.files[0];
      if (selectedFile && fileTypes.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError(null);
      } else {
        setError("Unsupported File. Only PNG and JPEG files are supported.");
      }
    }
  };

  return (
    <form className="upload">
      <label>
        <input type="file" onChange={handleChange} />
      </label>
      <div className="upload__container">
        {error && <div className="error">{error}</div>}
        {file && <div>Uploading file: {file.name}</div>}
        {file && <Progress file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
