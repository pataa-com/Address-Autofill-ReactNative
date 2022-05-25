package com.addressapi;


import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;
import com.facebook.react.views.image.ReactImageView;
import com.pataa.sdk.OnAddress;
import com.pataa.sdk.Pataa;
import com.pataa.sdk.PataaAutoFillView;
import com.pataa.sdk.User;

import org.json.JSONObject;

import java.util.Map;

public class AutofillViewManager extends SimpleViewManager<PataaAutoFillView> {
    ReactApplicationContext mCallerContext;


    private PataaAutoFillView pataaAutoFillView;

    public AutofillViewManager(ReactApplicationContext mCallerContext) {
        this.mCallerContext = mCallerContext;
    }

    @Override
    public String getName() {
        return "AutofillViews";
    }


    @Override
    protected PataaAutoFillView createViewInstance(ThemedReactContext reactContext) {
        pataaAutoFillView = new PataaAutoFillView(reactContext.getCurrentActivity(), new OnAddress() {
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

                    WritableMap event = Arguments.createMap();
                    event.putString("address", jsonObject.toString());
                    //ReactContext reactContext = (ReactContext)getContext();
                    reactContext
                            .getJSModule(RCTEventEmitter.class)
                            .receiveEvent(pataaAutoFillView.getId(), "topChange", event);

                } catch (Exception ee) {
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


                    WritableMap event = Arguments.createMap();
                    event.putString("address", jsonObject.toString());
                    //ReactContext reactContext = (ReactContext)getContext();
                    reactContext
                            .getJSModule(RCTEventEmitter.class)
                            .receiveEvent(pataaAutoFillView.getId(), "topChange", event);


                } catch (Exception ee) {
                    ee.printStackTrace();
                }

            }
        });
        return pataaAutoFillView;
    }

    @ReactProp(name = "keyss")
    public void setKey(PataaAutoFillView view, String sources) {
        pataaAutoFillView = view.setCurrentActivity(mCallerContext.getCurrentActivity(), sources);

    }

    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put(
                "topChange",
                MapBuilder.of(
                        "phasedRegistrationNames",
                        MapBuilder.of("bubbled", "onChange")
                )
        ).build();
    }


}
