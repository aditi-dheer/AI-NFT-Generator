import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { bscTestnet } from "thirdweb/chains";

const nftCollectionContractAddress="0xAd817fD8Fb936DD1B4E6a8b4b483c1F38d7ddD29"

export const contract = getContract({
    client: client,
    chain: bscTestnet,
    address: nftCollectionContractAddress,
})