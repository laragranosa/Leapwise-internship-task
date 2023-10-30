import Dashboard from "../modules/Dashboard/Dashboard";
import { theme } from "../styles/stitches.config";

const homePage = () => {
  return (
    <div style={{height:'100%', width:'100%', backgroundColor: theme.colors.greyLight, overflow: 'auto'}}>
    <title>
        Dashboard
    </title>
    <Dashboard/>
    </div>
  );
};

export default homePage;
