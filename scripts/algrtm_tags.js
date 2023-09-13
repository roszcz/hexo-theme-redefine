hexo.extend.tag.register('algrtmImg', function(args) {
  // TODO: Would be great to get this with a hexo function :thinking:
  var src = '/blog/assets/' + args[0];
  var alt = args[1] || '';
  var height = args[2] || '200px';
  return `<img src="${src}" alt="${alt}" style="height: ${height}; display: block; float: left;"><div style="clear: both;"></div>`;
}, {ends: false});

hexo.extend.tag.register('algrtmAudio', function(args) {
  var src = '/blog/assets/' + args[0];
  return `<audio controls>
    <source src="${src}" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>`;
}, {ends: false});

hexo.extend.tag.register('algrtmImgBanner', function(args) {
  // TODO: Would be great to get this with a hexo function :thinking:
  var src = '/blog/assets/' + args[0];
  var alt = args[1] || '';
  return `<img src="${src}" alt="${alt}" style="width: calc(100% + 20px); display: block; overflow: visible; float: center; margin-left: -10px; margin-right: -10px"><div style="clear: both;"></div>`;
}, {ends: false});
