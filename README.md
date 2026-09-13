# Halcyon — Landing Page

架空のサービス「Halcyon」のランディングページです。
HTML と CSS のみで、レスポンシブに対応しています。

## 公開URL

https://ohya1359-debug.github.io/Halcyon/

## 使用技術

- HTML
- CSS(Grid / Flexbox)

## 実装したこと

- CSS Grid による bento レイアウト(3列のうち、2枚のカードが2列分をまたぐ)
- Flexbox の入れ子によるヘッダーとフッターの構成
- CSS 変数による配色の管理
- すべてのリンクとボタンに hover / focus 状態
- 900px / 640px の2段階でのレスポンシブ対応

## 学んだこと

- `grid-column: span 2` でセルを複数列にまたがらせる方法
- `justify-content` や `align-items` は、余っている空間がなければ効かない
- `margin-top: auto`