import { React, useRef } from "react";
import { Link } from "react-router-dom";
// export const UserContext = React.createContext();
const AddAricleForm = () => {
  // const [title1, settitle] = useState("");

  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className=" text-white ">
      <div>
        <form>
          <div className="row">
            <div className="d-flex gap-2">
              <div className="col">
                <h3>Article Title</h3>

                <input
                  type="text"
                  className=""
                  placeholder=""
                  onChange={(e) => {
                    // settitle(e.target.value);
                  }}
                />
              </div>
              <div className="col">
                <h3>Category</h3>
                <select className="">
                  <option></option>
                  <option>Tech</option>
                  <option>Education</option>
                  <option>Business</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3>Content</h3>
              <textarea
                className=""
                rows="5"
                id="comment"
                name="text"
              ></textarea>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="">
                <h3>Publishing Date</h3>
                <input type="date" className="inp" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mohammed">
                <span className="details">Upload Certificate</span>
                <div className="upload-container">
                  <div className="upload-box">
                    <div className="upload-icon">
                      <i className="fa-solid fa-cloud-arrow-up"></i>
                    </div>
                    <p className="upload-text">
                      Drag & drop files or
                      <span className="browse" onClick={handleBrowseClick}>
                        Browse
                      </span>
                    </p>
                    <p className="supported-formats">
                      Supported formats: JPEG, PNG, GIF, MP4, PDF, PSD, AI,
                      Word, PPT
                    </p>
                    {/* <input
                  type="file"
                  id="fileInput"
                  name="file"
                  accept=".jpg,.png,.gif"
                  required
                /> */}

                    <input
                      type="file"
                      ref={fileInputRef}
                      id="fileInput"
                      name="file"
                      accept=".jpg,.png,.gif,.mp4,.ppt, .pdf, .psd, .ai, .doc, .docx"
                      required
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="buttons">
                  <Link to={-1} className="btn" style={{ backgroundColor: "grey" }}>
                    CANCEL
                  </Link>
                  <input type="submit" value="UPLOAD" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddAricleForm;
