import "./BrowserIcons.css";
import { FaEdge, FaFirefoxBrowser, FaChrome, FaOpera } from "react-icons/fa";

export default function BrowserIcons() {
  const icons = [FaEdge, FaFirefoxBrowser, FaChrome, FaOpera];

  return (
    <ul className="browser-list">
      {icons.map((Icon, i) => (
        <li key={i}>
          <a href="#">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}