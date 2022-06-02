import type { ProjectConfig } from '/#/config';

// ! You need to clear the browser cache after the change
const setting: ProjectConfig = {
  "showSettingButton": true,
  "showDarkModeToggle": true,
  "settingButtonPosition": "auto",
  "permissionMode": "ROUTE_MAPPING",
  "permissionCacheType": 1,
  "sessionTimeoutProcessing": 0,
  "themeColor": "#0960bd",
  "grayMode": false,
  "colorWeak": false,
  "fullContent": false,
  "contentMode": "full",
  "showLogo": false,
  "showFooter": false,
  "headerSetting": {
    "bgColor": "#ffffff",
    "fixed": true,
    "show": false,
    "theme": "light",
    "useLockPage": true,
    "showFullScreen": true,
    "showDoc": true,
    "showNotice": true,
    "showSearch": true
  },
  "menuSetting": {
    "bgColor": "#001529",
    "fixed": true,
    "collapsed": false,
    "collapsedShowTitle": false,
    "canDrag": false,
    "show": true,
    "hidden": false,
    "menuWidth": 210,
    "mode": "horizontal",
    "type": "top-menu",
    "theme": "dark",
    "topMenuAlign": "center",
    "trigger": "HEADER",
    "accordion": true,
    "closeMixSidebarOnChange": false,
    "mixSideTrigger": "click",
    "mixSideFixed": false,
    "split": false
  },
  "multiTabsSetting": {
    "cache": false,
    "show": false,
    "canDrag": true,
    "showQuick": true,
    "showRedo": true,
    "showFold": true
  },
  "transitionSetting": {
    "enable": true,
    "basicTransition": "fade-slide",
    "openPageLoading": true,
    "openNProgress": false
  },
  "openKeepAlive": true,
  "lockTime": 0,
  "showBreadCrumb": false,
  "showBreadCrumbIcon": false,
  "useErrorHandle": false,
  "useOpenBackTop": true,
  "canEmbedIFramePage": true,
  "closeMessageOnSwitch": true,
  "removeAllHttpPending": false
}

export default setting;
