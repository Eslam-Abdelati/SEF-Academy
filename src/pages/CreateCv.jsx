import React, { useEffect, useRef, useState } from "react";
import CreateCVHeader from "../components/createCv/CreateCVHeader";
import "../assets/styles/cvSteps.css";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import CvMainInformation from "../components/createCv/CvMainInformation";
import CvAboutForm from "../components/createCv/CvAboutForm";
import CvSkillsForm from "../components/createCv/CvSkillsForm";
import CvTemplet from "../components/createCv/CvTemplet";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import CvEducationForm from "../components/createCv/CvEducationForm";
import CvExperianceForm from "../components/createCv/CvExperianceForm";
import CvHonorForm from "../components/createCv/CvHonorForm";
import CvLinksForm from "../components/createCv/CvLinksForm";
import CvHobbiesForm from "../components/createCv/CvHobbiesForm";
import { useDispatch } from "react-redux";

function CreateCv() {
  const steps = [
    { id: 1, urlLink: "main", name: "MAIN INFORMATION" },
    { id: 2, urlLink: "summary", name: "SUMMARY" },
    { id: 3, urlLink: "skills", name: "SKILLS" },
    { id: 4, urlLink: "experiance", name: "EXPERIENCE" },
    { id: 5, urlLink: "education", name: "EDUCATION" },
    { id: 6, urlLink: "honors", name: "HONORS AND AWARDS" },
    { id: 7, urlLink: "interests", name: "HOBBIES AND INTERESTS" },
    { id: 8, urlLink: "links", name: "LINKS" },
  ];
  const dispatch = useDispatch();
  const [activeSetp, setActiveStep] = useState("");
  // const { mainStep } = useParams();
  const { "*": mainStep } = useParams();
  console.log(mainStep);
  const [activeSteps, setActiveSteps] = useState([]);
  const index = steps.findIndex((step) => step.urlLink === mainStep);

  const updateTheActiveSteps = () => {
    setActiveSteps([]);
    for (let i = index; i >= 0; i--) {
      setActiveSteps((prevSteps) => [...prevSteps, i + 1]);
    }
  };
  useEffect(() => {
    updateTheActiveSteps();
  }, [mainStep]);

  const stepRefs = useRef([]);
  const cvTempletRef = useRef(); // Create a ref for CvTemplet 00
  const navigate = useNavigate();

  const handleContinue = () => {
    const nextStep = index + 1;
    if (nextStep < 8) {
      setActiveSteps((prevSteps) => [...prevSteps, nextStep]);
      stepRefs.current[nextStep]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      console.log(nextStep);
      navigate(`/create-cv/${steps[nextStep].urlLink}`);
    }

    console.log(steps[index].urlLink);
  };

  const handleBack = () => {
    const prevStep = index - 1;

    if (prevStep >= 0) {
      setActiveSteps((prevSteps) =>
        prevSteps.filter((step) => step !== prevStep)
      );
      stepRefs.current[prevStep]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      console.log(prevStep);
      console.log(steps[index].urlLink);

      navigate(`/create-cv/${steps[prevStep].urlLink}`);
    }
    console.log(activeSteps);
  };

  const downloadCV = () => {
    const input = cvTempletRef.current;

    // Ensure all images are loaded before capturing the canvas
    const images = input.querySelectorAll("img");
    const promises = Array.from(images).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete) {
            resolve();
          } else {
            img.onload = resolve;
            img.onerror = resolve; // In case an image fails to load
          }
        })
    );

    Promise.all(promises).then(() => {
      html2canvas(input, { useCORS: true }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("CV.pdf");
      });
    });
  };

  return (
    <>
      <div>
        <CreateCVHeader />

        <div className="mt-5 w-100">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-4 w-100 cv-steps-outer-container ">
              <div className=" cv-steps-container" style={{ maxWidth: "100%" }}>
                {steps.map((step, index) => (
                  <div
                    className="cv-tab "
                    key={step.id}
                    ref={(el) => (stepRefs.current[index] = el)}
                  >
                    <div
                      className={`cv-tab-number ${
                        activeSteps.includes(step.id) ? "active" : ""
                      }`}
                    >
                      {step.id}
                    </div>
                    <span>{step.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="cv-page-body ">
          <div className="cv-forms-container">
            <Routes>
              <Route>
                <Route path="/" element={<CvMainInformation />} />
                <Route path="/main" element={<CvMainInformation />} />
                <Route path="/summary" element={<CvAboutForm />} />
                <Route path="/skills" element={<CvSkillsForm />} />
                <Route path="/experiance" element={<CvExperianceForm />} />
                <Route path="/education" element={<CvEducationForm />} />
                <Route path="/honors" element={<CvHonorForm />} />
                <Route path="/interests" element={<CvHobbiesForm />} />
                <Route path="/links" element={<CvLinksForm />} />
              </Route>
            </Routes>
          </div>

          <div className="bg-light cv-templet-container" ref={cvTempletRef}>
            <CvTemplet />
          </div>
        </div>

        <div className="buttons-box">
          <div className="d-flex gap-4">
            {activeSteps.length > 1 && (
              <button className="btn btn-secondary px-5" onClick={handleBack}>
                Back
              </button>
            )}
            {/* <button className="btn btn-secondary px-5" onClick={handleBack}>
              Back
            </button> */}
            {activeSteps.length < steps.length && (
              <button className="btn btn-warning px-3" onClick={handleContinue}>
                Continue
              </button>
            )}
          </div>
          {activeSteps.length === steps.length && (
            <div>
              <button className="btn btn-warning" onClick={downloadCV}>
                Download CV
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CreateCv;
