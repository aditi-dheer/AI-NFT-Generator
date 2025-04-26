"use client";

import { client } from "@/app/client"
import { useState } from "react";
import { ConnectButton, MediaRenderer, useActiveAccount } from "thirdweb/react"

export const AIGenerator= () => {
    const account = useActiveAccount();

    const [imagePrompt, setImagePrompt] = useState("");
    const [generatedImage, setGeneratedImage] = useState("");
    const [isGenerating, setIsGenerating] = useState("");
    const [isMinting, setisMinting] = useState(false);

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
            </div>
        );
    }
};