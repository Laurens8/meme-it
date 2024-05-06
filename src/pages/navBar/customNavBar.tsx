import {
  FunctionComponent,
  useState,
  CSSProperties,
  useContext,
  useEffect,
} from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.js";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../../context";
import { memeContext } from "../../context";
import { themeContext } from "../../context";
import { colorContext } from "../../context";
import "./navButtons.css";

const style: CSSProperties = {
  backgroundColor: "black",
};

const CustomNavBar: FunctionComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { login, setLogdin } = useContext(LoginContext);
  const { setMeme } = useContext(memeContext);
  const { theme, setTheme } = useContext(themeContext);
  const { setColor } = useContext(colorContext);

  useEffect(() => {}, [login]);

  const menuItems = [
    <div>  
      <div style={{ marginTop: "15px", marginBottom: "5px" }}>
        <NavLink to="/MainPage">Meme page</NavLink>
      </div>
      <div style={{ marginTop: "15px", marginBottom: "5px" }}>
        <NavLink to="/Privacy">Privacy</NavLink>
      </div>
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button
          variant="light"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? "Dark Theme" : "Light Theme"}
        </Button>
      </div>

      <div style={{ marginTop: "15px", marginBottom: "10px" }}>Memes</div>
      <div className="Flex">
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("")}>General</Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("meme")}>Meme</Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("me_irl")}>me_irl</Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("gifs")}>gifs</Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("PrequelMemes")}>PrequelMemes</Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("AdviceAnimals")}>
            AdviceAnimals
          </Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("wholesomememes")}>
            wholesomememes
          </Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("TrollXChromosomes")}>
            TrollXChromosomes
          </Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("BlackPeopleTwitter")}>
            BlackPeopleTwitter
          </Button>
        </div>
        <div style={{ marginTop: "5px", marginBottom: "5px" }}>
          <Button onClick={() => setMeme("dankmemes")}>dankmemes</Button>
        </div>
      </div>

      <div style={{ marginTop: "20px", marginBottom: "20px" }}>Card Color</div>
      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
        <Button onClick={() => setColor("warning")}>Yellow</Button>
      </div>
      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
        <Button onClick={() => setColor("secondary")}>Purple</Button>
      </div>
      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
        <Button onClick={() => setColor("primary")}>blue</Button>
      </div>
      <div style={{ marginTop: "5px", marginBottom: "5px" }}>
        <Button onClick={() => setColor("success")}>Green</Button>
      </div>
      <div style={{ marginTop: "5px", marginBottom: "15px" }}>
        <Button onClick={() => setColor("danger")}>Red</Button>
      </div>
    </div>,
  ];

  return (
    <Navbar
      style={style}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p style={{ fontSize: "30px" }} className="font-bold text-inherit">
            Meme-It
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p style={{ fontSize: "30px" }} className="font-bold text-inherit">
            Meme-It
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-black">
          <NavLink
            to="/MainPage"
            onClick={() => {
              setLogdin(true);
            }}
          >
            Meme page
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-black">
          <NavLink
            to="/Privacy"
            onClick={() => {
              setLogdin(true);
            }}
          >
            Privacy
          </NavLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
   
    </Navbar>
  );
};

export default CustomNavBar;
