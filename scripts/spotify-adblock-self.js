// Spotify 广告拦截脚本，自写版 for Leo
// 用途：只处理 JSON 响应里的广告字段，不伪造账号等级、不改账号信息。
// 遇到不是 JSON 的响应（比如二进制），原样返回，不干扰播放。
// 真正的去广告主力还是配置里的 Map Local / Rule，本脚本只是补一层 JSON 里的广告位。
function clean(v) {
  if (Array.isArray(v)) {
    return v.map(clean);
  }
  if (v && typeof v === "object") {
    delete v.ads;
    delete v.ad;
    delete v.advertisement;
    for (var k in v) {
      v[k] = clean(v[k]);
    }
    return v;
  }
  return v;
}
try {
  var text = $response.body;
  if (typeof text === "string" && text.trim().charAt(0) === "{") {
    var obj = JSON.parse(text);
    obj = clean(obj);
    $done({ body: JSON.stringify(obj) });
  } else {
    $done({ body: $response.body });
  }
} catch (e) {
  $done({ body: $response.body });
}
