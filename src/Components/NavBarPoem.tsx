import {
  faAngleDown,
  faAngleUp,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavBarPoem() {
  return (
    <nav className="pt-20">
      <h2 className="flex justify-center">
        <FontAwesomeIcon className="text-2xl my-2 mx-3" icon={faAngleUp} />
        <FontAwesomeIcon className="text-xl my-2 mx-3" icon={faShuffle} />
        <FontAwesomeIcon className="text-2xl my-2 mx-3" icon={faAngleDown} />
      </h2>
    </nav>
  );
}
