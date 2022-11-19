import React from "react";
import styled from "@emotion/styled";

const PrivacyPolicyComponent = styled.div`
  padding-top:100px;

`
export const PrivacyPolicy = () => {
  return (
    <PrivacyPolicyComponent>
      <h1>きたしる　プライバシーポリシー</h1>
      <p>
        第三者に個人を特定できる情報を提供することはありません。
        <br />
        個人情報の管理には最新の注意を払い、以下に掲げた通りに扱います。
      </p>
      <section>
        <h2>サポート時</h2>
        <p>
          サポートメールに、問題解決のための端末種類、OSバージョン等が本文として記述されます。
          <br />
          個人を特定できる情報は一切送信されません。
        </p>
      </section>

      <section>
        <h2>データ解析</h2>
        <p>
          アプリの利便性向上のため、匿名で個人を特定できない範囲で最新の注意を払い、アクセス解析をしております。
          <br />
          例えば、Firebaseのアナリティクスをもとにアプリがどのように使われているかを見ます。
        </p>
      </section>

      <section>
        <h2>免責事項</h2>
        <p>
          利用上の不具合・不都合に対して可能な限りサポートを行っておりますが、利用者が本アプリを利用して生じた損害に関して、開発元は責任を負わないものとします。
        </p>
      </section>
      <div className="">
        <p>お問い合わせ先：きたしるカスタマーサポートチーム</p>
        <a href="kitashiru00team@gmail.com">メールでお問い合わせ</a>
      </div>
      </PrivacyPolicyComponent>
  );
};
