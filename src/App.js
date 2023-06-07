
import './App.css';
import Header from './header/index.js'
import Event from './event/sukien.js'
import Home from './page/home/home.js'
import Lienhe from './lienhe/lienhe.js'
import Thanhtoan from './thanhtoan/thanhtoan.js'
import Thanhtoanthanhcong from './thanhtoanthanhcong/thanhtoanthanhcong.js'
import Sukien1 from './sukien1/sukien1.js'
import {
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/Sukien" element={<Event />}>

          </Route>
          <Route path="/lienhe" element={<Lienhe />}>

          </Route>
          <Route path="/Thanhtoan" element={<Thanhtoan />}>

          </Route>
        </Routes>
    </>
  );
}
export default App;
