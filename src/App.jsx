import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import PostList from './pages/Post';
import Documentation from "./pages/Documentation";
import Dashboard from './pages/dashboard';
import Profile from './components/dashboard/Profile';
import Settings from './components/dashboard/Settings';
import NotFound from "./pages/NotFound";

function App() {
  

  return (
    <>
      <Header title="This is App Header" content="this is another props" />

      <div className="App">
        <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="/posts" element={ <PostList/> } />
        <Route path="/docs" element={ <Documentation/> } />

         {/* Parent Route for Nested Routing */}
         <Route path="/dashboard" element={<Dashboard />}>
            {/* Nested Routes */}
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
          </Route>

        <Route path="*" element={<NotFound/>} />
         
        </Routes>
      </div>

      <Footer title="This is App Footer" content="this is another props" />
    </>
  );
}

export default App;
