import '../StyleSheets/Home.css'
import img1 from '../Images/n1.jpg'
import img2 from '../Images/n2.png'
import img3 from '../Images/n3.jpg'
import img4 from '../Images/n4.jpg'
import img5 from '../Images/n5.png'
import img6 from '../Images/n6.png'
import img7 from '../Images/n7.jpg'
import img8 from '../Images/n8.png'
import img9 from '../Images/n9.jpg'
import img10 from '../Images/n10.jpg'
import img11 from '../Images/n11.png'
import img12 from '../Images/n12.png'


function Home() {
      return (
            <div className='home'> 
                  <img src={img1} alt="" className="image" id="img1" />
                  <img src={img2} alt="" className="image" id="img2" />
                  <img src={img3} alt="" className="image" id="img3" />
                  <img src={img4} alt="" className="image" id="img4" />
                  <img src={img5} alt="" className="image" id="img5" />
                  <img src={img6} alt="" className="image" id="img6" />
                  <img src={img7} alt="" className="image" id="img7" />
                  <img src={img8} alt="" className="image" id="img8" />
                  <img src={img9} alt="" className="image" id="img9" />
                  <img src={img10} alt="" className="image" id="img10" />
                  <div className="latte">
                        <img src={img11} alt="" className="latte-img" />
                        <span className="delight">
                              <h2 className="delight-h2">LET US DELIGHT YOU.</h2>
                              <h4 className="delight-h4"><i>Delicious, handcrafted beverages and great-tasting food. The<br />secret to making life better.</i></h4>
                        </span>
                  </div>
                  <div className="opportunity-div">
                        <span className="opportunity">
                              <h2 className="opportunity-h2">OPPORTUNITY</h2>
                              <h4 className="opportunity-h4"><i>To be more than an employee, to be a partner..</i></h4>
                        </span>
                        <img src={img12} alt="" className="opportunity-img" />
                  </div>
            </div>

      )
}

export default Home
