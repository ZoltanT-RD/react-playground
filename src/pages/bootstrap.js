import React from 'react';
import logo from '../assets/logo.svg';
import css from './bootstrap.scss';

import Carausel from '../components/caraousel3';


function BootstrapPage() {


    const elements = [
        <img src={"https://placebear.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/g/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/200/300"} className="kitten" alt="kittens" />,
        <img src={"https://placebear.com/g/200/300"} className="kitten" alt="kittens" />
    ];

    const cardArray=[
        <div className="card" style={{ width: "18rem", color: "black" }}>
            <img src="https://placekitten.com/200/300" className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>,
        <div className="card" style={{ width: "18rem", color: "black" }}>
            <img src="https://placekitten.com/g/200/300" className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>,
        <div className="card" style={{ width: "18rem", color: "black" }}>
            <img src="https://placekitten.com/200/300" className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>,
        <div className="card" style={{ width: "18rem", color: "black" }}>
            <img src="https://placekitten.com/g/200/300" className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>,
        <div className="card" style={{ width: "18rem", color: "black" }}>
            <img src="https://placekitten.com/200/300" className="card-img-top" alt="image" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text" style={{ fontSize: "14px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>

    ];

    return (
        <div>
            <div className="container bootstrap">
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="#">Sticky top</a>
                </nav>

                <div className="row">
                    <div className="bootstrap-header col-md-10 offset-md-1 col-sm-12">
                        <img src={"https://placekitten.com/200/300"} className="kitten" alt="kittens" />
                        <h1>Zoltan's awesome react & bootstrap playground</h1>
                        <hr />

                        <p>the built in BS carausel is rubbish... use this; https://kenwheeler.github.io/slick/ | https://www.npmjs.com/package/slick-carousel</p>


                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>

                        <div className="progress">
                            <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h3>these are BS buttons, with overwritten colors</h3>
                        <button type="button" className="btn btn-primary">Primary</button>
                        <button type="button" className="btn btn-secondary">Secondary</button>
                        <button type="button" className="btn btn-success">Success</button>
                        <button type="button" className="btn btn-danger">Danger</button>
                        <button type="button" className="btn btn-warning">Warning</button>
                        <button type="button" className="btn btn-info">Info</button>
                        <button type="button" className="btn btn-light">Light</button>
                        <button type="button" className="btn btn-dark">Dark</button>

                        <h3>I'm a BS list</h3>
                        <ul className="list-group">
                            <li className="list-group-item active">Cras justo odio</li>
                            <li className="list-group-item">Dapibus ac facilisis in</li>
                            <li className="list-group-item">Morbi leo risus</li>
                            <li className="list-group-item">Porta ac consectetur ac</li>
                            <li className="list-group-item">Vestibulum at eros</li>
                        </ul>

                        <h3>this is an example BS Card</h3>
                        <div className="card" style={{width: "18rem", color: "black"}}>
                            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" className="card-img-top" alt="image" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text" style={{ fontSize: "14px"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>




                    </div>



                </div>

                <h2 style={{ textAlign: "center", marginTop: "40px" }}>Bear slider!</h2>
                <div className="slider">
                    <Carausel elements={elements} />
                </div>

                <h2 style={{ textAlign: "center", marginTop: "40px" }}>BS Card slider</h2>
                <div className="slider">
                    <Carausel elements={cardArray} />
                </div>

            </div>



        </div>


    );
}

export default BootstrapPage;
