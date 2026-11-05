---
title: 第16讲 三角形的性质与比例
sidebar_position: 16
---

import GeometryFigure from '@site/src/components/GeometryFigure';

# 第16讲 三角形的性质与比例

以 **High Level 数学A 第6講 PART1～3** 为主线，补入啓林館α数学A、4STEP数学A的应用题。原教材的主例题保留；重复的填空证明合并为一次完整证明。

本讲顺序：**读懂分点 → 内心与角平分线 → 四心应用 → Ceva / Menelaus → 逆定理**。

:::tip[本讲定位]
第14讲的角平分线侧重“求长度”；这里侧重**把条件变成比例、面积比和共点／共线关系**。课堂练习先独立做，再展开答案；课后练习不在课堂重复讲解。
:::

## 1　先读点序，再写比例

### Point Pickup｜内分、外分与面积比

若 $A,P,B$ 依次共线，$AP:PB=2:3$，则 $AP:AB=2:5$。若点序是 $A,B,P$，$AP:PB=5:2$，则 $AB:BP=3:2$。**先画点序，再决定用加法还是减法。**

同高三角形的面积比等于底边比；同底三角形的面积比等于高之比。只有相似三角形，才可把相似比平方得到面积比。下文用 $[ABC]$ 表示三角形面积。

### 补充应用｜内角与外角平分线

在三角形 $ABC$ 中，内角平分线交 $BC$ 于 $D$，外角平分线交直线 $BC$ 于 $E$。当外角平分线与 $BC$ 相交时，

$$
\frac{BD}{DC}=\frac{AB}{AC},\qquad
\frac{BE}{EC}=\frac{AB}{AC}.
$$

两式形式相同，**D在边内，E在边的延长线上**；若 $AB=AC$，外角平分线与 $BC$ 平行，不存在有限交点 $E$。

:::note[课堂练习16-1｜讲义原创数值应用]
已知 $AB=6,AC=4,BC=5$。按上面的定义作 $D,E$，求 $BD,DC,BE,CE$，并说明 $E$ 在哪一侧。

<GeometryFigure id="16-bisectors" caption="实线为内角平分线，虚线为外角平分线；图中点序为 B-D-C-E。" />
:::

<details className="solution-details">
<summary>查看答案与点序检查</summary>

$BD:DC=3:2$，所以 $BD=3,DC=2$。由 $BE:EC=3:2$ 可知 $E$ 必在 $C$ 侧；设 $EC=x$，则 $BE=x+5$。

$$
\frac{x+5}{x}=\frac32\quad\Longrightarrow\quad x=10.
$$

因此 $\boxed{BD=3,DC=2,BE=15,CE=10}$。外分时是 $BE-CE=BC$，不能写成 $BE+CE=BC$。
</details>

## 2　内心：等距离如何变成面积比

### Point Pickup｜不要混淆“同高”与“同底”

内心 $I$ 到三边的距离均为 $r$，所以

$$
[ABI]:[BCI]:[CAI]=AB:BC:CA.
$$

若 $B,I,D$ 共线且 $D$ 在 $AC$ 上，则 $[AIC]:[ABC]=ID:BD$：这是**同底AC，高之比等于ID:BD**，不是两三角形“共用从C到BD的高”。

:::info[主例题16-A｜High Level A 第6講 PART1]
$AB=4,BC=10,CA=7$，$I$ 为内心，直线 $BI$ 与边 $AC$ 交于 $D$。求

1. $[BAI]:[BCI]$；
2. $[AIC]:[ABC]$；
3. $[CID]:[ABC]$。

<GeometryFigure id="16-incenter" caption="由三边长度计算顶点与内心；D是BI与AC的实际交点。" />
:::

<details className="solution-details">
<summary>查看完整解答</summary>

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

另一条路线：在 $\triangle ABD$ 中用角平分线得 $BI:ID=4:2=2:1$，再用同底AC的高之比得到 $ID:BD=1:3$。
</details>

