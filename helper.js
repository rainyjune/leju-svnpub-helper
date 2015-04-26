var sortTable = document.querySelector("#sortTable");
// Make sure the #sortTable is exist in current page or frame.
if (sortTable) {
  var helperDiv = document.createElement("div");
  
  var jsNdbLabel = document.createElement("label");
  jsNdbLabel.id = "jsNdbLabel";
  jsNdbLabel.htmlFor = "jsNdbBtn";
  jsNdbLabel.innerHTML = "所有JS文件";
  var jsNdbBtn = document.createElement("input");
  jsNdbBtn.id = "jsNdbBtn";
  jsNdbBtn.type = "checkbox";
  jsNdbBtn.title = "选择所有非Debug JS文件";
  
  var cssLabel = document.createElement("label");
  cssLabel.id = "cssLabel";
  cssLabel.htmlFor = "cssBtn";
  cssLabel.innerHTML = "所有CSS文件";
  var cssBtn = document.createElement("input");
  cssBtn.id = "cssBtn";
  cssBtn.type = "checkbox";
  cssBtn.title = "选择所有CSS文件";
  
  helperDiv.appendChild(jsNdbLabel);
  helperDiv.appendChild(jsNdbBtn);
  
  helperDiv.appendChild(cssLabel);
  helperDiv.appendChild(cssBtn);
  
  sortTable.insertAdjacentHTML("beforeBegin", helperDiv.outerHTML);
  
  // Add event listener 
  document.body.addEventListener("click", function(event){
    var srcElement = event.target,
        srcElementId = srcElement.id;
    if (srcElementId) {
      switch(srcElementId) {
        case "jsNdbBtn":
          toggleJSSelection();
          break;
        case "cssBtn":
          toggleCSSSelection();
          break;
      }
    }
  });

  function toggleJSSelection() {
    var jsSelectBtn = document.querySelector("#jsNdbBtn");
    var isChecked = jsSelectBtn.checked;
    var fileList = sortTable.querySelectorAll("input[value$='.js']:not([value$='-debug.js'])");
    for (var i = 0, len = fileList.length; i < len; i++) {
      fileList[i].checked = isChecked;
    }
  }
  
  function toggleCSSSelection() {
    var cssSelectBtn = document.querySelector("#cssBtn");
    var isChecked = cssSelectBtn.checked;
    var fileList = sortTable.querySelectorAll("input[value$='.css']");
    for (var i = 0, len = fileList.length; i < len; i++) {
      fileList[i].checked = isChecked;
    }
  }
}