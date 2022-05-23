package com.addressapi;



import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.pataa.sdk.OnAddress;
import com.pataa.sdk.Pataa;
import com.pataa.sdk.PataaAutoFillView;
import com.pataa.sdk.User;

import org.json.JSONObject;

public class AutofillViewManager extends SimpleViewManager<PataaAutoFillView> {
    ReactApplicationContext mCallerContext;

    public AutofillViewManager(ReactApplicationContext mCallerContext) {
        this.mCallerContext = mCallerContext;
    }

    @Override
    public String getName() {
        return "RNAutofill";
    }


    @Override
    protected PataaAutoFillView createViewInstance(ThemedReactContext reactContext) {
        PataaAutoFillView pataaAutoFillView = new PataaAutoFillView(reactContext, new OnAddress() {
            @Override
            public void onNetworkIsNotAvailable() {
                System.out.println("Native response: No network");
            }

            @Override
            public void onPataaNotFound(String message) {
                System.out.println("Native response: " + message);
                try {
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("error", message);
                }catch (Exception ee){
                    ee.printStackTrace();
                }
            }

            @Override
            public void onPataaFound(User user, Pataa response) {
                try {
                    JSONObject jsonObject = new JSONObject();
                    jsonObject.put("pataaCode", response.getPataa_code());
                    jsonObject.put("address1", response.getAddress1());
                    jsonObject.put("address2", response.getAddress2());
                    jsonObject.put("address3", response.getAddress3());
                    jsonObject.put("address4", response.getAddress4());
                    jsonObject.put("zipcode", response.getZipcode());
                    jsonObject.put("cityName", response.getCity_name());
                    jsonObject.put("stateCode", response.getState_code());
                    jsonObject.put("stateName", response.getState_name());
                    jsonObject.put("countryCode", response.getCountry_code());
                    jsonObject.put("countryName", response.getCountry_name());
                    jsonObject.put("qrCode", response.getQr_code());
                    jsonObject.put("firstName", user.getFirst_name());
                    jsonObject.put("lastName", user.getLast_name());
                    jsonObject.put("userCountryCode", user.getCountry_code());
                    jsonObject.put("mobile", user.getMobile());

                    System.out.println("Native response1: " + user.getFirst_name());
                    System.out.println("Native response2: " + response.getFormattedAddress());
                }catch (Exception ee){
                    ee.printStackTrace();
                }

            }
        }).setCurrentActivity(mCallerContext.getCurrentActivity(),"bIQxCFwL6nxsc39ocarzQHv8n0Itzlyp4r2vdqVGslE=");
        return pataaAutoFillView;
    }
}
