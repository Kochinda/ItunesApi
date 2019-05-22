$(function(){

  $('#search-btn').on('click', function(){
    // 検索ボタンがクリックされたら


    //iTunesに検索をしに行く処理(Ajax)を使います。
    $.ajax({
      // データを通信するところ ex:iTunesのAPIのサイトに行ってこぴってくる。’エンドポイント’
      url:'https://itunes.apple.com/search', 
      type: 'GET', //get 送信か、post送信か
      dataType: 'jsonp', //検索結果の形式 連想配列として取得される
      data: {

        term: 'あいみょん',
        country: 'jp',
      }


    }).done ( (data) => {
      // 通信成功したとき

      console.log(data);

    }).fail((error) => {
      // 通信失敗したとき
      console.log(error);

    })

    

  });

});