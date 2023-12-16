import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  term: string;
}
const DefinitionItem = ({ children, term }: Props) => {
  return (
    <div>
      <dt className="mb-2 text-lg font-semibold text-primary/60">{term}</dt>
      <dd className="text-base font-thin text-primary">{children}</dd>
    </div>
  );
};

export default DefinitionItem;
