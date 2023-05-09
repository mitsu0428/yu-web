import React from "react";
import Container from "../components/container";
import PostTitle from "../components/post-title";
import PageBack from "../components/page-back";

function about() {
  return (
    <Container>
      <PageBack />
      <PostTitle>about</PostTitle>

      <p className="text-lg leading-relaxed mb-4">【結う -webの紹介】</p>
      <p className="text-lg leading-relaxed mb-4">結う -webの公式サイト。</p>
      <p className="text-lg leading-relaxed mb-4">
        あなたとwebの2本糸をわたしという1本の糸で結う。
      </p>
      <p className="text-lg leading-relaxed mb-4">
        個人に寄り添うweb brandingのパートナー。
      </p>
      <p className="text-lg leading-relaxed mb-4">三人寄れば文殊の知恵</p>
      <p className="text-lg leading-relaxed mb-4">
        3人で考えれば知恵の象徴の文殊菩薩にも勝るようなアイデアが生まれると言う言葉
      </p>
      <p className="text-lg leading-relaxed mb-4">
        自分の好きな言葉の一つです。
      </p>
      <p className="text-lg leading-relaxed mb-4">
        あなたという糸とwebという糸をわたしという1本の糸で結う。
      </p>
      <p className="text-lg leading-relaxed mb-4">
        3本に結われた糸はこれから進めていく事業を大きく強化していくと思います。
      </p>
      <p className="text-lg leading-relaxed mb-4">
        世の中、デジタル化やDXが叫ばれる中、
      </p>
      <p className="text-lg leading-relaxed mb-4">
        親身になって伴走してくれる人を探すのは簡単ではありません。
      </p>
      <p className="text-lg leading-relaxed mb-4">
        ・一人一人が個人として持つ思いを大切にしながらコミニュケーションを大切にし、
      </p>
      <p className="text-lg leading-relaxed mb-4">
        ・それをwebの世界で形にする
      </p>
      <p className="text-lg leading-relaxed mb-4">
        ・そして、DX/フロントエンドエンジニアとして持つスキルで
      </p>
      <p className="text-lg leading-relaxed mb-4">
        あなたの事業を全力でサポートさせてください！！
      </p>
    </Container>
  );
}

export default about;
