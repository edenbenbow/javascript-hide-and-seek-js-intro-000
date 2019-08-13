function getFirstSelector(selector) {
return document.querySelector(selector);
}

function nestedTarget() {
return document.getElementById('nested').querySelector('div.target')

}

function increaseRankBy(n) {
  for(i = 0; i < n.length; i++) {
    .ranked-list[i] + n
  }
}
