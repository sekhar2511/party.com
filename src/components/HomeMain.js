import Card from "../cred/OptionCard";
import "./HomeMain.css";
function HomeMain() {
  return (
    <div>
      <div className="flex-home">
        <div>
          <Card name="birthday" />
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
