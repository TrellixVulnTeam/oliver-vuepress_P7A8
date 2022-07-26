(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{552:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("blockquote",[a("p",[t._v("单链表的查询效率是 "),a("code",[t._v("O(n)")]),t._v(", 通过在单链表的基础上增加层级，形成多级链表，是一种 "),a("code",[t._v("空间 换 时间")]),t._v(" 的做法，提高了查询效率到 "),a("code",[t._v("logN")]),t._v("，可以做到类似 二分法的效果,但并没有完全 二分法。")])]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("跳跃表")]),t._v("是一种有序的数据结构 ，它通过在每个节点中维持多个指向其他节点的指针，从而达到快速访问节点的目的")])]),t._v(" "),a("h2",{attrs:{id:"基本结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本结构"}},[t._v("#")]),t._v(" 基本结构")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/middleware/redislearn/redis跳跃表.png"),alt:"foo"}}),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[t._v("# 跳跃表\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("zskiplist")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n  zskiplistNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳跃列表头指针 （指向头节点）")]),t._v("\n\tzskiplistNode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" tail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳跃列表尾指针 （指向尾节点）")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \t\t\t\t\t  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳跃列表当前的最高层  ")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" length             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 节点的数量")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n# 跳跃表节点\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("zskiplistNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n  robj "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成员对象")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("double")]),t._v(" score"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 分值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("zskiplistLevel")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跳跃表层级信息    ")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" span"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 跨度，记录两个节点之间的距离，即 记录 本节点 到 下一个节点之间距离")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" level"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("zskiplistNode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("backward"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//后退指针，从表尾向表头方向访问节点，每个节点只有一个后退指针，以每次只能后退至前一个节点")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n")])])]),a("p",[a("strong",[t._v("注")])]),t._v(" "),a("ul",[a("li",[t._v("head 节点不存储任何元素, 虽然head节点，已经存在了最高层级，但实际上访问时，会更具 "),a("code",[t._v("level")]),t._v(" 存储的当前跳表的最高层级进行访问")])]),t._v(" "),a("h2",{attrs:{id:"最高层数-随机层数策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最高层数-随机层数策略"}},[t._v("#")]),t._v(" 最高层数&随机层数策略")]),t._v(" "),a("p",[a("strong",[t._v("最高层数")]),t._v("：")]),t._v(" "),a("ul",[a("li",[t._v("Redis 3.2:  "),a("code",[t._v("32层")])]),t._v(" "),a("li",[t._v("Redis5.0："),a("code",[t._v("64层")])])]),t._v(" "),a("p",[t._v("随机层数的策略")]),t._v(" "),a("p",[t._v("网上常说的每一层的晋升概率是 50%  实际源码中 "),a("code",[t._v("redis 源码中晋升概率只有 25%")])]),t._v(" "),a("div",{staticClass:"language-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-c"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("zslRandomLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     \n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ZSKIPLIST_P "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0xFFFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("         \n    level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("level"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("ZSKIPLIST_MAXLEVEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" level "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ZSKIPLIST_MAXLEVEL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"查找元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找元素"}},[t._v("#")]),t._v(" 查找元素")]),t._v(" "),a("p",[t._v("查找元素：")]),t._v(" "),a("ul",[a("li",[t._v("从 header 执行的最高处开始遍历")]),t._v(" "),a("li",[t._v("中间经过的一系列节点称之为「搜索路径」： 它是从最高层一直到最底层的每一层最后一个比「我」小的元素节点列表")])]),t._v(" "),a("p",[a("strong",[t._v("通过")]),t._v(" "),a("code",[t._v("maxLevel")]),t._v(" 当前最高层数，避免从最高的32层 开始遍历，而是从 "),a("code",[t._v("maxLevel")]),t._v(" 开始遍历性能就会提高很多")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/middleware/redislearn/redis跳跃表level.png"),alt:"foo"}}),t._v(" "),a("h2",{attrs:{id:"插入元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入元素"}},[t._v("#")]),t._v(" 插入元素")]),t._v(" "),a("ul",[a("li",[t._v("通过 "),a("code",[t._v("maxLevel")]),t._v(" 最高层级，开始从最高层级逐步寻找目标节点，得到 [搜索路径] （即节点需要到达目标地点的路径）")]),t._v(" "),a("li",[t._v("获取随机层级")]),t._v(" "),a("li",[t._v("填充跨度")]),t._v(" "),a("li",[t._v("更新跳跃表的层高")]),t._v(" "),a("li",[t._v("创建新节点\n"),a("ul",[a("li",[t._v("重排向前指针")]),t._v(" "),a("li",[t._v("重排向后指针")])])])]),t._v(" "),a("h2",{attrs:{id:"删除元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除元素"}},[t._v("#")]),t._v(" 删除元素")]),t._v(" "),a("p",[a("strong",[t._v("与插入类似")])]),t._v(" "),a("h2",{attrs:{id:"更新元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新元素"}},[t._v("#")]),t._v(" 更新元素")]),t._v(" "),a("p",[t._v("删除过程： 与插入过程类似")]),t._v(" "),a("p",[t._v("更新过程：")]),t._v(" "),a("ul",[a("li",[t._v("如果value 不存在：则执行 插入过程")]),t._v(" "),a("li",[t._v("存在\n"),a("ul",[a("li",[t._v("修改 score值，不发生排序位置改变：直接更新")]),t._v(" "),a("li",[t._v("修改 score值，发生排序位置改变：直接删除后，在插入")])])])]),t._v(" "),a("h2",{attrs:{id:"排序策略-排序值如何计算"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排序策略-排序值如何计算"}},[t._v("#")]),t._v(" 排序策略&排序值如何计算")]),t._v(" "),a("p",[a("strong",[t._v("排序策略")])]),t._v(" "),a("ul",[a("li",[t._v("优先score排序")]),t._v(" "),a("li",[t._v("score 相同 则 比较 value 值(字符串排序）")])]),t._v(" "),a("p",[a("strong",[t._v("元素排序如何计算")])]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("span")]),t._v(" 跨度，遍历操作只使用前进指针就可以完成了。跨度实际上是用来 "),a("code",[t._v("计算排位(rank)")]),t._v("的")]),t._v(" "),a("h2",{attrs:{id:"跳跃表优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跳跃表优势"}},[t._v("#")]),t._v(" 跳跃表优势")]),t._v(" "),a("ul",[a("li",[t._v("header和tail指针分别指向跳跃表的表头和表尾节点,通过这两个指针,程序定位表头节点和表尾节点的复杂度为O(1)")]),t._v(" "),a("li",[t._v("通过使用length属性来记录节点的数量,程序可以在O(1)复杂度内返回跳跃表的长度。")]),t._v(" "),a("li",[t._v("level属性则用于在O(1)复杂度内获取跳跃表中层高最大的那个节点的层数量")])])])}),[],!1,null,null,null);s.default=n.exports}}]);