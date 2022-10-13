(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{573:function(t,a,v){"use strict";v.r(a);var e=v(17),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"数据类型分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型分类"}},[t._v("#")]),t._v(" 数据类型分类")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("值类型")])]),t._v(" "),v("li",[v("p",[t._v("引用类型 （简单地讲，“引用”是存储在有序的内存栈上的，而对象本身的值存储在内存堆上的；）")])])]),t._v(" "),v("h3",{attrs:{id:"值类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#值类型"}},[t._v("#")]),t._v(" 值类型")]),t._v(" "),v("p",[t._v("Java 提供了8中基本类型，4大类类型")]),t._v(" "),v("ul",[v("li",[t._v("整形\n"),v("ul",[v("li",[t._v("byte (存储为8位，取值范围[2^7, 2^7-1],即[-128, 127])")]),t._v(" "),v("li",[t._v("short (存储单位16位)")]),t._v(" "),v("li",[t._v("int (存储单位为32位)")]),t._v(" "),v("li",[t._v("long (存储单位为64位,赋值时一般在数字后加上 l 或 L)")])])]),t._v(" "),v("li",[t._v("浮点型\n"),v("ul",[v("li",[t._v("float (存储单位为32位, 赋值时必须在数字后加上 f 或 F)")]),t._v(" "),v("li",[t._v("double (存储单位为64位,赋值时一般在数字后加 d 或 D)")])])]),t._v(" "),v("li",[t._v("布尔型\n"),v("ul",[v("li",[t._v("boolean  (存储单位为1位)")])])]),t._v(" "),v("li",[t._v("字符型\n"),v("ul",[v("li",[t._v("char (存储单位为16位)")])])])]),t._v(" "),v("h3",{attrs:{id:"值类型-和-引用类型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#值类型-和-引用类型"}},[t._v("#")]),t._v(" 值类型 和 引用类型")]),t._v(" "),v("ul",[v("li",[t._v("从概念来说\n"),v("ul",[v("li",[t._v("基本类型：变量名指向具体数值")]),t._v(" "),v("li",[t._v("引用类型：变量名指向数据对象的内存地址")])])]),t._v(" "),v("li",[t._v("从内存方面来说\n"),v("ul",[v("li",[t._v("基本类型：变量在声明之后，Java 就会立刻分配给他内存空间。")]),t._v(" "),v("li",[t._v("引用类型：它以特殊的方式（类似 C 指针）向对象实体（具体的值），这类变量声明时不会分配内存，只是存储了一个内存地址。")])])]),t._v(" "),v("li",[t._v("从使用方面来说\n"),v("ul",[v("li",[t._v("基本类型：使用时需要赋具体值,判断时使用 == 号。")]),t._v(" "),v("li",[t._v("引用类型：使用时可以赋 null，判断时使用 equals 方法。")])])])]),t._v(" "),v("h3",{attrs:{id:"引用类型分为四类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#引用类型分为四类"}},[t._v("#")]),t._v(" 引用类型分为四类")]),t._v(" "),v("p",[v("strong",[t._v("强引用")])]),t._v(" "),v("p",[t._v("垃圾回收器：")]),t._v(" "),v("p",[t._v("内存充足时，不会回收")]),t._v(" "),v("p",[t._v("当内存不足时，也不会回收，Java虚拟机会抛出 "),v("code",[t._v("OutOfMemoryError")])]),t._v(" "),v("p",[t._v("当对 强以引用赋 null 时，jvm 会在适当的时间进行回收")]),t._v(" "),v("p",[v("strong",[t._v("软引用")])]),t._v(" "),v("ul",[v("li",[t._v("当内存足够时，不会回收")]),t._v(" "),v("li",[t._v("当内容不足时，会进行回收")]),t._v(" "),v("li",[t._v("用java.lang.ref.SoftReference类来表示软引用。")])]),t._v(" "),v("p",[v("strong",[t._v("弱引用")])]),t._v(" "),v("ul",[v("li",[t._v("无论内存是否足够，只要JVM开始进行垃圾回收，都会被回收")]),t._v(" "),v("li",[t._v("用 java.lang.ref.WeakReference 来表示弱引用")]),t._v(" "),v("li",[t._v("经典案例  ThreadLocal 是个虚引用")])]),t._v(" "),v("p",[v("strong",[t._v("引虚用")])]),t._v(" "),v("ul",[v("li",[t._v("一个对象仅持有虚引用，那么它就和没有任何引用一样，它随时可能会被回收")]),t._v(" "),v("li",[t._v("用 PhantomReference类表示虚引用")]),t._v(" "),v("li",[t._v("类中只有一个 构造方法 和 get() 方法 且仅仅返回一个null")]),t._v(" "),v("li",[t._v("虚引用 必须 要和 ReferenceQueue 引用队列一起使用。")])]),t._v(" "),v("h2",{attrs:{id:"数据类型转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[t._v("#")]),t._v(" 数据类型转换")]),t._v(" "),v("p",[t._v("java 中有两种数据转换方式")]),t._v(" "),v("ul",[v("li",[t._v("自动转换")]),t._v(" "),v("li",[t._v("强制转换")])]),t._v(" "),v("h3",{attrs:{id:"自动转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动转换"}},[t._v("#")]),t._v(" 自动转换")]),t._v(" "),v("ul",[v("li",[t._v("由小数据转为大数据 （比如数据计算）")]),t._v(" "),v("li",[t._v("转换前后数据类型需要兼容")]),t._v(" "),v("li",[t._v("整型类型和浮点型进行计算后，结果会转为浮点型")])]),t._v(" "),v("h3",{attrs:{id:"强制转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强制转换"}},[t._v("#")]),t._v(" 强制转换")]),t._v(" "),v("p",[t._v("有些时候不满足，自动转换的标准时，会进行一些手动转换"),v("br"),t._v("\n强制转换使用括号()"),v("br"),t._v("\n强制转转换 可能会丢失进度")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("float f = 3.55f\nint x = (int) f\n")])])]),v("h2",{attrs:{id:"装箱、拆箱"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#装箱、拆箱"}},[t._v("#")]),t._v(" 装箱、拆箱")]),t._v(" "),v("h3",{attrs:{id:"基本数据类型-与-包装类关系"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型-与-包装类关系"}},[t._v("#")]),t._v(" 基本数据类型 与 包装类关系")]),t._v(" "),v("p",[t._v("包装类：都是对象")]),t._v(" "),v("p",[t._v("java中为每一种基本数据类型提供了相应的包装类，如下：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("基本数据类型")]),t._v(" "),v("th",[t._v("包装类")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("byte")]),t._v(" "),v("td",[t._v("Byte")])]),t._v(" "),v("tr",[v("td",[t._v("short")]),t._v(" "),v("td",[t._v("Short")])]),t._v(" "),v("tr",[v("td",[t._v("int")]),t._v(" "),v("td",[t._v("Integer")])]),t._v(" "),v("tr",[v("td",[t._v("long")]),t._v(" "),v("td",[t._v("Long")])]),t._v(" "),v("tr",[v("td",[t._v("float")]),t._v(" "),v("td",[t._v("Float")])]),t._v(" "),v("tr",[v("td",[t._v("double")]),t._v(" "),v("td",[t._v("Double")])]),t._v(" "),v("tr",[v("td",[t._v("boolean")]),t._v(" "),v("td",[t._v("Boolean")])]),t._v(" "),v("tr",[v("td",[t._v("char")]),t._v(" "),v("td",[t._v("Character")])])])]),t._v(" "),v("h3",{attrs:{id:"装箱、拆箱-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#装箱、拆箱-2"}},[t._v("#")]),t._v(" 装箱、拆箱")]),t._v(" "),v("ul",[v("li",[t._v("装箱（boxing）是将值类型转换为引用类型。例如：int 转 Integer\n"),v("ul",[v("li",[t._v("装箱过程是通过调用包装类的 valueOf 方法实现的。")])])]),t._v(" "),v("li",[t._v("拆箱（unboxing）是将引用类型转换为值类型。例如：Integer 转 int\n"),v("ul",[v("li",[t._v("拆箱过程是通过调用包装类的 xxxValue 方法实现的。（xxx 代表对应的基本数据类型）。")])])])]),t._v(" "),v("h3",{attrs:{id:"自动装箱、自动拆箱"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱、自动拆箱"}},[t._v("#")]),t._v(" 自动装箱、自动拆箱")]),t._v(" "),v("p",[t._v("自在JDK5开始提供了 自动装箱，拆箱；\n自动装箱与拆箱机制，是为了我们在赋值或者方法调用的时候使用基本数据类型和对象类型更加简单直接")]),t._v(" "),v("p",[v("strong",[t._v("那些场景会自动拆装箱")])]),t._v(" "),v("ul",[v("li",[t._v("基本类型放入集合类")]),t._v(" "),v("li",[t._v("包装类 与 基本类型大小比较")]),t._v(" "),v("li",[t._v("包装类的数值运算")]),t._v(" "),v("li",[t._v("三目运算")]),t._v(" "),v("li",[t._v("函数的参数 和 返回值")])]),t._v(" "),v("h3",{attrs:{id:"自动拆装箱-提一部分的缓存机制"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动拆装箱-提一部分的缓存机制"}},[t._v("#")]),t._v(" 自动拆装箱 提一部分的缓存机制")]),t._v(" "),v("blockquote",[v("p",[t._v("java 5 中，在 Integer 的操作上引入了一个新功能来节省内存和提高性能。整型对象通过使用相同的对象引用实现缓存和重用。")])]),t._v(" "),v("ul",[v("li",[t._v("适用于整数值区间 -128 至 +127。")]),t._v(" "),v("li",[t._v("最大值 127 可以通过 -XX:AutoBoxCacheMax=size 修改")]),t._v(" "),v("li",[t._v("在 Java 6 中，可以通过 java.lang.Integer.IntegerCache.high 设置最大值")])]),t._v(" "),v("p",[t._v("通过valueOf 方法 我们可以直接  整数值区间 -128 至 +127 会通过 "),v("code",[t._v("IntegerCache")]),t._v(" 获取")]),t._v(" "),v("div",{staticClass:"language-java extra-class"},[v("pre",{pre:!0,attrs:{class:"language-java"}},[v("code",[t._v("    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * Returns an {@code Integer} instance representing the specified\n     * {@code int} value.  If a new {@code Integer} instance is not\n     * required, this method should generally be used in preference to\n     * the constructor {@link #Integer(int)}, as this method is likely\n     * to yield significantly better space and time performance by\n     * caching frequently requested values.\n     *\n     * This method will always cache values in the range -128 to 127,\n     * inclusive, and may cache other values outside of this range.\n     *\n     * @param  i an {@code int} value.\n     * @return an {@code Integer} instance representing {@code i}.\n     * @since  1.5\n     */")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntegerCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("low "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntegerCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("high"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntegerCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cache"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IntegerCache")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("low"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),v("p",[v("strong",[t._v("所以在这个范围内可以通过  == 进行判断，超过则不不行， 所有我们建议都 equals 进行相等判断")])]),t._v(" "),v("p",[t._v("其他的缓存对象：")]),t._v(" "),v("ul",[v("li",[t._v("有ByteCache用于缓存Byte对象")]),t._v(" "),v("li",[t._v("有ShortCache用于缓存Short对象")]),t._v(" "),v("li",[t._v("有LongCache用于缓存Long对象")]),t._v(" "),v("li",[t._v("有CharacterCache用于缓存Character对象")])]),t._v(" "),v("p",[t._v("其中：")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("Byte")]),t._v(", "),v("code",[t._v("Short")]),t._v(", "),v("code",[t._v("Long")]),t._v(" 有固定范围: -128 到 127。")]),t._v(" "),v("li",[t._v("对于 "),v("code",[t._v("Character")]),t._v(", 范围是 0 到 127")])]),t._v(" "),v("blockquote",[v("p",[t._v("除了 "),v("code",[t._v("Integer")]),t._v(" 以外，这个范围都不能改变。")])]),t._v(" "),v("h2",{attrs:{id:"数值计算"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数值计算"}},[t._v("#")]),t._v(" 数值计算")]),t._v(" "),v("ul",[v("li",[t._v("浮点数无法紧缺表达和运算的场景，一定要使用 "),v("code",[t._v("BigDecimal")]),t._v(" 类型")]),t._v(" "),v("li",[t._v("浮点数的字符串格式化也要通过 BigDecimal 进行")]),t._v(" "),v("li",[t._v("BigDecimal 可以使用 "),v("code",[t._v("compareTo")]),t._v(" 方法比较大小")]),t._v(" "),v("li",[t._v("数值溢出，当数值计算-或转换溢出，是默默地溢出，并不会抛出任何异常")])]),t._v(" "),v("blockquote",[v("p",[t._v("可以参考一下文章：")]),t._v(" "),v("ul",[v("li",[t._v("https://juejin.im/post/6844903501256998926")]),t._v(" "),v("li",[t._v("https://juejin.im/post/6844903545464946695")]),t._v(" "),v("li",[t._v("https://www.hollischuang.com/archives/1174")])])])])}),[],!1,null,null,null);a.default=_.exports}}]);