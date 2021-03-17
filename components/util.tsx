import React from 'react';
import Link from 'next/link';

type Props = {
  header: string,
  children: React.ReactNode
}

type Content = {
  header: string,
  depth: number
}

function recSearch(e: React.ReactElement, ans: Content[], depth: number): Content[] {
  React.Children.forEach(e.props.children, (child) => {
    switch(typeof child) {
      case 'object': {
        const e: React.ReactElement = child as React.ReactElement;
        if (typeof e.props.header === 'string') {
          ans = recSearch(e, ans.concat([{header: e.props.header, depth: depth}]), depth + 1);
        }
      }
      default: {}
    }
  });

  return ans;
}

export function TextArea({children}: {children: React.ReactNode}) {
  return (
    <div className="m-1 p-2 text-justy">
      {children}
    </div>
  );
}

function TableOfContent({toc}: {toc: Content[]}) {
  if (toc.length) {
    return (
      <div className="
      bg-pink-100
      m-1 p-2
      border-solid border-black border
      ">
        <h2 className="text-xl">目次</h2>
        <ul className="p-2">
          {toc.map((content, i) => {
            return (
              <li key={i.toString()}>
                {"--".repeat(content.depth)}
                <Link href={"#" + content.header}>
                  <a>{content.header}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  else return (
    <>
    </>
  );
}

export function Page({header, children}: Props) {
  var toc: Content[] = [];
  React.Children.forEach(children, (child) => {
    if (typeof child === 'object') {
      const e: React.ReactElement = child as React.ReactElement;
      if (e.props.header !== undefined) {
        toc = toc.concat([{header: e.props.header, depth: 0}]);
      }
      toc = toc.concat(recSearch(e, [], 1));
    }
  });

  return (
    <article className="page">
      <h1 className="m-1 p-2 text-4xl bg-gray-200 border-black border-double border-4">
        {header}
      </h1>
      <TableOfContent toc={toc} />
      <TextArea>
        {children}
      </TextArea>
    </article>
  );
}

export function Section(props: Props) {
  return (
    <section id={encodeURI(props.header)}>
      <h2 className="m-1 p-2 text-3xl bg-gray-200 border-black border-solid border-2">
        {props.header}
      </h2>
      <TextArea>
        {props.children}
      </TextArea>
    </section>
  );
}

export function SubSection(props: Props) {
  return (
    <section id={encodeURI(props.header)}>
      <h3 className="m-1 p-2 text-2xl bg-gray-200 border-black border-solid border">
        {props.header}
      </h3>
      <TextArea>
        {props.children}
      </TextArea>
    </section>
  );
}

export function SubSection2(props: Props) {
  return (
    <section id={encodeURI(props.header)}>
      <h4 className="m-1 p-2 text-2xl bg-gray-200 border-black border-solid border">
        {props.header}
      </h4>
      <TextArea>
        {props.children}
      </TextArea>
    </section>
  );
}

export function SubSection3(props: Props) {
  return (
    <section id={encodeURI(props.header)}>
      <h5 className="m-1 p-2 text-2xl bg-gray-200 border-black border-solid border">
        {props.header}
      </h5>
      <TextArea>
        {props.children}
      </TextArea>
    </section>
  );
}

export function SubSection4(props: Props) {
  return (
    <section id={encodeURI(props.header)}>
      <h6 className="m-1 p-2 text-2xl bg-gray-200 border-black border-solid border">
        {props.header}
      </h6>
      <TextArea>
        {props.children}
      </TextArea>
    </section>
  );
}

export function Example({children}: {children: React.ReactNode}) {
  return (
    <div className="example">
      {children}
    </div>
  );
}

export function Reference({children}: {children: React.ReactNode}) {
  return (
    <div className="reference leading-normal m-1 mt-5 p-3 bg-purple-100 border-black border-solid border">
      {children}
    </div>
  );
}
