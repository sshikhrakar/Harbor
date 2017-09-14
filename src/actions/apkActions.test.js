import {
  installApk,
  installApkErrored,
  installApkFulfilled,
} from './apkActions';

describe('ACTIONS: APK', () => {

  it('should create an action that triggers apk install', () => {
    expect(
      installApk('/sdcard/com/testharbor/something.apk')
    ).toMatchSnapshot();
  });

  it('should create a fulfilled action for apk install', () => {
    expect(installApkFulfilled()).toMatchSnapshot();
  });

  it('should create a errored action for apk install', () => {
    expect(installApkErrored()).toMatchSnapshot();
  });


});
