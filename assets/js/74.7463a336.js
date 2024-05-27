(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{399:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("本文介绍的是 django rest_framework的认证方式.")]),t._v(" "),a("p",[t._v("Token、Session、RemoteUser、jwt等认证方式。前三种是框架自带的，而jwt需要安装第三方库"),a("code",[t._v("djangorestframework-jwt")]),t._v("，然后使用。")]),t._v(" "),a("h2",{attrs:{id:"源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[t._v("#")]),t._v(" 源码解析")]),t._v(" "),a("p",[t._v("以下是认证源码认证流程.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通过路由匹配后首先进入到"),a("code",[t._v("ApiView.as_view")]),t._v("中.\n"),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217645776.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[a("code",[t._v("ApiView")]),t._v("继承Django的"),a("code",[t._v("View")]),t._v("，然后调用"),a("code",[t._v("View.as_view")]),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217692151.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("View")]),t._v("中调用"),a("code",[t._v("dispatch")]),t._v("方法，因为"),a("code",[t._v("ApiView")]),t._v("实现"),a("code",[t._v("dispatch")]),t._v("方法，所以调用的是"),a("code",[t._v("ApiView.dispatch")]),t._v("而不是"),a("code",[t._v("View.dispatch")]),t._v(".\n"),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217722635.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("在"),a("code",[t._v("ApiView.dispatch")]),t._v("中将"),a("code",[t._v("django.request")]),t._v("再次封装成框架的"),a("code",[t._v("rest_framework.request")]),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217752105.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("封装的过程中将配置的Authentication类注入到request中.\n"),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217777505.png#alt=",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217802098.png#alt=",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217826988.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("封装完request后，调用"),a("code",[t._v("ApiView.perform_authentication")]),t._v("开始认证\n"),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217857749.png#alt=",alt:"在这里插入图片描述"}})])]),t._v(" "),a("li",[a("p",[t._v("认证的过程是通过"),a("code",[t._v("request.user")]),t._v("，然后再调用"),a("code",[t._v("request._authentication")]),t._v("进行循环遍历所有注入的"),a("code",[t._v("Authentiation")]),t._v("类中"),a("code",[t._v("authenticate")]),t._v("方法进行认证，认证成功则返回"),a("code",[t._v("user")]),t._v("和"),a("code",[t._v("auth")]),t._v("两个结果.")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217884904.png#alt=",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217914132.png#alt=",alt:"在这里插入图片描述"}}),t._v(" "),a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217936978.png#alt=",alt:"在这里插入图片描述"}})]),t._v(" "),a("h2",{attrs:{id:"认证方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认证方式"}},[t._v("#")]),t._v(" 认证方式")]),t._v(" "),a("p",[t._v("可以自定义认证类，只需要继承"),a("code",[t._v("BaseAuthentication")]),t._v("类，然后实现"),a("code",[t._v("authenticate")]),t._v("方法即可，然后将该类注入到"),a("code",[t._v("request")]),t._v("即可.")]),t._v(" "),a("p",[t._v("或者使用框架自带的认证类也可。")]),t._v(" "),a("h3",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),a("p",[t._v("是框架自带的认证方式之一.")]),t._v(" "),a("h4",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("ol",[a("li",[t._v("配置authtoken app\nsettings")])]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("INSTALLED_APPS "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rest_framework.authtoken'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("然后使用"),a("code",[t._v("python manage.py migrate")]),t._v("，会创建authtoken表，该表连接auth_user.表，每个用户都有对应一个token，用户每次访问带有该token，系统就能通过token得到当前user.")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("局部添加认证方式.")])]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("TestView")]),t._v("添加"),a("code",[t._v("TokenAuthentication")]),t._v("认证, 路由到TestView时，会调用该类中的"),a("code",[t._v("authenticate")]),t._v("方法，通过token获取到user.")]),t._v(" "),a("p",[t._v("view.py")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" rest_framework"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("authentication "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" TokenAuthentication\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TestView")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("APIView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    authentication_classes "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TokenAuthentication"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("**")]),t._v("kwargs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" HttpResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("全局添加认证方式")])]),t._v(" "),a("p",[t._v("任何路由请求需要通过Token认证.")]),t._v(" "),a("p",[t._v("settings.py")]),t._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[t._v("REST_FRAMEWORK "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'DEFAULT_AUTHENTICATION_CLASSES'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rest_framework.authentication.TokenAuthentication'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h4",{attrs:{id:"缺陷"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺陷"}},[t._v("#")]),t._v(" 缺陷")]),t._v(" "),a("ul",[a("li",[t._v("Token验证是放在一张表中，即authtoken_token中，key没有失效时间，永久有效，一旦泄露，后果不可想象，安全性极差。")]),t._v(" "),a("li",[t._v("不利于分布式部署或多个系统使用一套验证，authtoken_token是放在某台服务器上的，如果分布式部署，将失效，或多个系统用一套验证，将必须复制该表到相应服务器上，麻烦费力。")])]),t._v(" "),a("p",[t._v("鉴于以上缺陷，使用jwt更加优秀.")]),t._v(" "),a("h3",{attrs:{id:"session"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#session"}},[t._v("#")]),t._v(" session")]),t._v(" "),a("p",[t._v("drf中session认证，是通过django "),a("code",[t._v("SessionMiddleware")]),t._v("和"),a("code",[t._v("AuthenticationMiddleware")]),t._v("中将user存储到request中，然后获取到的.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gcore.jsdelivr.net/gh/msqfx/BLOG-CDN@main/1604217962598.png#alt=",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);