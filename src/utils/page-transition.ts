/** The view transition type that `page-transition.css` animates. */
export const GB_FADE_TYPE = "gb-fade"

const GB_PAGE_SUFFIX = "/projects/carcinisation/"

/**
 * Skips all navigation view transitions except those entering or leaving
 * the Carcinisation page.
 *
 * `pagereveal` fires before first render, so this must be an inline,
 * blocking head script.
 */
export const PAGE_TRANSITION_SCRIPT = `(function(){
function isGb(url){return new URL(url,location.href).pathname.endsWith(${JSON.stringify(GB_PAGE_SUFFIX)})}
addEventListener("pagereveal",function(e){
var t=e.viewTransition;if(!t)return;
var a=window.navigation&&navigation.activation;
var from=a&&a.from&&a.from.url||document.referrer;
if(from&&t.types&&isGb(from)!==isGb(location.href))t.types.add(${JSON.stringify(GB_FADE_TYPE)});
else t.skipTransition();
})})()`
