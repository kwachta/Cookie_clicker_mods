function check_stocks() {
  var stock=Game.Objects['Bank'].minigame;
  var n_of_stocks=0;
  for (var i in stock.goods)
  {
    n_of_stocks+=1;
  }
  var str="";
  var prices = new Array(n_of_stocks);
  for (i=0;i<n_of_stocks;i++)
  {
    prices[i]=stock.getGoodPrice(stock.goodsById[i]);
    str=str+" "+prices[i];
  }
  Game.Notify(str,'',);
}
setInterval(check_stocks, 100);
