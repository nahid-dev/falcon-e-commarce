import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Breadcrumb({ content }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {content.length &&
        content.map((el, i) => (
          <React.Fragment key={i}>
            <Link
              href={el.url}
              className="text-sm font-medium text-gray-500 hover:text-primary-600"
            >
              {el.title}
            </Link>
            {content.length - 1 !== i && (
              <div>
                <ChevronRightIcon className="w-4 h-4" />
              </div>
            )}
          </React.Fragment>
        ))}
    </div>
  );
}
