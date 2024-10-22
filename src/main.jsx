import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import AdminDash from "./app/admin/pages/AdminDash.jsx";
import StudentList from "./app/student/pages/StudentList.jsx";
import CourseList from "./app/teacher/pages/CourseList.jsx";
import TeacherList from "./app/teacher/pages/TeacherList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path:"/admineDash",
    element:<AdminDash></AdminDash>
  },
  {
    path:"/teachers",
    element:<TeacherList />
  },
  {
    path:"/students",
    element:<StudentList />
  },
   {
    path:"/courses" ,
    element:<CourseList /> 
   }
  
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
