import Button from "./Button"
import trackingMyButtonComp from "./trackingMyButtonComp"
const HoC=()=>{
    const ButtonTrack=trackingMyButtonComp(Button)
    return (
        <div>
            <h1>welcome to hoc</h1>
            <Button value={"Login"}></Button>
            <ButtonTrack value={"Login"} trackingInfo={{"CustID":"hello","password":"password"}}/>
        </div>
    )
}
export default HoC