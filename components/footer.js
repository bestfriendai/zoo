import Link from "next/link";
import Image from "next/image";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const linkStyles =
  "inline-block relative w-12 h-12 mx-2 opacity-30 hover:opacity-100 transition-all duration-200";
const imageStyles =
  "p-3 hover:p-1  transition-all duration-200  saturate-0 hover:saturate-100";

export default function Footer() {
  return (
    <footer className="mt-20 mb-10">
      <div className="flex justify-center">
        <p className="text-lg text-gray-700">
          Image Generator Web dApp by {" "}
          <Link
            className="underline"
            href="https://ShibariumAI.com"
          >
            ShibariumAI
          </Link>
          .
        </p>
      </div>

      <div className="flex justify-center mt-4">
        <Tooltip id="replicate-tooltip" />
        <Tooltip id="openai-tooltip" />
        <Tooltip id="vercel-tooltip" />
        <Tooltip id="supabase-tooltip" />
        <Tooltip id="github-tooltip" />

       
      </div>
    </footer>
  );
}
