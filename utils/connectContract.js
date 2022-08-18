import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
  //Note: Your contractAddress will start with 0x, delete everything between the quotes and paste your contract address.
  const contractAddress = "0x298ca57F4cb42d7BeCCCE7d93358297ed20C0064";
  const contractABI = abiJSON.abi;
  let rsvpContract;
  try {
    const { ethereum } = window;

    if (ethereum) {
      //checking for eth object in the window, see if they have wallet connected to Mumbai network
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      console.log("contractABI", contractABI);
      rsvpContract = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      ); // instantiating new connection to the contract
    } else {
      throw new Error('Please connect to the Polygon Mumbai network.')
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
  return rsvpContract;
}

export default connectContract;