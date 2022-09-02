import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "@emotion/styled";

type Props = {
  resultFam: number;
  resultInno: number;
  resultMar: number;
  resultBure: number;
};
export const Chart: React.FC<Props> = ({
  resultFam,
  resultInno,
  resultMar,
  resultBure,
}) => {
  const items = [
    { culture: "家族文化", A: resultFam },
    { culture: "イノベーション文化", A: resultInno },
    { culture: "マーケット文化", A: resultMar },
    { culture: "官僚文化", A: resultBure },
  ];
  return (
    <>
      <div id="content">
        <RadarChart // レーダーチャート全体の設定を記述
          cx={250} // 要素の左端とチャートの中心点との距離(0にするとチャートの左半分が隠れる)
          cy={250} // 要素の上部とチャートの中心点との距離(0にするとチャートの上半分が隠れる)
          outerRadius={150} // レーダーチャート全体の大きさ
          width={700} // レーダーチャートが記載される幅(この幅よりチャートが大きい場合、はみ出た箇所は表示されない)
          height={500} // レーダーチャートが記載される高さ
          data={items} // 表示対象のデータ
        >
          {/* レーダーチャートの蜘蛛の巣のような線 */}
          <PolarGrid />
          {/* 項目を決めるデータのキー(サンプルでいう数学や歴史) */}
          <PolarAngleAxis dataKey="culture" />

          {/* 目安となる数値が表示される線を指定  */}
          <PolarRadiusAxis
            angle={30} // 中心点から水平を0°とした時の角度 垂直にしたいなら90を指定
            domain={[0, 50]} // リストの１番目の要素が最小値、2番目の要素が最大値
          />

          {/* レーダーを表示 */}
          <Radar
            name="あなたの組織文化" // そのチャートが誰のデータか指定(チャート下にここで指定した値が表示される)
            dataKey="A" // 表示する値と対応するdata内のキー
            stroke="#8884d8" // レーダーの外枠の色
            fill="#8884d8" // レーダー内の色
            fillOpacity={0.6} // レーダー内の色の濃さ(1にすると濃さMAX)
          />
        </RadarChart>
        <div className="culture">
          <div className="flex-parent">
            <div className="flex">
              <div>
                <p>家族文化</p>
              </div>
              <div>
                <p>{Math.round(resultFam)}pt</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <p>イノベーション文化</p>
              </div>
              <div>
                <p>{Math.round(resultInno)}pt</p>
              </div>
            </div>
          </div>
          <div className="flex-parent">
          <div className="flex">
            <div>
              <p>マーケット文化</p>
            </div>
            <div>
              <p>{Math.round(resultMar)}pt</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <p>官僚文化</p>
            </div>
            <div>
              <p>{Math.round(resultBure)}pt</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};
