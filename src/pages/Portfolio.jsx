import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfoliodata, imgData } from '../data/portfolio'
import { Modal } from 'react-bootstrap'


const Portfolio = () => {
  const [show, setShow] = useState(false);
  const [myImg, setMyImg] = useState(1);
  const [myData, setMyData] = useState(imgData);
  const [clickStyle1, setClickStyle1] = useState(false);
  const [clickStyle2, setClickStyle2] = useState(false);
  const [clickStyle3, setClickStyle3] = useState(false);
  const [clickStyle4, setClickStyle4] = useState(false);

  const handleClose = () => {
      setShow(false);
  }
  const handleShow = (image) => {
      setMyImg(image);
      setShow(true);
  }
  const handleCategory = (cate, num) => {
      setClickStyle1(false);
      setClickStyle2(false);
      setClickStyle3(false);
      setClickStyle4(false);

      switch(num) {
         case 1:
            setClickStyle1(true);
            break;
         case 2:
            setClickStyle2(true);
            break;
         case 3:
            setClickStyle3(true);
            break;                     
         case 4:
            setClickStyle4(true);
            break;                                    
      }

      const newMydata = imgData.filter((item)=>{
         
         if(cate == 'all'){
            return imgData;
         }else{
            return item.category === cate;
         }
      });
      //console.dir(newMydata);
      setMyData(newMydata);
  }



  return (
    <HelmetProvider>
    <div className="container p-5">
      <Helmet>
         <meta charSet="UTF-8" />
         <title>{portfoliodata.title}</title>
         <meta name="description" content={portfoliodata.description} />
      </Helmet>
      <div className="d-flex justify-content-between">
          <h1 className="mt-5 mb-5 bt-line border-bottom">My Project</h1>
          <div className="btn-box mb-5 mt-5">
             <button type="button" 
                     className="btn btn-warning"
                     style={{ backgroundColor: clickStyle1 ? "#ba8c04":"#ffc107"}}
                     onClick={()=>handleCategory('all', 1)}
              >
                All
             </button>
             <button type="button" 
                     className="btn btn-warning ms-4"
                     style={{ backgroundColor: clickStyle2 ? "#ba8c04":"#ffc107"}}
                     onClick={()=>handleCategory('web', 2)} 
             >
                Web
             </button>
             <button type="button" 
                     className="btn btn-warning ms-4"
                     style={{ backgroundColor: clickStyle3 ? "#ba8c04":"#ffc107"}}
                     onClick={()=>handleCategory('app', 3)}>
                App
             </button>
             <button type="button" 
                     className="btn btn-warning ms-4"
                     style={{ backgroundColor: clickStyle4 ? "#ba8c04":"#ffc107"}}
                     onClick={()=>handleCategory('mobile', 4)}>
                Mobile
             </button>
          </div>
      </div>
      <div className="row portfolio_box">
      {
         myData.map((item, index)=>(
                <div key={index} className="col-6 col-lg-3 portfolio_items">
                   <img src={`https://picsum.photos/id/${item.img}/400/300`} 
                        className="img-fluid img-thumbnail mb-5" 
                        onClick={()=> handleShow(item.img)} />
                  <div className='content'>
                     <p>GAME</p>
                     <Link to="/game" >View Project</Link>
                  </div>
                </div>   
               )
         )
      } 
      </div>
      <Modal 
         show={show} onHide={handleClose}
         size="lg"
         aria-labelledby="example-modal-sizes-title-lg"
         centered
      >
        <Modal.Header closeButton>
           <Modal.Title id="example-modal-sizes-title-lg" className="modal-title">
               <h4>GAME</h4>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <h4>웹브라우저 구현</h4>
            <img src={`https://picsum.photos/id/${myImg}/300/250`} className="img-fluid"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima facilis</p>
        </Modal.Body>
        <Modal.Footer>
            <p></p>
        </Modal.Footer>
      </Modal>
    </div>
    </HelmetProvider>
  )
}

export default Portfolio