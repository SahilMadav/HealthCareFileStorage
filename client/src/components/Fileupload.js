import "./Home.css";
import { useState } from "react";
import axios from "axios";
import './fileupload.css';
const JWT = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI2MzAwZWMyZC1kMzIzLTQ5ZjAtOTUwMC01NzExZTZhZjIwMjciLCJlbWFpbCI6InNpY2FubzE3MTJAbXVzdGJlaXQuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImUyZDUwMDE5MjI3NWEyNmJmYjU0Iiwic2NvcGVkS2V5U2VjcmV0IjoiNjExNzFmMWU1YTVjYmExNzk3YTg1MDQ0YmVjYzhmYWZiYjllYzJmYTgxMDdhMDQ2Y2Y0YTAwM2VhYTQ2YWE1NCIsImlhdCI6MTY3NzA3MjE0NH0.CDbGgBcvklPLt44HycC9e0gbB6hHAtwVzDUG1Ip6Vx4'

// /** import zeeve zdfs sdk */
// import { PSAV1Api, DataV1Api } from 'zeeve-zdfs-sdk';
// /** create instance of pinning service api version 1 */
// const psaApi = new PSAV1Api(YOUR_ENDPOINT, YOUR_ACCESS_TOKEN);
// /** create instance of data api version 1 */
// const dataApi = new DataV1Api(YOUR_ENDPOINT, YOUR_ACCESS_TOKEN);

// dataApi.uploadFile(path, name, headers)

const Fileupload = ({ contract, account, provider }) => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");
  console.log("hello");
  const handleSubmit = async (e) => {
    console.log("he");
    console.log(file);
    e.preventDefault();
    // dataApi.uploadFile(path, name, headers);   /// API
    if (file) {
      try {

        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
          maxBodyLength: "Infinity",
          headers: {
            'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            Authorization: JWT
          }
        });

        console.log(resFile.data.IpfsHash);
        const ImgHash = `ipfs://${resFile.data.IpfsHash}`;
        console.log(ImgHash);
        //const signer = contract.connect(provider.getSigner());
        const signer = contract.connect(provider.getSigner());
        signer.add(account, ImgHash);
        alert("Successfully file Uploaded");
      } catch (e) {
        alert("Unable to upload file to Pinata", e);
      }
    }

    setFileName("No file selected");
    setFile(null);
  };
  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="File">
      <form className="upload" onSubmit={handleSubmit}>
        <center className="upload-file">Upload Image</center>
        <input
          // disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          accept="image/*,.pdf"
          onChange={retrieveFile}

        ></input>

        <br></br>
        <button type="submit" className="upload-btn" disabled={!file} >Upload</button>
      </form>
    </div>
  );
}
export default Fileupload;
