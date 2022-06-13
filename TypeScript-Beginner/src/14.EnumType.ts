{
    //Enum Type
    enum RType {
        SUCCESS,
        FAILURE,
        UNAUTHENTICATED
    }
    interface APIResponse<T> {
        status: number,
        type: RType,
        data: T;
    }
    const resonse1: APIResponse<string> = {
        status: 200,
        type: RType.SUCCESS,
        data: "mydata",
    }
    console.log(resonse1);
}
