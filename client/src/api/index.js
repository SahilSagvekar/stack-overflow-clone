import axios from 'axios'
const API=axios.create({baseURL:'https://stack-overflow-clone-4-p3i6.onrender.com'})
API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });
export const logIn =(authData)=>API.post('/user/login',authData)
export const signUp =(authData)=>API.post('/user/signup',authData)
export const postQuestion =(questionData)=>API.post('/questions/Ask',questionData)
export const getAllQuestions=()=>API.get('/Questions/get')
export const deleteQuestion=(id)=>API.delete(`/questions/delete/${id}`)
export const postAnswer =(id,noOfAnswers,answerBody,userAnswered,userId)=>API.patch(`/answer/post/${id}`,{noOfAnswers,answerBody,userAnswered,userId})
export const deleteAnswer =(id,answerId,noOfAnswers)=>API.patch(`/answer/delete/${id}`,{id,answerId,noOfAnswers})
export const voteQuestion = (id, value) =>API.patch(`/questions/vote/${id}`, { value });
export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>API.patch(`/user/update/${id}`, updateData);
export const googleLogIn = (token) => API.post('/user/google-login', { token });
