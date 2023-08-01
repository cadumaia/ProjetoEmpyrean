import NavbarComp from "./Components/NavbarComp";
import Footer from "./Components/Footer";
import './Produto14.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Produto14() {
    return (
        <>
        <NavbarComp />
        <div className="detalheproduto">
        <img src="wheynitro.jpg" class="imagem-produto"/> 
        <div className="text" >  
  <h2>NITRO TECH 100%</h2>
  <br></br>
</div>
<div class="text-end">
          <h2> R$294,53</h2>
          <h6>6x de R$49,10 sem juros</h6>
</div>
</div>

  <br></br>

  <Button className="botaozinh" href='/Carrinho' variant="primary">Comprar</Button>

  <div className="espacocep">
      <label htmlFor="cep">Consulte o prazo de entrega do seu pedido: </label>
      <input
        type="text"
        id="cep"
        name="cep"
        placeholder="Digite o CEP"
      />
      <button type="button">
        Buscar
      </button>
    </div>
<br></br>
<br></br>
<br></br>
<h2 className='promoções'>PRODUTOS SIMILARES</h2>

    <div className="container">
    <div className='row col-md-12'>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheydoce.png" />
      <Card.Body>
        <Card.Title>BEST WHEY</Card.Title>
        <Card.Text>
        É um Whey Protein hidrolisado, concentrado e isolado. Possui 25g de proteína  de alto valor biológico.
        </Card.Text>
        <h3>R$194,58</h3>
        <Button href='/Produto12' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheygold.png" />
      <Card.Body>
        <Card.Title>100% WHEY PROTEIN</Card.Title>
        <Card.Text>
        É um dos melhores suplementos proteicos mais vendidos no mundo. É uma Whey Protein isolada...
        </Card.Text>
        <h3>R$344,45</h3>
        <Button href='/Produto13' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="wheypure.png" />
      <Card.Body>
        <Card.Title>100% PURE WHEY</Card.Title>
        <Card.Text>
        É um suplemento proteico composto pela Proteína Concentrada do Soro de Leite (Whey Protein Concentrate).
        </Card.Text>
        <h3>R$175,41</h3>
        <Button href='/Produto15' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
    <Card className="m-3"style={{ width: '18rem' }}>
      <Card.Img variant="top" src="antioxi.png" />
      <Card.Body>
        <Card.Title>MELATO LABZ</Card.Title>
        <Card.Text>
        Suplemento que é um poderoso antioxidante, atua contra os radicais livres e realiza a regulagem do sono. 
        </Card.Text>
        <h3>R$88,94</h3>
        <Button href='/Produto16' variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
 </div>
 </div>
           <Footer />
         </>
  )}

export default Produto14;