/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 * v4.0.30 - 2019-02-23
 *
 */
/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.io/wet-boew/License-en.html / wet-boew.github.io/wet-boew/Licence-fr.html
 *
 * Version: @wet-boew-build.version@
 *
 */
!function(a){"use strict";var b,c,d,e,f=a("h1, h2, h3, h4, h5, h6").get(),g=a("nav, section, article, aside, main").get(),h=g.length,i="wb-h-aria-";for(c=0;c!==h;c+=1)for(e=g[c],b=e;null!==(b=b.firstElementChild||b.firstChild);)if(null!==b.nodeName.match(/h[1-6]/i)){d=b.id,0===d.length&&(d=i+c,b.id=d),e.setAttribute("aria-labelledby",d);break}for(h=f.length,c=0;c!==h;c+=1)b=f[c],b.setAttribute("role","heading"),b.setAttribute("aria-level",b.nodeName.substring(1))}(jQuery);
//# sourceMappingURL=jawsariafixes.min.js.map