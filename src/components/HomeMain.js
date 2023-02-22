import Card from "../cred/OptionCard";
import Buttonc from "../cred/Button";
import "./HomeMain.css";
function HomeMain() {
  return (
    <div>
      <Buttonc />
      <div className="flex-home">
        <div>
          <Card name="birthday" />
        </div>
        <div>
          <Card name="concert" />
        </div>
        <div>
          <Card name="credle ceremony" />
        </div>
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
