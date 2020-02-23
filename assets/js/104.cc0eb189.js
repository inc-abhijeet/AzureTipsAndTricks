(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{406:function(t,e,i){"use strict";i.r(e);var r=i(43),o=Object(r.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("💡 Learn more : "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/authentication/concept-mfa-howitworks/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Multi-Factor Authentication"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("h4",{attrs:{id:"multi-factor-authentication-on-azure-in-a-nutshell"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#multi-factor-authentication-on-azure-in-a-nutshell","aria-hidden":"true"}},[t._v("#")]),t._v(" Multi-Factor Authentication on Azure in a Nutshell")]),t._v(" "),i("p",[t._v("In another Tips and Tricks post, we added Azure Active Directory authentication to an existing App Service Web App. Today, we’ll make sure Multi-Factor Authentication (MFA) is on for that user. There are various services in Azure when it comes to "),i("a",{attrs:{href:"https://azure.microsoft.com/services/multi-factor-authentication?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multi-Factor Authentication"),i("OutboundLink")],1),t._v(", so let’s first see what’s available. Keep in mind, I want it to be FREE.")]),t._v(" "),i("p",[t._v("If you take a look at the documentation on how it works, the following MFA offerings are listed:")]),t._v(" "),i("ul",[i("li",[i("strong",[t._v("Azure Active Directory Premium")]),t._v(" – Licenses for full-featured, on-premises, or cloud-hosted MFA services.")]),t._v(" "),i("li",[i("strong",[t._v("Multi-Factor Authentication for Office 365")]),t._v(" – MFA features included with an Office 365 subscription.")]),t._v(" "),i("li",[i("strong",[t._v("Azure Active Directory Global Administrators")]),t._v(" – MFA capabilities made available for free by Microsoft for protecting global administrator accounts.")])]),t._v(" "),i("p",[t._v("Note I am using a Microsoft account that is a global administrator on my\npay-as-you-go Azure account.")]),t._v(" "),i("h4",{attrs:{id:"there-are-several-mfa-offerings-but-i-didn’t-use-them"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#there-are-several-mfa-offerings-but-i-didn’t-use-them","aria-hidden":"true"}},[t._v("#")]),t._v(" There are several MFA offerings, but I didn’t use them")]),t._v(" "),i("p",[t._v("So why didn’t I use Azure Active Directory Premium, MFA for Office 365, or MFA for Azure Active Directory Global Administrators?")]),t._v(" "),i("p",[t._v("First, I didn’t want to pay for Azure Active Directory Premium. Also, I didn’t use MFA for Office 365 because it is for accounts connected to an Office 365 account, which I didn’t have. Finally, Azure Active Directory Global Administrators MFA is a "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/authentication/howto-mfa-userstates?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("two-step verification for Azure Active Directory users"),i("OutboundLink")],1),t._v(" and not a Microsoft account. There are ways to turn "),i("a",{attrs:{href:"https://support.microsoft.com/help/12408/microsoft-account-about-two-step-verification?WT.mc_id=support-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("two-step verification on for Microsoft accounts"),i("OutboundLink")],1),t._v(" that are done outside of Azure, which I didn’t want to do.")]),t._v(" "),i("p",[t._v("While researching why I couldn’t enable MFA for my Microsoft account user, I found a newer feature that also provides MFA called Baseline Protection. The nice thing about using "),i("a",{attrs:{href:"https://docs.microsoft.com/azure/active-directory/conditional-access/baseline-protection?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Baseline Protection"),i("OutboundLink")],1),t._v(" is it works well for Microsoft accounts and Azure Active Directory accounts.")]),t._v(" "),i("h4",{attrs:{id:"how-i-turned-on-multi-factor-authentication-using-baseline-policy"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#how-i-turned-on-multi-factor-authentication-using-baseline-policy","aria-hidden":"true"}},[t._v("#")]),t._v(" How I turned on Multi-Factor Authentication using Baseline Policy")]),t._v(" "),i("p",[t._v("Go to the Azure portal and navigate to "),i("strong",[t._v("Azure Active Directory")]),t._v(", and then click "),i("strong",[t._v("Conditional access")]),t._v(" under "),i("strong",[t._v("Security")]),t._v(".  Since I’m using my own pay-as-you-go subscription, this is the default directory.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa1.png")}}),t._v(" "),i("p",[t._v("Click on "),i("strong",[t._v("Baseline policy: Require MFA for admins (Preview)")]),t._v(" in the list of policies.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa2.png")}}),t._v(" "),i("p",[t._v("Select "),i("strong",[t._v("Use policy immediately")]),t._v(" and click the "),i("strong",[t._v("Save")]),t._v(" button.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa3.png")}}),t._v(" "),i("p",[t._v("Once you have saved, you’ll now see a checkmark in the "),i("strong",[t._v("Enabled")]),t._v(" column of the policy listing.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa4.png")}}),t._v(" "),i("p",[t._v("Excellent! Now all global administrators of my Azure account will have Multi-Factor Authentication turned on.")]),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa5-small.gif")}}),t._v(" "),i("img",{attrs:{src:t.$withBase("/files/mfa6-small.gif")}})])},[],!1,null,null,null);e.default=o.exports}}]);