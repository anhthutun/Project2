import * as type from "../Constant";
import getAds from "../FetchAPI/getAdsProduct"
import { put, takeEvery } from 'redux-saga/effects';

function* getAdsProduct( ) {
    try {
        const res   = yield getAds();
        console.log("res: ",res)
        yield put({
            type: type.get_ads_product_success,
            payload: res
        });
    } catch (error) {
        yield put({
            type: type.get_ads_product_failure,
            payload: {
                errorMessage: error.message
            }
        });
    }
}

export const adsSaga = [
    takeEvery(type.get_ads_product_success, getAdsProduct)
];