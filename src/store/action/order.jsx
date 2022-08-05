import { listApi } from "../../services/orders";

export const loadOrder = payload => async dispatch => {
    // console.log(payload)
    const res = await listApi(payload.page);
    // 当异步操作完成之后通过dispatch触发reducer改变数据
    dispatch({
        type:'ORDER_LOADED',
        payload: {...res,page:payload.page}
    });
};