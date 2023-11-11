import { Div } from "./Section.styled";
import { H2 } from "./Section.styled";
const Section = ({ title, children }) => {
  return (
    <Div title={title}>
      <H2>{title}</H2>
      {children}
    </Div>
  );
};

export default Section;