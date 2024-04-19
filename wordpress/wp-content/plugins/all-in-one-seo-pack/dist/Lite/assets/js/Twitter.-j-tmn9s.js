import{f as V,a as k,u as L}from"./links.rndHrQjc.js";import{I as D}from"./Image.6RWoP5gJ.js";import{J as v}from"./JsonValues.D25FTfEu.js";import{M as H}from"./MaxCounts.DHV7qSQX.js";import{T as O}from"./Tags.CClbM7yB.js";import{B as U}from"./RadioToggle.BLVmJ7Zx.js";import{C as G}from"./Caret.iRBf3wcH.js";import{C as A}from"./Card.DD8bdJAp.js";import{C as N}from"./HtmlTagsEditor.DwFvarWx.js";import{C as M}from"./ImageUploader.C6Cwe3Rr.js";import{C as B}from"./SettingsRow.DQldd-1Z.js";import{C as F}from"./TwitterPreview.i7ZMb33k.js";import{x as g,c as f,C as l,m as a,l as m,d as r,o as n,a as u,D as S,t as h}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as z}from"./_plugin-vue_export-helper.BN1snXvA.js";import"./default-i18n.Bd0Z306Z.js";import"./helpers.BYd0a-KO.js";import"./postSlug.DxjFndk_.js";import"./metabox.CX8rIsNV.js";import"./cleanForSlug.b1Tz1r1N.js";import"./toString.CPCYjjV1.js";import"./_baseTrim.BYZhh0MR.js";import"./_stringToArray.DnK4tKcY.js";import"./get.DIB3XzO8.js";import"./_baseSet.C_DjH_qS.js";import"./Tooltip.Jp05nfCy.js";import"./index.BQgiQQKQ.js";import"./Slide.CRIn0kdn.js";import"./Editor.XgOGwjMW.js";import"./UnfilteredHtml.DGcofKZV.js";import"./Img.C6u5nam7.js";import"./Plus.DrDYrwHh.js";import"./Row.CzuhYwfs.js";import"./Book.BwJHPER-.js";import"./Profile.vTi7bzTi.js";const R={setup(){return{licenseStore:V(),optionsStore:k(),rootStore:L()}},components:{BaseRadioToggle:U,CoreAlert:G,CoreCard:A,CoreHtmlTagsEditor:N,CoreImageUploader:M,CoreSettingsRow:B,CoreTwitterPreview:F},mixins:[D,v,H,O],data(){return{separator:void 0,titleCount:0,descriptionCount:0,option:null,pagePostOptions:[],strings:{twitterCardSettings:this.$t.__("X (Twitter) Card Settings",this.$td),description:this.$t.__("Enable this feature if you want X to display a preview card with images and a text excerpt when a link to your site is shared.",this.$td),enableTwitterCard:this.$t.__("Enable X Card",this.$td),useDataFromFacebook:this.$t.__("Use Data from Facebook Tab",this.$td),useOgDataDescription:this.$t.__("Choose whether you want to use the OG data from the Facebook tab in your individual pages/posts by default.",this.$td),defaultCardType:this.$t.__("Default Card Type",this.$td),summary:this.$t.__("Summary",this.$td),summaryLarge:this.$t.__("Summary with Large Image",this.$td),defaultImageSourcePosts:this.$t.__("Default Post Image Source",this.$td),defaultImageSourceTerms:this.$t.__("Default Term Image Source",this.$td),width:this.$t.__("Width",this.$td),height:this.$t.__("Height",this.$td),postCustomFieldName:this.$t.__("Post Custom Field Name",this.$td),termsCustomFieldName:this.$t.__("Term Custom Field Name",this.$td),defaultTwitterImagePosts:this.$t.__("Default Post X Image",this.$td),defaultTwitterImageTerms:this.$t.__("Default Term X Image",this.$td),minimumSizeSummary:this.$t.__("Minimum size: 144px x 144px, ideal ratio 1:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),minimumSizeSummaryWithLarge:this.$t.__("Minimum size: 300px x 157px, ideal ratio 2:1, 5MB max. JPG, PNG, WEBP and GIF formats only.",this.$td),homePageSettings:this.$t.__("Home Page Settings",this.$td),homePageImage:this.$t.__("Home Page Image",this.$td),homePageTitle:this.$t.__("Home Page Title",this.$td),useHomePageTitle:this.$t.__("Use the home page title",this.$td),clickToAddHomePageTitle:this.$t.__("Click on the tags below to insert variables into your home page title.",this.$td),homePageDescription:this.$t.__("Description",this.$td),useHomePageDescription:this.$t.__("Use the home page description",this.$td),clickToAddHomePageDescription:this.$t.__("Click on the tags below to insert variables into your description.",this.$td),showTwitterAuthor:this.$t.__("Show X Author",this.$td),homePageDisabledDescription:this.$t.sprintf(this.$t.__("You are using a static home page which is found under Pages. You can %1$sedit your home page settings%2$s directly to change the title, meta description and image.",this.$td),`<a href="${this.rootStore.aioseo.urls.staticHomePage}&aioseo-tab=social&social-tab=twitter&aioseo-scroll=aioseo-post-settings-twitter&aioseo-highlight=aioseo-post-settings-twitter">`,"</a>"),cardType:this.$t.__("Card Type",this.$td),additionalData:this.$t.__("Additional Data",this.$td),additionalDataDescription:this.$t.__("Enable this option to show additional X data on your posts and pages (i.e., who the post was written by and how long it might take to read the article).",this.$td),defaultTermImageSourceUpsell:this.$t.sprintf(this.$t.__("Default Term Image Source is a %1$s feature. %2$s",this.$td),"PRO",this.$links.getUpsellLink("general-facebook-settings",this.$constants.GLOBAL_STRINGS.learnMore,"default-term-image-source",!0))}}},computed:{twitterCards(){return[{label:this.strings.summary,value:"summary"},{label:this.strings.summaryLarge,value:"summary_large_image"}]},previewTitle(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterTitle||"#site_title"):this.parseTags(this.optionsStore.options.social.twitter.homePage.title||"#site_title")},previewDescription(){return this.rootStore.aioseo.data.staticHomePage?this.parseTags(this.rootStore.aioseo.data.staticHomePageTwitterDescription||"#tagline"):this.parseTags(this.optionsStore.options.social.twitter.homePage.description||"#tagline")}},methods:{getCardOptions(s){return this.twitterCards.find(e=>e.value===s)}}},x={class:"aioseo-twitter"},E={class:"aioseo-settings-row aioseo-section-description"},W=["innerHTML"],X=["innerHTML"],J={class:"aioseo-description"},Y={class:"aioseo-description"},j={key:0,class:"aioseo-settings-row aioseo-section-description"},q=["innerHTML"],K=["innerHTML"],Q={key:1},Z=["innerHTML"],$=["innerHTML"];function tt(s,e,et,t,i,p){const C=g("base-toggle"),d=g("core-settings-row"),c=g("base-select"),T=g("base-input"),_=g("core-image-uploader"),b=g("core-alert"),w=g("base-radio-toggle"),y=g("core-card"),I=g("core-twitter-preview"),P=g("core-html-tags-editor");return n(),f("div",x,[l(y,{slug:"twitter","header-text":i.strings.twitterCardSettings},{default:a(()=>[u("div",E,[S(h(i.strings.description)+" ",1),u("span",{innerHTML:s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"twitter",!0)},null,8,W)]),l(d,{name:i.strings.enableTwitterCard},{content:a(()=>[l(C,{modelValue:t.optionsStore.options.social.twitter.general.enable,"onUpdate:modelValue":e[0]||(e[0]=o=>t.optionsStore.options.social.twitter.general.enable=o)},null,8,["modelValue"])]),_:1},8,["name"]),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:0,class:"default-card-type",name:i.strings.defaultCardType,align:""},{content:a(()=>[l(c,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(t.optionsStore.options.social.twitter.general.defaultCardType),"onUpdate:modelValue":e[1]||(e[1]=o=>t.optionsStore.options.social.twitter.general.defaultCardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:1,class:"twitter-default-image-source",name:i.strings.defaultImageSourcePosts,align:""},{content:a(()=>[l(c,{size:"medium",options:s.imageSourceOptions,modelValue:s.getImageSourceOption(t.optionsStore.options.social.twitter.general.defaultImageSourcePosts),"onUpdate:modelValue":e[2]||(e[2]=o=>t.optionsStore.options.social.twitter.general.defaultImageSourcePosts=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&t.optionsStore.options.social.twitter.general.defaultImageSourcePosts==="custom"?(n(),m(d,{key:2,name:i.strings.postCustomFieldName,align:""},{content:a(()=>[l(T,{size:"medium",modelValue:t.optionsStore.options.social.twitter.general.customFieldImagePosts,"onUpdate:modelValue":e[3]||(e[3]=o=>t.optionsStore.options.social.twitter.general.customFieldImagePosts=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:3,class:"twitter-image",name:i.strings.defaultTwitterImagePosts,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.general.defaultCardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.general.defaultImagePosts,"onUpdate:modelValue":e[4]||(e[4]=o=>t.optionsStore.options.social.twitter.general.defaultImagePosts=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:4,class:"twitter-default-image-source",name:i.strings.defaultImageSourceTerms,align:""},{content:a(()=>[t.licenseStore.isUnlicensed?r("",!0):(n(),m(c,{key:0,size:"medium",options:s.getTermImageSourceOptions(),modelValue:s.getImageSourceOption(t.optionsStore.options.social.twitter.general.defaultImageSourceTerms),"onUpdate:modelValue":e[5]||(e[5]=o=>t.optionsStore.options.social.twitter.general.defaultImageSourceTerms=o.value)},null,8,["options","modelValue"])),t.licenseStore.isUnlicensed?(n(),m(c,{key:1,size:"medium",options:s.getTermImageSourceOptions(),modelValue:s.getImageSourceOption("default"),disabled:""},null,8,["options","modelValue"])):r("",!0),t.licenseStore.isUnlicensed?(n(),m(b,{key:2,class:"inline-upsell",type:"blue"},{default:a(()=>[u("div",{innerHTML:i.strings.defaultTermImageSourceUpsell},null,8,X)]),_:1})):r("",!0)]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&t.optionsStore.options.social.twitter.general.defaultImageSourceTerms==="custom"&&!t.licenseStore.isUnlicensed?(n(),m(d,{key:5,name:i.strings.termsCustomFieldName,align:""},{content:a(()=>[l(T,{size:"medium",modelValue:t.optionsStore.options.social.twitter.general.customFieldImageTerms,"onUpdate:modelValue":e[6]||(e[6]=o=>t.optionsStore.options.social.twitter.general.customFieldImageTerms=o)},null,8,["modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable&&!t.licenseStore.isUnlicensed?(n(),m(d,{key:6,class:"twitter-image",name:i.strings.defaultTwitterImageTerms,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.general.defaultCardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.general.defaultImageTerms,"onUpdate:modelValue":e[7]||(e[7]=o=>t.optionsStore.options.social.twitter.general.defaultImageTerms=o)},null,8,["description","modelValue"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:7,name:i.strings.showTwitterAuthor,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.showAuthor,"onUpdate:modelValue":e[8]||(e[8]=o=>t.optionsStore.options.social.twitter.general.showAuthor=o),name:"showTwitterAuthor",options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"])]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:8,name:i.strings.additionalData,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.additionalData,"onUpdate:modelValue":e[9]||(e[9]=o=>t.optionsStore.options.social.twitter.general.additionalData=o),name:"additionalData",options:[{label:s.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),u("div",J,h(i.strings.additionalDataDescription),1)]),_:1},8,["name"])):r("",!0),t.optionsStore.options.social.twitter.general.enable?(n(),m(d,{key:9,name:i.strings.useDataFromFacebook,align:""},{content:a(()=>[l(w,{modelValue:t.optionsStore.options.social.twitter.general.useOgData,"onUpdate:modelValue":e[10]||(e[10]=o=>t.optionsStore.options.social.twitter.general.useOgData=o),name:"useOgData",options:[{label:s.$constants.GLOBAL_STRINGS.no,value:!1,activeClass:"dark"},{label:s.$constants.GLOBAL_STRINGS.yes,value:!0}]},null,8,["modelValue","options"]),u("div",Y,h(i.strings.useOgDataDescription),1)]),_:1},8,["name"])):r("",!0)]),_:1},8,["header-text"]),t.optionsStore.options.social.twitter.general.enable?(n(),m(y,{key:0,slug:"twitterHomePageSettings","header-text":i.strings.homePageSettings},{default:a(()=>[t.rootStore.aioseo.data.staticHomePage?(n(),f("div",j,[u("span",{innerHTML:i.strings.homePageDisabledDescription},null,8,q),S("   "),u("span",{innerHTML:s.$links.getDocLink(s.$constants.GLOBAL_STRINGS.learnMore,"staticHomePageTwitter",!0)},null,8,K)])):r("",!0),t.rootStore.aioseo.data.staticHomePage?(n(),f("br",Q)):r("",!0),l(d,{name:s.$constants.GLOBAL_STRINGS.preview},{content:a(()=>[l(I,{card:t.optionsStore.options.social.twitter.homePage.cardType,description:p.previewDescription,image:t.optionsStore.options.social.twitter.homePage.image,title:p.previewTitle},null,8,["card","description","image","title"])]),_:1},8,["name"]),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:2,class:"default-card-type",name:i.strings.cardType,align:""},{content:a(()=>[l(c,{size:"medium",options:p.twitterCards,modelValue:p.getCardOptions(t.optionsStore.options.social.twitter.homePage.cardType),"onUpdate:modelValue":e[11]||(e[11]=o=>t.optionsStore.options.social.twitter.homePage.cardType=o.value)},null,8,["options","modelValue"])]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:3,class:"twitter-image",name:i.strings.homePageImage,align:""},{content:a(()=>[l(_,{description:t.optionsStore.options.social.twitter.homePage.cardType==="summary"?i.strings.minimumSizeSummary:i.strings.minimumSizeSummaryWithLarge,modelValue:t.optionsStore.options.social.twitter.homePage.image,"onUpdate:modelValue":e[12]||(e[12]=o=>t.optionsStore.options.social.twitter.homePage.image=o)},null,8,["description","modelValue"])]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:4,name:i.strings.homePageTitle},{content:a(()=>[l(P,{class:"twitter-meta-input",modelValue:t.optionsStore.options.social.twitter.homePage.title,"onUpdate:modelValue":e[13]||(e[13]=o=>t.optionsStore.options.social.twitter.homePage.title=o),"line-numbers":!1,single:"",onCounter:e[14]||(e[14]=o=>s.updateCount(o,"titleCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[S(h(i.strings.clickToAddHomePageTitle),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:s.maxRecommendedCount(i.titleCount,70)},null,8,Z)]),_:1},8,["name"])),t.rootStore.aioseo.data.staticHomePage?r("",!0):(n(),m(d,{key:5,name:i.strings.homePageDescription},{content:a(()=>[l(P,{class:"twitter-meta-input",modelValue:t.optionsStore.options.social.twitter.homePage.description,"onUpdate:modelValue":e[15]||(e[15]=o=>t.optionsStore.options.social.twitter.homePage.description=o),"line-numbers":!1,onCounter:e[16]||(e[16]=o=>s.updateCount(o,"descriptionCount")),"tags-context":"homePage","default-tags":["site_title","tagline","separator_sa"]},{"tags-description":a(()=>[S(h(i.strings.clickToAddHomePageDescription),1)]),_:1},8,["modelValue"]),u("div",{class:"max-recommended-count",innerHTML:s.maxRecommendedCount(i.descriptionCount,200)},null,8,$)]),_:1},8,["name"]))]),_:1},8,["header-text"])):r("",!0)])}const Nt=z(R,[["render",tt]]);export{Nt as default};
