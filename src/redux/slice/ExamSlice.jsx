import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch exam data
export const fetchExam = createAsyncThunk(
  "exam/fetchExam",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await axios.get("/DB/exams.json");
      const exams = response.data;

      const exam = exams.find((exam) => exam.id === id);

      if (exam) {
        return exam;
      } else {
        return rejectWithValue("Invalid exam ID");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  questions: [],
  answers: [],
  status: "",
  totalMarks: 0,
  totalQuestions: 0,
  duration: 0,
  students: [
    {
      userID: "",
      studentMarks: 0,
      timeTaken: 0,
      correctAnswerQuestions: 0,
      wrongAnswerQuestions: 0,
      unansweredQuestions: 0,
      studentAnswers: [
        {
          QID: 0,
          answer: "",
        },
      ],
    },
  ],
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setAnswers(state, action) {
      const {
        userID,
        answers,
        timeTaken,
        totalMarks,
        studentMarks,
        correctAnswerQuestions,
        wrongAnswerQuestions,
        unansweredQuestions,
      } = action.payload;

      state.answers = answers;
      state.timeTaken = timeTaken;
      state.totalMarks = totalMarks;
      state.students.push({
        userID,
        studentMarks,
        correctAnswerQuestions,
        wrongAnswerQuestions,
        unansweredQuestions,
        timeTaken,
        studentAnswers: answers,
      });
    },
    resetExam: (state) => {
      state.answers = [];
      state.correctAnswerQuestions = 0;
      state.wrongAnswerQuestions = 0;
      state.unansweredQuestions = 0;
      state.totalMarks = 0;
      state.timeTaken = 0;
    },
    setTimeTaken: (state, action) => {
      state.timeTaken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExam.fulfilled, (state, action) => {
      state.questions = action.payload.questions;
      state.totalQuestions = action.payload.questions.length;
      state.duration = action.payload.duration; // Set duration from JSON
    });
    builder.addCase(fetchExam.rejected, (state, action) => {
      state.status = `Failed to fetch exam: ${action.payload}`;
    });
  },
});

export const { setAnswers, resetExam, setTimeTaken } = examSlice.actions;
export default examSlice.reducer;
