"use client";

import { client } from "@/app/client"
import { useState } from "react";
import { ConnectButton, MediaRenderer, useActiveAccount, useReadContract } from "thirdweb/react"
import { NFTCollection } from "./NFTCollections";
import { getNFTs } from "thirdweb/extensions/erc721";
import { contract } from "../utils/contracts";

export const AIGenerator= () => {
    const account = useActiveAccount();

    const [imagePrompt, setImagePrompt] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [isMinting, setisMinting] = useState(false);

    const { data: nfts, refetch } = useReadContract(
        getNFTs,
        {
            contract: contract
        }
    )

    if (account) {
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "20px",
              }}>
                <ConnectButton
                    client={client}
                />
                <div style={{ margin: "20px 0"}}>
                    {generatedImage ? (
                        <MediaRenderer
                            client={client}
                            src={generatedImage}
                            style={{
                                width: "300px",
                                height: "300px",
                                borderRadius: "8px",
                            }}
                        />
                    ) : (
                        <div style={{
                            width: "300px",
                            height: "300px",
                            border: "1px dashed #777",
                            borderRadius: "10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <p style={{ color: "#777" }}>
                                {isGenerating ? "Generating..." : "Enter prompt to generate an image."}
                            </p>
                        </div>
                    )}
                </div>
                <div>
                    <form>
                        {!generatedImage || isMinting ? (
                            <div style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}>
                                <input
                                    type="text"
                                    placeholder="Enter a prompt"
                                    value={imagePrompt}
                                    onChange={(e) => setImagePrompt(e.target.value)}
                                    style={{
                                        width: "300px",
                                        height: "40px",
                                        padding: "0 10px",
                                        borderRadius: "5px",
                                        border: "1px solid #777",
                                        marginBottom: "10px",
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={isGenerating || isMinting || !imagePrompt}
                                    style={{
                                        width: "300px",
                                        height: "40px",
                                        backgroundColor: "#333",
                                        color: "#fff",
                                        borderRadius: "5px",
                                        border: "none",
                                        cursor: "pointer"
                                    }}
                                >
                                    {
                                        isGenerating ? "Generating..."
                                        : isMinting ? "Minting..."
                                        : "Generate and Mint NFT"
                                    }
                                </button>

                            </div>
                        ) : (
                            <button
                                onClick={() => setGeneratedImage("")}
                                style={{
                                    width: "300px",
                                    height: "40px",
                                    backgroundColor: "#333",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    border: "none",
                                    cursor: "pointer"
                                }}
                            >
                                Generate Another NFT
                            </button>
                        )}
                    </form>
                </div>
                <NFTCollection
                    nfts={nfts!}
                />
            </div>
        );
    }
};