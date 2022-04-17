import CloseIcon from "@mui/icons-material/Close";
import { Section, CloseBtn } from "./backDropStyle";
const Backdrop = ({ call, closeBtn, callBy }) => {
  return (
    <Section call={call} onClick={closeBtn}>
      {!callBy && (
        <CloseBtn>
          <CloseIcon />
        </CloseBtn>
      )}
    </Section>
  );
};
export default Backdrop;
//Harsh
