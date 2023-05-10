function here() {
    document.getElementById("start").style.display = 'none'; 
    document.getElementById("choose").style.display = 'none'; 
    document.getElementById("order").style.display = 'block'; 
    document.getElementById("menu_table").style.display = 'block';
    document.getElementById("B_est").style.backgroundColor = '#d66f6f';
    document.getElementById("B_est").style.color = 'white';
    document.getElementById("B_est").style.borderRadius = '5px';
    document.getElementById("B_est").style.marginTop = '-2px';
    document.getElementById("B_est").style.padding = '2px 15px';
    none_menu();
    document.getElementById("best").style.display = 'block';

    document.getElementById("window_detail").style.display = 'none';
    document.getElementById("screen_to_detail").style.display  = 'none';
}

function open_menu(title,id) {
    none_menu();
    document.getElementById(title).style.display = 'block';
    restore();
    changeColor(id);
}

function sub_open_menu(title,id) {
    none_menu();
    document.getElementById(title).style.display = 'block';
    sub_restore();
    sub_changeColor(id);
}

function none_menu() {
    document.getElementById("best").style.display = 'none';
    document.getElementById("icecream").style.display = 'none';
    document.getElementById("cake").style.display = 'none';
    document.getElementById("deli").style.display = 'none';
    document.getElementById("goods").style.display = 'none';
    document.getElementById("커피").style.display = 'none';
    document.getElementById("차").style.display = 'none';
    document.getElementById("탄산주스(에이드)").style.display = 'none';
    document.getElementById("프라페&쉐이크").style.display = 'none';
}

function coffee() {
    document.getElementById("order2").style.display = 'block';
    document.getElementById("menu_table").style.display = 'none';
    document.getElementById("drink").style.backgroundColor = '#d66f6f';
    document.getElementById("drink").style.color = 'white';
    document.getElementById("drink").style.borderRadius = '5px';
    document.getElementById("drink").style.marginTop = '-2px';
    document.getElementById("drink").style.padding = '2px 15px';

    document.getElementById("B_est").style.backgroundColor = 'white';
    document.getElementById("B_est").style.color = 'black';
    document.getElementById("B_est").style.borderRadius = '0';
    document.getElementById("B_est").style.marginTop = '0';
    document.getElementById("B_est").style.padding = '0';

    document.getElementById("Ice").style.backgroundColor = 'white';
    document.getElementById("Ice").style.color = 'black';
    document.getElementById("Ice").style.borderRadius = '0';
    document.getElementById("Ice").style.marginTop = '0';
    document.getElementById("Ice").style.padding = '0';

    document.getElementById("C_ake").style.backgroundColor = 'white';
    document.getElementById("C_ake").style.color = 'black';
    document.getElementById("C_ake").style.borderRadius = '0';
    document.getElementById("C_ake").style.marginTop = '0';
    document.getElementById("C_ake").style.padding = '0';

    document.getElementById("D_eli").style.backgroundColor = 'white';
    document.getElementById("D_eli").style.color = 'black';
    document.getElementById("D_eli").style.borderRadius = '0';
    document.getElementById("D_eli").style.marginTop = '0';
    document.getElementById("D_eli").style.padding = '0';

    document.getElementById("G_oods").style.backgroundColor = 'white';
    document.getElementById("G_oods").style.color = 'black';
    document.getElementById("G_oods").style.borderRadius = '0';
    document.getElementById("G_oods").style.marginTop = '0';
    document.getElementById("G_oods").style.padding = '0';
}

function changeColor(id) {
    document.getElementById("order2").style.display = 'none';
    document.getElementById(id).style.backgroundColor = '#d66f6f';
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.borderRadius = '5px';
    document.getElementById(id).style.marginTop = '-2px';
    document.getElementById(id).style.padding = '2px 15px';
}

function sub_changeColor(id) {
    document.getElementById(id).style.backgroundColor = '#d66f6f';
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.borderRadius = '5px';
    document.getElementById(id).style.marginTop = '-2px';
    document.getElementById(id).style.padding = '2px 15px';
}

