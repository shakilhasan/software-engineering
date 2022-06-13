"use strict";
{
    //Enum Type
    let RType;
    (function (RType) {
        RType[RType["SUCCESS"] = 0] = "SUCCESS";
        RType[RType["FAILURE"] = 1] = "FAILURE";
        RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    })(RType || (RType = {}));
    const resonse1 = {
        status: 200,
        type: RType.SUCCESS,
        data: "mydata",
    };
    console.log(resonse1);
}
