import {
  createContext,
  useState,
  FunctionComponent,
  ReactNode,
  useEffect,
  Dispatch,
} from "react";

interface UserNameContextProps {
  children?: ReactNode;
}

interface UserNameContextValue {
  name: string;
  setName: React.Dispatch<string>;
}

interface MemeContextValue {
  meme: string;
  setMeme: React.Dispatch<string>;
}

interface ThemeContextValue {
  theme: string;
  setTheme: React.Dispatch<string>;
}

interface ColorContextValue {
  color: string;
  setColor: React.Dispatch<string>;
}

interface LayoutContextValue {
  layout: string;
  setLayout: React.Dispatch<string>;
}

interface SlideContextValue {
  slide: number;
  setSlide: React.Dispatch<number>;
}

interface LoginContextValue {
  login: string;
  logdin: boolean | undefined;
  setLogin: React.Dispatch<string>;
  setLogdin: React.Dispatch<boolean | undefined>;
}

const LOCAL_STORAGE_THEME_KEY = "appTheme";
const LOCAL_STORAGE_COLOR_KEY = "appColor";
const LOCAL_STORAGE_LAYOUT_KEY = "appLayout";

export const userNameContext = createContext<UserNameContextValue>({
  name: "",
  setName: () => {},
});

export const memeContext = createContext<MemeContextValue>({
  meme: "",
  setMeme: () => {},
});

export const themeContext = createContext<ThemeContextValue>({
  theme: "",
  setTheme: () => {},
});

export const colorContext = createContext<ColorContextValue>({
  color: "",
  setColor: () => {},
});

export const layoutContext = createContext<LayoutContextValue>({
  layout: "",
  setLayout: () => {},
});

export const slideContext = createContext<SlideContextValue>({
  slide: 0,
  setSlide: () => {},
});

export const LoginContext = createContext<LoginContextValue>({
  login: "",
  logdin: undefined,
  setLogin: () => {},
  setLogdin: () => {},
});

const UserContext: FunctionComponent<UserNameContextProps> = ({ children }) => {
  const [NameValue, setName] = useState<string>("");
  const [MemeValue, setMeme] = useState<string>("");
  const [logdin, setLogdin] = useState<boolean | undefined>();
  const [setLogin] = useState<Dispatch<string>>(() => () => {});
  const [SlideValue, setSlide] = useState<number>(600);
  const [ThemeValue, setThemeState] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_THEME_KEY) ?? "dark"
  );
  const [ColorValue, setColorState] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_COLOR_KEY) ?? "warning"
  );
  const [LayoutValue, setLayoutState] = useState<string>(
    localStorage.getItem(LOCAL_STORAGE_LAYOUT_KEY) ?? "list"
  );

  const setTheme = (theme: string) => {
    setThemeState(theme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
  };

  const setColor = (color: string) => {
    setColorState(color);
    localStorage.setItem(LOCAL_STORAGE_COLOR_KEY, color);
  };

  const setLayout = (layout: string) => {
    setLayoutState(layout);
    localStorage.setItem(LOCAL_STORAGE_LAYOUT_KEY, layout);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY);
    const storedColor = localStorage.getItem(LOCAL_STORAGE_COLOR_KEY);
    const storedLayout = localStorage.getItem(LOCAL_STORAGE_LAYOUT_KEY);

    if (storedTheme) setThemeState(storedTheme);
    if (storedColor) setColorState(storedColor);
    if (storedLayout) setLayoutState(storedLayout);
  }, []);

  return (
    <userNameContext.Provider value={{ name: NameValue, setName }}>
      <memeContext.Provider value={{ meme: MemeValue, setMeme }}>
        <themeContext.Provider value={{ theme: ThemeValue, setTheme }}>
          <colorContext.Provider value={{ color: ColorValue, setColor }}>
            <layoutContext.Provider value={{ layout: LayoutValue, setLayout }}>
              <slideContext.Provider value={{ slide: SlideValue, setSlide }}>
                <LoginContext.Provider
                  value={{
                    login: logdin ? "Logout" : "Login",
                    setLogin,
                    logdin,
                    setLogdin,
                  }}
                >
                  {children}
                </LoginContext.Provider>
              </slideContext.Provider>
            </layoutContext.Provider>
          </colorContext.Provider>
        </themeContext.Provider>
      </memeContext.Provider>
    </userNameContext.Provider>
  );
};

export default UserContext;
