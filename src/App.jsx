import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Layout from "./Layout";
import RequireAuth from "./utils/RequireAuth";
import CreateContact from "./pages/CreateContact";
import SingleContactPage from "./pages/SingleContactPage";
import EditPage from "./pages/EditPage";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route element={ <RequireAuth /> }>
          <Route path="contact" >
            <Route index element={ <Dashboard /> } />
            <Route path="create" element={ <CreateContact /> } />
            <Route path="edit/:id" element={ <EditPage /> } />
            <Route path=":id" element={<SingleContactPage/>}/>
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default App
