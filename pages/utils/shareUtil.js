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

module.exports = {
  shareConfig: shareConfig
};