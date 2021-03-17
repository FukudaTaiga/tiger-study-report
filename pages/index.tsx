import Head from 'next/head';
import {Page, TextArea} from '../components/util';

export default function Home() {
  return (
    <Page header="概要">
      <TextArea>
        そもそも網羅するなら公式に発行されているドキュメントを調べた方が早いと思うので
        全ては書かない.
        自分が学んだもので大事そうな部分を後で見返して分かる程度にまとめる. <br />
        なんとなくのイメージが分かったらいいなあと思う.
      </TextArea>
    </Page>
  );
}
