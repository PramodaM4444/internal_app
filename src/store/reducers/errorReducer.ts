const InitialState = {
    errors: null as any,
};

export const errorReducer = (state = InitialState, action: any) => {
    const failure = action.type.endsWith("FAILURE");

    return failure ? { errors: action.payload } : state;
};