:::note[课堂练习16-2｜High Level A 第6講 PART1 確認問題]
$AB=4,BC=8,CA=9$，$I$ 为内心，$BI$ 与 $AC$ 交于 $D$。用最简整数比求 $[BAI]:[BCI]$、$[AIC]:[ABC]$、$[AID]:[ABC]$。

<GeometryFigure id="16-incenter-practice" caption="此题数据不同，内心与分点重新计算，不沿用主例题的点位。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

面积比 $[BAI]:[BCI]:[AIC]=4:8:9$，故前两问为 $\boxed{1:2}$、$\boxed{3:7}$。由 $AD:DC=4:8=1:2$，得 $AD/AC=1/3$。于是

$$
\frac{[AID]}{[ABC]}=\frac{AD}{AC}\frac{[AIC]}{[ABC]}
=\frac13\cdot\frac37=\frac17.
$$

第三问为 $\boxed{1:7}$。本题不需要求内切圆半径。
</details>

## 3　四心不是四个名词，而是四组可用条件

| 对象 | 可立即使用的条件 |
|---|---|
| 内心 | 到三边距离相等；内角平分线 |
| 外心 | 到三顶点距离相等；垂直平分线 |
| 重心 | 中线交点；顶点到重心与重心到中点之比为2:1 |
| 垂心 | 三条高所在直线共点；注意钝角三角形中的延长线 |

### 主例题16-B｜High Level A 第6講 PART2

证明三条高共点。过 $A,B,C$ 分别作对边的平行线，围成 $\triangle PQR$，标记使 $A,B,C$ 分别位于 $QR,RP,PQ$ 上。证明原三角形的三条高交于大三角形的外心。

<GeometryFigure id="16-orthocenter" caption="先构造平行线，再由平行四边形得到中点；不是从图上假定中点。" />

<details className="solution-details">
<summary>查看构造证明</summary>

四边形 $ABCQ$ 与 $ACBR$ 都是平行四边形，所以 $AQ=BC=AR$，即 $A$ 是 $QR$ 的中点。同理，$B,C$ 分别是 $RP,PQ$ 的中点。

$AD\perp BC$ 且 $BC\parallel QR$，故 $AD$ 是 $QR$ 的垂直平分线；同理 $BE,CF$ 是另外两边的垂直平分线。三线交于 $\triangle PQR$ 的外心。

因此原三角形的三条高所在直线共点。原教材的同题填空证明并入本题，不再作为另一道课堂习题。
</details>

:::info[提高例题16-C｜4STEP 数学A 161]
$AB=AC=3,BC=2$。$G,I$ 分别为三角形 $ABC$ 的重心、内心，求 $GI$。

<GeometryFigure id="16-centers" caption="G和I都在对称轴AM上，但它们对应的比例条件不同。" />
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

先确定两点在同一条线上，再比较位置；不要凭图判断谁更靠近底边。
</details>

:::note[课后练习16-H1｜4STEP 数学A 163]
$I$ 是 $\triangle ABC$ 的内心，关于直线 $BC,CA,AB$ 的对称点依次为 $P,Q,R$。$I$ 是 $\triangle PQR$ 的什么中心？说明理由。

<GeometryFigure id="16-reflections" caption="三个对称点由垂足计算；不要把原三角形与新三角形的中心混淆。" />
:::

<details className="solution-details">
<summary>查看答案</summary>

设内切圆半径为 $r$。对称构造给出 $IP=IQ=IR=2r$。因此 $I$ 到新三角形的三个顶点等距，$\boxed{I\text{ 是 }\triangle PQR\text{ 的外心}}$。
</details>

## 4　Ceva与Menelaus：先选三角形，再写三个比

### Point Pickup｜两种构型，不能只背同一个乘积

三角形 $ABC$ 的三条截线 $AP,BQ,CR$ 共点时，Ceva定理给出

