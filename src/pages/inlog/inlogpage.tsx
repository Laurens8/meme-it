import React, {
  FunctionComponent,
  useState,
  CSSProperties,
  useContext,
} from "react";
import { Input, Button } from "@nextui-org/react";
import { EyeFilledIcon } from "./EyeFilledIcon";
import { EyeSlashFilledIcon } from "./EyeSlashFilledIcon";
import { userNameContext } from "../../context";
import { themeContext } from "../../context";
import { LoginContext } from "../../context";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const style: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const containerStyle: CSSProperties = {
  width: "100%",
  maxWidth: "400px",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
};

const formGroupStyle: CSSProperties = {
  marginBottom: "20px",
  color: "#BA9238",
};

const buttonStyle: CSSProperties = {
  width: "100%",
  marginTop: "10px",
};

const headingStyle: CSSProperties = {
  fontSize: "2.2rem",
  marginTop: "100%",
  marginBottom: "20%",
  color: "#BA9238",
};

const Login: FunctionComponent<LoginProps> = () => {
  const [valuepas, setValuepas] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { theme } = useContext(themeContext);
  const { setLogdin } = useContext(LoginContext);
  const navigate = useNavigate();
  const { name, setName } = useContext(userNameContext);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validateEmail = (value: string): boolean =>
    value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i) !== null;

  const isInvalid = React.useMemo(() => {
    if (name === "") return false;
    return validateEmail(name) ? false : true;
  }, [name]);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLogdin(true);
    navigate("/mainpage");
  };

  return (
    <div className={theme === "light" ? "light-mode" : "dark-mode"}>
      <div style={style}>
        <div style={containerStyle}>
          <p style={headingStyle}>Welcome to Meme-It</p>
          <form
            className={theme === "light" ? "light-mode" : "dark-mode"}
            onSubmit={submitForm}
          >
            <div style={formGroupStyle}>
              <Input
                value={name}
                type="email"
                label="Email"
                placeholder="Enter your email"
                variant="bordered"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "warning"}
                errorMessage={isInvalid && "Please enter a valid email"}
                onValueChange={setName}
              />
            </div>
            <div style={formGroupStyle}>
              <Input
                value={valuepas}
                label="Password"
                variant="bordered"
                placeholder="Enter your password"
                isInvalid={isInvalid}
                color={isInvalid ? "danger" : "warning"}
                errorMessage={isInvalid && "Please enter a valid password"}
                onValueChange={setValuepas}
                endContent={
                  <button
                    className="focus:outline-none"
                    type="button"
                    onClick={toggleVisibility}
                  >
                    {isVisible ? <EyeSlashFilledIcon /> : <EyeFilledIcon />}
                  </button>
                }
                type={isVisible ? "text" : "password"}
              />
            </div>
            <Button
              type="submit"
              color="warning"
              variant="bordered"
              style={buttonStyle}
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
