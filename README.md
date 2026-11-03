# Shadow-rocket-cofig-
# Shadowrocket: 2026-11-03 12:51:53
[General]
skip-proxy = 192.168.0.0/16,10.0.0.0/8,172.16.0.0/12,localhost,*.local,captive.apple.com,*.ccb.com,*.abchina.com.cn,*.psbc.com,www.baidu.com,www.163.com
tun-excluded-routes = 10.0.0.0/8, 127.0.0.0/8, 169.254.0.0/16, 172.16.0.0/12, 192.0.0.0/24, 192.0.2.0/24, 192.88.99.0/24, 192.168.0.0/16, 198.51.100.0/24, 203.0.113.0/24, 224.0.0.0/4, 255.255.255.255/32, 239.255.255.250/32, ff02::fb/128
dns-server = https://doh.pub/dns-query,https://dns.alidns.com/dns-query,223.5.5.5,119.29.29.29
fallback-dns-server = system
ipv6 = false
prefer-ipv6 = false
dns-direct-system = false
icmp-auto-reply = true
always-reject-url-rewrite = false
private-ip-answer = true
dns-direct-fallback-proxy = true
hijack-dns = 8.8.8.8:53,8.8.4.4:53
udp-policy-not-supported-behaviour = REJECT
block-quic = all-proxy

[Proxy]
# 节点不在这里。请在小火箭首页 > 右上角 + > 类型选 Subscribe,粘贴你自己的订阅链接添加。

[Proxy Group]
# ===== 地区组:url-test 自动测速,供可换节点的服务用,不要拿来给 AI/Spotify 钉死 =====
香港节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=0,timeout=5,select=0,policy-regex-filter=🇭🇰|HK|Hong|hong|香港|深港|沪港|京港|港
台湾节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=0,timeout=5,select=0,policy-regex-filter=🇹🇼|TW|TWN|Taiwan|Taipei|taiwan|台湾|台灣|台北|台中|新北|彰化
日本节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=0,timeout=5,select=0,policy-regex-filter=🇯🇵|JP|Japan|japan|Tokyo|tokyo|日本|东京|大阪|京日|苏日|沪日|上日|川日|深日|广日|日
新加坡节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=0,timeout=5,select=0,policy-regex-filter=🇸🇬|SG|Sing|sing|新加坡|狮城|沪新|京新|深新|杭新|广新
韩国节点 = url-test,url=http://www.gstatic.com/generate_204,interval=600,tolerance=0,timeout=5,select=0,policy-regex-filter=🇰🇷|KR|Korea|korea|KOR|韩国|首尔|韩|韓|春川
美国节点 = url-test,policy-select-name=🇺🇸 美国 14 家宽,interval=600,tolerance=100,timeout=5,url=http://www.gstatic.com/generate_204,policy-regex-filter=🇺🇸|US|USA|America|america|United States|美国|凤凰城|洛杉矶|西雅图|芝加哥|纽约|沪美|美
# ===== 固定组:select 手动钉死,IP 不跳,供 AI/Spotify 用,不要用 url-test 替代 =====
美国固定 = select,policy-regex-filter=(?i)🇺🇸|usa|america|united.states|美国|洛杉矶|纽约|西雅图|芝加哥|达拉斯|圣何塞|凤凰城|硅谷|波特兰|拉斯维加斯|迈阿密|俄勒冈|弗吉尼亚
日本固定 = select,policy-regex-filter=(?i)🇯🇵|japan|日本|东京|大阪
# ===== 服务组:附件原样,只有 AI/Spotify 按钉死改过 =====
AI = select,美国固定,policy-select-name=美国固定
Spotify = select,日本固定,policy-select-name=日本固定
YouTube = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Netflix = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Disney+ = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Max = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
TikTok = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Telegram = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Twitter = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=美国节点
Facebook = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
PayPal = select,DIRECT,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
Amazon = select,DIRECT,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
苹果服务 = select,DIRECT,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=DIRECT
谷歌服务 = select,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
微软服务 = select,DIRECT,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY
哔哩哔哩 = select,DIRECT,PROXY,香港节点,台湾节点,policy-select-name=DIRECT
游戏平台 = select,DIRECT,PROXY,香港节点,台湾节点,日本节点,新加坡节点,韩国节点,美国节点,policy-select-name=PROXY

