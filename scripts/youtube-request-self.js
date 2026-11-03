// YouTube 请求脚本，自写版 for Leo
// 用途：给 youtubei 请求加年龄/内容检查通过标记，并去掉请求里自带的广告信号字段。
// 不改 videoId、不改播放地址，解析失败就原样放行，绝不让视频打不开。
try {
  var body = $request.body;
  if (body) {
    var obj = JSON.parse(body);
    obj.racyCheckOk = true;
    obj.contentCheckOk = true;
    if (obj.playbackContext && obj.playbackContext.contentPlaybackContext) {
      obj.playbackContext.contentPlaybackContext.racyCheckOk = true;
      obj.playbackContext.contentPlaybackContext.contentCheckOk = true;
    }
    if (obj.context) {
      delete obj.context.adSignals;
    }
    $done({ body: JSON.stringify(obj) });
  } else {
    $done({});
  }
} catch (e) {
  $done({});
}
