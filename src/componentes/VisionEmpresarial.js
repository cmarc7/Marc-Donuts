import Card from 'react-bootstrap/Card';
import '../style-sheets/Cards.css';

const showDes = ()=> {
  let des = document.getElementById('hideText');
  let btnPlusInfo = document.getElementById('hideText_btn');
    des.classList.toggle('show');
    
    if(des.classList.contains('show')) {
      btnPlusInfo.innerHTML = '- INFO';
    } else {
      btnPlusInfo.innerHTML = '+ INFO';
    }
 }

 function VisionEmpresarial ({img, title, des, btnTxt}) {
  return (
    <div className='col-md-4'>
    <Card>
      <Card.Img variant="top" src={require(`../media/${img}.jpg`)} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='hide' id='hideText'>
          {des}
        </Card.Text>
        <button id='hideText_btn' onClick={showDes}>{btnTxt}</button>
      </Card.Body>
    </Card>
    </div>
  );
 }

 export default VisionEmpresarial;