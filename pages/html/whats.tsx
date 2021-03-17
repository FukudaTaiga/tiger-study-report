import React, {ReactComponentElement} from 'react';
import Link from 'next/link';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

export default function WhatsHTML() {
  return (
    <Page header="そもそもHTMLって何？">
      <Section header="htmlとは?">
        <p>
          htmlとは <span className="red">Hyper Text Markup Language</span> の略で
          多くのwebページを構成する言語の一つである.
          以下, それぞれの語をまとめ, 何ができるのか考えてみよう.
        </p>

        <SubSection header="Hyper Text">
          <p>
            <Link href="https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88" passHref={true}>
              <a>wikipedia</a>
            </Link>
            によると,
          </p>
          <blockquote cite="https://ja.wikipedia.org/wiki/%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88">
            ハイパーテキスト (hypertext) とは、複数の文書（テキスト）を相互に関連付け、結び付ける仕組みである。
            「テキストを超える」という意味から"hyper-"（～を超えた） "text"（文書）と名付けられた。テキスト間を結びつける参照のことをハイパーリンクと言う。
            ハイパーテキストを組織化することについての限界（特にその線形性）を克服しようとするものである。
            ハイパーテキストによる文書は静的（前もって準備され格納されている）または動的に（ユーザの入力に応じて）生成される。<br />
            中略 <br />
            最も有名なハイパーテキストの実装はWorld Wide Webである。
          </blockquote>
          <p>
            簡単に言えば, google等のブラウザからサーバーにアクセスするとwebページが表示されるが,
            ページには様々なリンクが有り, すぐに参照できるだろう.
            そのような仕組みのある文書を総称してHyper Textと呼ぶという訳だ.
            検索窓にある"http(s)://www/..."の"www"はWorld Wide Webの略である.
            先頭の"http(s)://"は, ここでは深く触れないが,
            通信のprotcolにHyper Text Transfer Protcol (Secure)を使っているということだ.
          </p>
        </SubSection>

        <SubSection header="Markup Language">
          <p>
            Markup Languageとはhtmlのような文章構造を記述する為の言語だ.
            プログラミング言語ではないので計算を行ったり, 動的な振る舞い(webページを表示する段階で決まっていないようなこと)はできない.
            あくまでheadline, paragraph, linkなどをコンピュータに教えるために使用する言語だということだ. <br />
            我々がURLをクリックすると, ブラウザは「このページが見たいからページの内容を送ってくれ!」とサーバーにリクエストを送る.
            するとサーバーは「こういう文書だよ～, どういう順番で何を書けばいいかはこの指示に従ってね～」と指示がまとまったものを返してくる. <br />
            これが"~.html"というファイルで, ブラウザはその指示(html)に従ってページを生成し, 我々に見やすいページを表示しているのだ.
          </p>
        </SubSection>

        <SubSection header="Webページを構成する言語">
          <p>
            しかし, 以上の説明から「でも, どう書けばいいかだけだと, どこになにを書くか, 何色にするかとかわかんなくない？」
            「上から降ってくる広告とか折り畳みになってる目次とかどうやってるの？」と感じた方もいるだろう.
            これらは実際htmlのみでは実現できないし, 世の中のwebページでhtmlのみで書かれたものはないだろう. <br />
            前者のどこに何を・どんな風に書けばいいかを指定するために使われるのが
            <span className="text-red-500">css</span> であり,
            後者の動的な作用を記述しているのは <span className="text-red-500">javascript</span>だ.
            これに加えてサーバー側で動作する言語として<span className="text-red-500">php</span>などがある. <br />
            それぞれの言語には得意なことが違い, 我々が見ているwebページは様々な言語たちが協力し合ってできているのだ.
          </p>
        </SubSection>
      </Section>
    </Page>
  );
}
