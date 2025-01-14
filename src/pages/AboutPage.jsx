import React from "react";
import useFormattedDate from "../hooks/useFormattedDate";

function AboutPage() {
  const date = useFormattedDate();
  return (
    <div>
      <div className="d-flex flex-column ">
        <h2 className="page-title">About</h2>
        <span>{date}</span>
      </div>
      <div className="mt-5">
        <div>
          <h2 className="text-warning">Who We Are</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore
            sed vitae facere dolorum. Incidunt qui numquam cum eveniet rem
            recusandae reprehenderit enim suscipit, itaque ipsa vero nemo iste
            saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe.
          </p>
        </div>
        <div>
          <h2 className="text-warning">Our Vision</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tempore
            sed vitae facere dolorum. Incidunt qui numquam cum eveniet rem
            recusandae reprehenderit enim suscipit, itaque ipsa vero nemo iste
            saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit. A
            tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
            rem recusandae reprehenderit enim suscipit, itaque ipsa vero nemo
            iste saepe. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            A tempore sed vitae facere dolorum. Incidunt qui numquam cum eveniet
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
