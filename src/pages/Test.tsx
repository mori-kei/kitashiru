import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
import { ResultButton } from "../UIkit/ResultButton";
import { Chart } from "../commponents/Chart";

export const Test: React.FC = () => {
  //回答結果state
  // Q1
  const [q01Fam, setQ01Fam] = useState<number>(100);
  const [q01Inno, setQ01Inno] = useState<number>(0);
  const [q01Mar, setQ01Mar] = useState<number>(0);
  const [q01Bure, setQ01Bure] = useState<number>(0);
  // Q2
  const [q02Fam, setQ02Fam] = useState<number>(0);
  const [q02Inno, setQ02Inno] = useState<number>(0);
  const [q02Mar, setQ02Mar] = useState<number>(0);
  const [q02Bure, setQ02Bure] = useState<number>(0);
  // Q3
  const [q03Fam, setQ03Fam] = useState<number>(0);
  const [q03Inno, setQ03Inno] = useState<number>(0);
  const [q03Mar, setQ03Mar] = useState<number>(0);
  const [q03Bure, setQ03Bure] = useState<number>(0);
  // Q4
  const [q04Fam, setQ04Fam] = useState<number>(0);
  const [q04Inno, setQ04Inno] = useState<number>(0);
  const [q04Mar, setQ04Mar] = useState<number>(0);
  const [q04Bure, setQ04Bure] = useState<number>(0);
  // Q5
  const [q05Fam, setQ05Fam] = useState<number>(0);
  const [q05Inno, setQ05Inno] = useState<number>(0);
  const [q05Mar, setQ05Mar] = useState<number>(0);
  const [q05Bure, setQ05Bure] = useState<number>(0);
  // Q6
  const [q06Fam, setQ06Fam] = useState<number>(0);
  const [q06Inno, setQ06Inno] = useState<number>(0);
  const [q06Mar, setQ06Mar] = useState<number>(0);
  const [q06Bure, setQ06Bure] = useState<number>(0);

  //バリデーションチェックstate
  const [firstQues, setFirstQues] = useState(0);
  const [secondQues, setSecondQues] = useState(0);
  const [thirdQues, setThirdQues] = useState(0);
  const [fourthQues, setFourthQues] = useState(0);
  const [fifthQues, setFifthQues] = useState(0);
  const [sixthQues, setSixthQues] = useState(0);
  // 合計値のstate
  const [totalFam, setTotalFam] = useState(0);
  const [totalInno, setTotalInno] = useState(0);
  const [totalMar, setTotalMar] = useState(0);
  const [totalBure, setTotalBure] = useState(0);

  //結果となる平均値のstate
  const [resultFam, setResultFam] = useState(0);
  const [resultInno, setResultInno] = useState(0);
  const [resultMar, setResultMar] = useState(0);
  const [resultBure, setResultBure] = useState(0);

  //問１のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFirstQues(
      Number(q01Fam) + Number(q01Inno) + Number(q01Mar) + Number(q01Bure)
    );
  }, [q01Fam, q01Inno, q01Mar, q01Bure]);
  
  //問2のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setSecondQues(
      Number(q02Fam) + Number(q02Inno) + Number(q02Mar) + Number(q02Bure)
    );
  }, [q02Fam, q02Inno, q02Mar, q02Bure]);

  //問3のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setThirdQues(
      Number(q03Fam) + Number(q03Inno) + Number(q03Mar) + Number(q03Bure)
    );
  }, [q03Fam, q03Inno, q03Mar, q03Bure]);
  //問4のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFourthQues(
      Number(q04Fam) + Number(q04Inno) + Number(q04Mar) + Number(q04Bure)
    );
  }, [q04Fam, q04Inno, q04Mar, q04Bure]);
  //問5のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setFifthQues(
      Number(q05Fam) + Number(q05Inno) + Number(q05Mar) + Number(q05Bure)
    );
  }, [q05Fam, q05Inno, q05Mar, q05Bure]);
  //問6のバリデーション（合計値が100であるかチェック）
  useEffect(() => {
    setSixthQues(
      Number(q06Fam) + Number(q06Inno) + Number(q06Mar) + Number(q06Bure)
    );
  }, [q06Fam, q06Inno, q06Mar, q06Bure]);

  //famStateを監視して合計値を算出
  useEffect(() => {
    setTotalFam(
      Number(q01Fam) +
        Number(q02Fam) +
        Number(q03Fam) +
        Number(q04Fam) +
        Number(q05Fam) +
        Number(q06Fam)
    );
  }, [q01Fam, q02Fam, q03Fam, q04Fam, q05Fam, q06Fam]);

  //innoStateを監視して合計値を算出
  useEffect(() => {
    setTotalInno(
      Number(q01Inno) +
        Number(q02Inno) +
        Number(q03Inno) +
        Number(q04Inno) +
        Number(q05Inno) +
        Number(q06Inno)
    );
  }, [q01Inno, q02Inno, q03Inno, q04Inno, q05Inno, q06Inno]);
  //marStateを監視して合計値を算出
  useEffect(() => {
    setTotalMar(
      Number(q01Mar) +
        Number(q02Mar) +
        Number(q03Mar) +
        Number(q04Mar) +
        Number(q05Mar) +
        Number(q06Mar)
    );
  }, [q01Mar, q02Mar, q03Mar, q04Mar, q05Mar, q06Mar]);
  //bureStateを監視して合計値を算出
  useEffect(() => {
    setTotalBure(
      Number(q01Bure) +
        Number(q02Bure) +
        Number(q03Bure) +
        Number(q04Bure) +
        Number(q05Bure) +
        Number(q06Bure)
    );
  }, [q01Bure, q02Bure, q03Bure, q04Bure, q05Bure, q06Bure]);

  //各合計値を監視して平均値を算出する
  useEffect(() => {
    setResultFam(totalFam / 6);
    setResultInno(totalInno / 6);
    setResultMar(totalMar / 6);
    setResultBure(totalBure / 6);
  }, [totalFam, totalInno, totalMar, totalBure]);

  useEffect(() => {
    console.log(totalFam);
  }, [totalFam]);

  // Modalのstateに関する部分
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  // 最初に表示される診断方法についての部分
  const [ruleShow, setRuleShow] = useState(true);
  const closeRuleModal = () => {
    setRuleShow(false);
  };

  return (
    <div className="">
      <div>
        <div>
          <h1>1.顕著にみられる特徴</h1>
          <p>
            指示系統によるしっかりとした上下関係重視というよりは、上司や先輩、または（将来）部下や後輩などともゆるやかで、フレンドリーな関係性が構築されている職場がいい。同僚や上司・部下は家族の延長のような存在であってほしいし、価値観や考えはお互いしっかり共有しておきたいと思う。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ01Fam(Number(e.target.value));
            }}
            value={q01Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            新しいことに積極的で、起業家精神にあふれるクリエイティブな職場がいい。同僚や上司・部下はリスクを恐れず進んで革新的な選択をしていく人たちがいい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ01Inno(Number(e.target.value))}
            value={q01Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            プロセスや過程での努力などではなく、結果や成果、アウトプットで評価をしてくれるような職場がいい。仕事をする上では、達成すべき目標や目的を明確に示してほしい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ01Mar(Number(e.target.value))}
            value={q01Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            仕事の役割分担が明確になされていて、自分が何をすべきかをしっかり指示してくれるような職場がいい。自分個人の発想やオリジナリティに基づいて臨機応変に仕事をするというよりは、どうすればよいのかという方法や手続きをきちんと具体的に示してほしい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ01Bure(Number(e.target.value))}
            value={q01Bure}
            size="small"
          />
        </div>
      </div>
      <div>
        <h1>2.リーダーシップスタイル</h1>
        <div>
          <p>
            職場でリーダーシップをとる人には、部下を育て、人々を助けることを期待する。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ02Fam(Number(e.target.value));
            }}
            value={q02Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            職場でリーダーシップをとる人には、新しいことに挑戦する起業家精神や、画期的なアイディアを重視する革新的な発想、リスクを恐れない挑戦的な姿勢を期待する。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ02Inno(Number(e.target.value))}
            value={q02Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            職場でリーダーシップをとる人には、理想より現実を直視し、フットワーク軽く行動的で、プロセスよりも結果重視であることを期待する。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ02Mar(Number(e.target.value))}
            value={q02Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            職場でリーダーシップをとる人には、人間関係に配慮しつつ人々をうまくまとめ、ムリ・ムダなくスムーズに仕事を進めようとする姿勢を期待する。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ02Bure(Number(e.target.value))}
            value={q02Bure}
            size="small"
          />
        </div>
      </div>
      <div>
        <h1>3.従業員管理</h1>
        <div>
          <p>
            仲間同士のチームワークや、全員で意志が一致すること、みんながしっかり組織や取り組みに参加することを大切にするような職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ03Fam(Number(e.target.value));
            }}
            value={q03Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            独自の発想を持ち、新しく画期的なアイディアを生み出すことが重視され、自由であることを重んじる職場。リスクを恐れず自ら行動を起こすことを奨励してくれるような職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ03Inno(Number(e.target.value))}
            value={q03Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            組織が顧客のニーズに応えたり、ライバル企業などとの競争を勝ち抜くために、自分にハイレベルな仕事と高い成果が期待されるような実力重視の職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ03Mar(Number(e.target.value))}
            value={q03Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            簡単にはクビ（解雇）にならないことや、将来にわたって安定して働ける保証を得られる職場。仕事の内容ややり方、配置などに劇的な変化が少なく、明確なルールに基づく管理が行き届いている職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ03Bure(Number(e.target.value))}
            value={q03Bure}
            size="small"
          />
        </div>
      </div>
      <div>
        <h1>4.組織を団結させるもの</h1>
        <div>
          <p>
            会社への入れ込みが強く、皆が会社を信頼することによって一致団結しているような会社がいいと思う。組織のために尽くそうとするような献身的な人が多い職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ04Fam(Number(e.target.value));
            }}
            value={q04Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            革新を起こすことを目標に、新しいものを生み出そうと全力を注ぐことで皆が一致団結している会社がいいと思う。業界の最先端を走っていることを重視する職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ04Inno(Number(e.target.value))}
            value={q04Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            目標の達成や成功に向かって頑張ることによって皆が一致団結している会社がいいと思う。対外的な評価を高め、自社へのプライドを大切にする職場が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ04Mar(Number(e.target.value))}
            value={q04Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            ルールを重視し、進むべき方向性を皆が共有することで一致団結している会社がいいと思う。仕事を円滑に、効率よく進めようとするような職場が望ましい。。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ04Bure(Number(e.target.value))}
            value={q04Bure}
            size="small"
          />
        </div>
      </div>
      <div>
        <h1>5.戦略的に重視するもの</h1>
        <div>
          <p>
            人材育成や教育、従業員の能力向上に重きを置く会社が望ましい。また、信頼関係やオープンなコミュニケーション、組織レベルでの取り組みに対する積極的な参加を重視する職場がいいと思う。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ05Fam(Number(e.target.value));
            }}
            value={q05Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            新しいビジネスチャンスを開拓したり、次に向けたチャレンジ、何か新しいものを生み出すことに重きを置く会社が望ましい。また、新しいことへの挑戦や、そのような機会を探すことを重視する職場がいいと思う。。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ05Inno(Number(e.target.value))}
            value={q05Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            ライバルとの競争に勝ち抜き、目標を達成することに重きを置く会社が望ましい。また、高い目標を達成し、自社がその分野のリーダーになることを重視する職場がいいと思う。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ05Mar(Number(e.target.value))}
            value={q05Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            永続的にビジネスが続くことや商売が安定していることに重きを置く会社が望ましい。また、効率的に仕事を行うこと、組織がきちんと統制されていること、円滑に業務が進むことを重要視する職場がいいと思う。。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ05Bure(Number(e.target.value))}
            value={q05Bure}
            size="small"
          />
        </div>
      </div>
      <div>
        <h1>6.成功の基準</h1>
        <div>
          <p>
            人材育成や教育がうまくいっていること、チームワークが成立していること、従業員が組織に尽くしてくれていることこそが、とても重要な成功だと考える会社が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => {
              setQ06Fam(Number(e.target.value));
            }}
            value={q06Fam}
            size="small"
          />
        </div>
        <div>
          <p>
            自社が独創的または最新の製品を持っていることこそが、とても重要な成功だと考える会社が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ06Inno(Number(e.target.value))}
            value={q06Inno}
            size="small"
          />
        </div>
        <div>
          <p>
            顧客に評価されたり、ライバル企業に勝ち抜くことこそが、とても重要な成功だと考える会社が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ06Mar(Number(e.target.value))}
            value={q06Mar}
            size="small"
          />
        </div>
        <div>
          <p>
            効率的に仕事が回っていること、安定した品質を持つ商品や安くてよいものを提供できていることこそが、とても重要な成功だと考える会社が望ましい。
          </p>
          <TextField
            variant="outlined"
            type="number"
            onChange={(e) => setQ06Bure(Number(e.target.value))}
            value={q06Bure}
            size="small"
          />
        </div>
      </div>
      <ResultButton 
         firstQues={firstQues}
         secondQues={secondQues}
         thirdQues={thirdQues}
         fourthQues={fourthQues}
         fifthQues={fifthQues}
         sixthQues={sixthQues}
         openModal={openModal}
         trueText="結果を確認する"
         falseText="合計値が100になっていない質問があります"
      />
      <Chart 
       resultFam={resultFam}
       resultInno={resultInno}
       resultMar={resultMar}
       resultBure={resultBure}
      />
    </div>
    
  );
};
