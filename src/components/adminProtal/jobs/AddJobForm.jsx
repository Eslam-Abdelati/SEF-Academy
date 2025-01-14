import React, { useRef } from "react";
import { Link } from "react-router-dom";

function AddJobForm() {
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  return (
    <div className=" mx-auto text-light rounded  px-5 animate__animated animate__rotateIn">
      <div className="d-flex justify-content-between align-items-end mt-5">
        <div className=" d-flex pt-5">
          <h2 className="table-title ">Add Jop Details</h2>
        </div>
        <button className="btn btn-warning fs-5 px-5">Publish</button>
      </div>
      <div className="mt-5">
        <form>
          <div>
            <div className="d-flex justify-content-between gap-2">
              <div className="d-flex flex-column flex-grow-1">
                <div>
                  <label className="Company Name">Job Title</label>
                  <input className="" type="text" placeholder="Job Title" />
                </div>
                <div className="d-flex gap-2 flex-grow-1">
                  <div className="flex-grow-1">
                    <label className="Company Name">field</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <label className="Company Name">Location</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
              </div>
              <div className="job-upload-logo-container  ">
                <span className="details ">Company Logo</span>
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
              </div>
            </div>
            <div>
              <span>About the Company</span>
              <textarea
                type="text"
                placeholder="About the Company"
                className="w-100"
              ></textarea>
            </div>
            <div className="d-flex justify-content-between gap-2 align-items-center">
              <div className=" flex-grow-1">
                <span>Position</span>
                <input type="text" />
              </div>
              <div className=" flex-grow-1">
                <span>Job type</span>
                <input type="text" />
              </div>
              <div className="d-flex gap-2 flex-grow-1 justify-content-around">
                <div className="d-flex gap-1">
                  <input type="radio" />
                  <span>Remote</span>
                </div>
                <div className="d-flex gap-1">
                  <input type="radio" />
                  <span>On Site</span>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-between gap-2 align-items-center">
              <div className=" d-flex flex-column justify-content-between flex-grow-1">
                <span>Salary Range</span>
                <div className="d-flex gap-2">
                  <input type="text" />
                  <span>to</span>
                  <input type="text" />
                </div>
              </div>
              <div className=" d-flex flex-column justify-content-between flex-grow-1">
                <span>Currency</span>
                <select name="" id="">
                  <option value=""></option>
                  <option value="EGP">EGP</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
            </div>
            <div>
              <span>Job Description</span>
              <textarea
                type="text"
                placeholder="Job Description"
                className="w-100"
              ></textarea>
            </div>
            <div>
              <span>Job Requirements</span>
              <textarea
                type="text"
                placeholder="Job Requirements"
                className="w-100"
              ></textarea>
            </div>
            <div>
              <span>Skills</span>
              <input type="text" />
            </div>
            <div className="d-flex justify-content-end gap-3 mt-3">
              <button className="btn btn-secondary px-4">CANCEL</button>
              <button className="btn btn-warning px-4 text-light">SAVE</button>
            </div>
          </div>
          {/* end of form */}
        </form>
      </div>
    </div>
  );
}

export default AddJobForm;

// import React from "react";
// import { Link } from "react-router-dom";

// function AddJobForm() {
//   return (
//     <div className=" mx-auto text-light rounded  animate__animated animate__rotateIn">
//       <div className=" row d-flex justify-content-between ">
//         <div className="col-lg-6 col-10 ">
//           <h2 className="p-1  text-start fw-bolder">Add Jop Details</h2>
//           <hr className="w-100 text-warning " />
//         </div>
//         <div className="col-lg-4 col-10">
//           <button className="btn btn-warning w-75 mt-4 mx-5 fs-5 fw-bolder p-1 hvr-bubble-float-bottom">
//             Puplish
//           </button>
//         </div>
//       </div>
//       <form>
//         <div className=" con1 row d-flex justify-content-between  p-3">
//           <div className="col-10 col-lg-6 mt-4 p-3">
//             <label className="w-100 p-1 text-start fw-bolder">
//               Company Name
//             </label>
//             <input className="w-100 bg-secondary rounded " />
//             <div className="container row">
//               <div className="col">
//                 <label className="w-100 p-1 text-start fw-bolder">field</label>
//                 <select className="w-100  bg-secondary rounded ">
//                   <option></option>
//                   <option></option>
//                   <option></option>
//                   <option></option>
//                 </select>
//               </div>
//               <div className="col">
//                 <label className="w-100 p-1 text-start fw-bolder">
//                   Location
//                 </label>
//                 <select className="w-100 bg-secondary rounded   ">
//                   <option></option>
//                   <option></option>
//                   <option></option>
//                   <option></option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="col-10 col-lg-6 p-5 p-3">
//             <h5>Company Logo</h5>

//             <div className="rounded col-10 col-lg-12 p-5 bg-dark ">
//               <Link href="#" className="text-warning">
//                 browse
//               </Link>
//             </div>
//           </div>
//           <label className="w-100 p-1 text-start fw-bolder">
//             About The Company
//           </label>
//           <textarea className="rounded w-100  bg-secondary rounded  "></textarea>
//         </div>

//         <div className="container con2 row p-3">
//           <div className="col-lg-6 col-10 p-3">
//             <label className="w-100 p-1 text-start fw-bolder">Position</label>
//             <input className=" col-lg-6 col-10 bg-secondary rounded " />
//           </div>
//           <div className="col p-3">
//             <label className="w-100 p-1 text-start fw-bolder">Jop Type</label>
//             <input className="w-25  bg-secondary rounded " />
//             <input className="mx-2" type="radio" name="a" />
//             Remote
//             <input className="mx-2" type="radio" name="a" />
//             On Site
//           </div>
//         </div>

//         <div className="container con3 row p-2">
//           <div className="col p-2">
//             <div className="container row p-2">
//               <label className="w-100 p-1 text-start fw-bolder">
//                 Salary Range
//               </label>
//               <input className="col  bg-secondary rounded " /> To{" "}
//               <input className="col bg-secondary rounded  " />
//             </div>
//           </div>
//           <div className="col p-2">
//             <label className="w-100 p-1 text-start fw-bolder  ">Currancy</label>
//             <select className="rounded w-100 bg-secondary rounded  ">
//               <option></option>
//               <option></option>
//               <option></option>
//               <option></option>
//             </select>
//           </div>
//         </div>

//         <label className="w-100 p-1 text-start fw-bolder ">
//           Jop Description
//         </label>
//         <textarea className="rounded w-100  bg-secondary rounded "></textarea>
//         <label className="w-100 p-1  text-start fw-bolder">
//           Jop Requirements
//         </label>
//         <textarea className="rounded w-100 bg-secondary rounded  "></textarea>
//         <label className="w-100 p-1 text-start fw-bolder ">Skills</label>
//         <textarea className="rounded w-100  bg-secondary rounded  "></textarea>
//         <div className="container row d-flex justify-content-end">
//           <div className="col-lg-5 col-10">
//             <button className="btn btn-secondary  mt-3 col-lg-4 col-10 p-3 mx-1 hvr-curl-top-left">
//               Cancel
//             </button>
//             <button className="btn btn-warning mt-3  col-lg-4 col-10  p-3 mx-1 hvr-curl-top-left">
//               Save
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default AddJobForm;
