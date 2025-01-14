import React from "react";
import articlePageImg from "../assets/images/secondary_background.jpg";
function SingleArticle() {
  return (
    <div>
      <div className="single-article-page-container">
        <div className="single-article-header">
          <sapn className="single-article-category">Single Article Page</sapn>
        </div>
        <div className="single-article-page-content ">
          <div className="d-flex justify-content-between align-items-end mt-2">
            <h1>Single Article Page</h1>
            <span>2h ago</span>
          </div>
          <div className=" d-flex flex-column mt-5">
            <div className="d-flex gap-5 flex-column ">
              <div className="ratio ratio-16x9">
                <img src={articlePageImg} alt="" className="" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Pariatur ipsam laudantium quis quam vel doloribus quisquam
                  mollitia ut maiores, qui, autem voluptatibus voluptas. Culpa
                  quaerat quos, porro temporibus quibusdam quia! Lorem ipsum
                  dolor sit amet consectetur, adipisicing elit. Pariatur ipsam
                  laudantium quis quam vel doloribus quisquam mollitia ut
                  maiores, qui, autem voluptatibus voluptas. Culpa quaerat quos,
                  porro temporibus quibusdam quia! Lorem ipsum dolor sit amet
                  consectetur, adipisicing elit. Pariatur ipsam laudantium quis
                  quam vel doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur ipsam laudantium quis quam vel
                  doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur ipsam laudantium quis quam vel
                  doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur ipsam laudantium quis quam vel
                  doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur ipsam laudantium quis quam vel
                  doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Pariatur ipsam laudantium quis quam vel
                  doloribus quisquam mollitia ut maiores, qui, autem
                  voluptatibus voluptas. Culpa quaerat quos, porro temporibus
                  quibusdam quia! S
                </p>
              </div>
            </div>
            <div className="d-flex flex-column align-items-center gap-2 newssletter-container">
              <div className="d-flex flex-column text-uppercase text-center">
                <p className="fs-2 fw-bold ">Subscribe to our newssletter</p>
                <p className="newssletter-discription">
                  Be the first to get the latest news
                </p>
              </div>
              <div className="d-flex align-items-stretch">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="newssletter-email-input rounded-0"
                />
                <button className="newssletter-email-button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleArticle;
