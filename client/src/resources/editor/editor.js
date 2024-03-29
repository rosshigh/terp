import {inject, bindable, bindingMode} from "aurelia-framework"
import {ObserverLocator} from "aurelia-binding"
import "summernote"

import $ from 'jquery'

@inject(Element, ObserverLocator)
export class Editor {

  @bindable({ defaultBindingMode: bindingMode.twoWay }) value;
	@bindable height = 250;
	@bindable editorid =  "summernote-" + this.guid();
	@bindable toolbar = [
		['style', ['style', 'bold', 'clear']],
		['color', ['color']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['fontsize', ['fontsize']],
		['layout', ['ul', 'ol', 'paragraph']],
		['insert', ['picture', 'link', 'table', 'hello']],
		['misc', ['undo', 'redo', 'fullscreen']]
	];

	editor = null;

	constructor(element, observerLocator) {
		this.element = element;
		// this.editorId = "summernote-" + this.guid();
		this.subscriptions = [
			observerLocator
				.getObserver(this, 'value')
				.subscribe(newValue => {
					if (this.editor && newValue !== this.editor.summernote('code')) {
            this.editor.summernote('code', newValue);
					}
				})
		]
	}

	attached() {
    var that = this;
		this.editor = $(`#${this.editorid}`);
		this.editor.data('view-model', this);
		this.editor.summernote({
			height: this.height,
			toolbar: this.toolbar,
      callbacks: {
        onChange: function(contents) {
					that.value = contents;
					$("#" +  this.editorid).summernote('editor.saveRange');
        }
      }
		});
    this.editor.summernote('code', this.value);
	}

	detached() {
		this.editor.summernote('destroy'); 
	}

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }

}