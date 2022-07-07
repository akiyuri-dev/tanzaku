function result() {
    var name = document.getElementById("name").value;
    var hopes = document.getElementById("hopes").value;

    var result = "";
    var wordList = ["楽しくオタク", "アクティブオタク", "両立オタク", "推しのデビュ｜",
        "良席祈願", "楽しい時間", "当選祈願",　"ライブに行きたい",
        "情緒の安定", "野外会場に行く", "円盤を買う", "カラオケに行く", 
        "ファンサが欲しい", "オリ曲が欲しい", "円盤が欲しい", "ツイッタアカウント開設", 
        "主演舞台", "外部舞台出演", "冠ラジオ", "冠番組",
        "サブスク解禁", "バンドとコラボ", "新衣装",　"個人ブログ開設",
        "あの曲の音源化", "あの曲のアレンジ", "運命の人と出会う", "企業コラボ",
        "宣伝起用", "推しの健やかな日々", "仲良しエピを聞きたい",　"生配信を見たい",
        "誕生日を祝ってほしい", "大きなステージで公演", "ドームツアー", "アリーナツアー",
        "ファンクラブ開設", "サブスク解禁", "サブスク解禁",
        "インスタ開設", "ウェイボ開設", "ティックトック開設", "デビュ｜",
        "熱狂したい", "ドキュメンタリ出演", "司会起用", "表紙起用",
        "先輩のカバー", "ソロ曲", "新しい境地へ", "メンタルを保つ",
        "ライブを当てる", "友達とライブに行く", "カウコンに行く", "遠征をする", "振り切る", 
        "張り切る", "かわいいグッズが欲しい", "過去作を見たい", "過去グッズが欲しい",
        "愛を叫びたい", "銀テが欲しい", "舞台が中止になりませんように", "ライブが中止になりませんように"];

    var wordSize = wordList.length;
    var j = Math.floor( Math.random() * wordSize );
    var hope = "";
    if(hopes == ""){
        hope = wordList[j];
    }else{
        hope = hopes;
    }
    

    for(var i = 0;i < hope.length; i++){
        result += "\n┃　" + hope[i] + "　┃";
    }

    var tateName = "";

    for (let index = 0; index < name.length; index++) {
        tateName += "\n┃　　" + name[index] + "┃";    
    }
    
    var tweetURL = "https://twitter.com/intent/tweet?text=" 
        + encodeURIComponent("┏━┷━┓" 
        + result
        + tateName
        + "\n┗━━━┛\n#ジャニオタ短冊");

    var subTweetURL = tweetURL + "&url=" +  encodeURIComponent(window.location.href);

    var tweetText = "<a href='" + subTweetURL + 
    "' class='twitter-share-button data-lang='ja' data-show-count='false' target='_brank'>"
    + "<button type='button' class='btn btn-info'>ツイートする</button></a>"
    + "<script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>";

    var html = "<div class='card mb-3'><div class='card-header'>" 
    + name 
    + "さんのジャニオタ的願いは</div>"
    + "<div class='card-body'><p class='card-text'>「"
    + hope + "」です。</p></div></div>"
    + "<div id='tweet'>" + tweetText + "</div>";
    document.getElementById("result").innerHTML = html;
}