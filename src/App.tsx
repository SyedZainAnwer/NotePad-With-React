import Layout from './components/Layout';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Notes from './pages/Notes/Notes';
import Reminders from './pages/Reminders/Reminders';
import Trash from './pages/Trash/Trash';
import Archive from './pages/Archive/Archive';

interface routeType {
  path: string,
  component: React.ComponentType,
  id:number,
}

const pages:routeType[] = [
  {
    path: '/',
    component: Notes,
    id:1
  },
  {
    path: '/reminder',
    component: Reminders,
    id:2
  },
  {
    path: '/trash',
    component: Trash,
    id:3
  },
  {
    path: '/archive',
    component: Archive,
    id:4
  },
]

function App() {

  return (
    <div>
        <Router>
      <Layout>
          <Routes>
            { pages.map((page) => (
              <Route path={page.path} Component={page.component} key={page.id}/>
          ))}
          </Routes>
      </Layout>
        </Router>
    </div>
  )
}


export default App
