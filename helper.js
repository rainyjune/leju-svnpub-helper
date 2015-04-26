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
  
  helperDiv.appendChild(jsNdbLabel);
  helperDiv.appendChild(jsNdbBtn);
  
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
}