[Rule]
# 规则从上到下匹配,域名规则优先于 IP 规则,先国内直连,再国外服务,最后兜底。
# 防止 WebRTC/STUN 泄漏真实 IP
DOMAIN-KEYWORD,stun,REJECT
# Spotify / YouTube 强制走 TCP,避免 QUIC 绕过脚本
AND,((DOMAIN-SUFFIX,spotify.com),(PROTOCOL,QUIC)),REJECT-NO-DROP
AND,((DOMAIN-SUFFIX,googlevideo.com),(PROTOCOL,UDP)),REJECT-NO-DROP
# ===== 第 1 段:国内平台直接直连,保证国内 App 不受影响,放在国外规则之前 =====
DOMAIN-SUFFIX,cn,DIRECT
DOMAIN-SUFFIX,weixin.qq.com,DIRECT
DOMAIN-SUFFIX,wx.qq.com,DIRECT
DOMAIN-SUFFIX,qq.com,DIRECT
DOMAIN-SUFFIX,alipay.com,DIRECT
DOMAIN-SUFFIX,alipay.cn,DIRECT
DOMAIN-SUFFIX,taobao.com,DIRECT
DOMAIN-SUFFIX,tmall.com,DIRECT
DOMAIN-SUFFIX,jd.com,DIRECT
DOMAIN-SUFFIX,meituan.com,DIRECT
DOMAIN-SUFFIX,meituan.net,DIRECT
DOMAIN-SUFFIX,dianping.com,DIRECT
DOMAIN-SUFFIX,baidu.com,DIRECT
DOMAIN-SUFFIX,163.com,DIRECT
DOMAIN-SUFFIX,126.com,DIRECT
DOMAIN-SUFFIX,zhihu.com,DIRECT
DOMAIN-SUFFIX,xiaohongshu.com,DIRECT
DOMAIN-SUFFIX,douyin.com,DIRECT
DOMAIN-SUFFIX,sina.com.cn,DIRECT
DOMAIN-SUFFIX,weibo.com,DIRECT
DOMAIN-SUFFIX,bilibili.com,DIRECT
DOMAIN-SUFFIX,ccb.com,DIRECT
DOMAIN-SUFFIX,abchina.com.cn,DIRECT
DOMAIN-SUFFIX,psbc.com,DIRECT
DOMAIN-SUFFIX,pinduoduo.com,DIRECT
DOMAIN-SUFFIX,youku.com,DIRECT
DOMAIN-SUFFIX,iqiyi.com,DIRECT
DOMAIN-SUFFIX,sohu.com,DIRECT
DOMAIN-SUFFIX,cctv.com,DIRECT
DOMAIN-SUFFIX,ifeng.com,DIRECT
DOMAIN-SUFFIX,ele.me,DIRECT
DOMAIN-SUFFIX,amap.com,DIRECT
# ===== 第 2 段:最终版钉死域名,直接走固定组,不经过服务组,避免误选 PROXY/DIRECT =====
DOMAIN-SUFFIX,spotify.com,日本固定
DOMAIN-SUFFIX,scdn.co,日本固定
DOMAIN-SUFFIX,spotifycdn.com,日本固定
DOMAIN-SUFFIX,spotifycdn.net,日本固定
DOMAIN-SUFFIX,spotifycharts.com,日本固定
DOMAIN-SUFFIX,spotifycodes.com,日本固定
DOMAIN-SUFFIX,spotifyforbrands.com,日本固定
DOMAIN-SUFFIX,spotifyjobs.com,日本固定
DOMAIN-SUFFIX,chatgpt.com,美国固定
DOMAIN-SUFFIX,openai.com,美国固定
DOMAIN-SUFFIX,oaistatic.com,美国固定
DOMAIN-SUFFIX,oaiusercontent.com,美国固定
DOMAIN-SUFFIX,claude.ai,美国固定
DOMAIN-SUFFIX,anthropic.com,美国固定
DOMAIN-SUFFIX,gemini.google.com,美国固定
DOMAIN-SUFFIX,aistudio.google.com,美国固定
DOMAIN-SUFFIX,labs.google,美国固定
DOMAIN-SUFFIX,deepmind.google,美国固定
DOMAIN-SUFFIX,x.ai,美国固定
DOMAIN-SUFFIX,grok.com,美国固定
DOMAIN-SUFFIX,perplexity.ai,美国固定
DOMAIN-SUFFIX,deepseek.com,美国固定
DOMAIN-SUFFIX,copilot.microsoft.com,美国固定
DOMAIN-SUFFIX,poe.com,美国固定
DOMAIN-SUFFIX,character.ai,美国固定
DOMAIN-SUFFIX,muse.ai,美国固定
# [2026-11-03] 谷歌系列全部走美国固定(含 Gmail),在规则集之前先匹配
DOMAIN-SUFFIX,gmail.com,美国固定
DOMAIN-SUFFIX,googlemail.com,美国固定
DOMAIN-SUFFIX,mail.google.com,美国固定
DOMAIN-SUFFIX,accounts.google.com,美国固定
DOMAIN-SUFFIX,google.com,美国固定
DOMAIN-SUFFIX,google.cn,美国固定
DOMAIN-SUFFIX,googleapis.com,美国固定
DOMAIN-SUFFIX,googlevideo.com,美国固定
DOMAIN-SUFFIX,googleusercontent.com,美国固定
DOMAIN-SUFFIX,gstatic.com,美国固定
DOMAIN-SUFFIX,googlehosted.com,美国固定
DOMAIN-SUFFIX,gvt1.com,美国固定
DOMAIN-SUFFIX,youtube.com,美国固定
DOMAIN-SUFFIX,ytimg.com,美国固定
DOMAIN-SUFFIX,youtube-nocookie.com,美国固定
# ===== 第 3 段:附件规则集,服务分组,国内规则集同样走 DIRECT =====
RULE-SET,https://raw.githubusercontent.com/iab0x00/ProxyRules/main/Rule/AI.txt,AI
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/YouTube/YouTube.list,美国固定
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Netflix/Netflix.list,NETFLIX
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Disney/Disney.list,DISNEY+
DOMAIN-SUFFIX,litix.io,MAX
DOMAIN-SUFFIX,discomax.com,MAX
DOMAIN-SUFFIX,brightline.tv,MAX
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/HBO/HBO.list,MAX
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Spotify/Spotify.list,SPOTIFY
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Telegram/Telegram.list,TELEGRAM
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/PayPal/PayPal.list,PAYPAL
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Twitter/Twitter.list,TWITTER
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Facebook/Facebook.list,FACEBOOK
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Amazon/Amazon.list,AMAZON
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Sony/Sony.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Nintendo/Nintendo.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Epic/Epic.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/SteamCN/SteamCN.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Steam/Steam.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Game/Game.list,游戏平台
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/GitHub/GitHub.list,PROXY
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Microsoft/Microsoft.list,微软服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Google/Google.list,美国固定
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Apple/Apple.list,苹果服务
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/BiliBili/BiliBili.list,哔哩哔哩
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/NetEaseMusic/NetEaseMusic.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Baidu/Baidu.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/DouBan/DouBan.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/WeChat/WeChat.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Sina/Sina.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Zhihu/Zhihu.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/XiaoHongShu/XiaoHongShu.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/DouYin/DouYin.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/TikTok/TikTok.list,TIKTOK
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/Global/Global.list,PROXY
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/QuantumultX/China/China.list,DIRECT
RULE-SET,https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Shadowrocket/Lan/Lan.list,DIRECT
GEOIP,CN,DIRECT
# ===== 兜底:未知国外流量走美国固定,不跳 IP =====
FINAL,美国固定

