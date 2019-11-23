import React from 'react'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import c1 from '../../image/restaurant-image.jpg'
import logo from '../../image/logo.png'
import p1 from '../../image/r1.jpg'
import p2 from '../../image/r2.jpg'
import p3 from '../../image/r3.jpg'
import p4 from '../../image/r4.jpg'
import p5 from '../../image/r5.jpg'
import p6 from '../../image/r6.jpg'
import '../../App.css'

const Navbar = (props) => {
    return (
        <div>
            <div className="container-fluid p-0" style={{ background: "#222222" }}>
                <div className="container p-2"
                    style={{
                        cursor: "pointer", color: '#C5C5C5',
                    }}>
                    <div className="row" style={{ borderBottom: `1px solid #777474` }}>
                        <div className="px-2 pt-2 pb-0">64 Sabal Street,Mandalay</div>
                        <div style={{ flex: 1 }} />
                        <div className="px-2 pt-2 pb-0"> <i className="fa fa-facebook-f" /></div>
                        <div className="px-2 pt-2 pb-0"><i className="fa fa-twitter"></i></div>
                        <div className="px-2 pt-2 pb-0"><i class="fa fa-instagram"></i></div>
                        <div className="px-2 pt-2 pb-0"><i class="fa fa-youtube"></i></div>
                    </div>
                    <div className="row navbar navbar-expand-sm ">
                        <div className="navbar-brand" href="#"><img src={logo} alt="resturant-image" style={{ height: "40px" }} /></div>
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
                            <span><i className="fa fa-bars" style={{ fontSize: "24px", color: "white" }}></i></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup"
                            style={{ cursor: "pointer", color: '#ffffff', fontSize: "15px" }}>
                            <div className="d-flex navbar-nav ml-auto py-2">
                                <div className="px-3 py-2">HOME </div>
                                <div className="px-3 py-2">ROOMS </div>
                                <div className="px-3 py-2">RESTAURANT</div>
                                <div className="px-3 py-2">PAGE </div>
                                <div className="px-3 py-2">GALLERIES </div>
                                <div className="px-3 py-2">BLOG </div>
                                <div className="px-3 py-2">CONTACT</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div> <img className="img-fluid " src={c1} alt="foodImage" /></div>
            </div>
            <div className="container pt-3">
                <div className="text-center" style={{ fontWeight: "30px" }}><h3> BREAKFAST </h3></div>
                <div className="text-center">9:00AM-11:00AM</div>
                <div className="d-flex pt-3">
                    <div className="">
                        <MenuComponent img={p1} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms. "
                            price="30" />
                    </div>
                    {/* <div className="">
                        <MenuComponent img={p2} foodName="ROAST &amp; VEGETABLES"
                            foodDesc=" Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms. "
                            price="30" />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

const MenuComponent = ({ img, foodName, foodDesc, price }) => (
    <div className="d-flex flex-row pt-3 ">
        <div className="hovereffect">
            <img className="img-fluid" src={img} />
        </div>
        <div className=" pl-3">
            <h5>{foodName}</h5>
            <p className="mb-0" style={{ fontStyle: "roboto" }}> {foodDesc}</p>
            <p style={{ fontSize: "28px", color: "#8E7037", fontWeight: "600" }}>$ <span>{price}</span></p>
        </div>
    </div>
)
export default Navbar