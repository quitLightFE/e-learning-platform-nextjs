import axios from "axios";

const api = axios.create({
  baseURL: "https://e-learning-platform-nextjs.vercel.app/api",
});

const getStudents = async () => {
  try {
    const res = await api.get("/students");
    return res.data;
  } catch (error) {
    console.log(error);

    return { status: "error" };
  }
};

const getCourse = async (course) => {
  try {
    const res = await api.get(`/courses/${course}`);
    return res.data;
  } catch (error) {
    return { status: "error" };
  }
};

export { getStudents, getCourse };
