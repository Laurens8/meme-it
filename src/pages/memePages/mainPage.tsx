import { FunctionComponent, useContext, useEffect } from "react";
import SideBar from "../navBar/sideBar";
import "./memepage.css";
import ControlPanel from "../controlPanel/controlPanel";
import CustomNavBar from "../navBar/customNavBar";
import Api from "../../API/memeAPI";
import { memeContext } from "../../context";
import { themeContext } from "../../context";
import { colorContext } from "../../context";
import { layoutContext } from "../../context";
import { slideContext } from "../../context";

const MainPage: FunctionComponent = () => {
  const { meme } = useContext(memeContext);
  const { theme, setTheme } = useContext(themeContext);
  const { color, setColor } = useContext(colorContext);
  const { layout, setLayout } = useContext(layoutContext);
  const { slide, setSlide } = useContext(slideContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [meme]);

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <CustomNavBar />
      <SideBar />
      <ControlPanel
        color={color}
        layout={layout}
        slide={slide}
        theme={theme}
        setColor={setColor}
        setLayout={setLayout}
        setSlide={setSlide}
        setTheme={setTheme}
      />
      <div className={`contentContainerStyle`}>
        <h1
          className={theme}
          style={{
            fontSize: "2rem",
            margin: "1rem",
            marginBottom: "5rem",
            marginTop: "5rem",
          }}
        >
          Popular Reddit memes
        </h1>
        <div className={layout === "list" ? "list-layout" : "card-container"}>
          <Api number={6} apiName={meme} color={color} slide={slide} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
