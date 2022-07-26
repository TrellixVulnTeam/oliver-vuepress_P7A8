(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{541:function(_,v,e){"use strict";e.r(v);var t=e(9),r=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("blockquote",[e("p",[_._v("Redis的高可用，采用的Redis多机 和 集群的方式。 多机保证数据的一致性，就会主从复制出现。")]),_._v(" "),e("p",[_._v("常见的方案： 一主一从、一主多从")])]),_._v(" "),e("p",[e("strong",[_._v("主从复制的作用")])]),_._v(" "),e("ul",[e("li",[_._v("数据冗余： 主从复制实现了数据的热备份，是持久化以外的另一种数据冗余")]),_._v(" "),e("li",[_._v("故障恢复： 当主节点数出现问题是，可以由从节点提供服务，实现快速的故障恢复")]),_._v(" "),e("li",[_._v("读写分离： 实现读写分离，提高 Redis 的吞吐量")]),_._v(" "),e("li",[_._v("负载均衡： 通过 主从复制的基础上，配合读写分离，可以对每个节点进行负载均匀分配，尤其是在写少读多的场景下，通过多个从节点分担读负载，可以大大提高Redis服务器的并发量")])]),_._v(" "),e("p",[e("strong",[_._v("如何配置")])]),_._v(" "),e("p",[_._v("从节点开启主从复制，有3种方式：")]),_._v(" "),e("ol",[e("li",[_._v("配置文件： 在从服务器的配置文件 "),e("strong",[_._v("redis.conf")]),_._v(" 中加入："),e("code",[_._v("slaveof <masterip> <masterport>")])]),_._v(" "),e("li",[_._v("启动命令： redis-server启动命令后加入 "),e("code",[_._v("—slaveof <masterip> <masterport>")])]),_._v(" "),e("li",[_._v("客户端命令： Redis服务器启动后，直接通过客户端执行命令："),e("code",[_._v("slaveof <masterip> <masterport>")]),_._v("，则该Redis实例成为从节点。")])]),_._v(" "),e("h3",{attrs:{id:"复制功能的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制功能的实现"}},[_._v("#")]),_._v(" 复制功能的实现")]),_._v(" "),e("blockquote",[e("p",[_._v("Redis 的 复制功能 主要分为两大功能 "),e("code",[_._v("同步")]),_._v("  和 "),e("code",[_._v("命令传播")])])]),_._v(" "),e("ul",[e("li",[_._v("Redis 2.8  之前 使用 同步（SYNC） +  命令传播")]),_._v(" "),e("li",[_._v("Redis 2.8  之后 使用 同步  (PSYNC)  + 命令传播")])]),_._v(" "),e("p",[e("strong",[_._v("同步")]),_._v("：即 从服务器 向 主服务器 发送复制命令，从而进行数据复制")]),_._v(" "),e("p",[e("strong",[_._v("命令传播")]),_._v(": 当完成所有数据复制后，后续 主服务器的数据变更，将 同步修改从服务器的数据")]),_._v(" "),e("h3",{attrs:{id:"部分复制的实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#部分复制的实现"}},[_._v("#")]),_._v(" 部分复制的实现")]),_._v(" "),e("blockquote",[e("p",[_._v("部分数据复制同步的实现，主要是依赖 "),e("code",[_._v("主/从服务器的偏移量")]),_._v("、"),e("code",[_._v("主服务器的复制积压缓冲区")]),_._v(" 、"),e("code",[_._v("服务器运行ID")])])]),_._v(" "),e("p",[e("strong",[_._v("复制偏移量")])]),_._v(" "),e("p",[_._v("主/从服务器 各自维护一个复制偏移量")]),_._v(" "),e("p",[_._v("主服务器：向 从服务器传播N个数据时, 偏移量就会加N")]),_._v(" "),e("p",[_._v("从服务器：收到 主服务器传播N个数据时，偏移量就会加N")]),_._v(" "),e("p",[_._v("只需要比对 两个服务器的偏移量，就可以知道两者数据是否一致")]),_._v(" "),e("p",[_._v("并且 当从服务器断连恢复后，会根据 偏移量 和 复制积压缓冲区 判断是 全量复制 还是 部分复制")]),_._v(" "),e("p",[e("strong",[_._v("复制积压缓冲区")])]),_._v(" "),e("blockquote",[e("p",[e("code",[_._v("复制积压缓冲区")]),_._v(" 是由主服务器维护的一个 "),e("strong",[_._v("固定长度(fixed-size)")]),_._v(" "),e("strong",[_._v("先进先出(FIFO)队列")]),_._v(",  默认大小为1MB")])]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404163241394.png"),alt:"foo"}}),_._v(" "),e("p",[_._v("当 主服务器 命令传播时，除了 发送信息给 所有的从服务器，"),e("strong",[_._v("并且会将命令写入到复制积压缓冲区")])]),_._v(" "),e("p",[e("strong",[_._v("服务器重新连接后")])]),_._v(" "),e("p",[_._v("从服务器会通过PSYNC命令将自己的复制偏移量offset发送给主服务器。")]),_._v(" "),e("p",[_._v("主服务器进行判断：offset 之后的数据是否 任然存在于 缓冲区里")]),_._v(" "),e("ul",[e("li",[_._v("存在：部分复制")]),_._v(" "),e("li",[_._v("不存在：全量复制")])]),_._v(" "),e("p",[e("strong",[_._v("如何合理的设置缓冲区大小")])]),_._v(" "),e("p",[_._v("最小缓冲区设置公式："),e("code",[_._v("second * write_size_per_second")])]),_._v(" "),e("ul",[e("li",[_._v("second： 服务器重新连接的平均时间")]),_._v(" "),e("li",[_._v("write_size_per_second： 主服务器平均每秒产生的写命令数据量")])]),_._v(" "),e("p",[_._v("一般为了保险起见，建议设置成2倍："),e("code",[_._v("2 * second * write_size_per_second")])]),_._v(" "),e("p",[e("strong",[_._v("服务运行ID")])]),_._v(" "),e("blockquote",[e("p",[_._v("每个Redis服务器,不论主服务器还是从服务,都会有自己的运行ID")])]),_._v(" "),e("p",[_._v("初次复制时，主服务器 会将自己的 运行ID 发送给 从服务器， 从服务器会保存起来。用于判断同步数据的主服务器是否一致")]),_._v(" "),e("p",[_._v("当服务器重新连接后：判断 主服务运行ID是否一致：")]),_._v(" "),e("ul",[e("li",[_._v("一致：进行验证是否能执行部分复制")]),_._v(" "),e("li",[_._v("不一致：进行全量复制，并更新 主服务运行ID")])]),_._v(" "),e("h3",{attrs:{id:"psync-指令流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#psync-指令流程"}},[_._v("#")]),_._v(" PSYNC 指令流程")]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404171047915.png"),alt:"foo"}}),_._v(" "),e("h3",{attrs:{id:"具体执行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#具体执行流程"}},[_._v("#")]),_._v(" 具体执行流程")]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404205134261.png"),alt:"foo"}}),_._v(" "),e("p",[e("strong",[_._v("1. 保存主节点信息")])]),_._v(" "),e("p",[_._v("根据相关配置 或 操作命令， 从服务器 将 主服务器的连接方式 保存到 "),e("code",[_._v("RedisServer")]),_._v("  中")]),_._v(" "),e("div",{staticClass:"language-c# extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("Struct redisServer{\n\tchar *masterhost;//主服务器ip\n\tint masterport;//主服务器端口\n} ;\n")])])]),e("p",[e("strong",[_._v("2. 建立socket连接")])]),_._v(" "),e("blockquote",[e("p",[_._v("从服务器将根据命令所设置的IP地址和端口,创建连向主服务器的套接字(socket)连接")])]),_._v(" "),e("p",[_._v("从服务器：与主服务器创建连接后，关联一个用于复制工作的文件事件处理器")]),_._v(" "),e("p",[_._v("主服务器：会将 从服务器当做客户端来对待")]),_._v(" "),e("p",[e("strong",[_._v("3 发送ping命令")])]),_._v(" "),e("blockquote",[e("p",[_._v("建立连接成功后节点发送 "),e("code",[_._v("ping")]),_._v(" 进行首次通信操作")])]),_._v(" "),e("p",[_._v("其目的：")]),_._v(" "),e("ul",[e("li",[_._v("检测主从之间网络socket连接是否正常")]),_._v(" "),e("li",[_._v("检测主服务器能否正常处理请求")])]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404205148712.png"),alt:"foo"}}),_._v(" "),e("p",[e("strong",[_._v("ping命令的三种情况")])]),_._v(" "),e("ul",[e("li",[_._v("主服务器返回错误，不执行后续操作")]),_._v(" "),e("li",[_._v("主服务器获取到命令，但是无法给其回复，不执行后续操作")]),_._v(" "),e("li",[_._v("主服务器返回 "),e("code",[_._v("PONG")]),_._v("回复")])]),_._v(" "),e("p",[e("strong",[_._v("4. 身份验证")])]),_._v(" "),e("blockquote",[e("p",[_._v("当 服务器开启了 身份验证 才会起到作用")])]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404205953332.png"),alt:"foo"}}),_._v(" "),e("p",[e("strong",[_._v("5.同步数据")])]),_._v(" "),e("blockquote",[e("p",[_._v("主从建立连接后，主节点全量数据发送给从节点，进行复制同步")])]),_._v(" "),e("p",[e("strong",[_._v("同步数据分为：")])]),_._v(" "),e("ul",[e("li",[_._v("全量复制")]),_._v(" "),e("li",[_._v("增量复制")])]),_._v(" "),e("p",[e("strong",[_._v("版本之间的区别")])]),_._v(" "),e("blockquote",[e("p",[_._v("Redis 2.8  之前 使用 同步（SYNC） +  命令传播\nRedis 2.8  之后 使用 同步  (PSYNC)  + 命令传播")])]),_._v(" "),e("p",[e("strong",[_._v("为什么这么优化？")])]),_._v(" "),e("p",[e("code",[_._v("SYNC")]),_._v("   没有全量复制 和 部分复制的机制，每次同步时，从服务都会进行全量复制，并清除原有的数据")]),_._v(" "),e("p",[e("strong",[_._v("2.8之前的同步过程")])]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404210359578.png"),alt:"foo"}}),_._v(" "),e("p",[e("strong",[_._v("2.8之后的同步过程")])]),_._v(" "),e("ul",[e("li",[_._v("断线重连后的 恢复 模式  时 会进行判断  全量同步 还是 增量同步")])]),_._v(" "),e("img",{attrs:{src:_.$withBase("/middleware/redislearn/image-20220404210506790.png"),alt:"foo"}}),_._v(" "),e("p",[e("strong",[_._v("6.命令传播")])]),_._v(" "),e("blockquote",[e("p",[_._v("当主节点同步数据完成后，会进行命令传播阶段，持续同步后续的数据，保证服务器一直保证一致")])]),_._v(" "),e("p",[_._v("命令传播 主要利用了 心跳检测 机制 进行 主从之间的信息交互，并用来维护双方保持在线的的功能")]),_._v(" "),e("h3",{attrs:{id:"心跳检测"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#心跳检测"}},[_._v("#")]),_._v(" 心跳检测")]),_._v(" "),e("p",[e("strong",[_._v("主要的作用")])]),_._v(" "),e("ul",[e("li",[_._v("检测主从服务的网络状态")]),_._v(" "),e("li",[_._v("辅助实现 "),e("code",[_._v("min-slaves")]),_._v("选项")]),_._v(" "),e("li",[_._v("检测命令丢失")])]),_._v(" "),e("p",[_._v("主服务器心跳：")]),_._v(" "),e("ul",[e("li",[_._v("指令：PING")]),_._v(" "),e("li",[_._v("周期：通过repl-ping-slave-period配置，默认时10秒。")]),_._v(" "),e("li",[_._v("作用：判断slave是否在线")]),_._v(" "),e("li",[_._v("查询：可以通过info replication查看，获取slave最后一次的连接间隔，lag是0或者1是正常的，超过1就可能是超时了")])]),_._v(" "),e("p",[_._v("从服务器心跳：")]),_._v(" "),e("ul",[e("li",[_._v("命令： "),e("code",[_._v("REPLCONF ACK <replication_offset>")])]),_._v(" "),e("li",[_._v("周期：1秒")]),_._v(" "),e("li",[_._v("作用1：告诉master自己的复制偏移量，获取最新的数据变更指令")]),_._v(" "),e("li",[_._v("作用2：判断master是否在线")])]),_._v(" "),e("h3",{attrs:{id:"相关好文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关好文"}},[_._v("#")]),_._v(" 相关好文")]),_._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/wangcuican/p/12915856.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Redis入门到精通（十九）——主从复制：数据同步+命令传播阶段工作流程，主从复制工作流程（完整），主从复制常见问题 - 只会玩辅助 - 博客园"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/112213386",target:"_blank",rel:"noopener noreferrer"}},[_._v("Redis主从复制以及主从复制原理 - 知乎"),e("OutboundLink")],1)]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/wangcuican/p/12915856.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Redis入门到精通（十九）——主从复制：数据同步+命令传播阶段工作流程，主从复制工作流程（完整），主从复制常见问题 - 只会玩辅助 - 博客园"),e("OutboundLink")],1),_._v("  【文章中指出了 -  很多主从复制的问题】")]),_._v(" "),e("li",[e("a",{attrs:{href:"https://www.cnblogs.com/wangcuican/p/12913608.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Redis入门到精通（十八）——主从复制阶段二：数据同步阶段工作流程、数据同步阶段注意事项，主从复制阶段三：命令传播阶段的部分复制 - 只会玩辅助 - 博客园"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=r.exports}}]);