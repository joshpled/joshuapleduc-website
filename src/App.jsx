//router
import router from './routes/router'
import {
  RouterProvider,
} from "react-router-dom";
//components
import TopBar from './components/TopBar';

export default function App() {

  return (
    <>
      <TopBar />
      <RouterProvider router={router} />
    </>
  )
}
