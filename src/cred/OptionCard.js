import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import image1 from "../images/party.png";
function Card(props) {
  return (
    <div className="card-main">
      <div className="option-image">
        <img src={image1} style={{ width: "160px", height: "60%" }} />
      </div>
      <div className="option-name">
        <div className="option-heading">{props.name}</div>
        <div className="view-button">
          <Button
            variant="secondary"
            kind="elevated"
            size="medijm"
            showArrow
            fullWidth
          >
            View
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
