(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{439:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),a("p",[s._v("IPIP隧道是一种点对点的隧道协议，用于在IPv4网络上传输IPv4或IPv6数据包。")]),s._v(" "),a("p",[s._v("IPIP隧道的工作原理是将源主机的IP数据包封装在一个新的IP数据包中，新的IP数据包的目的地址是隧道的另一端。在隧道的另一端，接收方将解封装原始IP数据包，并将其传递到目标主机。IPIP隧道可以在不同的网络之间建立连接，例如在IPv4网络和IPv6网络之间建立连接。")]),s._v(" "),a("h2",{attrs:{id:"使用ipip隧道实现跨主机网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用ipip隧道实现跨主机网络"}},[s._v("#")]),s._v(" 使用IPIP隧道实现跨主机网络")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/c__Users_User_OneDrive_workspace_excalidraw_ipip-20230526095538-83tl82w.png",alt:""}})]),s._v(" "),a("p",[s._v("首先在Node1创建tun设备并设置为ipip模式，local设置为本地IP地址10.65.132.187，remote设置为对端IP10.65.132.187，这两个是隧道外层IP，然后再设置隧道内层IP，10.10.100.10到10.10.200.10。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" tunnel "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" tun1 mode ipip remote "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" tun1 up\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".100.10 peer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10 dev tun1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可以看到添加了一条路由，发送到目的地址10.10.200.10的包都会转发到tun1设备中")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip r")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10 dev tun1 proto kernel scope "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" src "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".100.10\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("tun设备会将进入的IP包封装到一个IP包中，源地址是之前设置的外层local IP，而目的地址是外层remote IP，然后再通过路由达到从ens18网卡出去到Node2中。")]),s._v(" "),a("p",[s._v("在Node2上创建tun设备，配置和Node1一样")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" tunnel "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" tun2 mode ipip remote "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("link")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" tun2 up\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" a "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10 peer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".100.10 dev tun2\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后在Node1上ping Node2的tun设备")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("通过tcpdump在Node2抓包如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":16:40.011992 IP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188: IP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".100.10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10: ICMP "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" request, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17609")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", length "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ipip-proto-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":16:40.012099 IP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187: IP "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".200.10 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.10")]),s._v(".100.10: ICMP "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" reply, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17609")]),s._v(", "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("seq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(", length "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("64")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ipip-proto-4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("数据包达到Node2后，是一个两层IP数据包，从Node2的ens18网卡出来后，解封数据包，发现内层的目的IP是10.10.200.10也就是tun2的地址，然后将数据包发到tun2设备。")]),s._v(" "),a("p",[s._v("tun2设备收到数据包后再根据上面相同步骤进行封装数据包回包给tun1，最终整个ping过程完成。")]),s._v(" "),a("p",[s._v("IPIP隧道是通过IP地址来标识网络设备的，所以不需要使用MAC地址，直接通过IP地址即可。通过查看tun设备信息，可以看到其是不存在mac地址的。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ip -d link show tun1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("59")]),s._v(": tun1@NONE: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("POINTOPOINT,NOARP,UP,LOWER_UP"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1480")]),s._v(" qdisc noqueue state UNKNOWN mode DEFAULT group default qlen "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v("\n    link/ipip "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187 peer "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188 promiscuity "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" minmtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("68")]),s._v(" maxmtu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65515")]),s._v(" \n    ipip ipip remote "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.188 "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.65")]),s._v(".132.187 ttl inherit pmtudisc addrgenmode eui64 numtxqueues "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" numrxqueues "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" gso_max_size "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536")]),s._v(" gso_max_segs "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"巨人的肩膀"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#巨人的肩膀"}},[s._v("#")]),s._v(" 巨人的肩膀")]),s._v(" "),a("ul",[a("li",[s._v("《Kubernetes网络权威指南》")])]),s._v(" "),a("p",[s._v("‍")])])}),[],!1,null,null,null);t.default=e.exports}}]);