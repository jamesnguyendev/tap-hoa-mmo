"use client";

import { Badge } from "@/components/ui/badge";
import { label2, label3 } from "@/lib/contants";
import React, { useState } from "react";

const combined = [...label2, ...label3];

const CategoryTag = () => {
  const [active, setActive] = useState<number | null>(null);
  return (
    <div className="flex flex-wrap gap-y-2 mt-2.5">
      {combined.map((item, index) => (
        <Badge
          className={`border  ${
            active === index
              ? "border-first text-gradient"
              : "text-gray-700 border-gray-200 hover:border-gray-300"
          }  hover:duration-100 hover:transition cursor-pointer px-4 py-1 ms-2 text-sm`}
          key={index}
          onClick={() => setActive(index)}
        >
          {item.name}
        </Badge>
      ))}
    </div>
  );
};

export default CategoryTag;
