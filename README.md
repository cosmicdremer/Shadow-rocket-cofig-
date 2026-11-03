# Shadow-rocket-cofig-

Shadowrocket 完整配置,公开存放,无节点、无订阅、无密码。

## 只用这一个文件

`Shadowrocket-Complete-US-JP.conf`,永久 raw 链接(仓库不删就一直有效):

https://raw.githubusercontent.com/cosmicdremer/Shadow-rocket-cofig-/main/Shadowrocket-Complete-US-JP.conf

导入:小火箭「配置」页右上角 + > 粘贴上面链接下载 > 点这一行 > 使用配置。不要把 README 里的文字当配置文件导入,README 不是配置文件。

## 分组(25 组,分三类)

- A 钉死组(select,手动选 1 个):美国固定(AI/谷歌/YouTube)、日本固定(Spotify);AI 组只含美国固定,Spotify 组只含日本固定。
- B 地区测速组(url-test):香港/台湾/日本/新加坡/韩国/美国/欧洲节点,供流媒体等手动换地区用。
- C 服务组(select,默认已定):YouTube、谷歌服务默认美国固定;韩国服务默认韩国节点;欧洲服务默认欧洲节点;Netflix、Disney+、Max、TikTok、Telegram、Facebook 默认 PROXY;Twitter 默认美国节点;苹果服务、微软服务、哔哩哔哩默认 DIRECT。

## 分流(钉死,不自动跳)

- AI:Gemini、ChatGPT、Claude、Grok、Perplexity、DeepSeek、Copilot、Poe 等 + muse.ai → 美国固定
- 谷歌系列:Gmail、Google、YouTube、Google 视频、Google 账号与接口 → 美国固定
- Spotify → 日本固定
- 国内网站/平台 → DIRECT 直连
- 未知国外流量兜底 FINAL → 美国固定

美国固定、日本固定都是 `select`,各手动选一个节点,不要用 url-test/fallback,否则会跳 IP。节点不在本仓库,须用自己的订阅在小火箭首页添加。

## 脚本(去广告,自写)

3 条自写脚本,放在 `scripts/` 里,同仓库 raw 链接,无过期链接:

- `spotify-adblock-self.js`:只清理 JSON 里的广告字段,不伪造账号等级
- `youtube-request-self.js`:请求里加年龄/内容检查标记、去掉广告信号字段,解析失败原样放行
- `youtube-response-self.js`:删广告渲染器/广告位,解析失败原样返回

脚本生效需要:当前配置开启 HTTPS 解密 + 手机上生成并信任了小火箭自己的证书。只安装不信任是最常见的漏步。

## 打不开先做这两步,不要先改规则

1. 关当前配置的 HTTPS 解密,彻底关掉 App 重开。能开 = 证书/解密问题,分流和节点没事。
2. 还打不开,在美国固定里换另一个美国节点重开。能开 = 刚才那个节点死了。

报问题时请带:打勾的配置名、换的是哪个组、关解密后的结果、报错截图。

证书不用重新生成:证书是手机/小火箭自己的,不是某个配置的。换配置只需在新配置上打开 HTTPS 解密,证书沿用已生成并信任的那一张;只有证书失效、过期或不是本机生成的,才重新生成。

谷歌地图在内:maps.google.com、maps.googleapis.com 走美国固定(原先 google.com、googleapis.com 已覆盖)。韩国常用:Kakao、Daum、Naver、Melon、Coupang、Toss、Baemin 走韩国服务;欧洲常用:Booking、Skyscanner、Revolut、Wise、Deezer、BBC、Trainline、Bolt、FlixBus、Vinted 走欧洲服务,另有韩国/欧洲 GEOIP 兜底。Spotify 仍走日本固定,不进欧洲组。若某韩国/欧洲 App 不在名单里,请报 App 名再补域名。若订阅里没有韩国或欧洲节点,对应组会是空的,相关 App 会打不开,先在分组页确认组里有节点。
