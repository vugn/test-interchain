import {
  createAssetListFromEthereumChainInfo,
  createChainFromEthereumChainInfo,
} from "@/utils/eth-test-net";
import {
  chains as allChains,
  assetLists as allAssetLists,
} from "@chain-registry/v2";

import type { Chain, AssetList } from "@chain-registry/v2-types"; // ✅ ketatkan tipe v2

const chainNames = [
  "osmosistestnet",
  "juno",
  "stargaze",
  // 'ethereum'
];

export const SEPOLIA_TESTNET = {
  chainId: "11155111", // 11155111(0xaa36a7)
  chainName: "Sepolia",
  rpcUrls: ["https://1rpc.io/sepolia"],
  nativeCurrency: {
    name: "Sepolia ETH",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.etherscan.io"],
};
const sepoliaChain = createChainFromEthereumChainInfo(SEPOLIA_TESTNET);
const sepoliaAssetList = createAssetListFromEthereumChainInfo(SEPOLIA_TESTNET);

const bitoraChain: Chain = {
  $schema: "../chain.schema.json",
  chainName: "bitora",
  status: "live", // agar wallet mau load meski ini devnet
  networkType: "devnet",
  website: "https://bitoraprotocol.com",
  prettyName: "Bitora Protocol",
  chainType: "cosmos",
  chainId: "bitora-1",
  bech32Prefix: "bto",
  daemonName: "bitorad",
  nodeHome: ".bitora",
  keyAlgos: ["secp256k1"],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: "ubto",
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03,
      },
    ],
  },
  staking: {
    stakingTokens: [{ denom: "ubto" }],
  },
  codebase: {
    gitRepo: "https://github.com/BITORAprotocol/bitora-blockchain.git",
    recommendedVersion: "v1.0.0",
    compatibleVersions: ["v1.0.0"],
    cosmwasmEnabled: true,
    genesis: { genesisUrl: "" },
  },
  apis: {
    rpc: [
      {
        address: "http://103.249.236.119:26657",
        provider: "103.249.236.119",
      },
    ],
    rest: [
      {
        address: "http://103.249.236.119:1317",
        provider: "103.249.236.119",
      },
    ],
    grpc: [
      {
        address: "103.249.236.119:9090",
        provider: "103.249.236.119",
      },
    ],
  },
  explorers: [],
  peers: { seeds: [], persistentPeers: [] },
  description: "Bitora devnet for retail PoS fixed-fee experiments.",
};

const bitoraAssetList: AssetList = {
  $schema: "../assetlist.schema.json",
  chainName: "bitora",
  assets: [
    {
      description: "The native token of the Bitora chain",
      denomUnits: [
        { denom: "ubto", exponent: 0 },
        { denom: "bto", exponent: 6 },
      ],
      typeAsset: "sdk.coin",
      base: "ubto",
      name: "Bitora",
      display: "bto",
      symbol: "BTO",
      logoURIs: {
        png: "https://bitoraprotocol.com/logo/vectorlogo.svg",
        svg: "https://bitoraprotocol.com/logo/vectorlogo.svg",
      },
      keywords: ["payments", "pos"],
      socials: { website: "https://bitoraprotocol.com" },
    },
  ],
};

let chains = chainNames.map(
  (chainName) => allChains.find((chain) => chain.chainName === chainName)!
);

let assetLists = chainNames.map(
  (chainName) =>
    allAssetLists.find((assetList) => assetList.chainName === chainName)!
);

chains = [bitoraChain];
assetLists = [bitoraAssetList];

console.log("chains", chains);
console.log("assetLists", assetLists);
export { chains, assetLists };
