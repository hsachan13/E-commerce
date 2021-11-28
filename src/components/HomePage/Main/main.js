import { Fragment } from "react";
import AvailableItems from "./AvailableItems";
import ItemsSummary from "./itemsSummary";
const Main=(props)=>{
    return(
    <Fragment>
        <ItemsSummary/>
        <AvailableItems onSearch={props.onSearch}/>
    </Fragment>
    )
}
export default Main;
