'use client';

import { useState } from 'react';
import Link from 'next/link';
import { URLS } from '@/data/urls';
import {
  Wrap,
  SecTitle,
  SecTitleEn,
  SecTitleDivider,
  SecTitleJa,
} from '../_styles';
import { CommLabHeader } from '../_components/CommLabHeader';
import { CommLabFooter } from '../_components/CommLabFooter';
import {
  Breadcrumb,
  HeroRipple,
  RippleSvg,
  HeroEyebrowU22,
  HeroTitleU22,
  HeroLeadU22,
  BtnPrimary,
  BtnGhost,
  CtaRow,
  TagRow,
  Tag,
  ProgSection,
  ProgBlock,
  ProgHead,
  ProgNum,
  ProgBody,
  ProgTheme,
  ProgDesc,
  ProgList,
  ProgPriceRow,
  ProgPrice,
  CoursesSection,
  CoursesIntro,
  CourseCard,
  CourseHead,
  CourseBadge,
  CourseCardTitle,
  CourseBody,
  CourseFor,
  CourseFlow,
  CourseTime,
  CoursePriceList,
  CourseTag,
  CourseTotalRow,
  CourseSave,
  CourseTotal,
  CourseTip,
  CourseTable,
  KwSection,
  KwWrap,
  KwChip,
  FaqSection,
  FaqItem,
  FaqQ,
  FaqMark,
  FaqA,
  FinalCta,
  FinalCtaTitle,
  FinalCtaDesc,
} from '../_styles';

const faqData = [
  {
    q: 'オンライン参加ですが、対話の練習はちゃんとできますか?',
    a: 'はい。少人数・双方向のオンラインセッションなので、実際に声に出して話す練習を中心に進めます。',
  },
  {
    q: '1dayだけ受けて、後から3daysに進むことはできますか?',
    a: '可能です。1day受講後にお申込みいただくと、限定価格(¥32,000・税込)が適用されます。',
  },
  {
    q: '地方在住でも、同じ内容を受けられますか?',
    a: 'はい。すべてオンライン・録画添削で完結するため、全国どこからでも同じ内容を受けていただけます。',
  },
];

const keywords = [
  '#移動先での対話',
  '#学びと可能性を取りに行く',
  '#想い・挑戦を言葉にする',
  '#インターンは学びの場',
  '#企業と学生がともに学び合う',
];

