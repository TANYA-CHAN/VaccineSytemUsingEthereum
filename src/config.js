import web3 from "./web3";

export const address = "0xf8e81D47203A594245E36C48e151709F0C19fBe8";

export const abi = [
  {
    constant: false,
    inputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "Private Key",
        type: "string"
      },
      {
        name: "Email",
        type: "string"
      }
    ],
    name: "addcert",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "hosadd",
        type: "address"
      },
      {
        name: "name",
        type: "string"
      }
    ],
    name: "addHospital",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "id",
        type: "uint256"
      }
    ],
    name: "added",
    type: "event"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "certs",
    outputs: [
      {
        name: "name",
        type: "string"
      },
      {
        name: "Private Key",
        type: "string"
      },
      {
        name: "Email",
        type: "string"
      },
      {
        name: "sender",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "hos",
        type: "address"
      }
    ],
    name: "checkHosp",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "id",
        type: "uint256"
      }
    ],
    name: "getcert",
    outputs: [
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      },
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "getid",
    outputs: [
      {
        name: "id",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  }
];

export default new web3.eth.Contract(abi, address);
