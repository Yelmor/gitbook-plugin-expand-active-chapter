require(['gitbook', 'jQuery'], function(gitbook, $) {
  var EXPANDED_CLASSNAME = 'expanded',
      CHAPTER = '.chapter';
  var init = function () {
    expandUntil($(CHAPTER + '.active'));
  };

  var expandUntil = function($chapter){
    var $chapters_to_expand = $chapter.parents(CHAPTER).add($chapter);
    $chapters_to_expand.addClass(EXPANDED_CLASSNAME);
  };

  gitbook.events.bind('page.change', function() {
    init();
  }); 
});
