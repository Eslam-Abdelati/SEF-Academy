
import { createSlice } from "@reduxjs/toolkit";

const cvSlice = createSlice({
  name: "cv",
  initialState: {
    cv: {
      mainInformaition: {
        fname: "Pola",
        lname: "Mounir",
        profession: "FrontEnd Developer", // Fixed casing
        nationality: "Egypt",
        address: "Giza",
        phone: "+201068550976",
        email: "pola@gmail.com",
        img: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png",
      },
      about:
        " I have a background in information technology, with a focus on frontend development and UI design. I am the type of person who seizes every opportunity to learn something new. That is why I enjoy challenges. From there, I'm under pressure to learn quickly and gain alot of new experience.",
      skills: ["JavaScript", "React", "Node.js", "MongoDB", "CSS"],
      experiences: [
        {
          company: "Tech Solutions Inc.",
          position: "Senior Developer",
          from: "2021",
          to: "2024",
          description: "Led the development of several high-impact projects.",
          img: "https://cdn.iconscout.com/icon/free/png-512/free-upwork-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-3030271.png?f=webp&w=256",
        },
        {
          company: "Web Dev Co.",
          position: "Junior Developer",
          from: "2018",
          to: "2020",
          description: "Worked on various client-side applications and APIs.",
          img: "https://cdn.iconscout.com/icon/free/png-512/free-upwork-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-7-pack-logos-icons-3030271.png?f=webp&w=256",
        },
      ],
      educations: [
        {
          organizationName: "University Name",
          degree: "Bachelor of Science in Computer Science",
          from: "2020",
          to: "2023",
          description: "Graduated with honors.",
        },
      ],
      honorsAndAwards: [
        {
          awardName: "Employee of the Year",
          year: "2022",
          description: "Awarded for outstanding performance and contributions.",
        },
      ],
      hobbies: ["Coding", "Reading", "Traveling"],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/johndoe",
        },
        {
          name: "LinkedIn",
          url: "https://linkedin.com/in/johndoe",
        },
      ],
    },
  },
  reducers: {
    updateCV: (state, action) => {
      state.cv = action.payload;
    },
    updateField: (state, action) => {
      const { field, value } = action.payload;
      const keys = field.split(".");       let current = state.cv;

      keys.slice(0, -1).forEach((key) => {
        current = current[key];
      });
      current[keys[keys.length - 1]] = value;
    },
    updateSkills: (state, action) => {
      state.cv.skills = action.payload;
    },
  
    updateExperiance: (state, action) => {
      state.cv.experiences = action.payload;
    },
    updateHobbies: (state, action) => {
      state.cv.hobbies = action.payload;
    },
    updateEducation: (state, action) => {
      state.cv.educations = action.payload;
    },
    updateHonorAndAwards: (state, action) => {
      state.cv.honorsAndAwards = action.payload;
    },
    updateLinks: (state, action) => {
      state.cv.links = action.payload;
    },
  },
});

export const {
  updateCV,
  updateField,
  updateExperiance,
  updateEducation,
  updateHonorAndAwards,
  updateLinks,
  updateSkills,
  updateHobbies,
} = cvSlice.actions;

export default cvSlice.reducer;
