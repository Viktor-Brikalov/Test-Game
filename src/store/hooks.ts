import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState, TypedDispatch } from "./rootReducer";

export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
