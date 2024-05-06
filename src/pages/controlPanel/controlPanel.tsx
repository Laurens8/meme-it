import { FunctionComponent } from "react";
import { Button } from "@nextui-org/react";
import "../memePages/memepage.css";

interface ControlPanelProps {
  slide: number;
  layout: string;
  theme: string;
  color: string;
  setColor: (color: string) => void;
  setLayout: (layout: string) => void;
  setSlide: (slide: number) => void;
  setTheme: (theme: string) => void;
}

const ControlPanel: FunctionComponent<ControlPanelProps> = (props) => {
  const { slide, theme, color, setColor, setLayout, setSlide, setTheme } =
    props;

  return (
    <div className="controlPanel">
      <div>
        <p style={{ marginBottom: "1rem" }}>Resize cards</p>
        <input
          type="range"
          min="350"
          max="600"
          value={slide}
          onChange={(e) => setSlide(parseInt(e.target.value))}
        />
      </div>
      <hr
        className={theme}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />
      <div>
        <p style={{ marginBottom: "1rem" }}>Layout</p>
        <Button
          style={{ marginRight: "1rem" }}
          color={
            color === "warning"
              ? "warning"
              : "secondary" && color === "secondary"
              ? "secondary"
              : "warning" && color === "primary"
              ? "primary"
              : "warning" && color === "success"
              ? "success"
              : "warning" && color === "danger"
              ? "danger"
              : "warning" && color === "warning"
              ? "warning"
              : "warning"
          }
          variant="ghost"
          onClick={() => setLayout("grid")}
        >
          Grid
        </Button>
        <Button
          color={
            color === "warning"
              ? "warning"
              : "secondary" && color === "secondary"
              ? "secondary"
              : "warning" && color === "primary"
              ? "primary"
              : "warning" && color === "success"
              ? "success"
              : "warning" && color === "danger"
              ? "danger"
              : "warning" && color === "warning"
              ? "warning"
              : "warning"
          }
          variant="ghost"
          onClick={() => setLayout("list")}
        >
          List
        </Button>
      </div>
      <hr
        className={theme}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />
      <div>
        <p style={{ marginBottom: "1rem" }}>Theme</p>
        <div style={{ marginBottom: "1rem" }}>
          <Button
            color={
              color === "warning"
                ? "warning"
                : "secondary" && color === "secondary"
                ? "secondary"
                : "warning" && color === "primary"
                ? "primary"
                : "warning" && color === "success"
                ? "success"
                : "warning" && color === "danger"
                ? "danger"
                : "warning" && color === "warning"
                ? "warning"
                : "warning"
            }
            variant="ghost"
            onClick={() => setTheme("dark")}
          >
            Dark Mode
          </Button>
        </div>
        <div style={{}}>
          <Button
            color={
              color === "warning"
                ? "warning"
                : "secondary" && color === "secondary"
                ? "secondary"
                : "warning" && color === "primary"
                ? "primary"
                : "warning" && color === "success"
                ? "success"
                : "warning" && color === "danger"
                ? "danger"
                : "warning" && color === "warning"
                ? "warning"
                : "warning"
            }
            variant="ghost"
            onClick={() => setTheme("light")}
          >
            Light Mode
          </Button>
        </div>
      </div>

      <hr
        className={theme}
        style={{ marginTop: "2rem", marginBottom: "2rem" }}
      />
      <div style={{ display: "grid" }}>
        <p style={{ marginBottom: "1rem" }}>Color</p>
        <Button
          style={{ marginBottom: "1rem" }}
          color={
            color === "warning"
              ? "warning"
              : "secondary" && color === "secondary"
              ? "secondary"
              : "warning" && color === "primary"
              ? "primary"
              : "warning" && color === "success"
              ? "success"
              : "warning" && color === "danger"
              ? "danger"
              : "warning" && color === "warning"
              ? "warning"
              : "warning"
          }
          variant="ghost"
          onClick={() => setColor("warning")}
        >
          warning
        </Button>
        <Button
          style={{ marginBottom: "1rem" }}
          color={
            color === "warning"
              ? "warning"
              : "secondary" && color === "secondary"
              ? "secondary"
              : "warning" && color === "primary"
              ? "primary"
              : "warning" && color === "success"
              ? "success"
              : "warning" && color === "danger"
              ? "danger"
              : "warning" && color === "warning"
              ? "warning"
              : "warning"
          }
          variant="ghost"
          onClick={() => setColor("secondary")}
        >
          secondary
        </Button>
        <Button
          style={{ marginBottom: "1rem" }}
          color={
            color === "warning"
              ? "warning"
              : "primary" && color === "secondary"
              ? "secondary"
              : "primary" && color === "primary"
              ? "primary"
              : "primary" && color === "success"
              ? "success"
              : "primary" && color === "danger"
              ? "danger"
              : "primary" && color === "warning"
              ? "warning"
              : "primary"
          }
          variant="ghost"
          onClick={() => setColor("primary")}
        >
          primary
        </Button>
        <Button
          style={{ marginBottom: "1rem" }}
          color={
            color === "warning"
              ? "warning"
              : "success" && color === "secondary"
              ? "secondary"
              : "success" && color === "primary"
              ? "primary"
              : "success" && color === "success"
              ? "success"
              : "success" && color === "danger"
              ? "danger"
              : "success" && color === "warning"
              ? "warning"
              : "success"
          }
          variant="ghost"
          onClick={() => setColor("success")}
        >
          success
        </Button>
        <Button
          color={
            color === "warning"
              ? "warning"
              : "danger" && color === "secondary"
              ? "secondary"
              : "danger" && color === "primary"
              ? "primary"
              : "danger" && color === "success"
              ? "success"
              : "danger" && color === "danger"
              ? "danger"
              : "danger" && color === "warning"
              ? "warning"
              : "danger"
          }
          variant="ghost"
          onClick={() => setColor("danger")}
        >
          danger
        </Button>
      </div>
    </div>
  );
};

export default ControlPanel;