const U22 = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <CommLabHeader
        navLinks={[
          { href: '#programs', label: 'プログラム' },
          { href: '#faq', label: 'よくある質問' },
        ]}
        ctaButton={{
          href: URLS.applyForm,
          label: '申込みへ進む',
          target: '_blank',
          rel: 'noopener noreferrer',
        }}
      />

      <Wrap>
        <Breadcrumb>
          <Link href="/communication-lab">コミュニケーション・ラボ</Link> ＞
          U-22
        </Breadcrumb>
      </Wrap>

      <section>
        <HeroRipple>
          <RippleSvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="200"
              cy="200"
              r="180"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="90"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle
              cx="200"
              cy="200"
              r="60"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
            />
          </RippleSvg>
          <Wrap>
            <HeroEyebrowU22>27・28卒 / U-22 PROGRAM</HeroEyebrowU22>
            <HeroTitleU22>
              話せるミライへ。
              <br />
              面接で、自分の言葉を届けられるようになる。
            </HeroTitleU22>
            <TagRow>
              <Tag>就活・面接対策</Tag>
              <Tag>自己PR添削</Tag>
              <Tag>話し方トレーニング</Tag>
              <Tag>オンライン・少人数制</Tag>
            </TagRow>
            <HeroLeadU22>
              面接で言葉が出ない。緊張すると、考えていたことが飛んでしまう。自己PRも、どうまとめればいいか分からない。
              <br />
              <br />
              U-22は、そんな「話せない」を少人数の実践でひとつずつ解消していくプログラムです。答えを暗記するのではなく、自分の経験や考えを言葉にする。
              <strong>考える→話す→振り返る。</strong>
              このサイクルを繰り返しながら、本番でも自分の言葉で話せる力を身につけます。
            </HeroLeadU22>
            <CtaRow>
              <BtnPrimary href="#programs">1DAY PROGRAMから始める →</BtnPrimary>
              <BtnGhost href="#faq">よくある質問</BtnGhost>
            </CtaRow>
          </Wrap>
        </HeroRipple>
      </section>

      <ProgSection id="programs">
        <Wrap>
          <SecTitle>
            <SecTitleEn>PROGRAM</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>目的に合わせた3つのプログラム</SecTitleJa>
          </SecTitle>

          <ProgBlock>
            <ProgHead color="var(--green-light)">
              <ProgNum>
                01<span className="slash">/</span>
              </ProgNum>
              <span>1DAY PROGRAM ｜ INTRODUCTION｜自分を知る</span>
            </ProgHead>
            <ProgBody>
              <ProgTheme>自分の「話しにくい」を知る。</ProgTheme>
              <ProgDesc>
                <strong>90分／オンライン／定員4名／途中休憩あり</strong>
              </ProgDesc>
              <ProgDesc>
                話すときに「言葉が出ない」「緊張する」「まとまらない」。まずは、自分がどんな場面で話しにくくなるのかを整理します。短い自己紹介や自己PRを実際に話してみることで、今できていることと、これから取り組みたいことを確認する90分です。
              </ProgDesc>
              <ProgTheme>PROGRAM</ProgTheme>
              <ProgList>
                <li>話しにくさ・緊張する場面の整理</li>
                <li>30秒自己紹介・自己PRの実践</li>
                <li>参加目的・志望理由の素材出し</li>
                <li>声・姿勢・視線・間のミニレッスン</li>
                <li>録画&フィードバック</li>
              </ProgList>
              <ProgTheme>TAKE AWAY</ProgTheme>
              <ProgDesc>30秒自己紹介／自分の課題／次に取り組むこと</ProgDesc>
              <ProgPriceRow>
                <ProgPrice>¥12,000</ProgPrice>
                <small>(税込)</small>
              </ProgPriceRow>
            </ProgBody>
          </ProgBlock>

          <ProgBlock>
            <ProgHead color="var(--green)">
              <ProgNum>
                02<span className="slash">/</span>
              </ProgNum>
              <span>3DAYS PROGRAM ｜ PRACTICE｜つくって、試す</span>
            </ProgHead>
            <ProgBody>
              <ProgTheme>自分の言葉を実際に話してみる3日間。</ProgTheme>
              <ProgDesc>
                <strong>90分×3回／オンライン／定員4名／各回途中休憩あり</strong>
              </ProgDesc>
              <ProgDesc>
                経験や考えを掘り下げ、それを言葉にして人に伝えてみます。Zoomのブレイクアウトルームや動画撮影も使いながら、
                <strong>「考える→話す→振り返る」</strong>
                を繰り返します。講義を聞くよりも、実際に話すことを重視した3日間です。
              </ProgDesc>
              <ProgList>
                <li>
                  <strong>DAY1｜FIND / ASK — 自分の素材を見つける。</strong>
                  経験、関心、価値観を掘り下げながら、自己紹介や参加目的、自己PRにつながる言葉を探します。
                </li>
                <li>
                  <strong>DAY2｜DESIGN / EXPRESS — 伝わる形をつくる。</strong>
                  話したい内容を整理し、自己PRとして組み立てます。声・滑舌・表情・視線に加えて、自己PR動画の撮影方法(構図・光・見え方など)も実践します。
                </li>
                <li>
                  <strong>
                    DAY3｜REFLECT / CONNECT — 対話の中で使ってみる。
                  </strong>
                  あらかじめ準備した答えだけでなく、想定外の質問にも答えます。その場で考え、自分の言葉で返す練習です。
                </li>
              </ProgList>
              <ProgTheme>TAKE AWAY</ProgTheme>
              <ProgDesc>
                自己紹介／1分自己PR／撮影動画／個人フィードバック／本番前チェックリスト
              </ProgDesc>
              <ProgPriceRow>
                <ProgPrice>¥42,000</ProgPrice>
                <small>(税込)</small>
              </ProgPriceRow>
            </ProgBody>
          </ProgBlock>

          <ProgBlock>
            <ProgHead color="var(--green-dark)">
              <ProgNum>
                03<span className="slash">/</span>
              </ProgNum>
              <span>START DASH PROGRAM ｜ ACTION｜本番対策</span>
            </ProgHead>
            <ProgBody>
              <ProgTheme>面接やインターンなど本番が近い方へ。</ProgTheme>
              <ProgDesc>
                <strong>60分×2回／オンライン／各回途中休憩あり</strong>
              </ProgDesc>
              <ProgDesc>
                インターン、面接、自己PR動画など、具体的な本番が近い人のための短期集中プログラムです。すでに持っている自己紹介や自己PRを確認し、本番で使えるところまで実践を重ねます。
              </ProgDesc>
              <ProgList>
                <li>
                  <strong>SESSION1</strong> —
                  自己紹介・自己PRを確認し、想定質問への回答や動画撮影を実践します。終了後、次回までに取り組む課題を決めます。
                </li>
                <li>
                  <strong>SESSION2</strong> —
                  本番を想定した質問と回答を繰り返します。最後に撮影を行い、最終フィードバックをお伝えします。
                </li>
              </ProgList>
              <ProgTheme>TAKE AWAY</ProgTheme>
              <ProgDesc>
                本番用自己PR／最終動画／想定質問メモ／本番前チェックリスト
              </ProgDesc>
              <ProgPriceRow>
                <ProgPrice>¥27,000</ProgPrice>
                <small>(税込)</small>
              </ProgPriceRow>
            </ProgBody>
          </ProgBlock>
        </Wrap>
      </ProgSection>

      <CoursesSection id="courses">
        <Wrap>
          <SecTitle>
            <SecTitleEn>COURSES</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>
              あなたの状況に合わせて選べる！おすすめ受講コース
            </SecTitleJa>
          </SecTitle>
          <CoursesIntro>
            「どれから受ければいいの?」と迷う方のために、目的別の3つのモデルコースをご用意しました。すべてのプログラムは「1コマ90分」で構成されているため、あなたのペースに合わせて無理なくステップアップできます。
          </CoursesIntro>

          <CourseCard popular>
            <CourseHead popular>
              <CourseBadge popular>👑 人気No.1</CourseBadge>
              <CourseCardTitle>
                基礎から一気に駆け上がる「フルステップコース」
              </CourseCardTitle>
            </CourseHead>
            <CourseBody>
              <CourseFor>
                こんな方におすすめ:全体像から実践・緊急対策まで、一番お得にすべてを網羅したい方
              </CourseFor>
              <CourseFlow>
                1DAY(1コマ) → 3DAYS(3コマ) → START DASH(2コマ)
              </CourseFlow>
              <CourseTime>合計時間:全6コマ(合計8時間)</CourseTime>
              <CoursePriceList>
                <li>
                  <span>1DAY</span>
                  <span>¥12,000</span>
                </li>
                <li>
                  <span>
                    3DAYS <CourseTag>★継続割適用</CourseTag>
                  </span>
                  <span>¥32,000</span>
                </li>
                <li>
                  <span>
                    START DASH <CourseTag>★継続割適用</CourseTag>
                  </span>
                  <span>¥21,000</span>
                </li>
              </CoursePriceList>
              <CourseTotalRow>
                <CourseSave>定価より16,000円お得!</CourseSave>
                <CourseTotal>¥65,000</CourseTotal>
              </CourseTotalRow>
            </CourseBody>
          </CourseCard>

          <CourseCard>
            <CourseHead>
              <CourseBadge>🚀 お急ぎの方へ</CourseBadge>
              <CourseCardTitle>
                最短で結果を出す「最速特化コース」
              </CourseCardTitle>
            </CourseHead>
            <CourseBody>
              <CourseFor>
                こんな方におすすめ:すでに受講を決めていて、一刻も早く結果を出したい方
              </CourseFor>
              <CourseFlow>3DAYS(3コマ) → START DASH(2コマ)</CourseFlow>
              <CourseTime>合計時間:全5コマ(合計6.5時間)</CourseTime>
              <CoursePriceList>
                <li>
                  <span>3DAYS(単体価格)</span>
                  <span>¥42,000</span>
                </li>
                <li>
                  <span>
                    START DASH <CourseTag>★継続割適用</CourseTag>
                  </span>
                  <span>¥21,000</span>
                </li>
              </CoursePriceList>
              <CourseTotalRow>
                <CourseSave>定価より6,000円お得!</CourseSave>
                <CourseTotal>¥63,000</CourseTotal>
              </CourseTotalRow>
            </CourseBody>
          </CourseCard>

          <CourseCard>
            <CourseHead>
              <CourseBadge>🔰 まずはここから</CourseBadge>
              <CourseCardTitle>王道の「基本マスターコース」</CourseCardTitle>
            </CourseHead>
            <CourseBody>
              <CourseFor>
                こんな方におすすめ:まずは基礎と全体像をしっかり固めたい方
              </CourseFor>
              <CourseFlow>1DAY(1コマ) → 3DAYS(3コマ)</CourseFlow>
              <CourseTime>合計時間:全4コマ(合計6時間)</CourseTime>
              <CoursePriceList>
                <li>
                  <span>1DAY</span>
                  <span>¥12,000</span>
                </li>
                <li>
                  <span>
                    3DAYS <CourseTag>★継続割適用</CourseTag>
                  </span>
                  <span>¥32,000</span>
                </li>
              </CoursePriceList>
              <CourseTotalRow>
                <CourseSave>定価より10,000円お得!</CourseSave>
                <CourseTotal>¥44,000</CourseTotal>
              </CourseTotalRow>
            </CourseBody>
          </CourseCard>

          <CourseTip>
            💡
            まずは基本マスターコース(¥44,000)からでも安心です!受講後、さらに実践的なサポートが必要になった場合は、後から「START
            DASH(継続割:¥21,000)」を追加でお申し込みいただくことも可能です。ご自身の進捗に合わせてご活用ください。
          </CourseTip>

          <CourseTable>
            <thead>
              <tr>
                <th>コース名</th>
                <th>受講の流れ(1コマ90分)</th>
                <th>総時間</th>
                <th>合計価格</th>
                <th>定価からの割引</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="コース名">フルステップ 👑</td>
                <td data-label="受講の流れ">1DAY → 3DAYS → START DASH</td>
                <td data-label="総時間">全6コマ(8h)</td>
                <td data-label="合計価格">¥65,000</td>
                <td data-label="割引">16,000円お得</td>
              </tr>
              <tr>
                <td data-label="コース名">最速特化 🚀</td>
                <td data-label="受講の流れ">3DAYS → START DASH</td>
                <td data-label="総時間">全5コマ(6.5h)</td>
                <td data-label="合計価格">¥63,000</td>
                <td data-label="割引">6,000円お得</td>
              </tr>
              <tr>
                <td data-label="コース名">基本マスター 🔰</td>
                <td data-label="受講の流れ">1DAY → 3DAYS</td>
                <td data-label="総時間">全4コマ(6h)</td>
                <td data-label="合計価格">¥44,000</td>
                <td data-label="割引">10,000円お得</td>
              </tr>
            </tbody>
          </CourseTable>
        </Wrap>
      </CoursesSection>

      <KwSection>
        <Wrap>
          <KwWrap>
            {keywords.map((kw) => (
              <KwChip key={kw}>{kw}</KwChip>
            ))}
          </KwWrap>
        </Wrap>
      </KwSection>

      <FaqSection id="faq">
        <Wrap style={{ maxWidth: 720 }}>
          <SecTitle>
            <SecTitleEn>FAQ</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>よくある質問</SecTitleJa>
          </SecTitle>
          <div>
            {faqData.map(({ q, a }, i) => (
              <FaqItem key={i}>
                <FaqQ onClick={() => toggleFaq(i)}>
                  {q}
                  <FaqMark>{openFaq === i ? '−' : '+'}</FaqMark>
                </FaqQ>
                <FaqA open={openFaq === i}>
                  <p>{a}</p>
                </FaqA>
              </FaqItem>
            ))}
          </div>
        </Wrap>
      </FaqSection>

      <FinalCta>
        <Wrap>
          <FinalCtaTitle>その一歩を、言葉にしに行こう。</FinalCtaTitle>
          <FinalCtaDesc>1dayから、無理なく始められます。</FinalCtaDesc>
          <BtnPrimary href={URLS.applyForm} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--yellow)' }}>
            1DAYに申し込む(¥12,000・税込) →
          </BtnPrimary>
        </Wrap>
      </FinalCta>

      <CommLabFooter />
    </>
  );
};

export default U22;
