/*
 * ═══════════════════════════════════════════════════════════
 *  自駕特訓班 — 課程資料庫 (data.js)
 * ═══════════════════════════════════════════════════════════
 *  結構說明：
 *  CURRICULUM.month_N.units[] — 每個 unit 物件包含：
 *    id          唯一識別碼
 *    category    所屬月份 key
 *    theme       主題分類 (signs/parking/railway/rules)
 *    topic       中文主題描述
 *    fullSentence 完整日文句子
 *    translation  中文翻譯
 *    fullTts      整句假名讀音
 *    chunks[]     語句拆解（用於 Phase 1 & 2）
 *      .text        顯示文字
 *      .tts         讀音（假名）
 *      .type        詞性 (noun/verb/particle/adj)
 *      .highlights[]  高亮設定
 *        .target      標記目標文字
 *        .cssClass    色彩 class
 *        .note        學習筆記
 *    roleplay{}   情境開口設定（Phase 2）
 *      .instruction  情境說明
 *      .acceptKeywords[] 語音辨識關鍵字
 *    kanjiTask{}  詞語手寫設定（Phase 3）
 *      .target      要寫的詞語（支援多字）
 *      .hint        描紅提示字
 *      .emoji       代表 emoji
 *      .title       顯示標題
 *      .story       漢字故事（記憶法）
 *
 *  擴展方式：
 *  1. 在對應月份的 units[] 陣列中新增物件即可
 *  2. 新增月份：在 CURRICULUM 下加 month_N key
 *  3. kanjiTask.target 支援 1~4 字，UI 自動調整框數
 * ═══════════════════════════════════════════════════════════
 */

