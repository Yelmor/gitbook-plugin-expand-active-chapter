require(['gitbook', 'jQuery'], function(gitbook, $) {
  var EXPANDED_CLASSNAME = 'expanded',
      CHAPTER = '.chapter',
  var init = function () {
    collapseAll();
    expandUntil($(CHAPTER + '.active'));
  };
  
  var collapseAll = function(){
    $(CHAPTER + '.' + EXPANDED_CLASSNAME).removeClass(EXPANDED_CLASSNAME);
  };

  var expandUntil = function($chapter){
    var $chapters_to_collapse = $chapter.parents(CHAPTER).add($chapter);
    console.log($chapters_to_collapse);
    $chapters_to_collapse.addClass(EXPANDED_CLASSNAME);
  };

  gitbook.events.bind('page.change', function() {
    init();
  }); 
});
