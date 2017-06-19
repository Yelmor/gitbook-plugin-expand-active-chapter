require(['gitbook', 'jQuery'], function(gitbook, $) {
  var EXPANDED_CLASSNAME = 'expanded',
      CHAPTER = '.chapter',
      ARTICLES = '.articles',
      TRIGGER_TEMPLATE = '<i class="exc-trigger fa"></i>',
      LS_NAMESPACE = 'expChapters';
  var init = function () {
    collapseAll();
    expand($(CHAPTER + '.active'));
  };
  
  var collapseAll = function(){
    $(CHAPTER + '.' + EXPANDED_CLASSNAME).removeClass(EXPANDED_CLASSNAME);
  };

  var expand = function($chapter){
    var $chapters_to_collapse = $chapter.parents(CHAPTER).add($chapter);
    $chapters_to_collapse.addClass(EXPANDED_CLASSNAME);
  };

  gitbook.events.bind('page.change', function() {
    init();
  }); 
});
