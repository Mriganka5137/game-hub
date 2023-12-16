import { useState } from "react";
import { Button } from "../ui/button";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 500;

  if (children.length > limit) {
    children = expanded ? children : children.substring(0, limit);
  }

  return (
    <p className="text-base leading-8 text-primary/70">
      {children}{" "}
      <Button
        className="bg-yellow-500 hover:bg-yellow-600"
        variant="secondary"
        size="sm"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show less" : "Show more"}
      </Button>{" "}
    </p>
  );
};

export default ExpandableText;
