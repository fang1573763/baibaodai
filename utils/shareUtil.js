/**
 * 分享配置
 * @param  {String} title  [Title]
 * @param  {String} path   [Path]
 * @return {Object}        [Share Config]
 */

let shareConfig = (option = {}) => {
  let title = '一明开发者中心',
      path = '/pages/home/home';

  if (option.title && option.title != '') {
      title = option.title;
  }

  if (option.path && option.path != '') {
      path = option.path;
  }

  return {
      title: title,
      path: path
  }
}
/**
 * 本源码由一明开发者中心提供
 * 找源码，微信搜索：发现源码
 * 永久免费提供源码服务
 */
module.exports = {
  shareConfig: shareConfig
};