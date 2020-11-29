let requestTime = new Date();
const workTime = (req,res,next) => {
    let d = requestTime.getDay();
    let h = requestTime.getHours();
    if (d>0 && d<5 && h>=9 && h<=17)
    {
        next()
    }
    else 
    {
        res.send("Sorry,our service is out ")
    }
}
module.exports = workTime
