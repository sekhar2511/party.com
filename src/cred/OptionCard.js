import "./OptionCard.css";
import { Button, Typography, Column } from "@cred/neopop-web/lib/components";
import { FontVariant } from "@cred/neopop-web/lib/primitives";
import image1 from "../images/party.png";
function Card(props) {
  return (
    <ElevatedCard
      backgroundColor="#AE275F"
      edgeColors={{
        bottom: "#5C1532",
        right: "#851E49",
      }}
      style={{
        width: "230px",
      }}
    >
      <ContentWrapper>
        <Column>
          <Row className="v-justify">
            <div>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                {props.name}
              </Typography>
              <Typography {...fontNameSpaces.tc12b} color={mainColors.white}>
                of Happy
              </Typography>
              <HorizontalSpacer n={2} />
              <Typography
                {...fontNameSpaces.tb11m}
                color={colorPalette.popWhite[100]}
                overflow="ellipsis"
              >
                XXX 1111
              </Typography>
            </div>
            <Row
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                border: `1px solid ${mainColors.white}`,
              }}
              className="h-center v-center"
            >
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: colorPalette.popWhite[300],
                }}
              />
            </Row>
          </Row>
          <HorizontalSpacer n={8} />
          <div style={{ maxWidth: "50%" }}>
            <Tag
              colorConfig={{
                background: mainColors.yellow,
                color: colorPalette.popWhite[400],
              }}
            >
              Due Today
            </Tag>
          </div>
          <HorizontalSpacer n={2} />
          <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
            ₹100% mangana
          </Typography>
          <Typography {...fontNameSpaces.th16b} color={mainColors.white}>
            ₹100
          </Typography>
          <HorizontalSpacer n={4} />
          <Button {...getButtonConfig("blp50p1")} fullWidth={true}>
            please visit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
