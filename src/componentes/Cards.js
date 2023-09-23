import Card from 'react-bootstrap/Card';
import '../style-sheets/Cards.css';

function Cards({ img, title, des, btnTxt, href }) {
  return (
    <div className='col-md-4'>
    <Card>
      <Card.Img variant="top" src={require(`../media/${img}.jpg`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='card-description'>
          {des}
        </Card.Text>
        <a className='btn-link' href={href} target='_blank' rel='noopener noreferrer'>{btnTxt}</a>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;