package com.testharbor;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

/**
 * Created by srishanbhattarai on 9/13/17.
 */

public class ApkUtil extends ReactContextBaseJavaModule {

    private ReactApplicationContext context;

    public ApkUtil(ReactApplicationContext reactContext) {
        super(reactContext);

        this.context = reactContext;
    }

    public String getName() {
        return "ApkUtil";
    }

    @ReactMethod
    public void triggerInstall(String path, Promise promise) {
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW)
                    .setDataAndType(Uri.parse("file://" + path), "application/vnd.android.package-archive");
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            getReactApplicationContext().startActivity(intent);
            promise.resolve("");
        } catch (Exception e) {
            promise.reject(e.getMessage());
        }
    }
}
