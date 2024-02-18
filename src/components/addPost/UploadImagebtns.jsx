import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
function UploadImagebtns({handleFileChange}) {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button
        type="button"
        className="btn btn-outline-secondary btn-lg px-4 gap-3"
      >
        <input
          className="fileType"
          type="file"
          onChange={handleFileChange}
          multiple
        />
        <MdOutlineCloudUpload className="UploadBtn" />
      </button>
    </div>
  );
}

export default UploadImagebtns;