const CURRICULUM = {

// ┌─────────────────────────────────────────────────────────┐
// │  第一個月：生存地基                                       │
// │  道路標誌 + 停車場 + 鐵道交流道 + 速限規則               │
// └─────────────────────────────────────────────────────────┘
month_1: {
  title: "第一個月：生存地基",
  subtitle: "道路標誌、停車場、高速公路、速限規則",
  units: [

  // ──────────────── 🚧 道路標誌基礎 (5 句) ────────────────
  {
    id:"sign_01", category:"month_1", theme:"signs",
    topic:"必須絕對遵守的停止線",
    fullSentence:"止まれ", translation:"停下來！", fullTts:"とまれ",
    chunks:[{text:"止まれ",tts:"とまれ",type:"verb",highlights:[{target:"止まれ",cssClass:"color-verb-blue",note:"🛑 動詞命令形，在號誌上代表「絕對要停下來」。"}]}],
    roleplay:{instruction:"前方出現倒三角形、紅底白字的標誌，請對著駕駛大喊：「停下來！」",acceptKeywords:["止まれ","とまれ","トマレ"]},
    kanjiTask:{target:"止まれ",hint:"止まれ",emoji:"🛑",title:"🛑 止まれ（停下來！）",story:"「止」的形狀就像腳印停在地上。在日本開車看到這個字，腳掌就要立刻踩煞車，完全靜止 3 秒鐘！"}
  },
  {
    id:"sign_02", category:"month_1", theme:"signs",
    topic:"狹窄巷弄的保命符",
    fullSentence:"ここは徐行してください", translation:"這裡請慢行。", fullTts:"ここはじょこうしてください",
    chunks:[
      {text:"ここ",tts:"ここ",type:"noun",highlights:[{target:"ここ",cssClass:"color-noun-green",note:"📍 這裡 (Here)。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[{target:"は",cssClass:"color-particle-red",note:"🔴 助詞「は」（唸 wa），提示主題。"}]},
      {text:"徐行",tts:"じょこう",type:"noun",highlights:[{target:"徐行",cssClass:"color-noun-green",note:"🐢 徐行＝慢慢開，時速 10 公里以下。"}]},
      {text:"してください",tts:"してください",type:"verb",highlights:[{target:"してください",cssClass:"color-verb-blue",note:"🙏 請這麼做。萬用禮貌請求句型。"}]}
    ],
    roleplay:{instruction:"開進了沒有人行道的狹窄巷子，請提醒駕駛：「請慢慢開（徐行）」。",acceptKeywords:["徐行","じょこう","ジョコウ"]},
    kanjiTask:{target:"徐行",hint:"徐行",emoji:"🚶",title:"🚶 徐行（從容慢慢來）",story:"左邊「彳」代表步伐，右邊「余」有從容的意思。腳步從容不迫，就是慢慢來。開車看到它，請鬆開油門！"}
  },
  {
    id:"sign_03", category:"month_1", theme:"signs",
    topic:"避免逆向的關鍵",
    fullSentence:"一方通行です", translation:"這裡是單行道。", fullTts:"いっぽうつうこうです",
    chunks:[
      {text:"一方通行",tts:"いっぽうつうこう",type:"noun",highlights:[{target:"一方通行",cssClass:"color-noun-green",note:"➡ 只有一個方向能通行，藍底白箭頭標誌。"}]},
      {text:"です",tts:"です",type:"verb",highlights:[{target:"です",cssClass:"color-verb-blue",note:"✨ 肯定結尾『是』。"}]}
    ],
    roleplay:{instruction:"導航顯示這條路只能單向行駛，請說出：「是單行道」。",acceptKeywords:["一方通行","いっぽうつうこう","通行"]},
    kanjiTask:{target:"通行",hint:"通行",emoji:"🛣️",title:"🛣️ 通行（順暢走過去）",story:"「辶」代表在路上走動，右邊「甬」就像通道。讓車子順暢地通過，就是「通行」。"}
  },
  {
    id:"sign_04", category:"month_1", theme:"signs",
    topic:"尋找停車位",
    fullSentence:"駐車禁止ですよ", translation:"這裡是禁止停車的喔。", fullTts:"ちゅうしゃきんしですよ",
    chunks:[
      {text:"駐車",tts:"ちゅうしゃ",type:"noun",highlights:[{target:"駐車",cssClass:"color-noun-green",note:"🅿️ 停放車輛的意思。"}]},
      {text:"禁止",tts:"きんし",type:"noun",highlights:[{target:"禁止",cssClass:"color-noun-green",note:"❌ 不能做的意思。藍底紅斜線標誌絕對不要停！"}]},
      {text:"です",tts:"です",type:"verb",highlights:[{target:"です",cssClass:"color-verb-blue",note:"✨ 肯定結尾。"}]},
      {text:"よ",tts:"よ",type:"particle",highlights:[{target:"よ",cssClass:"color-particle-red",note:"🔴 句尾提醒語氣，像中文的『～喔』。"}]}
    ],
    roleplay:{instruction:"駕駛想在路邊暫停，但你看到紅色斜線標誌，請立刻提醒：「禁止停車！」",acceptKeywords:["駐車","禁止","ちゅうしゃきんし"]},
    kanjiTask:{target:"駐車禁止",hint:"駐車禁止",emoji:"🅿️",title:"🅿️ 駐車禁止（禁止停車）",story:"「馬」＋「主」＝駐。古代讓馬停下來休息在主人的地方，現代的鐵馬（汽車）停下來就是「駐車」。加上「禁止」就是不能停！"}
  },
  {
    id:"sign_05", category:"month_1", theme:"signs",
    topic:"高速公路收費站閘道",
    fullSentence:"ETC専用レーンに入ります", translation:"要進入 ETC 專用車道囉。", fullTts:"イーティーシーせんようレーンにはいります",
    chunks:[
      {text:"ETC専用",tts:"イーティーシーせんよう",type:"noun",highlights:[{target:"専用",cssClass:"color-noun-green",note:"🚗 紫色招牌的 ETC 專用道。"}]},
      {text:"レーン",tts:"レーン",type:"noun",highlights:[{target:"レーン",cssClass:"color-noun-green",note:"🛣️ Lane (車道)。"}]},
      {text:"に",tts:"に",type:"particle",highlights:[{target:"に",cssClass:"color-particle-red",note:"🔴 助詞，表示目的地。"}]},
      {text:"入ります",tts:"はいります",type:"verb",highlights:[{target:"入ります",cssClass:"color-verb-blue",note:"🚪 進入的意思。"}]}
    ],
    roleplay:{instruction:"快到收費站了，確認車上有 ETC 卡，請宣告：「進入 ETC 專用道」。",acceptKeywords:["専用","せんよう","ETC"]},
    kanjiTask:{target:"専用",hint:"専用",emoji:"🎯",title:"🎯 専用（全部集中在這裡）",story:"上方像紡織用的磚，把絲線集中繞在上面。把所有用途集中在一個地方，就是「專用」！"}
  },

  // ──────────────── 🅿️ 停車場生死鬥 (10 句) ────────────────
  {
    id:"park_01", category:"month_1", theme:"parking",
    topic:"確認收費屬性",
    fullSentence:"ここは有料ですか、無料ですか。", translation:"這裡是收費還是免費的？", fullTts:"ここはゆうりょうですか、むりょうですか",
    chunks:[
      {text:"ここ",tts:"ここ",type:"noun",highlights:[]},
      {text:"は",tts:"わ",type:"particle",highlights:[{target:"は",cssClass:"color-particle-red",note:"🔴 提示主題的助詞。"}]},
      {text:"有料",tts:"ゆうりょう",type:"noun",highlights:[{target:"有料",cssClass:"color-noun-green",note:"💰 收費。有＝有，料＝費用。"}]},
      {text:"ですか",tts:"ですか",type:"verb",highlights:[{target:"ですか",cssClass:"color-verb-blue",note:"❓ 疑問句結尾。"}]},
      {text:"無料",tts:"むりょう",type:"noun",highlights:[{target:"無料",cssClass:"color-noun-green",note:"🆓 免費。無＝沒有，料＝費用。"}]}
    ],
    roleplay:{instruction:"向停車場管理員確認停車是否需要付費。",acceptKeywords:["有料","無料","ゆうりょう","むりょう"]},
    kanjiTask:{target:"有料",hint:"有料",emoji:"💰",title:"💰 有料（手中握著肉＝要付錢）",story:"「有」下方是肉（月），上方是手。手裡握著肉，代表『擁有』。在停車場看到「有料」就要掏錢囉！"}
  },
  {
    id:"park_02", category:"month_1", theme:"parking",
    topic:"紅色燈號的殘酷現實",
    fullSentence:"満車だから、別のところを探そう。", translation:"滿車了，找別的地方吧。", fullTts:"まんしゃだから、べつのところをさがそう",
    chunks:[
      {text:"満車",tts:"まんしゃ",type:"noun",highlights:[{target:"満車",cssClass:"color-noun-green",note:"🔴 滿車＝客滿。紅燈亮起就是沒位子了。"}]},
      {text:"だから",tts:"だから",type:"particle",highlights:[{target:"だから",cssClass:"color-particle-red",note:"🔴 因為～所以的口語用法。"}]},
      {text:"別の",tts:"べつの",type:"noun",highlights:[{target:"別",cssClass:"color-noun-green",note:"🔄 另外的、其他的。"}]},
      {text:"ところ",tts:"ところ",type:"noun",highlights:[]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"探そう",tts:"さがそう",type:"verb",highlights:[{target:"探そう",cssClass:"color-verb-blue",note:"🔍 找找看吧（意志形）。"}]}
    ],
    roleplay:{instruction:"停車場門口亮起紅色「満」字，請告訴駕駛找其他地方。",acceptKeywords:["満車","まんしゃ","別","探"]},
    kanjiTask:{target:"満車",hint:"満車",emoji:"🔴",title:"🔴 満車（水滿到溢出來）",story:"「満」左邊是水，右邊是「滿」。水滿到溢出來，停車場也滿到塞不下了。紅色牌子亮起的絕望二字！"}
  },
  {
    id:"park_03", category:"month_1", theme:"parking",
    topic:"藍色燈號的希望之光",
    fullSentence:"空車マークが見えた！", translation:"看到空車標誌了！", fullTts:"くうしゃマークがみえた",
    chunks:[
      {text:"空車",tts:"くうしゃ",type:"noun",highlights:[{target:"空車",cssClass:"color-noun-green",note:"🟢 空車＝有空位。綠色或藍色燈亮起，快衝！"}]},
      {text:"マーク",tts:"マーク",type:"noun",highlights:[{target:"マーク",cssClass:"color-noun-green",note:"📛 Mark＝標誌、記號。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[{target:"が",cssClass:"color-particle-red",note:"🔴 主語提示助詞。"}]},
      {text:"見えた",tts:"みえた",type:"verb",highlights:[{target:"見えた",cssClass:"color-verb-blue",note:"👀 看到了！（自然映入眼簾）"}]}
    ],
    roleplay:{instruction:"繞了半天終於看到停車場亮起綠燈，興奮地說出來！",acceptKeywords:["空車","くうしゃ","見えた"]},
    kanjiTask:{target:"空車",hint:"空車",emoji:"🟢",title:"🟢 空車（天空般的空曠）",story:"「空」上面是穴（洞），下面是工。在洞穴裡施工，裡面空空的。停車場的「空」＝有空位，趕快停！"}
  },
  {
    id:"park_04", category:"month_1", theme:"parking",
    topic:"找繳費機",
    fullSentence:"精算機はどこにありますか。", translation:"繳費機在哪裡？", fullTts:"せいさんきはどこにありますか",
    chunks:[
      {text:"精算機",tts:"せいさんき",type:"noun",highlights:[{target:"精算機",cssClass:"color-noun-green",note:"🧮 繳費機。日本停車場離場前要先到機器繳費。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"どこ",tts:"どこ",type:"noun",highlights:[{target:"どこ",cssClass:"color-noun-green",note:"❓ 哪裡？"}]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"ありますか",tts:"ありますか",type:"verb",highlights:[{target:"ありますか",cssClass:"color-verb-blue",note:"📍 在（某處）嗎？"}]}
    ],
    roleplay:{instruction:"要離開停車場了，找不到繳費機，向旁人詢問。",acceptKeywords:["精算機","せいさんき","どこ"]},
    kanjiTask:{target:"精算",hint:"精算",emoji:"🧮",title:"🧮 精算（精確計算）",story:"「精」是米＋青＝精挑細選的米。「算」是竹＋目＋廾＝用竹籤數數。精確地算出你要付多少錢！"}
  },
  {
    id:"park_05", category:"month_1", theme:"parking",
    topic:"當日最高收費",
    fullSentence:"最大料金はいくらですか。", translation:"當日最高收費是多少？", fullTts:"さいだいりょうきんはいくらですか",
    chunks:[
      {text:"最大料金",tts:"さいだいりょうきん",type:"noun",highlights:[{target:"最大料金",cssClass:"color-noun-green",note:"💹 當日最高收費。看到這四個字代表不管停多久最多就這個價。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"いくら",tts:"いくら",type:"noun",highlights:[{target:"いくら",cssClass:"color-noun-green",note:"💴 多少錢？"}]},
      {text:"ですか",tts:"ですか",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"看到停車場價目表，想確認停一整天最多付多少。",acceptKeywords:["最大料金","さいだい","いくら"]},
    kanjiTask:{target:"最大",hint:"最大",emoji:"💹",title:"💹 最大（到頂了不能再多）",story:"「最」上面取、下面日＝太陽下取到最好的。「大」就是張開手腳的人。最大料金＝封頂價格，停過夜也不怕破產！"}
  },
  {
    id:"park_06", category:"month_1", theme:"parking",
    topic:"鈔票的限制",
    fullSentence:"千円札しか使えません。", translation:"只能使用千元鈔票。", fullTts:"せんえんさつしかつかえません",
    chunks:[
      {text:"千円札",tts:"せんえんさつ",type:"noun",highlights:[{target:"千円札",cssClass:"color-noun-green",note:"💴 千元鈔票。鄉下停車場常不收五千/萬元大鈔。"}]},
      {text:"しか",tts:"しか",type:"particle",highlights:[{target:"しか",cssClass:"color-particle-red",note:"🔴 只有～。後面接否定＝只能～。"}]},
      {text:"使えません",tts:"つかえません",type:"verb",highlights:[{target:"使えません",cssClass:"color-verb-blue",note:"🚫 不能使用。"}]}
    ],
    roleplay:{instruction:"停車場繳費機旁貼著告示，只收千元鈔，請告知駕駛。",acceptKeywords:["千円札","せんえん","使えません"]},
    kanjiTask:{target:"千円",hint:"千円",emoji:"💴",title:"💴 千円（一千塊）",story:"「千」是十的十倍，一撇蓋在十上面。「円」是日圓的圓。記得多準備千円鈔，鄉下很多機器不收大鈔！"}
  },
  {
    id:"park_07", category:"month_1", theme:"parking",
    topic:"按鈕取卡",
    fullSentence:"駐車券を取ってください。", translation:"請抽取停車票卡。", fullTts:"ちゅうしゃけんをとってください",
    chunks:[
      {text:"駐車券",tts:"ちゅうしゃけん",type:"noun",highlights:[{target:"駐車券",cssClass:"color-noun-green",note:"🎫 停車票卡。進場時從機器抽取。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"取って",tts:"とって",type:"verb",highlights:[{target:"取って",cssClass:"color-verb-blue",note:"🤏 拿取。"}]},
      {text:"ください",tts:"ください",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"停車場閘門前，機器伸出票卡，提醒駕駛取卡。",acceptKeywords:["駐車券","ちゅうしゃけん","取って"]},
    kanjiTask:{target:"駐車券",hint:"駐車券",emoji:"🎫",title:"🎫 駐車券（停車的入場券）",story:"「券」上面是「龹」（刀切），下面是刀。把紙切成一張張的票，就是券。進停車場記得按按鈕拿券！"}
  },
  {
    id:"park_08", category:"month_1", theme:"parking",
    topic:"包月車位的地雷",
    fullSentence:"月極駐車場には停めないで。", translation:"不要停在包月停車場喔。", fullTts:"つきぎめちゅうしゃじょうにはとめないで",
    chunks:[
      {text:"月極",tts:"つきぎめ",type:"noun",highlights:[{target:"月極",cssClass:"color-noun-green",note:"📅 月極＝包月。這種停車場是月租專用，外車停了會被拖吊！"}]},
      {text:"駐車場",tts:"ちゅうしゃじょう",type:"noun",highlights:[]},
      {text:"には",tts:"には",type:"particle",highlights:[]},
      {text:"停めないで",tts:"とめないで",type:"verb",highlights:[{target:"停めないで",cssClass:"color-verb-blue",note:"🚫 不要停。口語否定請求。"}]}
    ],
    roleplay:{instruction:"看到寫著「月極」的停車場，提醒駕駛千萬別停。",acceptKeywords:["月極","つきぎめ","停めないで"]},
    kanjiTask:{target:"月極",hint:"月極",emoji:"📅",title:"📅 月極（月亮到了極限）",story:"「月」是月份，「極」是到達頂點。每月付費到極限＝包月制。看到這兩字的停車場，沒合約就別停！"}
  },
  {
    id:"park_09", category:"month_1", theme:"parking",
    topic:"停車格線內",
    fullSentence:"枠内にきちんと停めてください。", translation:"請好好停在停車格線內。", fullTts:"わくないにきちんととめてください",
    chunks:[
      {text:"枠内",tts:"わくない",type:"noun",highlights:[{target:"枠内",cssClass:"color-noun-green",note:"⬜ 枠＝框、格子。枠内＝格子裡面。"}]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"きちんと",tts:"きちんと",type:"noun",highlights:[{target:"きちんと",cssClass:"color-noun-green",note:"✅ 整整齊齊地、好好地。"}]},
      {text:"停めてください",tts:"とめてください",type:"verb",highlights:[{target:"停めて",cssClass:"color-verb-blue",note:"🅿️ 請停放。"}]}
    ],
    roleplay:{instruction:"副駕提醒駕駛要停在白線格子裡面。",acceptKeywords:["枠内","わくない","きちんと","停めて"]},
    kanjiTask:{target:"枠内",hint:"枠内",emoji:"⬜",title:"⬜ 枠内（框框裡面）",story:"「枠」左邊是木頭，右邊是卯（榫眼）。用木頭卡出一個框框，就是格子。停車要停在格子「内」！"}
  },
  {
    id:"park_10", category:"month_1", theme:"parking",
    topic:"營業時間確認",
    fullSentence:"営業時間は何時までですか。", translation:"營業時間到幾點？", fullTts:"えいぎょうじかんはなんじまでですか",
    chunks:[
      {text:"営業時間",tts:"えいぎょうじかん",type:"noun",highlights:[{target:"営業",cssClass:"color-noun-green",note:"🏢 營業。有些停車場半夜關門，車子會拿不出來！"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"何時",tts:"なんじ",type:"noun",highlights:[{target:"何時",cssClass:"color-noun-green",note:"🕐 幾點？"}]},
      {text:"まで",tts:"まで",type:"particle",highlights:[{target:"まで",cssClass:"color-particle-red",note:"🔴 到～為止。"}]},
      {text:"ですか",tts:"ですか",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"停車場入口看到營業時間告示，確認幾點關門。",acceptKeywords:["営業時間","えいぎょう","何時"]},
    kanjiTask:{target:"営業",hint:"営業",emoji:"🏢",title:"🏢 営業（營火下做生意）",story:"「営」上面像營火（⺍冖），下面是呂。圍著營火做生意，就是營業。確認營業時間，免得車被鎖在裡面！"}
  },

  // ──────────────── 🛣️ 鐵道與交流道 (10 句) ────────────────
  {
    id:"rail_01", category:"month_1", theme:"railway",
    topic:"平交道安全",
    fullSentence:"踏切では一時停止してください。", translation:"在平交道請務必暫停。", fullTts:"ふみきりではいちじていししてください",
    chunks:[
      {text:"踏切",tts:"ふみきり",type:"noun",highlights:[{target:"踏切",cssClass:"color-noun-green",note:"🚂 平交道。日本法律規定一定要停。"}]},
      {text:"では",tts:"では",type:"particle",highlights:[{target:"では",cssClass:"color-particle-red",note:"🔴 在～的場合。"}]},
      {text:"一時停止",tts:"いちじていし",type:"noun",highlights:[{target:"一時停止",cssClass:"color-noun-green",note:"🛑 暫停。不停下來會被開罰單！"}]},
      {text:"してください",tts:"してください",type:"verb",highlights:[{target:"してください",cssClass:"color-verb-blue",note:"🙏 請做。"}]}
    ],
    roleplay:{instruction:"看到平交道標誌，大聲提醒駕駛要停下來。",acceptKeywords:["踏切","停止","ふみきり","ていし"]},
    kanjiTask:{target:"踏切",hint:"踏切",emoji:"🚂",title:"🚂 踏切（火車踏過的切面）",story:"「踏」左邊是足，右邊是反覆動作。「切」是用刀切。火車踏過道路的切面＝平交道。日本沒暫停會被嚴格取締！"}
  },
  {
    id:"rail_02", category:"month_1", theme:"railway",
    topic:"休息站補給",
    fullSentence:"次のSAで休憩しよう。", translation:"在下一個休息站休息吧。", fullTts:"つぎのサービスエリアできゅうけいしよう",
    chunks:[
      {text:"次の",tts:"つぎの",type:"noun",highlights:[{target:"次",cssClass:"color-noun-green",note:"➡ 下一個。"}]},
      {text:"SA",tts:"サービスエリア",type:"noun",highlights:[{target:"SA",cssClass:"color-noun-green",note:"🏪 Service Area＝大型休息站，有餐廳、商店、加油站。"}]},
      {text:"で",tts:"で",type:"particle",highlights:[{target:"で",cssClass:"color-particle-red",note:"🔴 在～（動作場所）。"}]},
      {text:"休憩",tts:"きゅうけい",type:"noun",highlights:[{target:"休憩",cssClass:"color-noun-green",note:"☕ 休息。高速公路每 50km 左右有休息站。"}]},
      {text:"しよう",tts:"しよう",type:"verb",highlights:[{target:"しよう",cssClass:"color-verb-blue",note:"💪 ～吧！（意志形，提議）"}]}
    ],
    roleplay:{instruction:"開了一陣子有點累，提議到下一個休息站停一停。",acceptKeywords:["休憩","きゅうけい","SA","サービス"]},
    kanjiTask:{target:"休憩",hint:"休憩",emoji:"☕",title:"☕ 休憩（靠在樹旁歇口氣）",story:"「休」是人靠著木（樹）。「憩」上面是舌下面是心＝心與舌都放鬆。靠在樹旁讓身心都休息，就是休憩！"}
  },
  {
    id:"rail_03", category:"month_1", theme:"railway",
    topic:"ETC卡沒插好",
    fullSentence:"ETCカードが入っていません。", translation:"沒有插入 ETC 卡片。", fullTts:"イーティーシーカードがはいっていません",
    chunks:[
      {text:"ETCカード",tts:"イーティーシーカード",type:"noun",highlights:[{target:"ETCカード",cssClass:"color-noun-green",note:"💳 ETC 卡。沒插好就走 ETC 車道會被攔下！"}]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"入って",tts:"はいって",type:"verb",highlights:[{target:"入って",cssClass:"color-verb-blue",note:"📥 插入、放進。"}]},
      {text:"いません",tts:"いません",type:"verb",highlights:[{target:"いません",cssClass:"color-verb-blue",note:"🚫 沒有（狀態否定）。"}]}
    ],
    roleplay:{instruction:"導航發出警告音，ETC 卡沒插好，趕快提醒。",acceptKeywords:["ETC","カード","入って","はいって"]},
    kanjiTask:{target:"入",hint:"入",emoji:"📥",title:"📥 入（東西落進去）",story:"「入」的形狀就像東西掉進一個口裡。卡片插進機器裡就是「入」。聽到嗶嗶聲記得檢查卡有沒有插好！"}
  },
  {
    id:"rail_04", category:"month_1", theme:"railway",
    topic:"一般車道",
    fullSentence:"一般レーンに進んでください。", translation:"請前進至一般車道。", fullTts:"いっぱんレーンにすすんでください",
    chunks:[
      {text:"一般",tts:"いっぱん",type:"noun",highlights:[{target:"一般",cssClass:"color-noun-green",note:"🟢 一般＝普通。綠色招牌，需抽卡或付現。"}]},
      {text:"レーン",tts:"レーン",type:"noun",highlights:[]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"進んで",tts:"すすんで",type:"verb",highlights:[{target:"進んで",cssClass:"color-verb-blue",note:"➡ 前進。"}]},
      {text:"ください",tts:"ください",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"沒有 ETC 卡，請走一般車道繳費。",acceptKeywords:["一般","いっぱん","レーン","進んで"]},
    kanjiTask:{target:"一般",hint:"一般",emoji:"🟢",title:"🟢 一般（搬運一般物品）",story:"「般」是舟＋殳（工具）＝搬運。「一般」就是普通的、一般的。綠色招牌的一般車道，沒 ETC 就走這邊！"}
  },
  {
    id:"rail_05", category:"month_1", theme:"railway",
    topic:"接近收費站",
    fullSentence:"料金所が近づいています。", translation:"接近收費站了。", fullTts:"りょうきんじょがちかづいています",
    chunks:[
      {text:"料金所",tts:"りょうきんじょ",type:"noun",highlights:[{target:"料金所",cssClass:"color-noun-green",note:"💰 收費站。看到這三個字就準備減速。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"近づいて",tts:"ちかづいて",type:"verb",highlights:[{target:"近づいて",cssClass:"color-verb-blue",note:"🔜 接近、靠近。"}]},
      {text:"います",tts:"います",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"導航提示前方有收費站，請告知駕駛。",acceptKeywords:["料金所","りょうきんじょ","近づいて"]},
    kanjiTask:{target:"料金",hint:"料金",emoji:"💰",title:"💰 料金（米量出的黃金）",story:"「料」是米＋斗＝用斗量米。「金」是金屬、錢。量出要付的錢＝費用。收費站就是「料金所」！"}
  },
  {
    id:"rail_06", category:"month_1", theme:"railway",
    topic:"下交流道",
    fullSentence:"ここで高速道路を降ります。", translation:"在這裡下高速公路。", fullTts:"ここでこうそくどうろをおります",
    chunks:[
      {text:"ここ",tts:"ここ",type:"noun",highlights:[]},
      {text:"で",tts:"で",type:"particle",highlights:[]},
      {text:"高速道路",tts:"こうそくどうろ",type:"noun",highlights:[{target:"高速道路",cssClass:"color-noun-green",note:"🛣️ 高速公路。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"降ります",tts:"おります",type:"verb",highlights:[{target:"降ります",cssClass:"color-verb-blue",note:"⬇️ 下車、下交流道。"}]}
    ],
    roleplay:{instruction:"導航提示即將到達交流道出口，說出要下高速公路。",acceptKeywords:["降ります","おります","高速"]},
    kanjiTask:{target:"降",hint:"降",emoji:"⬇️",title:"⬇️ 降（從山坡走下來）",story:"左邊是山丘（阝），右邊是「夅」＝往下。從山丘往下走就是「降」。下交流道＝降ります！"}
  },
  {
    id:"rail_07", category:"month_1", theme:"railway",
    topic:"匯流注意",
    fullSentence:"右側から合流してくる車に注意。", translation:"注意從右側匯流進來的車。", fullTts:"みぎがわからごうりゅうしてくるくるまにちゅうい",
    chunks:[
      {text:"右側",tts:"みぎがわ",type:"noun",highlights:[{target:"右側",cssClass:"color-noun-green",note:"➡ 右邊。"}]},
      {text:"から",tts:"から",type:"particle",highlights:[{target:"から",cssClass:"color-particle-red",note:"🔴 從～。"}]},
      {text:"合流",tts:"ごうりゅう",type:"noun",highlights:[{target:"合流",cssClass:"color-noun-green",note:"🔀 匯流。日本高速公路匝道很短，要特別注意！"}]},
      {text:"してくる",tts:"してくる",type:"verb",highlights:[]},
      {text:"車",tts:"くるま",type:"noun",highlights:[]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"注意",tts:"ちゅうい",type:"noun",highlights:[{target:"注意",cssClass:"color-noun-green",note:"⚠️ 注意、小心。"}]}
    ],
    roleplay:{instruction:"高速公路右邊有匝道車輛準備匯入，提醒駕駛注意。",acceptKeywords:["合流","ごうりゅう","注意","右側"]},
    kanjiTask:{target:"合流",hint:"合流",emoji:"🔀",title:"🔀 合流（河水合在一起流）",story:"「合」是嘴巴（口）合在一起。「流」是水在流動。兩條路的車像河水般合在一起流動，就是「合流」！"}
  },
  {
    id:"rail_08", category:"month_1", theme:"railway",
    topic:"加油站位置",
    fullSentence:"給油所は次のPAにあります。", translation:"加油站在下一個停車區。", fullTts:"きゅうゆじょはつぎのパーキングエリアにあります",
    chunks:[
      {text:"給油所",tts:"きゅうゆじょ",type:"noun",highlights:[{target:"給油所",cssClass:"color-noun-green",note:"⛽ 加油站。高速公路上不是每個休息站都有！"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"次の",tts:"つぎの",type:"noun",highlights:[]},
      {text:"PA",tts:"パーキングエリア",type:"noun",highlights:[{target:"PA",cssClass:"color-noun-green",note:"🅿️ Parking Area＝小型休息站。"}]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"あります",tts:"あります",type:"verb",highlights:[{target:"あります",cssClass:"color-verb-blue",note:"📍 有、存在。"}]}
    ],
    roleplay:{instruction:"油量警示燈亮了，告訴駕駛下一個 PA 有加油站。",acceptKeywords:["給油所","きゅうゆじょ","PA","次"]},
    kanjiTask:{target:"給油",hint:"給油",emoji:"⛽",title:"⛽ 給油（把油給車喝）",story:"「給」是絲＋合＝把東西合在一起給出去。「油」是水＋由。把油給車子，就是加油！高速公路上看到「給油所」趕快進去！"}
  },
  {
    id:"rail_09", category:"month_1", theme:"railway",
    topic:"前方塞車",
    fullSentence:"この先、渋滞が発生しています。", translation:"前方發生了塞車。", fullTts:"このさき、じゅうたいがはっせいしています",
    chunks:[
      {text:"この先",tts:"このさき",type:"noun",highlights:[{target:"この先",cssClass:"color-noun-green",note:"🔜 前方、這之後。"}]},
      {text:"渋滞",tts:"じゅうたい",type:"noun",highlights:[{target:"渋滞",cssClass:"color-noun-green",note:"🚗🚗🚗 塞車。電子看板上常見的紅字。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"発生",tts:"はっせい",type:"noun",highlights:[{target:"発生",cssClass:"color-noun-green",note:"💥 發生。"}]},
      {text:"しています",tts:"しています",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"看到高速公路電子看板顯示紅字，告知駕駛前方塞車。",acceptKeywords:["渋滞","じゅうたい","発生"]},
    kanjiTask:{target:"渋滞",hint:"渋滞",emoji:"🚗",title:"🚗 渋滞（水流又澀又停）",story:"「渋」是水＋澀＝水流不順暢。「滞」是水＋帶＝水被帶住、停滯。水流停滯不動＝塞車。看到電子看板這兩字要有心理準備！"}
  },
  {
    id:"rail_10", category:"month_1", theme:"railway",
    topic:"保持車距",
    fullSentence:"車間距離を空けてください。", translation:"請拉開安全車距。", fullTts:"しゃかんきょりをあけてください",
    chunks:[
      {text:"車間距離",tts:"しゃかんきょり",type:"noun",highlights:[{target:"車間距離",cssClass:"color-noun-green",note:"📏 車與車之間的距離。高速公路電子看板常見的警告。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"空けて",tts:"あけて",type:"verb",highlights:[{target:"空けて",cssClass:"color-verb-blue",note:"↔️ 空出、拉開。"}]},
      {text:"ください",tts:"ください",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"跟車太近了，提醒駕駛拉開安全距離。",acceptKeywords:["車間距離","しゃかんきょり","空けて"]},
    kanjiTask:{target:"距離",hint:"距離",emoji:"📏",title:"📏 距離（腳步離多遠）",story:"「距」是足＋巨＝大步。「離」是離開。腳步離開多遠的距離＝車距。高速公路至少要保持 100 公尺！"}
  },

  // ──────────────── ⚠️ 道路速限與特殊規則 (10 句) ────────────────
  {
    id:"rule_01", category:"month_1", theme:"rules",
    topic:"速度限制",
    fullSentence:"制限速度は五十キロです。", translation:"速限是 50 公里。", fullTts:"せいげんそくどはごじゅうきろです",
    chunks:[
      {text:"制限速度",tts:"せいげんそくど",type:"noun",highlights:[{target:"制限速度",cssClass:"color-noun-green",note:"⚠️ 速限。藍底白字的圓形標誌。"}]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"五十キロ",tts:"ごじゅうきろ",type:"noun",highlights:[{target:"五十",cssClass:"color-noun-green",note:"5️⃣0️⃣ 五十。"}]},
      {text:"です",tts:"です",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"讀出路邊標誌上的速限。",acceptKeywords:["制限速度","せいげん","五十"]},
    kanjiTask:{target:"制限",hint:"制限",emoji:"⚠️",title:"⚠️ 制限（用刀裁制界限）",story:"「制」是衣＋刀＝用刀裁衣服，控制大小。「限」是山＋艮＝被山擋住。速度被控制在一個界限以內＝速限！"}
  },
  {
    id:"rule_02", category:"month_1", theme:"rules",
    topic:"禁止超車",
    fullSentence:"ここは追い越し禁止です。", translation:"這裡禁止超車。", fullTts:"ここはおいこしきんしです",
    chunks:[
      {text:"ここ",tts:"ここ",type:"noun",highlights:[]},
      {text:"は",tts:"わ",type:"particle",highlights:[]},
      {text:"追い越し",tts:"おいこし",type:"noun",highlights:[{target:"追い越し",cssClass:"color-noun-green",note:"🏎️ 超車。跨越黃實線會被開單！"}]},
      {text:"禁止",tts:"きんし",type:"noun",highlights:[{target:"禁止",cssClass:"color-noun-green",note:"🚫 禁止。"}]},
      {text:"です",tts:"です",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"看到黃色實線，告訴駕駛這裡不能超車。",acceptKeywords:["追い越し","おいこし","禁止"]},
    kanjiTask:{target:"追越",hint:"追越",emoji:"🏎️",title:"🏎️ 追越（追上去翻越過去）",story:"「追」是走＋⺈＝追趕。「越」是走＋戉＝跨越。追趕上去再跨越過去＝超車。黃線路段千萬別做！"}
  },
  {
    id:"rule_03", category:"month_1", theme:"rules",
    topic:"行人最大",
    fullSentence:"歩行者優先です。", translation:"行人優先。", fullTts:"ほこうしゃゆうせんです",
    chunks:[
      {text:"歩行者",tts:"ほこうしゃ",type:"noun",highlights:[{target:"歩行者",cssClass:"color-noun-green",note:"🚶 行人。日本路權絕對是行人最大！"}]},
      {text:"優先",tts:"ゆうせん",type:"noun",highlights:[{target:"優先",cssClass:"color-noun-green",note:"👑 優先、最優先。"}]},
      {text:"です",tts:"です",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"斑馬線上有行人，提醒駕駛一定要讓。",acceptKeywords:["歩行者","ほこうしゃ","優先"]},
    kanjiTask:{target:"歩行",hint:"歩行",emoji:"🚶",title:"🚶 歩行（用腳一步步走）",story:"「歩」上面是止（腳印），下面是少＝少量移動。「行」是十字路口。在路口一步步走路的人就是「歩行者」！"}
  },
  {
    id:"rule_04", category:"month_1", theme:"rules",
    topic:"指定方向限制",
    fullSentence:"指定方向外進行禁止です。", translation:"禁止往指定方向以外行駛。", fullTts:"していほうこうがいしんこうきんしです",
    chunks:[
      {text:"指定方向外",tts:"していほうこうがい",type:"noun",highlights:[{target:"指定",cssClass:"color-noun-green",note:"👆 指定。藍底白色箭頭，只能順著箭頭開。"}]},
      {text:"進行禁止",tts:"しんこうきんし",type:"noun",highlights:[{target:"進行禁止",cssClass:"color-noun-green",note:"🚫 禁止前進。"}]},
      {text:"です",tts:"です",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"路口有藍色箭頭標誌，只能順著箭頭方向行駛。",acceptKeywords:["指定","してい","進行禁止"]},
    kanjiTask:{target:"指定",hint:"指定",emoji:"👆",title:"👆 指定（手指頭釘住）",story:"「指」是手＋旨＝手指。「定」是宀＋正＝屋頂下正確的位置。用手指頭釘住正確方向，就是指定！"}
  },
  {
    id:"rule_05", category:"month_1", theme:"rules",
    topic:"右轉專用道",
    fullSentence:"右折専用レーンに入ります。", translation:"進入右轉專用道。", fullTts:"うせつせんようレーンにはいります",
    chunks:[
      {text:"右折",tts:"うせつ",type:"noun",highlights:[{target:"右折",cssClass:"color-noun-green",note:"➡ 右轉。右折/左折＝右轉/左轉。"}]},
      {text:"専用",tts:"せんよう",type:"noun",highlights:[]},
      {text:"レーン",tts:"レーン",type:"noun",highlights:[]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"入ります",tts:"はいります",type:"verb",highlights:[{target:"入ります",cssClass:"color-verb-blue",note:"📥 進入。"}]}
    ],
    roleplay:{instruction:"導航提示前方要右轉，請切到右轉車道。",acceptKeywords:["右折","うせつ","専用"]},
    kanjiTask:{target:"右折",hint:"右折",emoji:"➡",title:"➡ 右折（向右折彎）",story:"「右」是口＋手＝慣用右手。「折」是手＋斤（斧頭）＝把東西折斷、轉彎。車子向右折彎就是「右折」！"}
  },
  {
    id:"rule_06", category:"month_1", theme:"rules",
    topic:"當心動物",
    fullSentence:"動物注意の標識があります。", translation:"有當心動物的標誌。", fullTts:"どうぶつちゅういのひょうしきがあります",
    chunks:[
      {text:"動物注意",tts:"どうぶつちゅうい",type:"noun",highlights:[{target:"動物",cssClass:"color-noun-green",note:"🦌 動物。北海道或山區常見，小心鹿或熊！"}]},
      {text:"の",tts:"の",type:"particle",highlights:[]},
      {text:"標識",tts:"ひょうしき",type:"noun",highlights:[{target:"標識",cssClass:"color-noun-green",note:"⚠️ 標誌、交通號誌。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"あります",tts:"あります",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"山路上看到黃色三角形動物標誌，提醒駕駛。",acceptKeywords:["動物","どうぶつ","注意"]},
    kanjiTask:{target:"動物",hint:"動物",emoji:"🦌",title:"🦌 動物（會動的物體）",story:"「動」是重＋力＝用力移動重物。「物」是牛＋勿＝不要只看到牛。會自己動的東西＝動物。山路上牠們會突然跑出來！"}
  },
  {
    id:"rule_07", category:"month_1", theme:"rules",
    topic:"路面結冰",
    fullSentence:"路面凍結に注意してください。", translation:"請小心路面結冰。", fullTts:"ろめんとうけつにちゅういしてください",
    chunks:[
      {text:"路面",tts:"ろめん",type:"noun",highlights:[]},
      {text:"凍結",tts:"とうけつ",type:"noun",highlights:[{target:"凍結",cssClass:"color-noun-green",note:"🧊 結冰。冬季自駕的保命字眼！"}]},
      {text:"に",tts:"に",type:"particle",highlights:[]},
      {text:"注意して",tts:"ちゅういして",type:"verb",highlights:[{target:"注意して",cssClass:"color-verb-blue",note:"⚠️ 請注意。"}]},
      {text:"ください",tts:"ください",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"冬天山路看到凍結警告標誌，提醒駕駛減速。",acceptKeywords:["凍結","とうけつ","注意","路面"]},
    kanjiTask:{target:"凍結",hint:"凍結",emoji:"🧊",title:"🧊 凍結（水結成冰凍住）",story:"「凍」是冫（冰）＋東。東方的寒冷讓水結冰。「結」是絲＋吉＝絲線打結。水凍結成冰＝路面凍結。冬天看到這兩字一定要放慢！"}
  },
  {
    id:"rule_08", category:"month_1", theme:"rules",
    topic:"急轉彎警告",
    fullSentence:"この先、急カーブがあります。", translation:"前方有急轉彎。", fullTts:"このさき、きゅうカーブがあります",
    chunks:[
      {text:"この先",tts:"このさき",type:"noun",highlights:[]},
      {text:"急カーブ",tts:"きゅうカーブ",type:"noun",highlights:[{target:"急",cssClass:"color-noun-green",note:"⚡ 急＝突然、猛烈。急カーブ＝急轉彎。"}]},
      {text:"が",tts:"が",type:"particle",highlights:[]},
      {text:"あります",tts:"あります",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"山路前方有連續急彎警示，告知駕駛。",acceptKeywords:["急","きゅう","カーブ"]},
    kanjiTask:{target:"急",hint:"急",emoji:"⚡",title:"⚡ 急（手抓住心臟）",story:"上面是「⺈」（手），中間是「彐」，下面是「心」。手猛抓住心臟的感覺＝好急好緊張。山路的急轉彎就是這種感覺！"}
  },
  {
    id:"rule_09", category:"month_1", theme:"rules",
    topic:"暫停確認安全",
    fullSentence:"一時停止して、左右を確認します。", translation:"暫停一下，確認左右來車。", fullTts:"いちじていしして、さゆうをかくにんします",
    chunks:[
      {text:"一時停止",tts:"いちじていし",type:"noun",highlights:[{target:"一時停止",cssClass:"color-noun-green",note:"🛑 暫停。日本很多無號誌路口都要停。"}]},
      {text:"して",tts:"して",type:"verb",highlights:[]},
      {text:"左右",tts:"さゆう",type:"noun",highlights:[{target:"左右",cssClass:"color-noun-green",note:"↔️ 左邊和右邊。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"確認",tts:"かくにん",type:"noun",highlights:[{target:"確認",cssClass:"color-noun-green",note:"✅ 確認。自駕最重要的防禦動作！"}]},
      {text:"します",tts:"します",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"到了無號誌路口，提醒駕駛停下來左右確認。",acceptKeywords:["一時停止","確認","かくにん","左右"]},
    kanjiTask:{target:"確認",hint:"確認",emoji:"✅",title:"✅ 確認（石頭般確實地認定）",story:"「確」是石＋角＝像石頭一樣堅硬確實。「認」是言＋忍＝仔細看過忍耐確認。確確實實地認定安全了才能走！"}
  },
  {
    id:"rule_10", category:"month_1", theme:"rules",
    topic:"減速行駛",
    fullSentence:"スピードを落としてください。", translation:"請減低速度。", fullTts:"スピードをおとしてください",
    chunks:[
      {text:"スピード",tts:"スピード",type:"noun",highlights:[{target:"スピード",cssClass:"color-noun-green",note:"💨 速度 (Speed)。"}]},
      {text:"を",tts:"を",type:"particle",highlights:[]},
      {text:"落として",tts:"おとして",type:"verb",highlights:[{target:"落として",cssClass:"color-verb-blue",note:"⬇️ 落下、降低。"}]},
      {text:"ください",tts:"ください",type:"verb",highlights:[]}
    ],
    roleplay:{instruction:"車速太快了，請提醒駕駛減速。",acceptKeywords:["スピード","落として","おとして"]},
    kanjiTask:{target:"落",hint:"落",emoji:"⬇️",title:"⬇️ 落（草葉從水邊落下）",story:"上面是草（艹），中間是水（氵），下面是各。草葉從高處落入水中。速度往下「落」就是減速。看到這字就鬆開油門！"}
  }

  ] // end units
}, // end month_1

// ┌─────────────────────────────────────────────────────────┐
// │  第二個月：導航指引（待擴展）                             │
// └─────────────────────────────────────────────────────────┘
month_2: {
  title: "第二個月：導航指引",
  subtitle: "聽懂導航、問路、方位",
  units: []
},

// ┌─────────────────────────────────────────────────────────┐
// │  第三個月：實戰對話（待擴展）                             │
// └─────────────────────────────────────────────────────────┘
month_3: {
  title: "第三個月：實戰對話",
  subtitle: "加油站、收費站、租車",
  units: []
},

// ┌─────────────────────────────────────────────────────────┐
// │  第四個月：突發應變（待擴展）                             │
// └─────────────────────────────────────────────────────────┘
month_4: {
  title: "第四個月：突發應變",
  subtitle: "故障求助、餐廳、飯店",
  units: []
}

}; // end CURRICULUM
