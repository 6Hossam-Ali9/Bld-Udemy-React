import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3004/body")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return data ? (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage data={data} />} exact />
          <Route path="/course/:id" element={<CourseDetails />} />
        </Routes>
      </Layout>
    </Router>
  ) : (
    <h1 className="mx-auto text-9xl text-center pt-52">LOADING...</h1>
  );
}

export default App;
