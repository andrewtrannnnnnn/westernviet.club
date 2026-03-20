import { Routes, Route } from "react-router";
import Layout from "./components/Layout.tsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<p>Home</p>} />
      </Route>
    </Routes>
  );
}
