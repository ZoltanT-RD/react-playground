import React from 'react';


function ParallaxExamplePage() {



    return (
        <div>
            <div className="container bootstrap">
                <nav className="navbar sticky-top navbar-light bg-light">
                    <a className="navbar-brand" href="#">Sticky top</a>
                </nav>

                <div className="row">
                    <div className="bootstrap-header col-md-10 offset-md-1 col-sm-12">

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Library</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Data</li>
                        </ol>
                    </div>
                </div>



            </div>

        </div>
    );
}

export default ParallaxExamplePage;
