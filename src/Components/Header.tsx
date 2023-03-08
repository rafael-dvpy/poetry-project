import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faB } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <div
        className="flex
      "
      >
        <h1>Some guy poetry.</h1>
        <FontAwesomeIcon size="1x" icon={faAngleDown} />
      </div>
    </header>
  );
}
