import "./Home.css";

import Fileupload from "./Fileupload";
import image from '../images/girl.png'



function Home({ account, provider, contract }) {


  return (
    <div className="web-display">
      <div>
        <section className="Parent">
          <section className="child">
            <div className="Information">
              <p className="content-info">
                Hello, <span className="infoAcc" >{account}</span> <br></br>
                This is DeCentralized file storing , Where you can securely store your Data.
              </p>
              <div className="img-content-new">

            <div className="girl">
            <img src={image} alt=""></img>
            </div>
              </div>
            {/* <div className="footer">
              <p>lorem
              </p>
            </div> */}
            </div>
            {/* <Fileupload account={account}
              provider={provider}
            contract={contract}></Fileupload> */}
          </section>
        </section>
          
      </div>

    </div>
  );
}
export default Home;