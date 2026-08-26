'use client';

import {
  HeaderEl,
  Nav,
  Brand,
  BrandMark,
  NavLinks,
  Wrap,
  Hero,
  HeroBadge,
  HeroContent,
  HeroEyebrow,
  HeroTitle,
  HeroLead,
  CtaRow,
  BtnPrimary,
  BtnGhost,
  SecTitle,
  SecTitleEn,
  SecTitleDivider,
  SecTitleJa,
  TextSec,
  TextSecBig,
  TextSecBody,
  Method,
  MethodIntro,
  StepGrid,
  StepCard,
  StepNum,
  StepTag,
  StepCardTitle,
  StepCardDesc,
  Gateway,
  GwGrid,
  GwCard,
  GwTag,
  GwDesc,
  GwSub,
  GwCta,
  GwCircle,
  Profile,
  PfGrid,
  PfPhoto,
  PfRole,
  PfName,
  PfSub,
  PfBio,
  PfStats,
  PfStat,
  PfStatNum,
  PfStatLabel,
  Contact,
  ContactTitle,
  ContactDesc,
  ContactRow,
  ContactBtn,
  FooterEl,
  FootGrid,
} from './_styles';

const CommunicationLab = () => {
  return (
    <>
      <HeaderEl>
        <Nav>
          <Brand>
            <BrandMark />
            コミュニケーション・ラボ
          </Brand>
          <NavLinks>
            <a href="#about">コミュニケーション・ラボについて</a>
            <a href="#programs">プログラム</a>
            <a href="#profile">プロフィール</a>
          </NavLinks>
        </Nav>
      </HeaderEl>

      <Hero>
        <HeroBadge />
        <Wrap>
          <HeroContent>
            <HeroEyebrow>コミュニケーション・ラボ</HeroEyebrow>
            <HeroTitle>
              あなたの中にある、
              <br />
              「伝わる言葉」を育てる。
            </HeroTitle>
            <HeroLead>
              コミュニケーション・ラボは、自分の中にある考えや思いを引き出し、整理し、相手に届く言葉へ育てるコミュニケーションプログラムです。
            </HeroLead>
            <CtaRow>
              <BtnGhost href="#about">コミュニケーション・ラボについて</BtnGhost>
              <BtnPrimary href="#programs">プログラムを見る →</BtnPrimary>
            </CtaRow>
          </HeroContent>
        </Wrap>
      </Hero>

      <TextSec id="mission">
        <Wrap>
          <SecTitle>
            <SecTitleEn>MISSION</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>MISSION / MESSAGE</SecTitleJa>
          </SecTitle>
          <TextSecBig>言葉を引き出す。整理して届ける。</TextSecBig>
          <TextSecBody>
            話し方を学ぶ多くの方は、「もっと上手に話したい」と考えています。
          </TextSecBody>
          <TextSecBody>
            でも、本当に大切なのは、上手に話すことだけでしょうか。
          </TextSecBody>
          <TextSecBody>
            自分は何を考えているのか。何を感じているのか。そして、何を相手に伝えたいのか。自分の中にあるものが、まだ言葉になっていないこともあります。
          </TextSecBody>
          <TextSecBody>
            コミュニケーション・ラボでは、一人ひとりの中にある考えや思いを引き出すところから始めます。伝えたいことを整理し、受け取る相手のことを考えながら言葉にしていきます。
          </TextSecBody>
          <TextSecBody>
            自分の考えを、自分の言葉で伝えられるようになること。
          </TextSecBody>
          <TextSecBody>
            コミュニケーション・ラボは、一人ひとりの中にある「伝わる言葉」を育てます。
          </TextSecBody>
        </Wrap>
      </TextSec>

      <TextSec alt id="about">
        <Wrap>
          <SecTitle>
            <SecTitleEn>ABOUT</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>ABOUT コミュニケーション・ラボ</SecTitleJa>
          </SecTitle>
          <TextSecBig>一人ひとりの「伝わらない」から始める</TextSecBig>
          <TextSecBody>
            「伝わらない」と感じる理由は、人によって違います。
          </TextSecBody>
          <TextSecBody>
            頭の中では分かっているのに、言葉が出てこない。話しているうちに、何を伝えたかったのか分からなくなる。考えはまとまっていても、人前では思うように話せない。
          </TextSecBody>
          <TextSecBody>
            コミュニケーション・ラボでは、一方的に「正しい話し方」を教えるのではなく、実際の言葉や反応を見ながら、どこで「伝わらない」が起きているのかを探ります。
          </TextSecBody>
          <TextSecBody>
            その人に必要な方法を考え、実際に話しながら「伝わる言葉」へ育てていきます。
          </TextSecBody>
        </Wrap>
      </TextSec>

      <Method id="method">
        <Wrap>
          <SecTitle>
            <SecTitleEn>METHOD</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>FADER｜自分の言葉を、相手に届く形へ。</SecTitleJa>
          </SecTitle>
          <MethodIntro>
            コミュニケーション・ラボでは、考える、話す、聞く、振り返る。そのやり取りを繰り返しながら、伝え方を整えていきます。
            <br />
            <br />
            自分は何を伝えたいのか。相手は何を受け取ったのか。その間に、どんなずれがあったのか。実際に話しながら確かめていく。FADERは、その流れを5つのステップに整理したメソッドです。
          </MethodIntro>
          <StepGrid>
            <StepCard>
              <StepNum>01</StepNum>
              <StepTag>FIND｜見つける</StepTag>
              <StepCardTitle>自分の中にある材料を見つける。</StepCardTitle>
              <StepCardDesc>
                経験したこと、感じたこと、気になったこと。まずは、自分が何を考え、何を伝えたいのかを探します。
              </StepCardDesc>
            </StepCard>
            <StepCard>
              <StepNum>02</StepNum>
              <StepTag>ASK｜問いを重ねる</StepTag>
              <StepCardTitle>問いを通して、考えを深める。</StepCardTitle>
              <StepCardDesc>
                なぜそう思ったのか。何が引っかかっているのか。どこまで言葉になっているのか。自分にも、相手にも問いを重ねながら、言葉の輪郭をはっきりさせていきます。
              </StepCardDesc>
            </StepCard>
            <StepCard>
              <StepNum>03</StepNum>
              <StepTag>DESIGN｜組み立てる</StepTag>
              <StepCardTitle>相手に届く形を考える。</StepCardTitle>
              <StepCardDesc>
                何を話すのか。何を残すのか。どんな順番なら伝わりやすいのか。頭の中にあるものを整理して、伝わる形に組み立てます。
              </StepCardDesc>
            </StepCard>
            <StepCard>
              <StepNum>04</StepNum>
              <StepTag>EXPRESS｜表現する</StepTag>
              <StepCardTitle>声に出して、届ける。</StepCardTitle>
              <StepCardDesc>
                声の大きさ、話す速さ、間、表情、視線。同じ内容でも、伝え方によって届き方は変わります。実際に話しながら、自分の表現を確かめます。
              </StepCardDesc>
            </StepCard>
            <StepCard>
              <StepNum>05</StepNum>
              <StepTag>REFLECT｜振り返る</StepTag>
              <StepCardTitle>届き方を確かめる。</StepCardTitle>
              <StepCardDesc>
                自分では、どう話したつもりだったか。相手には、どう届いたか。録画やフィードバックも使いながら振り返り、もう一度試します。少しずつ、自分で伝え方を調整できるようにしていきます。
              </StepCardDesc>
            </StepCard>
          </StepGrid>
        </Wrap>
      </Method>

      <TextSec alt id="fader-circle">
        <Wrap>
          <SecTitle>
            <SecTitleEn>FADER Circle</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>FADERに、CONNECTを。</SecTitleJa>
          </SecTitle>
          <TextSecBody>
            FADER Circleは、FADERを少人数で実践するグループレッスンです。自分が話す。人の話を聞く。どう受け取ったかを伝える。質問する。返ってきた反応から、もう一度考える。
          </TextSecBody>
          <TextSecBody>
            コミュニケーションは、一人では完結しません。Circleでは、FADERの5つのステップに、CONNECTが加わります。
          </TextSecBody>
          <StepCard style={{ maxWidth: 600 }}>
            <StepTag>+ CONNECT｜つながる</StepTag>
            <StepCardTitle>相手とやり取りする。</StepCardTitle>
            <StepCardDesc>
              相手の反応を受け取る。自分とは違う考えに耳を傾ける。その場で言葉を選び、返してみる。学生と社会人、異なる立場の人と話しながら、実際のコミュニケーションの中で「伝わる」を試します。
            </StepCardDesc>
          </StepCard>
        </Wrap>
      </TextSec>

      <Gateway id="programs">
        <Wrap>
          <SecTitle>
            <SecTitleEn>PROGRAMS</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>目的に合わせたプログラム</SecTitleJa>
          </SecTitle>
          <GwGrid>
            <GwCard variant="u22" href="#">
              <GwCircle />
              <GwTag>U-22</GwTag>
              <GwDesc>
                インターン・就活に向けて、自分の言葉で伝える力を。
                <br />
                <br />
                学生・22歳以下を対象とした少人数プログラムです。自己紹介や自己PR、面接での対話などを通して、自分の経験や考えを自分の言葉で話す練習を行います。
              </GwDesc>
              <GwSub>
                <li>1DAY PROGRAM</li>
                <li>3DAYS PROGRAM</li>
                <li>START DASH PROGRAM</li>
              </GwSub>
              <GwCta>U-22のプログラムを見る →</GwCta>
            </GwCard>
            <GwCard variant="biz" href="#">
              <GwCircle />
              <GwTag>for Business</GwTag>
              <GwDesc>
                プレゼンテーション・ピッチに特化した実践プログラム。
                <br />
                <br />
                本番を控えたビジネスパーソンを対象に、マンツーマンでトレーニングを行います。構成だけでなく、声、間、視線、立ち居振る舞いまで実際に確認し、本番で再現できる状態を目指します。
              </GwDesc>
              <GwSub>
                <li>PRESENTATION / PITCH PROGRAM</li>
              </GwSub>
              <GwCta>Businessプログラムを見る →</GwCta>
            </GwCard>
          </GwGrid>
        </Wrap>
      </Gateway>

      <Profile id="profile">
        <Wrap>
          <SecTitle>
            <SecTitleEn>PROFILE</SecTitleEn>
            <SecTitleDivider />
            <SecTitleJa>CHIEF COMMUNICATION DIRECTOR</SecTitleJa>
          </SecTitle>
          <PfGrid>
            <PfPhoto />
            <div>
              <PfRole>CHIEF COMMUNICATION DIRECTOR</PfRole>
              <PfName>宮崎文子</PfName>
              <PfSub>アナウンサー・レポーター</PfSub>
              <PfBio>
                <p>
                  現在もアナウンサー・レポーターとして活動しながら、話し方・コミュニケーションのマンツーマン指導を1,000件以上担当。
                </p>
                <p>
                  早稲田大学教育学部卒業。NHK和歌山放送局・徳島放送局でニュースキャスターを務めた後、テレビ朝日、テレビ東京「ワールドビジネスサテライト(WBS)」などで報道・経済番組の取材・制作に携わる。
                </p>
                <p>
                  2025年日本国際博覧会(大阪・関西万博)では、ドイツパビリオン、アイルランドパビリオン、ウーマンズ
                  パビリオン in collaboration with Cartierで
                  MC・日英バイリンガルMCを担当。
                </p>
                <p>
                  アナウンサーとして「届ける」。レポーター・記者として「聞き、引き出す」。ディレクターとして「整理し、構成する」。それぞれの現場で培ってきた経験と、1,000件以上の個別指導を、コミュニケーション・ラボのメソッド設計に生かしています。
                </p>
              </PfBio>
              <PfStats>
                <PfStat>
                  <PfStatNum>1,000+</PfStatNum>
                  <PfStatLabel>マンツーマン指導</PfStatLabel>
                </PfStat>
                <PfStat>
                  <PfStatNum>EXPO 2025</PfStatNum>
                  <PfStatLabel>大阪・関西万博 3パビリオン MC</PfStatLabel>
                </PfStat>
              </PfStats>
            </div>
          </PfGrid>
        </Wrap>
      </Profile>

      <Contact id="contact">
        <Wrap>
          <ContactTitle>プログラムはこちら</ContactTitle>
          <ContactDesc>
            学生向けのU-22と、ビジネスパーソン向けのプログラムをご用意しています。
          </ContactDesc>
          <ContactRow>
            <ContactBtn variant="u22" href="#">
              U-22のプログラムを見る
            </ContactBtn>
            <ContactBtn variant="biz" href="#">
              Businessプログラムを見る
            </ContactBtn>
            <ContactBtn variant="plain" href="#">
              お問い合わせ
            </ContactBtn>
          </ContactRow>
        </Wrap>
      </Contact>

      <FooterEl>
        <Wrap>
          <FootGrid>
            <div>株式会社ウニベル コミュニケーション・ラボ</div>
            <div>お問い合わせ</div>
          </FootGrid>
        </Wrap>
      </FooterEl>
    </>
  );
};

export default CommunicationLab;
