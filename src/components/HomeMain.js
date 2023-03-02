import Card from "../cred/OptionCard";
import "./HomeMain.css";
import Ads from "../cred/Ads";
import { Column } from "@cred/neopop-web/lib/components";

function HomeMain() {
  return (
    <div>
      <div className="ads-card">
        <Ads />
      </div>
      <div className="flex-home">
        <div>
          <Card name="anniversary" />
        </div>
        <div>
          <Card name="marriage" />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
