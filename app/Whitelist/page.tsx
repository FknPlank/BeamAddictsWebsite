import { title } from "@/components/primitives";
import { Smokum } from "next/font/google";

export default function WhitelistPage() {
  return (
    <>
      <div>
        <h1 className={title()}>Get Whitelisted Today!</h1>
      </div>
      <br />
  <div className="Box-Shadow">
    <h1>Whitelist Requirements:</h1>
    <ul className="">
      <li className="text-left">1). You must be 18+ years old (Certain situations we will waive this requirement).</li>
      <li className="text-left">2). Have some working knowledge of how a demolition derby works or at least be willing to follow directions.</li>
      <li className="text-left">3). Must have paid for RDP Patreon (Screenshot Required).</li>
      <li className="text-left">4). We ask that during events that you be in one of the voice channels for proper communication.</li>
      <li className="text-left">
        5). This server is personally funded and developed by me. I'm open to any suggestions. Please put them in <span>#suggestions</span>.
      </li>
    </ul>
</div>
    </>
  );
}