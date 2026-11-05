---
title: 第16讲 三角形的性质与比例
sidebar_position: 16
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第16讲 三角形的性质与比例

本讲学习**内分与外分、内心与面积比、三角形的四心、Ceva定理和Menelaus定理**。

重点是利用比例求长度与面积，或者证明三线共点、三点共线。

## 1　分点、面积比与角平分线

### 知识点：内分、外分与面积比

**内分：**点序为 $A-P-B$，若 $AP:PB=2:3$，则 $AP:AB=2:5$。

**外分：**点序为 $A-B-P$，若 $AP:PB=5:2$，则 $AB:BP=3:2$。

**面积比：**同高三角形的面积比等于底边比；同底三角形的面积比等于高之比。

下文用 $[ABC]$ 表示 $\triangle ABC$ 的面积。

### 知识点：内角与外角平分线

在三角形 $ABC$ 中，内角平分线交 $BC$ 于 $D$，外角平分线交直线 $BC$ 于 $E$。当外角平分线与 $BC$ 相交时，

$$
\frac{BD}{DC}=\frac{AB}{AC},\qquad
\frac{BE}{EC}=\frac{AB}{AC}.
$$

其中 $D$ 在 $BC$ 内部，$E$ 在 $BC$ 延长线上。当 $AB=AC$ 时，外角平分线与 $BC$ 平行。

:::note[练习1｜内分与外分]
已知 $AB=6,AC=4,BC=5$。按上面的定义作 $D,E$，求 $BD,DC,BE,CE$，并说明 $E$ 在哪一侧。

<GeometryFigure id="16-bisectors" caption="内角平分线 AD 与外角平分线 AE。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

$BD:DC=3:2$，所以 $BD=3,DC=2$。由 $BE:EC=3:2$ 可知 $E$ 必在 $C$ 侧；设 $EC=x$，则 $BE=x+5$。

$$
\frac{x+5}{x}=\frac32\quad\Longrightarrow\quad x=10.
$$

因此 $\boxed{BD=3,DC=2,BE=15,CE=10}$。外分时是 $BE-CE=BC$，不能写成 $BE+CE=BC$。
</details>

## 2　内心与面积比

### 知识点：内心与面积

内心 $I$ 到三边的距离均为 $r$，所以

$$
[ABI]:[BCI]:[CAI]=AB:BC:CA.
$$

若 $B,I,D$ 共线，且 $D$ 在 $AC$ 上，则 $\triangle AIC$ 与 $\triangle ABC$ 以 $AC$ 为共同底边：

$$
\frac{[AIC]}{[ABC]}=\frac{ID}{BD}.
$$

:::info[例题1｜内心与面积比]
$AB=4,BC=10,CA=7$，$I$ 为内心，直线 $BI$ 与边 $AC$ 交于 $D$。求

1. $[BAI]:[BCI]$；
2. $[AIC]:[ABC]$；
3. $[CID]:[ABC]$。

<GeometryFigure id="16-incenter" caption="内心 I 与角平分线 BD。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

内心到三边等距，因此三个小三角形的面积比为 $4:10:7$。

$$
\boxed{[BAI]:[BCI]=2:5},\qquad
\boxed{[AIC]:[ABC]=7:21=1:3}.
$$

角平分线定理给出 $AD:DC=AB:BC=2:5$，而 $AC=7$，所以 $AD=2,DC=5$。三角形 $CID,AIC$ 具有从 $I$ 到 $AC$ 的同一高，故

$$
\frac{[CID]}{[ABC]}=
\frac{CD}{CA}\frac{[AIC]}{[ABC]}
=\frac57\cdot\frac13=\frac5{21}.
$$

所以 $\boxed{[CID]:[ABC]=5:21}$。


</details>

:::note[确认题1｜面积比]
$AB=4,BC=8,CA=9$，$I$ 为内心，$BI$ 与 $AC$ 交于 $D$。用最简整数比求 $[BAI]:[BCI]$、$[AIC]:[ABC]$、$[AID]:[ABC]$。

<GeometryFigure id="16-incenter-practice" caption="三角形 ABC 的内心 I。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

面积比 $[BAI]:[BCI]:[AIC]=4:8:9$，故前两问为 $\boxed{1:2}$、$\boxed{3:7}$。由 $AD:DC=4:8=1:2$，得 $AD/AC=1/3$。于是