[Host]
*.apple.com = server:system
*.icloud.com = server:system
localhost = 127.0.0.1

[URL Rewrite]
# Spotify:把 iPhone 端 artistview 改为 iPad 端,最终版原样
^https:\/\/(?:\w+-spclient|spclient\.wg)\.spotify\.com(?::443)?\/artistview\/v1\/artist\/(.*)&platform=iphone 'https://spclient.wg.spotify.com/artistview/v1/artist/$1&platform=ipad' header
# Google 搜索防跳转,附件原样
'^https?://(www.)?g.cn' 'https://www.google.com' 302
'^https?://(www.)?google.cn' 'https://www.google.com' 302

[Map Local]
# Spotify:广告类请求直接返回空
^https:\/\/(?:\w+-spclient|spclient\.wg)\.spotify\.com(?::443)?\/(?:ad-|pendragon) 'data-type=text data="" status-code=200'
# 注:已删 YouTube initplayback Map Local(可能误伤正常播放),去广告靠下面 YouTube 响应脚本

[Script]
# Spotify,最终版原样保留,2026-10-29 验证可访问
Spotify.Crack = type=http-response, pattern=^https:\/\/(?:\w+-spclient|spclient\.wg)\.spotify\.com(?::443)?\/(?:bootstrap|user-customization-service), script-path=https://raw.githubusercontent.com/001ProMax/Surge/refs/heads/main/Script/Spotify.Crack.Dev.js, requires-body=true, binary-body-mode=true, argument=tab=true&useractivity=true
# YouTube 响应,最终版原样保留,Maasea 当前正式版,2026-10-29 再次验证可访问(Build: 2026/7/19),不是已死旧版
youtube.response = type=http-response,pattern=^https:\/\/youtubei\.googleapis\.com\/youtubei\/v1\/(browse|next|player|search|reel\/reel_watch_sequence|guide|account\/get_setting|get_watch),requires-body=1,max-size=-1,binary-body-mode=1,script-path=https://raw.githubusercontent.com/Maasea/sgmodule/master/Script/Youtube/youtube.response.js,argument={"blockUpload":true,"blockImmersive":true,"debug":false}

[MITM]
hostname = %APPEND% spclient.wg.spotify.com, *spclient.spotify.com, *.googlevideo.com, youtubei.googleapis.com, *.google.cn
enable = true
