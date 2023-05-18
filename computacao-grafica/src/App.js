import ProductView from './components/productView';
import Header from './components/header';
import Description from './components/Description'
import { Row } from "./styles";

function App() {
  return (
    <>
    <Header />
    <Row>
      <Description/>
      <ProductView />
    </Row>
    
  </>
  );
}

export default App;
