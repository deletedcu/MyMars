import { useSelector } from "react-redux";
import { useDispatchWrap } from "./utilHooks";
import {
  setLoading,
  getCards,
} from "../redux";

export const useLoading = () => {
  const {loading} = useSelector(state => state.card);
  const setLoadingF = useDispatchWrap(setLoading);
  return {loading, setLoadingF};
};

export const useCards = () => {
  const {cards} = useSelector(state => state.card);
  const getCardsF = useDispatchWrap(getCards);
  return {cards, getCardsF};
};
