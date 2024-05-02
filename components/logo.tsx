import { PiggyBank } from "lucide-react";
import React from "react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <PiggyBank className="stroke hidden h-11 w-11 stroke-blue-500 stroke-[1.5] sm:flex" />
      <p className="bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-400 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        Budget Tracker
      </p>
    </a>
  );
}

export default Logo;
