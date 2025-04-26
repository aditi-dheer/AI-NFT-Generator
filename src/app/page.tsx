import { ConnectEmbed } from "thirdweb/react";
import { client } from "@/app/client"
import { AIGenerator } from "../../components/AIGenerator";


export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    }}>
      <h1>AI NFT Generator</h1>
      <ConnectEmbed
        client={client}
      />
      <AIGenerator />
    </div>
  );
}
