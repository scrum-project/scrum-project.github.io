$(function(){
  $(".scrum-table").css("margin-top", $("#header_scrum").outerHeight()+"px");
  $(".container").css("margin-top", $(".header-table").first().outerHeight()+"px");
  $(".scrum-table").css("margin-bottom", $(".base_nav").outerHeight()+"px");
  $(".icon_add").click(function(){
    var target = this.parentElement.parentElement.children[1];
    $(target).append(`
      <div class="item new">
        <div class="item-head">
          <div class="title-itemHead">
            <button id="checkbox"></button>
            <div class="list-title" contenteditable="true">New Item</div>
            <button class="toggle button-style new"><i class="material-icons color" id="expand">expand_more</i></button>
            <button class="delete button-style new"><i class="material-icons color">clear</i></button>
          </div>
          <div class="item-content">
            <div class="list-content" contenteditable="true">New Item</div>
          </div>
        </div>
      </div>
      </div>
    `);
    // $(".new", target.this).addClass("zoomIn animated");
    // $(".new", target.this).on("animationend webkitAnimationEnd oAnimationEnd", function(){
    //   $(this).removeClass("zoomIn animated");
    // });
    $(".delete.new").click(function(){
      let parent = $(this).parent(".title-itemHead").parent(".item-head").parent(".item");
      parent.addClass("zoomOut animated").off().remove();
    });
    $(".toggle.new").click(function(){
      let toggleParent = $(this).parent(".title-itemHead").parent(".item-head").children(".item-content");
      let toggleChild = $(this).children("#expand");
      $(this).closest(".title-itemHead").next(".item-content").toggleClass("hide");
      toggleChild.text(function(i, text){
        return text === "expand_more" ? "expand_less" : "expand_more";
      });
    });

    $(".new").removeClass("new");
  });
  $( ".container" ).sortable({
    connectWith: ".container",
    handle: ".item",
    cancel: ".item-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });

  $( ".item" ).addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" ).find( ".item" ).addClass( "ui-widget-header ui-corner-all" ).prepend( "<span class='ui-icon ui-icon-minusthick item-toggle'></span>");

  $( "item-toggle" ).on( "click", function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".item" ).find( ".list-content" ).toggle();
  });
});