$$
\frac{[AID]}{[ABC]}=\frac{AD}{AC}\frac{[AIC]}{[ABC]}
=\frac13\cdot\frac37=\frac17.
$$

第三问为 $\boxed{1:7}$。
</details>

## 3　三角形的四心与傍心

| 中心 | 主要性质 |
|---|---|
| 内心 | 到三边距离相等；内角平分线 |
| 外心 | 到三顶点距离相等；垂直平分线 |
| 重心 | 中线交点；顶点到重心与重心到中点之比为2:1 |
| 垂心 | 三条高所在直线共点；注意钝角三角形中的延长线 |
| 傍心 | 一条内角平分线与另外两条外角平分线的交点；到三边所在直线等距 |

### 补充：傍心与角平分线

$I$ 为三角形的内心，$I_A$ 为顶点 $A$ 对应的傍心。

- 内心：三条**内角**平分线的交点。
- 傍心：$\angle A$ 的内角平分线，与 $\angle B,\angle C$ 的**外角**平分线交于一点。

![三角形的内心与傍心](/img/math1a-advanced/lesson16/excenter-application.svg)

:::note[短练习｜内心与傍心的角]
在 $\triangle ABC$ 中，

$$
\angle A=60^\circ,\quad\angle B=50^\circ,\quad\angle C=70^\circ.
$$

求 $\angle BIC$ 与 $\angle BI_AC$。
:::

<details className="solution-details">
<summary>查看解答</summary>

内心满足 $\angle IBC=B/2$、$\angle ICB=C/2$，所以

$$
\angle BIC=180^\circ-\frac{B+C}{2}
=90^\circ+\frac A2
=\boxed{120^\circ}.
$$

傍心满足

$$
\angle I_ABC=\frac{180^\circ-B}{2},\quad
\angle I_ACB=\frac{180^\circ-C}{2}.
$$

因此

$$
\angle BI_AC
=180^\circ-\frac{180^\circ-B}{2}-\frac{180^\circ-C}{2}
=\frac{B+C}{2}
=\boxed{60^\circ}.
$$

</details>

### 例题2｜证明三条高共点

证明三条高共点。过 $A,B,C$ 分别作对边的平行线，围成 $\triangle PQR$，标记使 $A,B,C$ 分别位于 $QR,RP,PQ$ 上。证明原三角形的三条高交于大三角形的外心。

<GeometryFigure id="16-orthocenter" caption="通过平行线构造大三角形 PQR。" />

<details className="solution-details">
<summary>查看构造证明</summary>

四边形 $ABCQ$ 与 $ACBR$ 都是平行四边形，所以 $AQ=BC=AR$，即 $A$ 是 $QR$ 的中点。同理，$B,C$ 分别是 $RP,PQ$ 的中点。

$AD\perp BC$ 且 $BC\parallel QR$，故 $AD$ 是 $QR$ 的垂直平分线；同理 $BE,CF$ 是另外两边的垂直平分线。三线交于 $\triangle PQR$ 的外心。

因此，原三角形的三条高共点。
</details>

:::info[例题3｜重心与内心]
$AB=AC=3,BC=2$。$G,I$ 分别为三角形 $ABC$ 的重心、内心，求 $GI$。

<GeometryFigure id="16-centers" caption="重心 G、内心 I 与中线 AM。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

取 $M$ 为 $BC$ 中点。由等腰三角形的对称性，$A,G,I,M$ 共线，且

$$
AM=\sqrt{3^2-1^2}=2\sqrt2,\qquad GM=\frac13AM=\frac{2\sqrt2}{3}.
$$

在 $\triangle ABM$ 中，$BI$ 平分 $\angle ABM$，所以 $AI:IM=AB:BM=3:1$，从而 $IM=AM/4=\sqrt2/2$。

$$
\boxed{GI=GM-IM=\frac{\sqrt2}{6}}.
$$


</details>

:::note[课后练习1｜内心的对称点]
$I$ 是 $\triangle ABC$ 的内心，关于直线 $BC,CA,AB$ 的对称点依次为 $P,Q,R$。$I$ 是 $\triangle PQR$ 的什么中心？说明理由。

