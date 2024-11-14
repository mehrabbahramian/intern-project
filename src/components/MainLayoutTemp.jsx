import Styles from "./mainLayout.module.css"
import SidebarTemp from "./SidebarTemp";
import TestsTemp from "./TestsTemp";

function MainLayoutTemp()
{
    return (
        <div className={Styles.container}>
            <SidebarTemp userName={"میثم ثانی"} />
            <TestsTemp />
        </div>
    );
}

export default MainLayoutTemp;