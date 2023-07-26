import Navbar from './Navbar';



function Heading(){
  return(
      <header className="row" id="myHeader">
        <div className="width-90 navbar">
          <div className="col-md-5 col-sm-5 navbar-logo">
          <a href="/"><img id="logo" src="/images/deiblue.png" alt="Logo" /></a>

          </div>
          <div className="col-md-7 col-sm-7">
            <Navbar />
          </div>
        </div>
      </header>
  );
}


export default Heading;