$$
\frac{BP}{PC}\frac{CQ}{QA}\frac{AR}{RB}=1.
$$

横截线与 $BC,CA,AB$ 或其延长线交于 $P,Q,R$ 时，Menelaus定理也给出同样的**长度比乘积**。使用前必须确认：前者是三线共点，后者是三点共线。正长度形式下，Ceva构型有0或2个外分点，Menelaus构型有1或3个外分点。

<GeometryFigure id="16-menelaus" caption="Menelaus的三个外分点构型；CD是平行于横截线的辅助线。" />

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

全部取倒数，即得到通常写法。原教材的同题填空证明合并在此。
</details>

:::info[主例题16-D｜啓林館α数学A 教科书p.82 问11]
$R$ 将 $AB$ 内分为 $AR:RB=2:3$，$Q$ 将 $AC$ 内分为 $AQ:QC=1:2$。$BQ,CR$ 交于 $X$，$AX$ 与 $BC$ 交于 $P$。求 $BP:PC$、$AX:XP$、$[XBC]:[ABC]$。

<GeometryFigure id="16-ceva" caption="从大三角形的边比进入小三角形，再把内部线段比转换成面积比。" />
:::

<details className="solution-details">
<summary>查看完整的两次定理应用</summary>

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

第二步使用的是 $\triangle ABP$，不是继续对着大三角形硬套Ceva。
</details>

:::note[课堂练习16-3｜4STEP 数学A 170]
$AR:RB=2:3$，$AQ:QC=5:6$。$BQ,CR$ 交于 $O$，$AO$ 与 $BC$ 交于 $P$。求 $BP:PC$ 与 $[OBC]:[ABC]$。

<GeometryFigure id="16-ceva-practice" caption="与主例题使用相同工具，但分点和交点已按本题数据重算。" />
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

:::note[课后练习16-H2｜4STEP 数学A 171]
$AD:DB=2:1$，$AE:EC=3:1$，$P=DE\cap BC$，其中 $P$ 位于 $C$ 侧延长线上。求 $BP:PC$、$DP:PE$。

<GeometryFigure id="16-menelaus-practice" caption="点序为 B-C-P、D-E-P；全段与部分不能混用。" />
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

### 提高备用16-E｜High Level A 第6講 PART3(2)

三角形外有点 $O$，$AO,BO,CO$ 与三条边所在直线交于 $P,Q,R$。点序如图：$B-A-R$、$A-Q-C$、$B-Q-O$、$C-O-R$。已知 $BA:AR=3:2$、$AQ:QC=6:5$，求 $BQ:QO$。

<GeometryFigure id="16-exterior" caption="Q在AC内部，R在BA的延长线上；图与点序由同一模型生成。" />

<details className="solution-details">
<summary>查看不省略步骤的解答</summary>

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

## 5　逆定理：由比例证明共点或共线

**Ceva逆定理**：在正确的内外分构型下，乘积为1，且待证三线中已有两线相交，可推出三线共点。这个相交条件不能省略，否则还可能出现三线平行的构型。

**Menelaus逆定理**：在1或3个外分点的构型下，三个长度比乘积为1，可推出三点共线。

方法是先令两条线相交（或先连两个点），用正向定理求第三个交点的比，再用分点唯一性证明该交点就是目标点。不要只检查乘积而忽略点的位置。

逆定理的独立证明题放在第18讲综合2，届时不再提示从哪一个小三角形开始。

## 本讲练习分配与来源

**课堂独立完成**：16-1、16-2、16-3。**课后**：16-H1、16-H2。16-E为提高备用，不与第18讲的逆向条件题合并删除。

来源：High Level数学A第6講；4STEP数学A 161、163、170、171；啓林館α数学A教科书p.82问11。16-1明确为讲义原创数值题。图为数学建模后的重绘，不是教材截图。

本讲的解题主线：**点序 → 对应的三角形 → 三个比 → 整段与部分 → 面积／共点／共线。**
