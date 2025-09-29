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

const CosvianChain: Chain = {
  $schema: "../chain.schema.json",
  chainName: "Cosvian",
  status: "live", // agar wallet mau load meski ini devnet
  networkType: "devnet",
  website: "https://cosvian.io",
  prettyName: "Cosvian Protocol",
  chainType: "cosmos",
  chainId: "cosvian-1",
  bech32Prefix: "csv",
  daemonName: "Cosviand",
  nodeHome: ".Cosvian",
  keyAlgos: ["secp256k1"],
  slip44: 118,
  fees: {
    feeTokens: [
      {
        denom: "ucsv",
        fixedMinGasPrice: 0.025,
        lowGasPrice: 0.01,
        averageGasPrice: 0.025,
        highGasPrice: 0.03,
      },
    ],
  },
  staking: {
    stakingTokens: [{ denom: "ucsv" }],
  },
  codebase: {
    gitRepo: "https://github.com/cosvian-labs/cosvian.git",
    recommendedVersion: "v1.0.0",
    compatibleVersions: ["v1.0.0"],
    cosmwasmEnabled: true,
    genesis: { genesisUrl: "" },
  },
  apis: {
    rpc: [
      {
        address: "https://rpc.cosvian.io",
        provider: "cosvian",
      },
    ],
    rest: [
      {
        address: "https://api.cosvian.io",
        provider: "cosvian",
      },
    ],
    grpc: [
      {
        address: "https://grpc.cosvian.io",
        provider: "cosvian",
      },
    ],
  },
  explorers: [],
  peers: { seeds: [], persistentPeers: [] },
  description: "Cosvian devnet for retail PoS fixed-fee experiments.",
};

const CosvianAssetList: AssetList = {
  $schema: "../assetlist.schema.json",
  chainName: "Cosvian",
  assets: [
    {
      description: "The native token of the Cosvian chain",
      denomUnits: [
        { denom: "ucsv", exponent: 0 },
        { denom: "csv", exponent: 6 },
      ],
      typeAsset: "sdk.coin",
      base: "ucsv",
      name: "Cosvian",
      display: "csv",
      symbol: "CSV",
      logoURIs: {
        png: "https://i.postimg.cc/Kk7f2fQ9/logo-png.png",
        svg: "https://i.postimg.cc/Kk7f2fQ9/logo-png.png",
      },
      keywords: ["payments", "pos"],
      socials: { website: "https://cosvian.io" },
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

chains = [CosvianChain];
assetLists = [CosvianAssetList];

console.log("chains", chains);
console.log("assetLists", assetLists);
export { chains, assetLists };
