/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * www.tbs.gc.ca/ws-nw/wet-boew/terms / www.sct.gc.ca/ws-nw/wet-boew/conditions
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length>0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length>0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length>0&&b.search.length===0){b.psnb.css("width","100%")}else{if(b.psnb.length===0&&b.search.length>0){b.search.css("width","100%")}}},mobileview:function(){var m,o,j,n,g,d,e,i="",f,r,q,l,h,k,p;if(b.menubar.length>0||pe.secnav.length>0||b.search.length>0){k=b.menubar.find("ul.mb-menu li");m='<div data-role="page" id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length>0?pe.secnav.find("h2").eq(0):"");o=(b.menubar.length>0?b.psnb.children(":header"):(pe.secnav.length>0?g:b.bcrumb.children(":header")));j=o[0].innerHTML;m+="<h1>"+j+"</h1></div>";m+='<div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length>0){m+='<section><div id="jqm-mb-location-text">'+b.bcrumb[0].innerHTML+"</div></section>";b.bcrumb.remove()}else{m+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length>0){d=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"c",false,true);pe.menu.expandcollapsemobile(d,(pe.secnav.find("h3.top-section").length>0?"h4":"h3"),true,false);pe.menu.expandcollapsemobile(d,".nav-current",false,true);m+="<section><div><h2>"+g[0].innerHTML+'</h2><div data-role="controlgroup">'+d[0].innerHTML+"</div></div></section>";pe.secnav.remove()}if(b.menubar.length>0){d=pe.menu.buildmobile(k,3,"a",true,true);pe.menu.expandcollapsemobile(d,"h3",true,false);pe.menu.expandcollapsemobile(d,".nav-current",false,true);m+="<section><div><h2>"+j+'</h2><div data-role="controlgroup">'+d[0].innerHTML+"</div></div></section>"}m+="</nav></div></div></div>";pe.pagecontainer().append(m);o.wrapInner('<a href="#jqm-wb-mb" data-rel="dialog"></a>');i+='<li><a data-rel="dialog" data-theme="b" data-icon="grid" href="#jqm-wb-mb">'+o.find("a").text()+"</a></li>"}if(b.search.length>0){n=b.search.find(":header");e='<div data-role="page" id="jqm-wb-search"><div data-role="header"><h1>'+n.text()+'</h1></div><div data-role="content">'+(c("<div/>").append(b.search.find("form")))[0].innerHTML+"</div></div>";pe.pagecontainer().append(e);n.wrapInner('<a href="#jqm-wb-search" data-rel="dialog"></a>');i+='<li><a data-rel="dialog" data-theme="b" data-icon="search" href="#jqm-wb-search">'+n.find("a").text()+"</a></li>"}if(i.length>0){f=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+i+"</ul></div>");b.title.after(f)}l=c("#gcwu-lang");if(l.length>0){r=l.find("a");h='<div data-role="navbar"><ul>';r.each(function(){h+='<li><a href="'+this.href+'" data-theme="a">'+this.innerHTML+"</a></li>"});h+="</ul></div>";l.find("#gcwu-ef-lang").replaceWith(h);l.find("#gcwu-other-lang").remove()}if(b.sft.length>0){r=b.sft.find("#gcwu-tctr a, .gcwu-col-head a");p=b.sft.children("#gcwu-sft-in");b.gcft.parent().remove()}else{p=pe.footer.find("#gcwu-tc");if(p.length>0){r=p.find("a")}}if(p.length>0){q='<div data-role="navbar"><ul>';r.each(function(){q+='<li><a href="'+this.href+'" data-theme="b">'+this.innerHTML+"</a></li>"});q+="</ul></div>";p.replaceWith(q)}pe.footer.find("footer").append(b.wmms.detach());c(document).on("pagecreate",function(){if(b.menubar.length>0){b.psnb.parent().remove()}if(b.search.length>0){b.search.parent().remove()}if(i.length>0){f.children().removeClass("wb-hide")}});c(document).on("pageinit",function(){pe.menu.correctmobile(c("#jqm-wb-mb"))});c(document).trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));