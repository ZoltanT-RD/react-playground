import React from 'react';

import './parallax.scss';


function ParallaxExamplePage() {

    /*
        this is a plan CSS trick, no extra bit required...
        https://www.youtube.com/watch?v=d34GsFz-HkY&ab_channel=iEatWebsites
    */



    return (
        <div>
            <div className="container bootstrap mt-4">


                <div className="jumbotron parallax">
                    <h1 className="display-4">Yar Pirate Ipsum</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4"/>
                    <p>
                    Brigantine booty gun Letter of Marque no prey, no pay six pounders keelhaul carouser heave to swab. Fathom list aft Sink me bounty crimp hang the jib lanyard Blimey lass. Handsomely rigging Letter of Marque belaying pin Nelsons folly lateen sail swab smartly Chain Shot gally.<br/>
                    Galleon long clothes plunder tack Shiver me timbers measured fer yer chains starboard reef sails Buccaneer lanyard. Shrouds careen American Main black spot topgallant hearties Sea Legs line jack tack. Landlubber or just lubber crow's nest square-rigged bilge Jack Ketch coffer pink black spot sutler lateen sail.<br/>
Hands no prey, no pay piracy brigantine maroon nipper pink belaying pin landlubber or just lubber boatswain. Marooned bowsprit Buccaneer clap of thunder Barbary Coast piracy scourge of the seven seas Arr Pirate Round square-rigged. Black jack Jolly Roger crow's nest holystone spike Admiral of the Black blow the man down Spanish Main gally Jack Tar.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </div>

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
