---
title: 第15讲 图形与计量综合演习
sidebar_position: 15
---

# 第15讲 图形与计量综合演习

对应 **High Level 数学I 第10講 PART3**，并综合第8～10講内容。

## 本讲课前回顾

空间图形先把问题降到平面：

> 底面 → 底面中心 → 高 → 体积

---

## 1　三条侧棱相等的四面体

### 知识点

若顶点 $P$ 到底面三顶点 $A,B,C$ 的距离相等，则从 $P$ 到底面的垂足位于 $\triangle ABC$ 的外心。

底面为正三角形时，外心、重心一致。

### 解题技巧

先在底面求“中心到顶点”的距离，再与侧棱组成直角三角形求高。

:::info[High Level 讲义题｜第10講 PART3]
四面体 $PABC$ 满足

$$
PA=PB=PC=4,
$$

$$
AB=BC=CA=6.
$$

求四面体 $PABC$ 的体积 $V$。

![第10講 PART3 講義問題 四面体](/img/math1a-advanced/lesson15/hl-part3-tetrahedron.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

从 $P$ 向底面 $\triangle ABC$ 作垂线，垂足为 $H$。

因为

$$
PA=PB=PC,
$$

所以

$$
HA=HB=HC,
$$

即 $H$ 是正三角形 $ABC$ 的外心。

底面边长为 $6$，所以外接圆半径

$$
AH=\frac{6}{\sqrt3}=2\sqrt3.
$$

在直角三角形 $PAH$ 中：

$$
PH
=
\sqrt{PA^2-AH^2}
=
\sqrt{16-12}
=
\boxed{2}.
$$

底面积

$$
[ABC]
=
\frac{\sqrt3}{4}\cdot6^2
=
9\sqrt3.
$$

因此体积

$$
V
=
\frac13\cdot9\sqrt3\cdot2
=
\boxed{6\sqrt3}.
$$

</details>


:::note[同类型练习｜第10講 PART3 確認問題]
四面体 $PABC$ 满足

$$
PA=PB=PC=\sqrt7,
$$

$$
AB=BC=CA=2\sqrt3.
$$

以 $\triangle ABC$ 为底面，求：

1. 高 $h$
2. 体积 $V$

![第10講 PART3 確認問題 四面体](/img/math1a-advanced/lesson15/confirm-part3-tetrahedron.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

同样设高的垂足为 $H$。由于

$$
PA=PB=PC,
$$

$H$ 为正三角形 $ABC$ 的外心。

底边

$$
AB=2\sqrt3,
$$

所以

$$
AH=\frac{2\sqrt3}{\sqrt3}=2.
$$

在直角三角形 $PAH$ 中：

$$
PH
=
\sqrt{(\sqrt7)^2-2^2}
=
\sqrt3.
$$

注意：教材原题的高度记号对应的数值为

$$
\boxed{h=\sqrt3}.
$$

底面积：

$$
[ABC]
=
\frac{\sqrt3}{4}(2\sqrt3)^2
=
3\sqrt3.
$$

体积：

$$
V
=
\frac13\cdot3\sqrt3\cdot\sqrt3
=
\boxed{3}.
$$

</details>


---

## 2　换底面：用体积求点到平面的距离

空间题里很重要的一个技巧是：

$$
\boxed{\text{同一个四面体，换一个面当底面}}
$$

体积本身不变。已经能用一个底面求出体积时，可以换成另一个底面，反求“点到平面的距离”。

:::info[4STEP 教材综合｜四面体と点から平面までの距離]
四面体 $ABCD$ 中，

$$
AB=BC=3,\qquad
CA=2\sqrt5,\qquad
BD=1,
$$

并且

$$
\angle ADB=\angle ADC=90^\circ.
$$

求：

1. $CD$；
2. 四面体 $ABCD$ 的体积；
3. $\triangle ABC$ 的面积；
4. 点 $D$ 到平面 $ABC$ 的距离 $DH$。

![四面体与点到平面距离](/img/math1a-advanced/lesson15/tetrahedron-point-plane-distance.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

由

$$
\angle ADB=90^\circ
$$

和

$$
AB=3,\qquad BD=1
$$

得到

$$
AD=\sqrt{3^2-1^2}=2\sqrt2.
$$

又因为

$$
\angle ADC=90^\circ,
$$

所以

$$
CD
=
\sqrt{AC^2-AD^2}
=
\sqrt{20-8}
=
\boxed{2\sqrt3}.
$$

在 $\triangle BCD$ 中，

$$
BD=1,\qquad CD=2\sqrt3,\qquad BC=3.
$$

由余弦定理，

$$
\cos\angle BDC
=
\frac{1+12-9}{4\sqrt3}
=
\frac1{\sqrt3},
$$

因此

$$
\sin\angle BDC=\sqrt{\frac23}.
$$

所以

$$
[BCD]
=
\frac12\cdot1\cdot2\sqrt3\cdot\sqrt{\frac23}
=
\sqrt2.
$$

因为 $AD$ 同时垂直于 $DB,DC$，所以

$$
AD\perp\text{平面 }BCD.
$$

于是

$$
V
=
\frac13[BCD]\cdot AD
=
\frac13\cdot\sqrt2\cdot2\sqrt2
=
\boxed{\frac43}.
$$

另一方面，$\triangle ABC$ 三边为

$$
3,\qquad3,\qquad2\sqrt5.
$$

以 $AC$ 为底边时，高为

$$
\sqrt{3^2-(\sqrt5)^2}=2.
$$

所以

$$
[ABC]
=
\frac12\cdot2\sqrt5\cdot2
=
\boxed{2\sqrt5}.
$$

再把 $\triangle ABC$ 当底面：

$$
\frac43
=
\frac13\cdot2\sqrt5\cdot DH.
$$

因此

$$
\boxed{DH=\frac{2\sqrt5}{5}}.
$$

</details>

:::note[確認問題｜同じ四面体を別の底面で見る]
四面体 $ABCD$ 中，$AD$ 垂直于平面 $BCD$，并且

$$
AD=3,\qquad
BD=CD=4,\qquad
\angle BDC=60^\circ.
$$

另外

$$
AB=AC=5,\qquad BC=4.
$$

求：

1. 四面体体积；
2. $\triangle ABC$ 的面积；
3. 点 $D$ 到平面 $ABC$ 的距离。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
[BCD]
=
\frac12\cdot4\cdot4\sin60^\circ
=
4\sqrt3.
$$

所以

$$
V
=
\frac13\cdot4\sqrt3\cdot3
=
\boxed{4\sqrt3}.
$$

$\triangle ABC$ 是边长

$$
5,\qquad5,\qquad4
$$

的等腰三角形，高为

$$
\sqrt{5^2-2^2}=\sqrt{21}.
$$

因此

$$
[ABC]
=
\frac12\cdot4\sqrt{21}
=
2\sqrt{21}.
$$

若点 $D$ 到平面 $ABC$ 的距离为 $h$，则

$$
4\sqrt3
=
\frac13\cdot2\sqrt{21}\cdot h.
$$

解得

$$
\boxed{h=\frac{6\sqrt7}{7}}.
$$

</details>

---

## 3　正四角锥：参数也要先降到直角三角形

正四角锥中，顶点向底面作垂线时，垂足是正方形底面的中心。

因此真正需要处理的仍然只是一个直角三角形。

:::info[4STEP 教材题型｜正四角錐]
正四角锥 $PABCD$ 中，$PH$ 垂直于底面正方形 $ABCD$，$H$ 为底面中心。

已知

$$
PA=a,\qquad
\angle APH=\theta.
$$

用 $a,\theta$ 表示体积 $V$。

![正四角锥参数题](/img/math1a-advanced/lesson15/square-pyramid-parameter.svg)
:::

<details className="solution-details">
<summary>查看答案</summary>

在直角三角形 $PAH$ 中，

$$
PH=a\cos\theta,
$$

$$
AH=a\sin\theta.
$$

因为 $H$ 是正方形中心，

$$
AC=2AH=2a\sin\theta.
$$

若正方形边长为 $x$，则

$$
x=\frac{AC}{\sqrt2}
=
\sqrt2\,a\sin\theta.
$$

所以底面积为

$$
x^2=2a^2\sin^2\theta.
$$

因此

$$
V
=
\frac13\cdot2a^2\sin^2\theta\cdot a\cos\theta
=
\boxed{\frac23a^3\sin^2\theta\cos\theta}.
$$

</details>

:::note[確認問題｜数値を入れて確認]
在同样的正四角锥中，

$$
PA=6,\qquad
\angle APH=60^\circ.
$$

求：

1. 高 $PH$；
2. 正方形底面的边长；
3. 四角锥体积。
:::

<details className="solution-details">
<summary>查看答案</summary>

$$
PH
=
6\cos60^\circ
=
\boxed{3}.
$$

$$
AH
=
6\sin60^\circ
=
3\sqrt3.
$$

底面对角线为

$$
AC=2AH=6\sqrt3.
$$

所以边长

$$
AB
=
\frac{6\sqrt3}{\sqrt2}
=
\boxed{3\sqrt6}.
$$

底面积为

$$
(3\sqrt6)^2=54.
$$

因此

$$
V
=
\frac13\cdot54\cdot3
=
\boxed{54}.
$$

</details>

---

## 4　底面不是正三角形时怎么办？

条件

$$
PA=PB=PC
$$

并不意味着底面一定是正三角形。

真正能推出的是：从 $P$ 向底面作垂线，垂足 $H$ 满足

$$
HA=HB=HC,
$$

即 $H$ 是 $\triangle ABC$ 的外心。

:::note[讲义原创综合｜非正三角形底面]
四面体 $PABC$ 满足

$$
PA=PB=PC=\sqrt{10},
$$

底面三边为

$$
AB=3,\qquad
BC=4,\qquad
CA=5.
$$

求四面体体积。
:::

<details className="solution-details">
<summary>查看答案</summary>

底面是 $3$-$4$-$5$ 直角三角形，因此其外接圆半径为斜边的一半：

$$
R=\frac52.
$$

设高的垂足为 $H$，则

$$
HA=HB=HC=\frac52.
$$

在直角三角形 $PHA$ 中，

$$
PH
=
\sqrt{10-\frac{25}{4}}
=
\frac{\sqrt{15}}2.
$$

底面积为

$$
[ABC]
=
\frac12\cdot3\cdot4
=
6.
$$

因此

$$
V
=
\frac13\cdot6\cdot\frac{\sqrt{15}}2
=
\boxed{\sqrt{15}}.
$$

</details>

---

## 5　图形与计量综合检查

做第8～10講综合题时，依次确认：

1. 是否可以先落到直角三角形；
2. 是否需要正弦定理；
3. 是否需要余弦定理；
4. 是否可以用面积建立额外关系；
5. 空间图形是否能先求底面中心或底面外心；
6. 是否可以通过“换底面”反求点到平面的距离。

:::note[综合练习｜先判断方法，不急着计算]
看到空间图形时，先回答下面三个问题：

1. 哪个面最适合先当底面？
2. 哪一条线可以确认是这个底面的高？
3. 如果目标是“点到另一个平面的距离”，是否可以先求体积，再换底面？

把这三个问题判断清楚以后，再进入具体计算。
:::

---

## 本讲整理

空间题的核心不是“三维计算”，而是：

> 找到合适的平面截面，把三维问题降回二维。
