# Discovery Hack

## 準備

### サービスを作成する

```
npm run service
```

サービスと Watson Discovery News (English) が作成される。

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