<GeometryFigure id="16-reflections" caption="I 关于三边的对称点 P、Q、R。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

设内切圆半径为 $r$。对称构造给出 $IP=IQ=IR=2r$。因此 $I$ 到新三角形的三个顶点等距，$\boxed{I\text{ 是 }\triangle PQR\text{ 的外心}}$。
</details>

## 4　Ceva定理与Menelaus定理

### 知识点：共点与共线

三角形 $ABC$ 的三条截线 $AP,BQ,CR$ 共点时，Ceva定理给出

$$
\frac{BP}{PC}\frac{CQ}{QA}\frac{AR}{RB}=1.
$$

横截线与 $BC,CA,AB$ 或其延长线交于 $P,Q,R$ 时，Menelaus定理也给出同样的**长度比乘积**。使用前必须确认：前者是三线共点，后者是三点共线。正长度形式下，Ceva构型有0或2个外分点，Menelaus构型有1或3个外分点。

<GeometryFigure id="16-menelaus" caption="Menelaus 定理的辅助线 CD。" />

<details className="solution-details">
<summary>工具证明｜High Level A 第6講 PART3(1)</summary>

图中 $CD\parallel PR$。由两组相似三角形，

$$
\frac{PC}{BP}=\frac{RD}{BR},\qquad
\frac{QA}{CQ}=\frac{RA}{DR}.
$$

相乘再乘以 $RB/AR$，右侧全部约去，得到

$$
\frac{PC}{BP}\frac{QA}{CQ}\frac{RB}{AR}=1.
$$

两边取倒数，便得到定理的通常写法。
</details>

:::info[例题4｜定理与面积比]
$R$ 将 $AB$ 内分为 $AR:RB=2:3$，$Q$ 将 $AC$ 内分为 $AQ:QC=1:2$。$BQ,CR$ 交于 $X$，$AX$ 与 $BC$ 交于 $P$。求 $BP:PC$、$AX:XP$、$[XBC]:[ABC]$。

<GeometryFigure id="16-ceva" caption="截线 BQ、CR 与交点 X。" />
:::

<details className="solution-details">
<summary>查看解答</summary>

在 $\triangle ABC$ 中用Ceva：

$$
\frac{BP}{PC}\cdot2\cdot\frac23=1
\quad\Longrightarrow\quad \boxed{BP:PC=3:4}.
$$

再选 $\triangle ABP$，横截线为 $R-X-C$。Menelaus给出

$$
\frac{AR}{RB}\frac{BC}{CP}\frac{PX}{XA}=1,
\qquad \frac23\cdot\frac74\cdot\frac{PX}{XA}=1.
$$

所以 $\boxed{AX:XP=7:6}$。最后两三角形共底 $BC$，高之比为 $XP:AP$，因此

$$
\boxed{[XBC]:[ABC]=6:13}.
$$


</details>

### 提高练习｜复杂截线中的两次Menelaus

:::note[共通テスト2024型｜讲义改编]
从点 $A$ 引两条射线 $AC,AD$，依次取点 $A-P-Q-C$ 和 $A-T-S-D$，满足

$$
AP:PQ:QC=2:3:2,\qquad AT:TS:SD=1:1:3.
$$

直线 $PT$ 与 $DQ$ 交于 $B$，直线 $CS$ 与 $DQ$ 交于 $R$。点序为 $B-Q-R-D$。

求

$$
\boxed{BQ:QR:RD}.
$$

![复杂截线与比例](/img/math1a-advanced/lesson16/advanced-star-menelaus.svg)
:::

<details className="solution-details">
<summary>查看解答</summary>

**① 先求 $BQ:QD$。**

在 $\triangle AQD$ 中，对横截线 $P-T-B$ 使用Menelaus：

$$
\frac{AP}{PQ}\cdot\frac{QB}{BD}\cdot\frac{DT}{TA}=1.
$$

其中 $AP:PQ=2:3$，$DT:TA=(TS+SD):AT=4:1$，所以

$$
\frac23\cdot\frac{BQ}{BD}\cdot4=1
\quad\Rightarrow\quad \frac{BQ}{BD}=\frac38.
$$

由 $BD=BQ+QD$，得

$$
\boxed{BQ:QD=3:5}.
$$

**② 再求 $QR:RD$。**

