import { NextRequest, NextResponse } from "next/server";
import { nftCollectionContractAddress } from "../../../../utils/contract";

const {
    ENGINE_URL,
    THIRDWEB_SECRET_KEY,
    BACKEND_WALLET_ADDRESS,
    CHAIN_ID,
} = process.env;

export async function POST(req:NextRequest) {
    if(!ENGINE_URL || !THIRDWEB_SECRET_KEY || ! BACKEND_WALLET_ADDRESS || !CHAIN_ID) {
        console.log("Missing environment variables:", {
            ENGINE_URL,
            THIRDWEB_SECRET_KEY,
            BACKEND_WALLET_ADDRESS,
            CHAIN_ID,
        });    
        return {
            status: 500,
            body: "Internal Server Error",
        };
    }

    const{ nftImage, address } = await req.json(); 
    console.log("Received data:", { nftImage, address });

    try {
        const res = await fetch(
            `${ENGINE_URL}/contract/${CHAIN_ID}/${nftCollectionContractAddress}/erc721/mint-to`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${THIRDWEB_SECRET_KEY}`,
                    "x-backend-wallet-address": BACKEND_WALLET_ADDRESS,
                },
                body: JSON.stringify({
                    receiver: address,
                    metadata:{
                        name: "AI NFT",
                        description: "AI generated NFT",
                        image: nftImage,
                    }
                }),
            }
        );

        const status = res.status;
        const bodyText = await res.text();
        console.log("🔁 Engine response:", { status, bodyText });
    
        if (!res.ok) {
            return new NextResponse(
                JSON.stringify({ error: `Engine error: ${status} – ${bodyText}` }),
                { status }
            );
        }

        return new NextResponse(JSON.stringify({ message: "NFT was minted successfully" }));
    } catch (error) {
        console.error("Minting error", error);
        return new NextResponse(
            JSON.stringify({ error: "Failed to mint NFT" }),
            { status: 500 }
        );
    }
}
