(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{129:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),n=a(131),s=a(138),o=a(151),l=a(152),d=a.n(l),c=function(){return i.a.createElement(n.StaticQuery,{query:"3205389224",render:function(e){return i.a.createElement(d.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:o})},u=a(136);t.default=function(){return i.a.createElement(s.a,null,i.a.createElement(u.a,{title:"Day 1"}),i.a.createElement("h1",null,"Ratecard"),i.a.createElement("h2",null,"Day 1 - Beef and Tomato"),i.a.createElement("p",null,"The first of the advent Noodles today.",i.a.createElement("br",null),"Absolute classic blend of beef* and tomato",i.a.createElement("br",null),i.a.createElement("sub",null,"*does not contain beef")),i.a.createElement("h1",null,"Rating: 10/10"),i.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},i.a.createElement(c,null)),i.a.createElement(n.Link,{to:"/"},"Go back to the homepage"))}},131:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(130),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(132),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(28);a.d(t,"parsePath",function(){return u.a});var A=i.a.createContext({}),f=function(e){return i.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},132:function(e,t,a){var r;e.exports=(r=a(134))&&r.default||r},133:function(e){e.exports={data:{site:{siteMetadata:{title:"Robs Pot Noodle Fun"}}}}},134:function(e,t,a){"use strict";a.r(t);a(29);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(47),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=d},135:function(e,t,a){},136:function(e,t,a){"use strict";var r=a(137),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(139),d=a.n(l),c=a(131);function u(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title;return n.a.createElement(c.StaticQuery,{query:A,render:function(e){var r=t||e.site.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},137:function(e){e.exports={data:{site:{siteMetadata:{title:"Robs Pot Noodle Fun",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},138:function(e,t,a){"use strict";var r=a(133),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(131),d=function(e){var t=e.siteTitle;return n.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},n.a.createElement("h1",{style:{margin:0}},n.a.createElement(l.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};var c=d,u=(a(135),function(e){var t=e.children;return n.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(c,{siteTitle:e.site.siteMetadata.title}),n.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:r})});u.propTypes={children:o.a.node.isRequired};t.a=u},151:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQCAwUG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAZUsVR0BmAlPTtEh0l//xAAeEAACAQMFAAAAAAAAAAAAAAABAgMABBASEyEjJP/aAAgBAQABBQK+PfC/qqaUM6uVY3Mgrb0sU5WBHUHP/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAwEBPwEf/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwE1X//EACEQAAICAQIHAAAAAAAAAAAAAAERAAIhA2EQEiAxM3GS/9oACAEBAAY/AtNh4lRSo34NCwUCotp4h9S3LiZ7KA3yffR//8QAHRAAAgMAAgMAAAAAAAAAAAAAAREAITEQcVGBof/aAAgBAQABPyEQSA1GJBYNJ44ozESLhkHYEFX2Et+podMUUpmhdwUHsQx2IPj/2gAMAwEAAgADAAAAEPsWc//EABcRAQEBAQAAAAAAAAAAAAAAABEAAVH/2gAIAQMBAT8QeRsbkN//xAAbEQACAQUAAAAAAAAAAAAAAAAAAREhMUFRYf/aAAgBAgEBPxCVk7FNEtWP/8QAHhABAQACAgIDAAAAAAAAAAAAAREAITGBYXEQQaH/2gAIAQEAAT8QD0IKsd+M11D7qr18PZrDQVt1xxhT7ZIKHTDw0FEJ+hizRUDRxdvTgTD7RkgD6xSk4oE8ZJoejBIQfZkDQAeM/9k=",aspectRatio:.7503828483920367,src:"/static/be00e52d9b57c0b656221e2e423ca67f/53b4a/noodlEDAY1.jpg",srcSet:"/static/be00e52d9b57c0b656221e2e423ca67f/bf99b/noodlEDAY1.jpg 75w,\n/static/be00e52d9b57c0b656221e2e423ca67f/9d7df/noodlEDAY1.jpg 150w,\n/static/be00e52d9b57c0b656221e2e423ca67f/53b4a/noodlEDAY1.jpg 300w,\n/static/be00e52d9b57c0b656221e2e423ca67f/3d205/noodlEDAY1.jpg 450w,\n/static/be00e52d9b57c0b656221e2e423ca67f/14a2b/noodlEDAY1.jpg 600w,\n/static/be00e52d9b57c0b656221e2e423ca67f/a8e6b/noodlEDAY1.jpg 900w,\n/static/be00e52d9b57c0b656221e2e423ca67f/279f8/noodlEDAY1.jpg 980w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},152:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(6)),s=r(a(46)),o=r(a(140)),l=r(a(141)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return!!A[a]||(A[a]=!0,!1)},p=[];var h=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+i+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,i=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},n,{onLoad:r,onError:i,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!0,n=!1,o=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,n=!0),"undefined"==typeof window&&(r=!1,i=!1),t.critical&&(r=!0,i=!1,n=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:i,IOSupported:n,fadeIn:o,hasNoScript:c,seenBefore:l},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.setState({isVisible:!0})})},a.handleImageLoaded=function(){this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,A=void 0===c?{}:c,f=e.placeholderClassName,p=e.fluid,h=e.fixed,b=e.backgroundColor,y=e.Tag,E="boolean"==typeof b?"lightgray":b,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var R=p;return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(m,(0,l.default)({src:R.base64},S)),R.tracedSVG&&d.default.createElement(m,(0,l.default)({src:R.tracedSVG},S)),E&&d.default.createElement(y,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(m,{alt:a,title:t,src:R.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(h){var j=h,Q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},n);return"inherit"===n.display&&delete Q.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:Q,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},j.base64&&d.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&d.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&d.default.createElement(y,{title:t,style:{backgroundColor:E,width:j.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:j.height}}),this.state.isVisible&&d.default.createElement("picture",null,j.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),d.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),d.default.createElement(m,{alt:a,title:t,width:j.width,height:j.height,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:j.width,height:j.height},j))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),E=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:y,sizes:E,fixed:y,fluid:E,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,Tag:c.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-day-1-js-57fede9d9e35ddb89512.js.map