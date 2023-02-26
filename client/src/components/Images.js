// import { useEffect, useState } from 'react'


// import './Images.css'

// function WSPGallery({ account, contract }) {
//   const [data, setData] = useState("");
//   const getdata = async () => {
//     let dataArray;
//     const Otheraddress = document.querySelector(".address").value;
//     // dataArray = await contract.display(account);
//     try {
//       if (Otheraddress) {
//         dataArray = await contract.display(Otheraddress);
//         console.log(dataArray);
//       } else {
//         dataArray = await contract.display(account);
//       }
//     } catch (e) {
//       alert("You don't have access");
//     }
//     const isEmpty = Object.keys(dataArray).length === 0;

//     if (!isEmpty) {
//       const str = dataArray.toString();
//       const str_array = str.split(",");
//       const images = str_array.map((item, i) => {
//         return (
//           <a href={item} key={i} target="_blank">
//             <img
//               key={i}
//               src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
//               alt="new"
//               className="image-list"
//             ></img>
//           </a>
//         );
//       });
//       setData(images);
//     } else {
//       alert("No image to display");
//     }
//   };
//   const [slideNumber, setSlideNumber] = useState(0)
//   const [openModal, setOpenModal] = useState(false)

//   const handleOpenModal = (index) => {
//     setSlideNumber(index)
//     setOpenModal(true)
//   }

//   // Close Modal
//   const handleCloseModal = () => {
//     setOpenModal(false)
//   }

//   // Previous Image
//   const prevSlide = () => {
//     slideNumber === 0
//       ? setSlideNumber(data.length - 1)
//       : setSlideNumber(slideNumber - 1)
//   }

//   // Next Image  
//   const nextSlide = () => {
//     slideNumber + 1 === data.length
//       ? setSlideNumber(0)
//       : setSlideNumber(slideNumber + 1)
//   }

//   return (


//     <div>

//       <input
//         type="text"
//         placeholder="Enter Address"
//         className="address"
//       ></input>
//       <br></br>
//       <button onClick={getdata} className="getdata">Get Data</button>
//       <div className="image-list">{data}</div>


//     </div >
//   )
// }

import "./Home.css";

import Fileupload from "./Fileupload";



function Home({ account, provider, contract }) {


  return (
    <div className="web-display">
      <div>
        <section className="Parent">
          <section className="child">
            <div className="Information">
              {/* <p className="content-info">
                Hello, <span className="infoAcc" >{account}</span> <br></br>
                This is DeCentralized file storing , Where you can securely store your Data.
              </p> */}
            </div>
            <Fileupload account={account}
              provider={provider}
              contract={contract}></Fileupload>
          </section>
          <div className="img">
          </div>
        </section>
      </div>
    </div>
  );
}
export default Home;




// export default WSPGallery

