(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{354:function(v,e,a){"use strict";a.r(e);var _=a(0),t=Object(_.a)({},(function(){var v=this,e=v.$createElement,a=v._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"synchronized和volatile的使用与区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized和volatile的使用与区别"}},[v._v("#")]),v._v(" Synchronized和Volatile的使用与区别")]),v._v(" "),a("h2",{attrs:{id:"synchronized-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-关键字"}},[v._v("#")]),v._v(" synchronized 关键字")]),v._v(" "),a("h3",{attrs:{id:"什么是-synchronized-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-synchronized-关键字"}},[v._v("#")]),v._v(" 什么是 synchronized 关键字？")]),v._v(" "),a("p",[a("code",[v._v("synchronized")]),v._v(" 是 Java 中的一个关键字，翻译成中文是同步的意思。")]),v._v(" "),a("p",[v._v("主要解决的是：多个线程之间访问资源的同步性。可以保证被它修饰的方法或者代码块在任意时刻只能有一个线程执行。")]),v._v(" "),a("p",[a("em",[a("strong",[v._v("使用方式")])])]),v._v(" "),a("p",[v._v("使用 "),a("code",[v._v("synchronized")]),v._v(" 关键字时，需要"),a("strong",[v._v("在方法或代码块上加锁")]),v._v("，以确保同一时间只有一个线程可以执行这段代码；")]),v._v(" "),a("h3",{attrs:{id:"构造方法可以用-synchronized-修饰么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#构造方法可以用-synchronized-修饰么"}},[v._v("#")]),v._v(" 构造方法可以用 synchronized 修饰么？")]),v._v(" "),a("p",[v._v("不可以。")]),v._v(" "),a("p",[v._v("因为构造方法本身就属于线程安全的，不存在同步的构造方法一说。")]),v._v(" "),a("h3",{attrs:{id:"synchronized-的底层原理是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-的底层原理是什么"}},[v._v("#")]),v._v(" synchronized 的底层原理是什么？")]),v._v(" "),a("ul",[a("li",[a("p",[a("code",[v._v("synchronized")]),v._v(" 同步语句块时")]),v._v(" "),a("p",[v._v("使用的是 "),a("code",[v._v("monitorenter")]),v._v(" 和 "),a("code",[v._v("monitorexit")]),v._v(" 指令，其中 "),a("code",[v._v("monitorenter")]),v._v(" 指令指向同步代码块的开始位置，"),a("code",[v._v("monitorexit")]),v._v(" 指令则指明同步代码块的结束位置。")])]),v._v(" "),a("li",[a("p",[a("code",[v._v("synchronized")]),v._v(" 修饰方法时")]),v._v(" "),a("p",[v._v("没有 "),a("code",[v._v("monitorenter")]),v._v(" 指令和 "),a("code",[v._v("monitorexit")]),v._v(" 指令，取而代之的是 "),a("code",[v._v("ACC_SYNCHRONIZED")]),v._v(" 标识，该标识指明了该方法是一个同步方法。")])])]),v._v(" "),a("h2",{attrs:{id:"volatile-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字"}},[v._v("#")]),v._v(" volatile 关键字")]),v._v(" "),a("h3",{attrs:{id:"什么是-volatile-关键字"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-volatile-关键字"}},[v._v("#")]),v._v(" 什么是 volatile 关键字？")]),v._v(" "),a("p",[v._v("volatile 关键字是 Java 中用于"),a("strong",[v._v("保证变量可见性")]),v._v("和"),a("strong",[v._v("禁止指令重排序优化")]),v._v("的一种机制。只能保证单个变量的原子性，不能保证复合操作的原子性。")]),v._v(" "),a("h3",{attrs:{id:"volatile-关键字解决了什么问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-关键字解决了什么问题"}},[v._v("#")]),v._v(" volatile 关键字解决了什么问题？")]),v._v(" "),a("p",[v._v("volatile 关键字主要解决了两个问题："),a("strong",[v._v("可见性问题")]),v._v("和"),a("strong",[v._v("指令重排序问题")]),v._v("。")]),v._v(" "),a("ol",[a("li",[a("p",[v._v("可见性问题")]),v._v(" "),a("p",[v._v("在多线程环境下，每个线程都有自己的工作内存，用于存储线程需要使用的变量。"),a("strong",[v._v("当一个线程修改了某个变量的值时，这个变量的值并不会立即被其他线程看到，需要将该变量的值同步到主内存中，其他线程才能看到该变量的最新值")]),v._v("。")]),v._v(" "),a("p",[v._v("而 volatile 关键字可以保证变量的修改对其他线程可见，从而避免了可见性问题。")])]),v._v(" "),a("li",[a("p",[v._v("指令重排序问题")]),v._v(" "),a("p",[v._v("在多线程环境下，为了提高程序性能，CPU 可能会对指令进行重排序，但指令重排序可能会导致程序出现意想不到的结果。例如，在一个双重检查锁定中，如果不使用 volatile 关键字，可能会导致另一个线程获取到未完全初始化的对象，从而出现问题。")]),v._v(" "),a("p",[v._v("而使用 volatile 关键字可以"),a("strong",[v._v("禁止指令重排序优化")]),v._v("，保证了程序的正确性。")])])]),v._v(" "),a("h2",{attrs:{id:"synchronized-和-volatile-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-和-volatile-有什么区别"}},[v._v("#")]),v._v(" synchronized 和 volatile 有什么区别？")]),v._v(" "),a("p",[a("code",[v._v("synchronized")]),v._v(" 关键字和 "),a("code",[v._v("volatile")]),v._v(" 关键字是两个"),a("strong",[v._v("互补的存在")]),v._v("，而不是对立的存在！")]),v._v(" "),a("ul",[a("li",[a("code",[v._v("volatile")]),v._v(" 关键字是线程同步的轻量级实现，所以 "),a("code",[v._v("volatile")]),v._v(" 性能肯定比 "),a("code",[v._v("synchronized")]),v._v(" 关键字要好 。但是 "),a("code",[v._v("volatile")]),v._v(" 关键字只能用于单个变量而 "),a("code",[v._v("synchronized")]),v._v(" 关键字可以修饰方法以及代码块。")]),v._v(" "),a("li",[a("code",[v._v("volatile")]),v._v(" 关键字能保证数据的可见性，但不能保证数据的原子性。"),a("code",[v._v("synchronized")]),v._v(" 关键字两者都能保证。")]),v._v(" "),a("li",[a("code",[v._v("volatile")]),v._v(" 关键字主要用于解决"),a("strong",[v._v("单个变量在多个线程之间的可见性")]),v._v("，而 "),a("code",[v._v("synchronized")]),v._v(" 关键字解决的是"),a("strong",[v._v("多线程之间的资源同步")]),v._v("。")])]),v._v(" "),a("h2",{attrs:{id:"volatile-的实现原理了解吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#volatile-的实现原理了解吗"}},[v._v("#")]),v._v(" volatile 的实现原理了解吗？")]),v._v(" "),a("blockquote",[a("p",[v._v("先讲下 volatile 是怎么保证可见性的吧")])]),v._v(" "),a("p",[v._v("volatile 可以确保对某个变量的更新对其他线程马上可见，一个变量被声明为 volatile 时，线程在写入变量时不会把值缓存在寄存器或者其他地方，而是会把值刷新回主内存 当其它线程读取该共享变量，会从主内存重新获取最新值，而不是使用当前线程的本地内存中的值。")]),v._v(" "),a("p",[v._v("例如，我们声明一个 volatile 变量 volatile int x = 0，线程 A 修改 x=1，修改完之后就会把新的值刷新回主内存，线程 B 读取 x 的时候，就会清空本地内存变量，然后再从主内存获取最新值。")]),v._v(" "),a("p",[a("em",[v._v("那线程 B 是怎么知道 x 被修改了的呢？")])]),v._v(" "),a("p",[v._v("在 Java 内存模型中，当一个线程修改了 "),a("code",[v._v("volatile")]),v._v(" 变量的值，会将这个变量的新值刷新回主内存，并且通知其他线程，告诉它们这个变量的值已经发生了改变。当其他线程（比如线程B）需要读取这个 "),a("code",[v._v("volatile")]),v._v(" 变量的值时，它们会从主内存中获取最新的值，而不是从本地内存中读取。")]),v._v(" "),a("p",[v._v("具体来说，当线程 A 修改了 "),a("code",[v._v("volatile")]),v._v(" 变量 "),a("code",[v._v("x")]),v._v(" 的值为 1，并将新的值刷新回主内存后，主内存会记录这个变化，并在内部维护一个变量版本号。其他线程（如线程 B）在读取 "),a("code",[v._v("volatile")]),v._v(" 变量时，会从主内存中获取最新的值，并检查版本号，以确保它们读取的是最新的值。")]),v._v(" "),a("h2",{attrs:{id:"说一下你对-java-内存模型-jmm-的理解"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#说一下你对-java-内存模型-jmm-的理解"}},[v._v("#")]),v._v(" 说一下你对 Java 内存模型（JMM）的理解？")]),v._v(" "),a("p",[v._v("Java 内存模型（JMM）是一种规范，是一种抽象的模型，用于定义在多线程环境下，线程之间如何与主内存和工作内存进行交互，以及如何保证线程之间的可见性、有序性和原子性。")]),v._v(" "),a("p",[v._v("JMM 主要关注以下几个概念：")]),v._v(" "),a("ol",[a("li",[v._v("**主内存和工作内存：**主内存是所有线程共享的内存区域，而每个线程都有自己的工作内存，工作内存存储了主内存的副本。线程对变量的操作首先在工作内存中进行，然后通过特定的操作将结果同步到主内存。")]),v._v(" "),a("li",[v._v("**可见性：**JMM 保证一个线程对共享变量的修改对其他线程是可见的。通过 volatile 关键字和 synchronized 关键字等机制，可以确保变量的更新在不同线程间可见。")]),v._v(" "),a("li",[v._v("**有序性：**JMM 定义了不同操作之间的执行顺序。编译器和处理器可能会对指令重排序，但是 JMM 规定了一些规则来确保程序的执行顺序符合预期。")]),v._v(" "),a("li",[v._v("**原子性：**JMM 保证一些操作的原子性，如对 volatile 变量的读写操作具有原子性。此外，可以通过 synchronized 关键字或 Lock 机制来保证代码块的原子性。")])]),v._v(" "),a("p",[v._v("总的来说，Java 内存模型是为了解决多线程环境下可能出现的可见性、有序性和原子性问题而设计的。它规定了线程之间如何与内存交互，以及如何保证线程安全。了解 JMM 对于编写并发安全的多线程程序至关重要，因为它帮助开发人员理解线程之间的交互规则，从而避免出现意外的并发问题。")]),v._v(" "),a("p",[a("em",[v._v("为什么对 volatile 变量的读写操作具有原子性？")])]),v._v(" "),a("p",[v._v("在 Java 中，对 volatile 变量的读写操作具有原子性，这意味着单个读取或写入 volatile 变量的操作在执行过程中不会被中断，也不会受到其他线程的干扰，从而确保了操作的完整性。")]),v._v(" "),a("p",[v._v("-- 这种特性是由 Java 内存模型（JMM）所规定的。")]),v._v(" "),a("ol",[a("li",[v._v("**内存可见性：**volatile 关键字不仅保证了对变量的修改对其他线程是可见的，还保证了单个读取或写入操作在主内存和工作内存之间的同步。这样，线程在读取 volatile 变量时，总是能够看到最新的值。（更新可见）")]),v._v(" "),a("li",[v._v("**禁止指令重排序：**volatile 关键字也会禁止编译器和处理器对 volatile 变量的读写指令进行重排序。这意味着在写入 volatile 变量后，该操作之前的所有操作都会被完成，而在读取 volatile 变量前，该操作之后的所有操作都会被延迟。（最终执行结果不会变）")]),v._v(" "),a("li",[v._v('**操作不具备原子性：**需要注意的是，虽然对 volatile 变量的单个读写操作具有原子性，但是多个操作组合在一起可能不具备原子性。例如，递增操作 "x++" 是一个复合操作（'),a("code",[v._v("x+1")]),v._v(" 为一次，"),a("code",[v._v("x=x+1")]),v._v(" 为一次），虽然单个的读取和写入操作都是原子的，但是组合在一起时并不是原子的。在这种情况下，应该使用锁或其他同步机制来确保原子性。")])]),v._v(" "),a("h2",{attrs:{id:"学习参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习参考"}},[v._v("#")]),v._v(" 学习参考")]),v._v(" "),a("ul",[a("li",[a("p",[a("a",{attrs:{href:"https://javaguide.cn/java/concurrent/java-concurrent-questions-02.html#synchronized-%E5%85%B3%E9%94%AE%E5%AD%97",target:"_blank",rel:"noopener noreferrer"}},[v._v("Java并发常见面试题总结（中） | JavaGuide(Java面试 + 学习指南)"),a("OutboundLink")],1)])]),v._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://www.sharkchili.com/pages/bea253/",target:"_blank",rel:"noopener noreferrer"}},[v._v("聊聊Java关键字synchronized | Shark Chili"),a("OutboundLink")],1)])]),v._v(" "),a("li",[a("p",[a("a",{attrs:{href:"https://tobebetterjavaer.com/sidebar/sanfene/javathread.html#_23-volatile%E5%AE%9E%E7%8E%B0%E5%8E%9F%E7%90%86%E4%BA%86%E8%A7%A3%E5%90%97",target:"_blank",rel:"noopener noreferrer"}},[v._v("面渣逆袭 | Java并发编程"),a("OutboundLink")],1)])])])])}),[],!1,null,null,null);e.default=t.exports}}]);