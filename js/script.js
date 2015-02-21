<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8">
    <title>5374坂戸市(仮)</title>  
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=0" />
    <link rel="apple-touch-icon-precomposed" href="apple-touch-icon-precomposed.png" />
    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet" media="screen" />
    <link href="css/custom.css" rel="stylesheet" media="screen" />

	<script src="http://maps.google.com/maps/api/js?sensor=true&langage=ja"></script>
	<style>
		#map {
			width: 280px;
			height: 280px;
		}
	</style>

  </head>
  
  <body>
  <style id="accordion-style" type="text/css"></style>
  <div id="accordion"></div>
  <select class="form-control" id="select_area"></select>
  <div class="accordion" id="accordion3">
    
    <div class="accordion-group-top">
      <div class="accordion-heading">
        <a class="accordion-toggle-top" data-toggle="collapse" data-parent="#accordion3" href="#collapse3_0">5374.jpについて</a>
      </div>
      <div id="collapse3_0" class="accordion-body collapse">
        <div class="accordion-inner">
          <div id="help">
ゴミの問題は、どの地域でも深刻になりつつあります。
Code for Kanazawaでは、先ずは正しいゴミの捨て方に注目しました。
目的と使い方は、とてもシンプルです。
            <h2>目的</h2>
「いつ、どのゴミが収集されているのか？」
例えばお引っ越しをされた場合や、新しく坂戸市に住むことになった時、このアプリを使えば、すぐに分かるようにデザインされています。
            <h2>使い方</h2>
            <h3>色でゴミのジャンルを表示</h3>
            <p>一番近いゴミの日とジャンルを上から順に表示しています。</p>
            <h3>捨てる事が可能なゴミ</h3>
            <p>ゴミのジャンルをタップすると、捨てることが可能なゴミの一覧を見ることができます</p>
            <h3>設定</h3>
            <p>お住まいの地域を選択することで、ゴミ収集日が自動的に更新されます。</p>
            <div id="caption">
              <h4>提供されるゴミ情報について</h4>
              <p>坂戸市が公開しているデータから立正大学地球環境科学部環境システム学科後藤研究室が独自に解析し、アプリに実装しました。</p>
             
              <h4>ライセンスについて</h4>
              <p>本アプリの著作権はCode for Kanazawaに帰属します。</p>
            </div>
            <div id="cfk">
              <h3>Code for Kanazawaについて</h3>
              <p>コードで、世界をHappyに。<br />
各地域には様々な課題があり、解決するためのコミュニティ（団体）も数多くあります。<br />
課題の中には、ITやデザインの力で解決できるものも多くありますが、全てのコミュニティにそのスキル（技術）が備わっているわけではありません。<br /><br />
Code for Kanazawa（CfK）は、市民の課題を集め、その課題を整理・分析した上で、メンバーが実際に課題解決となるソフトウェアやハードウェア（仕組みや方法）を開発します。<br />
私たちは、デザインをして、ソフトウェアコードを書き、課題を解決するサービスを完成させるのです。さらに、そのサービスを提供し続ける力も持ちます。<br /><br />
CfKは市民のための組織です。行政や民間企業の影響を受けずに中立・公益の立場から物事を判断するよう心がけています。<br /><br />
公式サイト<br />
<a href="http://www.codeforkanazawa.org/" style=" color: #FF0000;text-decoration: underline;">http://www.codeforkanazawa.org/</a>
<br>5374.jp<br />
<a href="http://5374.jp/index.html" target="_blank"style=" color: #FF0000;text-decoration: underline;">http://5374.jp/index.html</a></p>
            </div>
            <div style="border:solid 1px #0fff00;"></div><br>
              <div id="ris">
5374.jp 坂戸市版は立正大学地球環境科学部環境システム学科後藤研究室とCode for Saitamaにより制作されました。<br><br>
今後スマートフォンのGPSから位置情報を取得する機能を追加する予定です。<br>
間違い・ご要望等ございましたら、下記よりご連絡くださいますようお願い致します。<br>
<br>
Code for Saitama    URL:
<a href="https://www.facebook.com/groups/186097664924714/" target="_blank"style=" color: #FF0000;text-decoration: underline;">https://www.facebook.com/groups...</a><br>
立正大学　地球環境科学部　環境システム学科　<br>
>
    <hr>
後藤研究室（〒360-0194　熊谷市万吉1700）<a href="https://twitter.com/gotshin" target="_blank"style=" color: #0000FF;text-decoration: underline;">@gotshin</a>
              </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="accordion-group-top">
      <div class="accordion-heading">
        <a class="accordion-toggle-top" data-toggle="collapse" data-parent="#accordion3" href="#collapse3_1">ゴミ区分の検索</a>
      </div>
      <div id="collapse3_1" class="accordion-body collapse">
        <div class="accordion-inner">
          <div id="help">
          <h3>下のプルダウンメニューから選択</h3>
	　<select>
          	<option value="sentaku">アイロン</option>
          	<option value="sentaku">アイロン台</option>
      		<option value="sentaku">ICレコーダー</option>
	　</select>
          </div>
        </div>
      </div>
    </div> 
    
  </div>
  <!-- JavaScript plugins (requires jQuery) -->
  <script src="js/jquery-1.10.2.min.js"></script>
  <!-- Include all compiled plugins (below), or include individual files as needed -->
  <script src="js/bootstrap.min.js"></script>
  <!-- Enable responsive features in IE8 with Respond.js (https://github.com/scottjehl/Respond) 
  <script src="js/respond.js"></script>
  -->  
  <!-- ブックマークお勧めポップアップ追加-->
  <script src="js/bookmark-bubble/bookmark_bubble.min.js"></script>
  <script src="js/bookmark-bubble/example/example.min.js"></script>
  <script src="js/setting.js"></script>
  <script src="js/script.js"></script>
  <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-43926409-1', '5374.jp');
  ga('send', 'pageview');
  </script>
  </body>
</html>