function restore() {
    document.getElementById("B_est").style.backgroundColor = 'white';
    document.getElementById("B_est").style.color = 'black';
    document.getElementById("B_est").style.borderRadius = '0';
    document.getElementById("B_est").style.marginTop = '0';
    document.getElementById("B_est").style.padding = '0';

    document.getElementById("drink").style.backgroundColor = 'white';
    document.getElementById("drink").style.color = 'black';
    document.getElementById("drink").style.borderRadius = '0';
    document.getElementById("drink").style.marginTop = '0';
    document.getElementById("drink").style.padding = '0';

    document.getElementById("Ice").style.backgroundColor = 'white';
    document.getElementById("Ice").style.color = 'black';
    document.getElementById("Ice").style.borderRadius = '0';
    document.getElementById("Ice").style.marginTop = '0';
    document.getElementById("Ice").style.padding = '0';

    document.getElementById("C_ake").style.backgroundColor = 'white';
    document.getElementById("C_ake").style.color = 'black';
    document.getElementById("C_ake").style.borderRadius = '0';
    document.getElementById("C_ake").style.marginTop = '0';
    document.getElementById("C_ake").style.padding = '0';

    document.getElementById("D_eli").style.backgroundColor = 'white';
    document.getElementById("D_eli").style.color = 'black';
    document.getElementById("D_eli").style.borderRadius = '0';
    document.getElementById("D_eli").style.marginTop = '0';
    document.getElementById("D_eli").style.padding = '0';

    document.getElementById("G_oods").style.backgroundColor = 'white';
    document.getElementById("G_oods").style.color = 'black';
    document.getElementById("G_oods").style.borderRadius = '0';
    document.getElementById("G_oods").style.marginTop = '0';
    document.getElementById("G_oods").style.padding = '0';
}

function sub_restore() {
    document.getElementById("menu_table").style.display = 'block';
    document.getElementById("coffee").style.backgroundColor = 'white';
    document.getElementById("coffee").style.color = 'black';
    document.getElementById("coffee").style.borderRadius = '0';
    document.getElementById("coffee").style.marginTop = '0';
    document.getElementById("coffee").style.padding = '0';

    document.getElementById("tea").style.backgroundColor = 'white';
    document.getElementById("tea").style.color = 'black';
    document.getElementById("tea").style.borderRadius = '0';
    document.getElementById("tea").style.marginTop = '0';
    document.getElementById("tea").style.padding = '0';

    document.getElementById("soda").style.backgroundColor = 'white';
    document.getElementById("soda").style.color = 'black';
    document.getElementById("soda").style.borderRadius = '0';
    document.getElementById("soda").style.marginTop = '0';
    document.getElementById("soda").style.padding = '0';

    document.getElementById("shake").style.backgroundColor = 'white';
    document.getElementById("shake").style.color = 'black';
    document.getElementById("shake").style.borderRadius = '0';
    document.getElementById("shake").style.marginTop = '0';
    document.getElementById("shake").style.padding = '0';
}

function open_detail() {
    document.getElementById("window_detail").style.display = 'block';
    document.getElementById("screen_to_window").style.display  = 'block';
}

function back() {
    document.getElementById("window_detail").style.display = 'none';
    document.getElementById("screen_to_window").style.display  = 'none';

}

function add() {
    let count = 0;
    document.getElementById("count").innerHTML = ++count;
    document.getElementById("window_detail").style.display = 'none';
    document.getElementById("screen_to_window").style.display  = 'none';
}

function Item(name, price) {
    this.name = name; 
    this.number = 0; 
    this.price = parseInt(price);
}

var order_list = [];
function option(id, price) { //메뉴 클릭시 표시
    open_detail();
    var drink = document.getElementById(id);

    var order = new Item(id, price);
    order.number += 1;

    var cnt = 0;
    /*for (i = 0; i < order_list.length; i++) {
        if (order.name == order_list[i].name) { //클릭한 메뉴가 동일하면
            order_list[i].number += 1;
            cnt += 1; // 개수 증가
        }
    }*/

    if (cnt == 0 || order_list.length == 0) {
        order_list.push(order);
    }
    open_order_list(order_list);
}

/*order_list에 표시하기*/
var total_list= [0, 0];
function open_order_list(order_list) {
    var total_num = 0; //총 수량
    var total_price = 0; //총 결제금액

    for (i = 0; i < order_list.length; i++) {
        document.getElementById(order_id).style.display = 'flex';

        document.getElementById("range_" + (i + 1)).innerText = (i + 1) + ". " + (order_list[i].name);
        document.getElementById("amount_" + (i + 1)).innerText = (order_list[i].number) + "개";
        document.getElementById("item_price_" + (i + 1)).innerText = (order_list[i].price) * (order_list[i].number) + "원";
        
        total_num += order_list[i].number;
        total_price += (order_list[i].price)*(order_list[i].number);
    }
    document.getElementById("item_number").innerHTML= "선택한 상품 " + (total_num) + "개";
    document.getElementById("total_price").innerHTML = (total_price)+"원<br>결제하기";
    total_list[0] = total_num;
    total_list[1] = total_price;

}