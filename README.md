# Discovery Hack

## 準備

### サービスを作成する

* Discovery サービスインスタンス

    ```
    npm run service
    ```

    - サービスと Watson Discovery News (English) が作成される。

* Object Storage

    ```
    bx service create cloud-object-storage Premium cos-ippei
    ```

    - これだと、IBM Cloud Console 上 `cos-ippei` という名前にならない。UUID？ サポートに問合せ中
    - とりあえず Console から買うことにする。

## Environments
* Done
    - list
    - list detail (id指定、ステータスが付加)
    - create
    - update (サンプルコード無し、name, description の変更)
    - delete
* Pending
    - list field (Node information not currently available.)

## Configurations
Node.js ではあまり操作できなそう。createEnvironment で自動生成されるので気にする必要ない？
* Done
    - list
* Pending
    - add (Node method not currently available.)
    - Element Classification Enrichments (サンプルコード無し)
    - update (サンプルコード無し, 実行すると null が返されるが params の値に更新されない？)
    - delete (ode method not currently available.)

## Collections
* Done
    - create (params collection_name は誤植、name が正解っぽい。。。)
    - list
    - list detail
    - delete
* Pending
    - List collection fields (Node information not currently available.)
    - update (Node method not currently available)

## Documents
* Done
    - add (.html, .pdf, .docx, を追加, .txt はエラーなのはOK、agile.json はエラー Why？ ja は not supported??)
    - delete (document_id 指定で消す、但し、id を list する方法が無い)
* Pending
    - update (Node method not currently available.)
    - list (じゃなくて実体はget a doc, しかも Node method not currently available.)

## Queries
* Done
    - Query your collection
* Pending
    - Query ingestion notices (メソッド queryNotices はあるっぽいが、Example request not currently available.)
    - Multiple collection querying (メソッド無いっぽいのに Example request not currently available. RESTだと対象の collection_id を渡しているので、query の複数発行で吸収可能 )
    - Notices across multiple collections (メソッド無いっぽいのに、Example request not currently available. 前述 queryNotices の複数発行で九州可能か？)
    - Knowledge Graph Entity Queries (メソッド queryEntities はあるっぽいが、Example request not currently available.)
    - Knowledge Graph Relationship Queries (メソッド queryRelations はあるっぽいが、Example request not currently available.)

## Ranking
    - 後継 Relevancy Training ってどれ？

## 感想
* 文書IDの一覧を取得できないので、管理UI的な物を作る場合は DB 的なものが必要。
* 使い倒そうとすると、フィールドやらエンリッチやら情報を付加、クエリーを組み立てる必要がありそう。Automatic にならない。
* REST (Curl) の API に比べ Java, Node.js, Python は未対応が多い。が、Node.js の watson-developer-cloud で取込むだろうから、request や axios などで自前のアクセッサを開発するのは非効率。