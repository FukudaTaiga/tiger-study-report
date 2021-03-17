import React from 'react';
import Link from 'next/link';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

function HTMLTag(): React.ReactNode {
  return(
    <Page header="HTMLの全体的な構成">
      <Section header="html">
        <p>
          以下にhtmlタグのひな形を載せておく.
          それぞれの意味・用途をまとめていく.
        </p>

        <Example>
          <pre><code>{`
          <!DOCTYPE html>
          <html lang="en" dir="ltr">
            <head>
              ここに何か書くよ
            </head>
            <body>
              ここに何か書くよ
            </body>
          </html>
          `}</code></pre>
        </Example>
        <SubSection header="DOCTYPE宣言">
          <p>
            <code>{`<!DOCTYPE html>`}</code>は
            ソースコードがHTML, XHTMLで記述されていることを示す為に文書の先頭に記述する. <br />
            HTMLのバージョン・DTD(Document Type Definition)等指定できるらしいが,
            私は初学者で特に必要性を感じていないため, 利用する機会があり学んだ場合はまとめようと思う.
            このまま記述するとHTML5の仕様で解釈されることになる.
          </p>
        </SubSection>

        <SubSection header="htmlタグ">
          <p>
            html文書の開始・終了を示すタグ.
            <code>{`<!DOCTYPE html>`}</code>以外は全てこのタグの中に記述されているはず. <br />
            head, bodyの二つを配置する. <br />
            特にここで指定するものとして言語や方向がある.
            上記の例で<code>{`<html lang="en" dir="ltr">`}</code>となっている部分だ.
            これらが何を意味するかというと,
          </p>
          <TextArea>
            <ul className="list-none">
              <li key={1}> lang=en: ページ内の言語が英語だという意味. 日本語ならja. </li>
              <li key={2}> dir=ltr: 読む方向が左(Left)から(To)右(Right)という意味. アラビア語等ならrtlになるだろう. </li>
            </ul>
          </TextArea>
          <p>
            そんなに難しいことはない.
          </p>
        </SubSection>

        <SubSection header="headタグ">
          <p>
            このタグの中では
            メタデータ(コンピュータが読む為のデータ)が格納される.
            例えば, タイトル, スタイルシート(cssの情報), script情報, 外部ソースとの関係,
            文書内のリンクのルート等.
            詳しくは
            <Link href="/html/headertag">
              <a className="font-bold">ここ</a>
            </Link>. <br />
            headは省略できるが, HTML5対応ブラウザでは自動的に生成されるらしい. 普通に書いたほうがいい.
            <Link href="https://developer.mozilla.org/ja/docs/Web/HTML/Element/head" passHref={true}>
              <a>参照</a>
            </Link>
          </p>
        </SubSection>

        <SubSection header="bodyタグ">
          <p>
            このタグの中にメインとなるコンテンツを記述する.
            大量になってしまうので詳しくは
            <Link href="/html/bodytag">
              <a className="font-bold">ここ</a>
            </Link>.
          </p>
        </SubSection>
      </Section>
    </Page>
  );
}

export default HTMLTag;
