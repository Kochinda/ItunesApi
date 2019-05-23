// カードの雛形
let cardTemplate = null;



$(function(){
  // card.htmlを読み込む
  $.get('../../card.html', function(temp) {
    cardTemplate = $(temp);
  })

  $('#search-btn').on('click', function(){
    // 検索ボタンがクリックされたら,

    //データをリセットさせる。そうしないと、結果がどんどんクローンされるから。  
    $('#result').empty();


    // 検索ワードを取得する
    let searchWord = $('#search-word').val();


    //iTunesに検索をしに行く処理(Ajax)を使います。
    $.ajax({
      // データを通信するところ ex:iTunesのAPIのサイトに行ってこぴってくる。’エンドポイント’
      url:'https://itunes.apple.com/search', 
      type: 'GET', //GET送信(data取得）か、POST送信(detaを送る）か
      dataType: 'jsonp', //検索結果の形式 連想配列として取得される
      data: {
        term: searchWord, //L7 で取得した値
        country: 'jp',
        
      }


    }).done ( (data) => {
      // 通信が成功したとき取得したいデータを選ぶ

      for (item of data.results){
        // CDの画像を取ってくる
        let imgPath = item.artworkUrl100;

        // CDのタイトルを取ってくる
        let collectionName = item.collectionName;

        // iTUneのaリンクurlを取ってくる
        let collectionViewUrl = item.collectionViewUrl;
        
        //変数にテンプレートのクローンを作る 
        let card = cardTemplate.clone();

        // スローンにタイトル、イメージ、URLを設定する。
        card.find('img').attr('src', imgPath);
        card.find('h5').text(collectionName);
        card.find('a').attr('href', collectionViewUrl);
        


        // 取得した値をCARD.HTML ファイルに読み込む
        $('#result').append(card);
  
      }



    

    }).fail((error) => {
      // 通信失敗したとき
      console.log(error);

    })

    

  });

});