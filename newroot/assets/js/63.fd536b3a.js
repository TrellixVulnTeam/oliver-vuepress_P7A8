(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{560:function(t,v,_){"use strict";_.r(v);var s=_(9),a=Object(s.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("blockquote",[_("p",[t._v("Redis系统中包含 字符串对象、列表对象、哈希对象、集合对象和有序集合对象这五种类型的对象。也是我们一直使用的对象，而每种对象一种或多种数据结构实现。")])]),t._v(" "),_("img",{attrs:{src:t.$withBase("/middleware/redislearn/Reids对象与数据结构关系图.png"),alt:"foo"}}),t._v(" "),_("center",[_("b",[t._v("整体对象数据结构图")])]),t._v(" "),_("h2",{attrs:{id:"redisobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redisobject"}},[t._v("#")]),t._v(" RedisObject")]),t._v(" "),_("div",{staticClass:"language-C extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("redisObject")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     \n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型    ")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" type"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 编码   ")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("unsigned")]),t._v(" encoding"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     \n  "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指向底层实现数据结构的指针   ")]),t._v("\n    "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("ptr"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" robj"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),_("center",[t._v("基本的类型")]),t._v(" "),_("img",{attrs:{src:t.$withBase("/middleware/redislearn/Redis对象类型.png"),alt:"foo"}}),t._v(" "),_("img",{attrs:{src:t.$withBase("/middleware/redislearn/Redis对象类型编码.png"),alt:"foo"}}),t._v(" "),_("h3",{attrs:{id:"stringobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#stringobject"}},[t._v("#")]),t._v(" StringObject")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("p",[t._v("字符串对象的编码可以是int、raw或者embstr")])]),t._v(" "),_("h4",{attrs:{id:"底层编码的选择策略"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层编码的选择策略"}},[t._v("#")]),t._v(" 底层编码的选择策略")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编码")]),t._v(" "),_("th",[t._v("使用条件")]),t._v(" "),_("th",[t._v("编码转换")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("int")]),t._v(" "),_("td",[t._v("符串对象保存的是整数值")]),t._v(" "),_("td",[t._v("对象保存的不再是整数值,而是一个字符串值 会转换成 "),_("code",[t._v("raw")])])]),t._v(" "),_("tr",[_("td",[t._v("embstr")]),t._v(" "),_("td",[t._v("字符串值的长度小于等于32字节")]),t._v(" "),_("td",[t._v("embstr编码的字符串对象实际上是只读的。当我们对embstr 编码的字符串对象执行任何修改命令时,程序会先将对象的编码从embstr转换成raw,")])]),t._v(" "),_("tr",[_("td",[t._v("raw")]),t._v(" "),_("td",[t._v("字符串值的长度大于32字节")]),t._v(" "),_("td")])])]),t._v(" "),_("img",{attrs:{src:t.$withBase("/middleware/redislearn/StringObject.png"),alt:"foo"}}),t._v(" "),_("h4",{attrs:{id:"embstr-与-raw区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#embstr-与-raw区别"}},[t._v("#")]),t._v(" embstr 与 raw区别")]),t._v(" "),_("blockquote",[_("p",[t._v("两个编码格式同为 "),_("code",[t._v("SDS")]),t._v(" 那又有什么区别呢？")]),t._v(" "),_("p",[_("code",[t._v("embstr")]),t._v(" 使用在较短的字符串上")]),t._v(" "),_("p",[_("code",[t._v("raw")]),t._v("  使用在较长的字符串上")])]),t._v(" "),_("p",[_("strong",[t._v("embstr使用在较短字符串的优势？")])]),t._v(" "),_("ol",[_("li",[_("code",[t._v("embstr")]),t._v(" 内存分配次数 比 raw的两次分配少一次。embstr 会直接申请两个连续的内存区域")]),t._v(" "),_("li",[t._v("释放内存时，也只需要调用一次内释放")]),t._v(" "),_("li",[t._v("因为"),_("code",[t._v("embstr")]),t._v("编码的字符串对象的所有数据都保存在一块连续的内存里面可以更好的利用CPU缓存提升性能。")])]),t._v(" "),_("h4",{attrs:{id:"常用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用场景"}},[t._v("#")]),t._v(" 常用场景")]),t._v(" "),_("ol",[_("li",[t._v("基本的缓存")]),t._v(" "),_("li",[t._v("计数器\\限速器\\分布式ID\n"),_("ol",[_("li",[t._v("计数器：点赞数、评论数、分享数、作品数")]),t._v(" "),_("li",[t._v("限速器：接口访问频率限制、短信验证码使用频率限制")]),t._v(" "),_("li",[t._v("分布式ID: 通过Redis生成 唯一的订单号、序列号")])])]),t._v(" "),_("li",[t._v("分布式session")]),t._v(" "),_("li",[t._v("二进制存储 （文件、图片、音频）")])]),t._v(" "),_("h3",{attrs:{id:"listobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#listobject"}},[t._v("#")]),t._v(" ListObject")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("p",[t._v("底层实现："),_("code",[t._v("ziplist")]),t._v("、"),_("code",[t._v("linkedList")]),t._v(" 、"),_("code",[t._v("quickList")])])]),t._v(" "),_("h4",{attrs:{id:"底层编码的选择策略-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层编码的选择策略-2"}},[t._v("#")]),t._v(" 底层编码的选择策略")]),t._v(" "),_("p",[_("strong",[t._v("Redis3.2之前")])]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编码")]),t._v(" "),_("th",[t._v("使用条件")]),t._v(" "),_("th",[t._v("其他")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ziplist")]),t._v(" "),_("td",[t._v("1. 列表对象保存的所有字符串元素的长度都小于64字节;  "),_("br"),t._v("2. 列表对象保存的元素数量小于512个;")]),t._v(" "),_("td",[t._v("可以修改ziplist的长度 和元素设置"),_("br"),t._v("list-max-ziplist-value  和"),_("br"),t._v(" list-max-ziplist-entries")])]),t._v(" "),_("tr",[_("td",[t._v("linkedList")]),t._v(" "),_("td",[t._v("不能满足上述两个条件的中的任何一个")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("Redis3.2之后")])]),t._v(" "),_("p",[t._v("使用 quickList 代替 ziplist  和 linkedList")]),t._v(" "),_("h4",{attrs:{id:"常用场景-2"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用场景-2"}},[t._v("#")]),t._v(" 常用场景")]),t._v(" "),_("ul",[_("li",[t._v("消息队列")]),t._v(" "),_("li",[t._v("各种列表")])]),t._v(" "),_("p",[_("strong",[t._v("关于列表的使用场景可参考以下几个命令组合：")])]),t._v(" "),_("ul",[_("li",[t._v("lpush+lpop=Stack（栈）")]),t._v(" "),_("li",[t._v("lpush+rpop=Queue（队列）")]),t._v(" "),_("li",[t._v("lpush+ltrim=Capped Collection（有限集合）")]),t._v(" "),_("li",[t._v("lpush+brpop=Message Queue（消息队列）")])]),t._v(" "),_("h3",{attrs:{id:"hashobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashobject"}},[t._v("#")]),t._v(" HashObject")]),t._v(" "),_("hr"),t._v(" "),_("blockquote",[_("p",[t._v("哈希对象，是一种键值对的形势，底层使用 "),_("code",[t._v("ziplist")]),t._v("  和 "),_("code",[t._v("hashtable")]),t._v(" 实现")])]),t._v(" "),_("h4",{attrs:{id:"底层编码的选择策略-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层编码的选择策略-3"}},[t._v("#")]),t._v(" 底层编码的选择策略")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编码")]),t._v(" "),_("th",[t._v("使用条件")]),t._v(" "),_("th",[t._v("其他")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Ziplist")]),t._v(" "),_("td",[t._v("1. 哈希对象保存的所有的键 和 值的字符串长度都小于64字节;  "),_("br"),t._v("2. 哈希对象保存的键值对元素数量小于512个;")]),t._v(" "),_("td",[t._v("可以修改ziplist的长度 和元素设置"),_("br"),t._v("hash-max-ziplist-value  和"),_("br"),t._v(" hash-max-ziplist-entries")])]),t._v(" "),_("tr",[_("td",[t._v("hashtable")]),t._v(" "),_("td",[t._v("不能满足上述两个条件的中的任何一个")]),t._v(" "),_("td")])])]),t._v(" "),_("h4",{attrs:{id:"常见场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常见场景"}},[t._v("#")]),t._v(" 常见场景")]),t._v(" "),_("ol",[_("li",[t._v("存储信息当做表使用：商品、课程、等")]),t._v(" "),_("li",[t._v("暂存数据：填写表单、购物车")]),t._v(" "),_("li",[t._v("计数器：用过一年，一个月，统计访问量")])]),t._v(" "),_("h3",{attrs:{id:"setobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#setobject"}},[t._v("#")]),t._v(" SetObject")]),t._v(" "),_("blockquote",[_("p",[t._v("集合类型 (Set) 是一个无序并唯一的键值集合。它的存储顺序不会按照插入的先后顺序进行存储")]),t._v(" "),_("p",[t._v("集合对象 编码底层使用 "),_("code",[t._v("intset")]),t._v("、"),_("code",[t._v("hashtable(dict)")])])]),t._v(" "),_("h4",{attrs:{id:"与列表的区别"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#与列表的区别"}},[t._v("#")]),t._v(" 与列表的区别")]),t._v(" "),_("ul",[_("li",[t._v("列表可以存储重复元素，集合只能存储非重复元素")]),t._v(" "),_("li",[t._v("列表是按照元素的先后顺序存储元素的，而集合则是无序方式存储元素的")])]),t._v(" "),_("h4",{attrs:{id:"底层编码的选择策略-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层编码的选择策略-4"}},[t._v("#")]),t._v(" 底层编码的选择策略")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编码")]),t._v(" "),_("th",[t._v("使用条件")]),t._v(" "),_("th",[t._v("编码转换")]),t._v(" "),_("th",[t._v("其他")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("intset")]),t._v(" "),_("td",[t._v("对象中都是整数时，使用整数集合")]),t._v(" "),_("td",[t._v("集合对象保存的所有元素都是整数值; "),_("br"),t._v("集合对象保存的元素数量不超过512个")]),t._v(" "),_("td",[t._v("可以设置元素大小：setmax-intset-entries")])]),t._v(" "),_("tr",[_("td",[t._v("Hashtable(dict)")]),t._v(" "),_("td",[t._v("字典的每个键都是一个字符串对象,"),_("br"),t._v("每个字符串对象包含了一个集合元素, 而字典的值则全部被设置为NULL")]),t._v(" "),_("td"),t._v(" "),_("td")])])]),t._v(" "),_("h4",{attrs:{id:"常用场景-3"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用场景-3"}},[t._v("#")]),t._v(" 常用场景")]),t._v(" "),_("ul",[_("li",[t._v("标签系统：")]),t._v(" "),_("li",[t._v("抽奖系统：SPOP(随机移除并返回集合中一个或多个元素  和 SRANDMEMBER(随机返回集合中一个或多个元素）")])]),t._v(" "),_("h3",{attrs:{id:"zsetobject"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#zsetobject"}},[t._v("#")]),t._v(" ZSetObject")]),t._v(" "),_("blockquote",[_("p",[t._v("编码底层使用 "),_("code",[t._v("ziplist）")]),t._v("  和 "),_("code",[t._v("skiplist")]),t._v(" + "),_("code",[t._v("dict")])])]),t._v(" "),_("h4",{attrs:{id:"底层编码的选择策略-5"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#底层编码的选择策略-5"}},[t._v("#")]),t._v(" 底层编码的选择策略")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("编码")]),t._v(" "),_("th",[t._v("编码转换")]),t._v(" "),_("th",[t._v("其他")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("ziplist")]),t._v(" "),_("td",[t._v("有序集合保存的元素数量小于128个; "),_("br"),t._v("有序集合保存的所有元素成员的长度都小于64字节")]),t._v(" "),_("td",[t._v("可以对其参数进行修改："),_("br"),t._v("zset-max-ziplist-entries"),_("br"),t._v("zset-max-ziplist-value")])]),t._v(" "),_("tr",[_("td",[_("code",[t._v("skiplist")]),t._v(" + "),_("code",[t._v("dict")])]),t._v(" "),_("td",[t._v("不能满足上述两个条件的中的任何一个")]),t._v(" "),_("td")])])]),t._v(" "),_("p",[_("strong",[t._v("为什么有序集合需要同时使用跳跃表和字典来实现?")])]),t._v(" "),_("ol",[_("li",[t._v("通过 dict 实现 查找成员 时间复杂度O(0)")]),t._v(" "),_("li",[t._v("通过 跳跃表 实现 O(logN) 的 范围查询效率")])]),t._v(" "),_("p",[_("strong",[t._v("那元素存储两份数据会浪费空间吗？")])]),t._v(" "),_("p",[t._v("实际中 字典 和 跳跃表会共享元素的成员 和 分值")]),t._v(" "),_("h4",{attrs:{id:"常用场景-4"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用场景-4"}},[t._v("#")]),t._v(" 常用场景")]),t._v(" "),_("ul",[_("li",[t._v("排行榜系统")]),t._v(" "),_("li",[t._v("集合排序")])]),t._v(" "),_("h3",{attrs:{id:"其他"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),_("hr"),t._v(" "),_("h4",{attrs:{id:"对象内存的回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象内存的回收"}},[t._v("#")]),t._v(" 对象内存的回收")]),t._v(" "),_("blockquote",[_("p",[t._v("由于 "),_("code",[t._v("C语言")]),t._v(" 不具备自动内存回收的功能，所以 Redis自身实现了一个 "),_("code",[t._v("引用计数器")]),t._v(" 。")]),t._v(" "),_("p",[t._v("通过 对象的 引用计数信息 可以自动释放对象 并 进行内存回收")])]),t._v(" "),_("p",[_("strong",[t._v("redisObject")]),t._v("  对象中 使用 "),_("code",[t._v("refcount")]),t._v(" 作为计数值")]),t._v(" "),_("div",{staticClass:"language-C extra-class"},[_("pre",{pre:!0,attrs:{class:"language-c"}},[_("code",[_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("redisObject")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n    "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用计数    ")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" refcount"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),_("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" robj\n")])])]),_("h4",{attrs:{id:"对象数据共享"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对象数据共享"}},[t._v("#")]),t._v(" 对象数据共享")]),t._v(" "),_("blockquote",[_("p",[t._v("对象的引用计数属性还带有对象共享的作用")])]),t._v(" "),_("p",[t._v("共享步骤：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("将数据库键的值指针指向一个现有的值对象;")])]),t._v(" "),_("li",[_("p",[t._v("将被共享的值对象的引用计数增一。")])])])],1)}),[],!1,null,null,null);v.default=a.exports}}]);