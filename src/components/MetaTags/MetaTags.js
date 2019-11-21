import { Helmet } from "react-helmet";
import React, { Component, Fragment } from "react";
import logo from "images/favicon.ico";
import og from "images/og.jpeg";
import { setReferrerAndSource } from "../../functions";

export default class extends Component {
  state = {};

  componentWillMount() {
    setReferrerAndSource();
  }

  render() {
    let { title, canonical, description, featured_image } = this.props;
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <link rel="canonical" href={canonical} />
          <meta name="description" content={description} />
          <link rel="shortcut icon" href={logo} />
          <meta name="theme-color" content="#8cbe3f" />
          <html lang={process.env.GATSBY_LAN === "CN" ? "cn" : "en"} />
          <meta property="og:title" content={title} />
          <meta property="og:image" content={featured_image || og} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={canonical} />
        </Helmet>
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `(function(){
                window.ldfdr = window.ldfdr || {};
                (function(d, s, ss, fs){
                  fs = d.getElementsByTagName(s)[0];
                  function ce(src){
                    var cs  = d.createElement(s);
                    cs.src = src;
                    setTimeout(function(){fs.parentNode.insertBefore(cs,fs)}, 1);
                  }
                  ce(ss);
                })(document, 'script', 'https://lftracker.leadfeeder.com/lftracker_v1_lAxoEaK50Vb7OYGd.js');
              })();`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `let _linkedin_data_partner_id = "294682";`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `(function(){var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})();`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '178263672818013');
              fbq('track', 'PageView');`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: ` /*mouseflow*/
              window._mfq = window._mfq || [];
              (function() {
                  var mf = document.createElement("script");
                  mf.type = "text/javascript"; mf.async = true;
                  mf.src = "//cdn.mouseflow.com/projects/e6bc91a0-14ab-40f7-a817-e4c1d90b7e24.js";
                  document.getElementsByTagName("head")[0].appendChild(mf);
              })();
              /*saleswings*/
              !function(){function a(){var a=document.createElement("script");a.type="text/javascript",a.async=1,a.src="//go.saleswingsapp.com/assets/javascripts/sw/05b84440-4b11-4377-9c0a-8996bbf42fea?enableFormTracker=true";var b=document.getElementById("SW-05b84440-4b11-4377-9c0a-8996bbf42fea");b.parentNode.insertBefore(a,b)}window.attachEvent?window.attachEvent("onload",a):window.addEventListener("load",a,0);window.attachEvent?window.attachEvent("onhashchange",a):window.addEventListener("hashchange",a,0);}();`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"25013923"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");`
            }
          ]}
        />
        <Helmet
          script={[
            {
              type: "text/javascript",
              innerHTML: `(function(w,d,t,r,u){w[u]=w[u]||[];w[u].push({'projectId':'10000','properties':{'pixelId':'10061744'}});var s=d.createElement(t);s.src=r;s.async=true;s.onload=s.onreadystatechange=function(){var y,rs=this.readyState,c=w[u];if(rs&&rs!="complete"&&rs!="loaded"){return}try{y=YAHOO.ywa.I13N.fireBeacon;w[u]=[];w[u].push=function(p){y([p])};y(c)}catch(e){}};var scr=d.getElementsByTagName(t)[0],par=scr.parentNode;par.insertBefore(s,scr)})(window,document,"script","https://s.yimg.com/wi/ytc.js","dotq");`
            }
          ]}
        />
      </Fragment>
    );
  }
}
