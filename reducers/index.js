import { combineReducers } from "redux";
import calenderReducer from "./calenderReducer";
import exchangeRateReducer from "./exchangeRateReducer";
import TextReducer from "./TextReducer";
import DroplistReducer from "./DroplistReducer";
import ConvertCurrencyReducer from "./ConvertCurrencyReducer";
import ConvertResultReducer from "./ConvertResultReducer";
import screenLoadReducer from "./screenLoadReducer";
import DimensionReducer from "./DimensionReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
    calenderReducer,
    exchangeRateReducer,
    TextReducer,
    DroplistReducer,
    ConvertCurrencyReducer,
    ConvertResultReducer,
    screenLoadReducer,
    DimensionReducer,
    ErrorReducer
});