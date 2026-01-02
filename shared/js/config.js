const API_BASE_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:8000/api/"
    : "https://api.quizly.ogulcan-erdag.com/api/";

const LOGIN_URL = "login/";
const REGISTER_URL = "register/";
const LOGOUT_URL = "logout/";
const TOKENREFRESH_URL = "token/refresh/";
const CREATE_QUIZ_URL = "createQuiz/";
const GET_QUIZ_URL = "quizzes/";
