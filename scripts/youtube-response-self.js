// YouTube 响应脚本，自写版 for Leo
// 用途：把 youtubei 返回里的广告对象删掉，播放状态改回可播。
// 删的只是广告渲染器和广告位，不删视频、标题、字幕、播放地址。
// 解析失败就原样返回，绝不让视频打不开。
function clean(v) {
  if (Array.isArray(v)) {
    return v
      .filter(function (item) {
        if (item && typeof item === "object") {
          if (
            item.promotedVideoRenderer ||
            item.compactPromotedVideoRenderer ||
            item.adSlotRenderer ||
            item.displayAdRenderer ||
            item.inFeedAdRenderer
          ) {
            return false;
          }
        }
        return true;
      })
      .map(clean);
  }
  if (v && typeof v === "object") {
    delete v.playerAds;
    delete v.adPlacements;
    delete v.adBreaks;
    delete v.adSlotRenderer;
    delete v.promotedVideoRenderer;
    if (v.playabilityStatus) {
      v.playabilityStatus.status = "OK";
      delete v.playabilityStatus.errorScreen;
    }
    for (var k in v) {
      v[k] = clean(v[k]);
    }
    return v;
  }
  return v;
}
try {
  var obj = JSON.parse($response.body);
  obj = clean(obj);
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({ body: $response.body });
}
