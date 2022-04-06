import CloseIcon from "@mui/icons-material/Close";
import { Section, CloseBtn } from "./backDropStyle";
const Backdrop = ({ call, closeBtn }) => {
  return (
    <Section call={call} onClick={closeBtn}>
      <CloseBtn>
        <CloseIcon />
      </CloseBtn>
    </Section>
  );
};
export default Backdrop;
