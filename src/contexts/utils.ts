import React from "react";

export interface ContextProps<T> {
    state: T,
    dispatch: React.Dispatch<any>
}