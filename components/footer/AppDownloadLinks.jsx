import React from "react";
import { Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const AppDownloadLinks = () => {
  return (
    <div>
      <h3 className="text-lg mb-4 text-slate-400">DOWNLOAD APP</h3>
      <div className="flex flex-col gap-5">
        <Link href="#">
          <Image src="/Google.png" alt="google image" width={180} height={55} />
        </Link>

        <Link href="#">
          <Image src="/apple.png" alt="Apple image" width={180} height={55} />
        </Link>
      </div>
    </div>
  );
};
