import React from "react";
import { CiTrash } from "react-icons/ci";
import { MdModeEdit } from "react-icons/md";

function TableCard({ name, status, userId, role, mail, id }) {
  return (
    <div className=" p-3 bg-black d-flex flex-column gap-3" >
      <div className="d-flex justify-content-between">
        <div>
          <h3>Name</h3>
          <p className="">{name}</p>
        </div>
        <div className="">
          <p className="pill">{status}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <h3>Role</h3>
          <p>{role}</p>
        </div>
        <div className="d-flex flex-column">
          <h3>User ID</h3>
          <p>{userId}</p>
        </div>
      </div>
      <div className=" d-flex justify-content-between align-items-end">
        <div className="">
          <h3>Email</h3>
          <p>{mail}</p>
        </div>
        <div className="">
          <p className="d-flex justify-content-between text-warning gap-3 fs-3">
            <CiTrash />
            <MdModeEdit />
          </p>
        </div>
      </div>
    </div>
  );
}

export default TableCard;
