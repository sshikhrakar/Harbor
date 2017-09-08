import {
  startDownload,
  completeDownload,
  updateCurrentDownloadProgress,
} from './downloadActions';

describe('ACTIONS: DOWNLOAD', () => {

  it('should create an action to  start a download', () =>  {
    expect(startDownload()).toMatchSnapshot();
  });

  it('should create an action to stop a download', () =>  {
    expect(completeDownload()).toMatchSnapshot();
  });


  it('should update the progress for current download', () => {
    expect(updateCurrentDownloadProgress(50)).toMatchSnapshot();
  });

});