仍在 $\triangle AQD$ 中，改用横截线 $C-R-S$：

$$
\frac{QR}{RD}\cdot\frac{DS}{SA}\cdot\frac{AC}{CQ}=1.
$$

因为 $DS:SA=3:2$，$AC:CQ=7:2$，所以

$$
\frac{QR}{RD}\cdot\frac32\cdot\frac72=1
\quad\Rightarrow\quad
\boxed{QR:RD=4:21}.
$$

因此 $QR:QD=4:25$，$RD:QD=21:25$。再利用 $BQ:QD=3:5=15:25$，得到

$$
\boxed{BQ:QR:RD=15:4:21}.
$$

</details>

:::note[确认题2｜Ceva与面积比]
$AR:RB=2:3$，$AQ:QC=5:6$。$BQ,CR$ 交于 $O$，$AO$ 与 $BC$ 交于 $P$。求 $BP:PC$ 与 $[OBC]:[ABC]$。

<GeometryFigure id="16-ceva-practice" caption="Ceva 定理中的三个分点。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

Ceva给出 $\dfrac{BP}{PC}\dfrac65\dfrac23=1$，所以 $\boxed{BP:PC=5:4}$。

在 $\triangle ABP$ 中对 $R-O-C$ 用Menelaus：

$$
\frac23\cdot\frac94\cdot\frac{PO}{OA}=1
\quad\Longrightarrow\quad AO:OP=3:2.
$$

因此 $\boxed{[OBC]:[ABC]=OP:AP=2:5}$。
</details>

:::note[课后练习2｜Menelaus定理]
$AD:DB=2:1$，$AE:EC=3:1$，$P=DE\cap BC$，其中 $P$ 位于 $C$ 侧延长线上。求 $BP:PC$、$DP:PE$。

<GeometryFigure id="16-menelaus-practice" caption="P 在 BC 的延长线上。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

在 $\triangle ABC$ 中用Menelaus：$2\cdot(BP/PC)\cdot(1/3)=1$，所以 $\boxed{BP:PC=3:2}$。

再选 $\triangle PBD$，横截线为 $C-E-A$：

$$
\frac{PC}{CB}\frac{BA}{AD}\frac{DE}{EP}=1.
$$

$PC:CB=2:1$、$BA:AD=3:2$，故 $DE:EP=1:3$，于是 $\boxed{DP:PE=4:3}$。
</details>

### 提高题｜外部交点与比例

三角形外有点 $O$，$AO,BO,CO$ 与三条边所在直线交于 $P,Q,R$。点序如图：$B-A-R$、$A-Q-C$、$B-Q-O$、$C-O-R$。已知 $BA:AR=3:2$、$AQ:QC=6:5$，求 $BQ:QO$。

<GeometryFigure id="16-exterior" caption="三角形外部的交点 O。" />

<details className="solution-details">
<summary>查看解答</summary>

选 $\triangle ABQ$，横截线是 $R-O-C$。Menelaus给出

$$
\frac{AR}{RB}\frac{BO}{OQ}\frac{QC}{CA}=1.
$$

$AR:RB=2:5$，$QC:CA=5:11$，故

$$
\frac25\cdot\frac{BO}{OQ}\cdot\frac5{11}=1
\quad\Longrightarrow\quad BO:OQ=11:2.
$$

$BQ=BO-OQ$，所以 $\boxed{BQ:QO=9:2}$。
</details>

## 5　Ceva与Menelaus的逆定理

**Ceva逆定理：**在符合内外分位置条件时，若三个比的乘积为1，可用于证明三线共点。

**Menelaus逆定理：**在符合点序条件时，若三个比的乘积为1，可用于证明三点共线。

应用逆定理时，除计算乘积外，还要确认图中各点的位置。第18讲有相应综合证明题。

## 本讲整理

**课堂：**练习1、确认题1、2，以及2024型复杂比例提高题。**课后：**课后练习1、2。傍心短练习与外部交点提高题根据时间选讲。

解题时依次检查：**点的位置 → 选用的三角形 → 比例关系 → 目标。**

<details>
<summary>题目来源</summary>

High Level 数学A 第6講；4STEP 数学A 161、163、170、171；啓林館α数学A p.82。练习1为原创数值题。

</details>
