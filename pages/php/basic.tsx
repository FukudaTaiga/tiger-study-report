import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {Page, Section, SubSection, TextArea, Example} from '../../components/util';

function PHPBasic() {
  return(
    <Page header="PHPの基本文法">

      <Section header="大前提に">
        <p>
          phpはweb系の処理にとても向いていて, HTMLを混ぜて書くことができる.
          さながらHTMLの中で言語を使っているかのように(実際は逆だが).  <br />
          何なら設定すれば~.htmlにあるphpを実行させたりもできる. <br />
          実際にどんな風に混ぜて書くかというと,
          scriptの中に書かれているものがphpの処理,
          scriptの外に書いてあるものはそのまま出力するという形式になっている. <br />
          つまり, (ほとんどがHTMLだろうが,)もはや別になにを書いても良い.
          それがHTMLとして解釈されるものならブラウザで変換されるというだけだ.
        </p>
      </Section>

      <Section header="基本">
        <SubSection header="phpスクリプト">
          <p>
            phpスクリプトは {`<?php ~ ?>`}のように書く. 他にも書き方はあるらしいが,
            とりあえずこれで統一しとけばいい気がする. <br />
            行末には;付ける. c++とかと一緒. <br />
            コメントは{`//`}. 複数行なら{`/* ~ */`}.
          </p>
        </SubSection>
        <SubSection header="文字列">
          <p>
            {`""`}で囲む書き方と, {`''`}で囲む書き方がある.
            変数展開, エスケープ({`\~`}と書かないといけないやつ)に差がある.
          </p>
          <ul>
            <li key={0}>
              {`""`}: 変数が展開され, 特殊文字は特殊文字として表示される. エスケープする文字は{`$ \ "`}
            </li>
            <li key={1}>
              {`''`}: 変数が展開されず, 特殊文字もそのまま表示される. エスケープする文字は{`'`}
            </li>
          </ul>
          <Example>
            <pre>{`
              <?php
                $a = 0;

                echo "a = {$a} <br>";
                echo 'a = {$a} <br>';
              ?>
            `}</pre>

            出力:
            <div className="text-center">
              {`
                a = 0
                a = $a
              ?>`}
            </div>
          </Example>

          <p>
            一応, ヒアドキュメント({`echo<<<終端文字列`})というような書き方もあるが,
            長い文章を出力しないなら, 気を付けなければならないポイントも多いので必要ない. <br />
            文字列の結合は <span className="text-bold">.</span> で行う.
          </p>

          <Example>
            <pre>{`
              <?php
                $string_1 = "nihon";
                $string_2 = "go";

                echo $string_1.$string_2."to"."eigo";
              ?>
            `}</pre>

            出力:
            <div className="text-center">
              nihongotoeigo
            </div>
          </Example>
        </SubSection>

        <SubSection header="出力方法">
          <p>
            出力方法として, echo, printがある.
            以前(php7.0より前)は機能的な差もあったようだが, 今はあまり気にしなくてよさそう.
            いずれも関数ではないので, echo(~)やprint(~)なる書き方は避けるべき.
            主な違いとして,
          </p>
          <ul>
            <li key={0}> echoはリスト形式で引数を取ることができ, 返り値がない. (Unit, void) </li>
            <li key={1}> printは単一引数で常に1を返す. </li>
          </ul>
          <p>
            がある. 基本はechoでいい. <br />
            似たものでprintfがあるが, これは組み込みの関数でc, java等と同じ形式で書ける.
          </p>
          <div className="text-center">
            {`printf("Hello {$world} %s", $ex);`}
          </div>
          <p>
            のような書き方もできるが, {`$world`}に{`"%"`}が含まれる場合など意図した動作にならない場合があるので,
          </p>
          <div className="text-center">
            {`printf("Hello %s %s", $world, $ex);`}
          </div>
          <p>
            と書くべき.
          </p>
        </SubSection>
      </Section>

      <Section header="phpの変数">
        <p>
          phpの変数は三種類のスコープがある.
        </p>
        <ol>
          <li key={0}> ローカル </li>
          <li key={1}> グローバル </li>
          <li key={2}> スーパーグローバル </li>
        </ol>
        <SubSection header="ローカル変数">
          <p>
            関数の内部で宣言された変数.
            ただし, <span className="text-blue-800">global</span> キーワードを付けられた変数はglobal
            として扱われる.
            注意しなければならないのは, 関数内部で変数を使う場合だ.
            このような場合はたとえ関数外部でグローバル宣言されていても,
            関数内では直接使えない. この場合にglobalキーワードが必要になる.
          </p>
          <Example>
            <pre>{`
              <?php
                $a = 0;

                function f() {
                  //echo $a; undefinedになる.
                  global $a;
                  echo $a; // 0.
                }
                f();
              ?>
            `}</pre>
          </Example>
          <p>
            しかし, このような場合は引数としてグローバル変数を与えるべきではないだろうか.
          </p>
        </SubSection>

        <SubSection header="グローバル変数">
          <p>
            上記以外で利用された変数は全てグローバル変数になる.
            注意しなければならないのは, for文などで利用される変数もローカルでないことくらいか.
            変数名はできるだけ被らない方がいい. (ローカルならok)
          </p>
          <Example>
            <pre>{`
              <?php
                $a = 0;

                for ($a = 1; $a < 5; $a++) {}

                echo $a; //5
              ?>
            `}</pre>

            出力:
            <div className="text-center">
              5
            </div>
          </Example>
        </SubSection>

        <SubSection header="スーパーグローバル変数">
          <p>
            任意のスコープから利用できる変数.
            phpが機能の提供の為に利用している変数と捉えてよさそう.
            多少間違っている部分もあるかもしれないが, 最低限知っておけばよさそうな情報に以下がある.
          </p>
          <ul>
            <li key={0}> $GLOBALS: 変数名からグローバル変数への参照を持つMap. </li>
            <li key={1}> $_SERVER: サーバーの情報, 環境情報を提供する変数. </li>
            <li key={2}> $_GET: get methodで送られたクエリ(URLの?以降の部分). </li>
            <li key={3}> $_POST: post methodで送られたクエリ(URLの?以降の部分). </li>
            <li key={4}> $_FILES: HTTP POSTで送られたファイル情報のMap? </li>
            <li key={5}> $_COOKIE: cookie情報の連想配列. </li>
            <li key={6}> $_SESSION: 使用できるセッション変数を含むMap. </li>
            <li key={7}> $_REQUEST: $_GET, $POST, $SESSIONをまとめたMap. </li>
            <li key={8}> $_ENV: システムの環境変数を与えるMap. </li>
          </ul>
        </SubSection>
      </Section>

      <Section header="変数の代入">
        <p>
          オブジェクトは参照渡し, それ以外は値渡し.
          明示的に参照で渡す場合は{`&$var`}みたいに書く.
        </p>
      </Section>

      <Section header="phpの型">
        <p>
          phpでは動的型付けを行う言語なのでコードを書く中で明示的に型を
          使うことはあまりなさそう.
          phpでは以下のように自動で型変換を行う.
        </p>
        <Example>
          <pre>{`
            <?php
              $a = 10000;
              $b = "2054";

              echo $a - $b, "<br>";
              echo $a.$b;
            ?>
          `}</pre>

          出力:
          <div className="text-center">
            <pre>{`
              7946
              100002054
            `}</pre>
          </div>
        </Example>
        <p>
          変数の型と内容を出力してくれる便利な関数としてvar_dump()がある.
          echo等と同様デバッグで使えそう.
        </p>
      </Section>
    </Page>
  );
}

export default PHPBasic;
