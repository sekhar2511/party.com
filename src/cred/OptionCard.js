import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";

function Card(props) {
  return (
    <div className="card-main">
      <Column>
        <div>dfnwuehuifbw</div>
        <div className="option-name">
          <div className="heading">
            <p>{props.name}</p>
          </div>
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
      </Column>
    </div>
  );
}

export default Card;
