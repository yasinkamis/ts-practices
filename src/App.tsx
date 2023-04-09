import { FC } from "react";
import { Login } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 'Routes' ekleyin
import styled from "styled-components";
import Layout from "./layout";

const App: FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorText>404!</ErrorText>} />
        </Routes>
      </Router>
    </Layout>
  );
};

export default App;

const ErrorText = styled.h1`
  color: #fff;
`;
