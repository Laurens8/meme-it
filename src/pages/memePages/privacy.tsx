import { FunctionComponent, useContext, CSSProperties, useEffect } from "react";
import CustomNavBar from "../navBar/customNavBar";
import "./mainPage";
import { themeContext } from "../../context";
import { LoginContext } from "../../context";

const style: CSSProperties = {
  textAlign: "center",
  margin: "auto",
  width: "100%",
  fontSize: "20px",
};

const Privacy: FunctionComponent = () => {
  const { theme } = useContext(themeContext);
  const { setLogdin } = useContext(LoginContext);

  useEffect(() => {
    setLogdin(true);
  }, [theme]);

  return (
    <div
      className={theme === "light" ? "light-mode" : "dark-mode"}
      style={style}
    >
      <CustomNavBar />
      <br />
      <br />
      <div>
        <h1>Privacy Policy:</h1>
        <p>
          This Privacy Policy describes how your personal information is
          collected,
        </p>
        <p>
          {" "}
          used, and shared when you visit or make a purchase from our website.
        </p>
        <br />
        <p>
          By using our website, you agree to the collection and use of
          information in accordance with this policy.
        </p>
        <br />
        <h2>Personal Information We Collect:</h2>
        <p>We collect Device Information using the following technologies:</p>
        <br />
        <ul>
          <li>- Log files</li>
          <li>- Cookies</li>
          <li>- Web beacons</li>
          <li>- Tags</li>
          <li>- Pixels</li>
        </ul>
        <br />
        <h2>How We Use Your Personal Information:</h2>
        <p>We use the collected information to</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Improve, personalize, and expand our services</li>
          <li>Understand and analyze how you use our services</li>
        </ul>
        <p>
          We may share your personal information to comply with applicable laws
          and regulations.
        </p>
        <br />
        <h2>Sharing Your Personal Information:</h2>
        <p>
          We may share your personal information to comply with applicable laws
          and regulations.
        </p>
        <br />
        <h2>Security:</h2>
        <p>
          We take reasonable measures to help protect your personal information
          from loss,
        </p>
        <p>
          {" "}
          theft, misuse, and unauthorized access, disclosure, alteration, and
          destruction.
        </p>
        <p>
          However, no method of transmission over the Internet, or method of
          electronic storage, is 100% secure.
        </p>
        <br />
        <h2>Changes:</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons.
        </p>
        <p>Changes are effective immediately upon posting.</p>
        <p>
          Therefore, we advise you to review this page periodically for any
          changes.
        </p>
        <br />
        <h2>Contact Us:</h2>
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          at example@email.com.
        </p>
        <p>
          By using our website, you agree to the collection and use of
          information in accordance with this policy.
        </p>
        <br />
        <br />
      </div>
    </div>
  );
};

export default Privacy;
