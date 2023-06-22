import axios from "axios";
import { PAYMENT_MP } from "../../Redux/ActionsTypes/actions_types";

export function paymentMp(idDonar, amountDonation) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`/api/payments`);
      return dispatch({
        type: PAYMENT_MP,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
