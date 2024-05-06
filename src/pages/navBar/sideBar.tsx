import { FunctionComponent, CSSProperties, useContext } from "react";
import "./sideBar.css";
import {
  FcFaq,
  FcVlc,
  FcApproval,
  FcGallery,
  FcNightPortrait,
  FcAssistant,
  FcConferenceCall,
  FcHome,
  FcManager,
  FcGlobe,
} from "react-icons/fc";
import { memeContext } from "../../context";

const Style: CSSProperties = {
  position: "fixed",
  height: "100%",
  backgroundColor: "black",
  zIndex: 1,
  left: "0",
  color: "white",
  width: "15rem",
  transition: "width 0.3s",
};

const ButtonContainerStyle: CSSProperties = {
  padding: "2rem",
  display: "flex",
  alignItems: "center",
};

const ButtonLinks = [
  { icon: <FcHome />, label: "General" },
  { icon: <FcGallery />, label: "meme" },
  { icon: <FcManager />, label: "me_irl" },
  { icon: <FcVlc />, label: "gifs" },
  { icon: <FcGlobe />, label: "PrequelMemes" },
  { icon: <FcAssistant />, label: "AdviceAnimals" },
  { icon: <FcApproval />, label: "wholesomememes" },
  { icon: <FcConferenceCall />, label: "TrollXChromosomes" },
  { icon: <FcFaq />, label: "BlackPeopleTwitter" },
  { icon: <FcNightPortrait />, label: "dankmemes" },
];

const SideBar: FunctionComponent = () => {
  const { setMeme } = useContext(memeContext);

  const handleButtonClick = (label: string) => {
    if (label === "General") {
      setMeme("");
      return;
    }
    setMeme(label);
  };

  return (
    <p className="container" style={{ ...Style }}>
      {ButtonLinks.map((button) => (
        <a key={button.label} style={ButtonContainerStyle}>
          {button.icon}
          <button
            style={{
              marginLeft: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleButtonClick(button.label)}
          >
            {button.label}
          </button>
        </a>
      ))}
    </p>
  );
};

export default SideBar;
