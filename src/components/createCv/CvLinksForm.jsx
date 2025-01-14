import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLinks } from "../../redux/slice/CvSlice";

function CvLinksForm() {
  const dispatch = useDispatch();
  const linksFromRedux = useSelector((state) => state.cv.cv.links);
  const [links, setLinks] = useState(linksFromRedux);

  useEffect(() => {
    setLinks(linksFromRedux);
  }, [linksFromRedux]);

  useEffect(() => {
    dispatch(updateLinks(links));
  }, [links, dispatch]);

  const handleInputChange = (index, field, value) => {
    const newLinks = [...links];
    newLinks[index] = {
      ...newLinks[index],
      [field]: value,
    };
    setLinks(newLinks);
  };

  const handleAddLink = () => {
    setLinks([...links, { name: "", url: "" }]);
  };

  const handleRemoveLink = (index) => {
    const newLinks = links.filter((_, i) => i !== index);
    setLinks(newLinks);
  };

  return (
    <div>
      <h4>Links</h4>
      <div className="d-flex cv-skill-item-container mt-3">
        <div className="flex-grow-1">
          {links.map((link, index) => (
            <div key={index} className="cv-skill-item flex-grow-1">
              <div className="d-flex flex-grow-1 gap-2 ">
                <div>
                  <p>Website Name</p>
                  <input
                    type="text"
                    value={link.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </div>
                <div className="flex-grow-1">
                  <p>Website URL</p>
                  <input
                    type="text"
                    value={link.url}
                    onChange={(e) =>
                      handleInputChange(index, "url", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="cv-skill-item-icon-box">
                {links.length > 1 && (
                  <div>
                    <p className="pt-3"></p>
                    <i
                      className="fas fa-trash-alt pt-2"
                      onClick={() => handleRemoveLink(index)}
                    ></i>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-end">
          <div onClick={handleAddLink} className="pb-2">
            <i className="fas fa-plus-circle"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CvLinksForm;
