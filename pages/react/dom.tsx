import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Page, Section, SubSection, SubSection2, TextArea, Example, Reference} from '../../components/util';

const DOMReact: React.FC = () => {
  return(
    <Page header="React DOM">
      <Section header="DOMとは">
        <p>
          <span className="text-red-500">DOM</span>とは,
          <span className="text-red-500 text-bold">D</span>ocument
          <span className="text-red-500 text-bold">O</span>bject
          <span className="text-red-500 text-bold">M</span>odel
          の略称で, 文書構造を扱うインターフェースである.
          公式によれば, HTML・XML等のマークアップ言語を「文書」としたとき,
          それにアクセスし, 操作を行う為のAPIだ.
          すなわち, webページにおいて何らかの処理を記述するときこれを通して情報を得るということだ.
          javascriptでもこれに乗っ取ったものが実装されている.
        </p>

        <SubSection header="DOMの構造">
          <p>
            DOMは木構造だ.
            rootとなるノードが一つ, それにつながるchildrenによって文書を表している.
            root以外のノードは必ず一つのparentを持つ. 以下に例を示す.
          </p>

          <Example>
            <pre>{`
              <!DOCTYPE html>
              <html class=e>
              <head><title>Aliens?</title></head>
              <body>Why yes.</body>
              </html>
            `}</pre>
            <p>
              これは以下の木と解釈される.
            </p>
            <div className="text-indigo-700" id="domTree">
              <pre>{`
                Document --- Doctype: html
                        |--- Element: head
                        |      |--- Element: title
                        |             |---Text: Aliens
                        |--- Text:
                        |--- Element: body
                               |--- Text: Why yes.
              `}</pre>
            </div>
            <p>
              ---で繋がっているものがノードの子供, Documentが根である.
            </p>
          </Example>

          <p>
            このような木構造を前提にしてjavascript等から提供されるAPI(document.getById, window.onload, ...)を使い,
            処理を行うことができる.
          </p>
        </SubSection>
      </Section>

      <Section header="仮想DOM">
        <p>
          上記のようなDOMを用いてjavascriptにより開発することもあるだろうが,
          昨今ではReact, vueなどのフレームワークを用いることが多いらしい.
          これらは主に以下の二点にアドバンテージがある.
        </p>
        <ul>
          <li key={0}>効率性が得られる</li>
          <li key={1}>DOMの扱いを楽にする</li>
        </ul>
        <p>
          Reactでは仮想DOMという仕組みを使って文書を構成する.
        </p>

        <SubSection header="Reactの仮想DOM">
          <p>
            Reactでは仮想DOMという仕組みを採用している.
            仮想DOMとは, Reactの提供するjavascriptのオブジェクトを介してDOM操作を行うということだ.
            といっても根本となる仕組み・構造は上記のDOMと変わらない.
            では, なぜアドバンテージを得られるのか.
          </p>

          <SubSection2 header="利点1">
            <h4 className="text-2xl">変化のある部分のみを更新する</h4>
            <p>
              DOMを操作するとき, 新しいDOMを構成し置き換える必要がある.
              しかし, ブラウザでDOMを操作する場合は一部のみに更新があることも多く,
              変化のあった部分のみを更新する方法が良いと容易に想像できるだろう. <br />
              ReactはjavascriptのオブジェクトとしてDOMを持っており, 操作があると更新後のDOMをエミュレートして
              差分を検出, 変化のあったノードを更新といった方法で効率的なDOM操作を行う.
              この過程でユーザーは煩雑な処理を意識しなくて良い.
            </p>
          </SubSection2>
          <SubSection2 header="利点2">
            <h4 className="text-2xl">DOMの扱いを楽にする</h4>
            <p>
              javascriptによるDOM操作は直感性に書けていることもあり,
              規模・複雑性が増すにつれて難易度が上がる.
              Reactではjsxというjavascriptの拡張構文をサポートしており,
              htmlを記述するのとなんら変わらない直感的な操作を提供する. <br />
              jsxはbabel等のトランスパイラによってReactの構文に変換される.
              (ReactでもReact.createElement等で仮想DOMを扱う場合は直感的ではないため, 方法がある程度の認識でよさそう？)
            </p>
          </SubSection2>
        </SubSection>
      </Section>

      <Section header="Reactの重要な型">
        <p>
          ReactのDOMで頻度の多そうな型をまとめておく.
        </p>

        <SubSection header="ReactElement">
          <p>
            ReactのDOMは<span className="text-red-500">React Element</span>という型で
            DOMの各ノードを表している.
            <Link href="#domTree">
              <a>上記の木</a>
            </Link>
            でDocument, Element等がこの型で表されていると思えばいい. <br />
            React Elementはtype, props, key, refのプロパティを持っている.
          </p>
          <ul>
            <li key={0}> type: {`<div>~</div>`}のdivとか{`<MyComponent />`}のMyComponentを表す. </li>
            <li key={1}> props: {`<MyComponent prop1=... prop2=... />`}のpropを表す. 特別なプロパティでchildrenがあり, タグで囲まれたもの全てを表す. </li>
            <li key={2}> key: 一意性を保つ上で必要なプロパティ? もっと調べる. </li>
            <li key={3}> ref: Reactの機能refで使用する? もっと調べる. </li>
          </ul>
        </SubSection>

        <SubSection header="childrenとReactNode">
          React Elementで特別なprops.childrenの型として<span className="text-red-500">React Node</span>
          がある. (実際の定義は別だが詳しくは
          <Link href="https://dackdive.hateblo.jp/entry/2019/08/07/090000">
            <a>ここ</a>
          </Link>
          やgithubのソースを辿ったりしてみたらいいかも)
          これはReactChild, ReactFragment, boolean, undefined等のjsxの出力になり得る型を表している.
          例えば, children中のReactElementを再帰的に処理したいときはswitchで型によって処理を分けて記述する必要がある.
          ReactElementはobjectになる.
        </SubSection>

        <SubSection header="コンポーネント">
          詳しくはまた別にまとめるが, Reactを効率的に使う為に, <span className="text-red-500">コンポーネント</span>を使用する.
          React DOMのノードを作るものだと考えればよいだろうか.
          ReactElementを出力するjavascriptのクラスである.
        </SubSection>
      </Section>

      <Reference>
        <ul>
          <li key={0}>DOMの標準仕様(W3C): <br />
            <Link href="https://dom.spec.whatwg.org/">
              <a>https://dom.spec.whatwg.org/</a>
            </Link>
          </li>
          <li key={1}>javascriptによるDOMの説明: <br />
            <Link href="https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction">
              <a>https://developer.mozilla.org/ja/docs/Web/API/Document_Object_Model/Introduction</a>
            </Link>
          </li>
          <li key={2}>
            仮想DOMの熱い話: <br />
            <Link href="https://qiita.com/mizchi/items/4d25bc26def1719d52e6">
              <a>https://qiita.com/mizchi/items/4d25bc26def1719d52e6</a>
            </Link>
          </li>
          <li key={3}>
            コンポーネント周りの型の分かりやすい説明: <br />
            <Link href="https://blog.ojisan.io/react-component-words">
              <a>https://blog.ojisan.io/react-component-words</a>
            </Link>
          </li>
          <li key={4}>
            コンポーネント周りの型の分かりやすい図解: <br />
            <Link href="https://dackdive.hateblo.jp/entry/2019/08/07/090000">
              <a>https://dackdive.hateblo.jp/entry/2019/08/07/090000</a>
            </Link>
          </li>
          <li key={5}>
            React公式のAPI解説: <br />
            <Link href="https://ja.reactjs.org/docs/react-api.html">
              <a>https://ja.reactjs.org/docs/react-api.html</a>
            </Link>
          </li>
          <li key={6}>
            公式のReactElement, Component等を訳したページ: <br />
            <Link href="http://js.studio-kingdom.com/react/glossary/#react_elements">
              <a>http://js.studio-kingdom.com/react/glossary/#react_elements</a>
            </Link>
          </li>
        </ul>
      </Reference>
    </Page>
  );
};

export default DOMReact;
