import { FC } from "react";
import { Home, Login } from "./pages";
import Layout from "./layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

const App: FC = () => {
  return (
    <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
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
