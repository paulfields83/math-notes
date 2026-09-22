---
sidebar_position: 1
title: 第1章 集合与命题
---

# 第1章 集合与命题

本章按原讲义的两个小节整理：集合、命题与证明。

## 1.1 集合、命题与条件

### 集合、元素与子集

范围明确的对象全体叫做**集合**，其中的每一个对象叫做集合的**元素**。

$$
x\in A
$$

表示 $x$ 是集合 $A$ 的元素；

$$
x\notin A
$$

表示 $x$ 不是集合 $A$ 的元素。

集合可以用**列举法**或**描述法**表示。元素很多或无限时，可以使用省略号。

若集合 $A$ 的每一个元素都属于集合 $B$，则称 $A$ 是 $B$ 的**子集**，记作：

$$
A\subset B.
$$

任何集合都是自身的子集。两个集合的元素完全相同时，两个集合相等，记作 $A=B$。

没有任何元素的集合叫做**空集**，记作 $\varnothing$；空集是任何集合的子集。

### 交集、并集、全集与补集

- 同时属于 $A$ 和 $B$ 的元素组成的集合叫做**交集**，记作 $A\cap B$。
- 属于 $A$ 或属于 $B$ 的元素组成的集合叫做**并集**，记作 $A\cup B$；同时属于两者的元素也包含在内。
- 讨论范围内的全体元素组成的集合叫做**全集**，记作 $U$。
- 当 $A\subset U$ 时，在 $U$ 中不属于 $A$ 的全体元素叫做 $A$ 的**补集**，记作 $\overline A$。

补集的基本关系：

$$
A\cap\overline A=\varnothing,\qquad
A\cup\overline A=U,\qquad
\overline{\overline A}=A.
$$

德摩根定律：

$$
\overline{A\cup B}=\overline A\cap\overline B,
\qquad
\overline{A\cap B}=\overline A\cup\overline B.
$$

### 命题与条件

真假能够明确判断的句子或式子叫做**命题**。正确的命题叫做真命题，错误的命题叫做假命题。

含有字母、并且会因字母取值不同而改变真假的句子叫做**条件**。

“若 $p$，则 $q$”记作：

$$
p\Rightarrow q.
$$

其中 $p$ 是假设，$q$ 是结论。把满足 $p$ 的对象组成集合 $P$，满足 $q$ 的对象组成集合 $Q$，则：

$$
p\Rightarrow q\ \text{为真}\iff P\subset Q.
$$

若存在一个对象满足 $p$ 却不满足 $q$，它就是 $p\Rightarrow q$ 的**反例**；一个反例即可否定这个命题。

### 必要条件、充分条件与条件的否定

当

$$
p\Rightarrow q
$$

为真时，$p$ 是 $q$ 的**充分条件**，$q$ 是 $p$ 的**必要条件**。

当 $p\Rightarrow q$ 和 $q\Rightarrow p$ 都为真时，$p$ 与 $q$ **等价**，互为必要充分条件，记作：

$$
p\Leftrightarrow q.
$$

条件 $p$ 的否定记作 $\lnot p$。复合条件的否定满足：

$$
\lnot(p\land q)=\lnot p\lor\lnot q,
\qquad
\lnot(p\lor q)=\lnot p\land\lnot q.
$$

## 1.2 命题与证明

### 逆命题、否命题与逆否命题

对命题 $p\Rightarrow q$：

| 名称 | 形式 |
| --- | --- |
| 逆命题 | $q\Rightarrow p$ |
| 否命题 | $\lnot p\Rightarrow\lnot q$ |
| 逆否命题 | $\lnot q\Rightarrow\lnot p$ |

原命题与逆否命题的真假相同；逆命题与否命题的真假相同。原命题为真，不代表逆命题也为真。

### 证明方法

**利用逆否命题证明**：证明 $p\Rightarrow q$ 时，可以转而证明：

$$
\lnot q\Rightarrow\lnot p.
$$

**反证法**：为了证明命题 $P$ 成立，先假设 $P$ 不成立；在这个假设下推理，若得到矛盾，则假设错误，因此 $P$ 成立。

:::tip[判断框架]

直接推出结论困难时，检查逆否命题是否更容易处理；需要说明不存在性、唯一性或排除其他可能时，可考虑反证法。

:::
