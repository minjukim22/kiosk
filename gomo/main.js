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

    document.getElementById("pay_detail").style.display = 'none';
    document.getElementById("screen_to_detail").style.display  = 'none';

    document.getElementById("window_detail").style.display = 'none';

    document.getElementById("pay_new").style.display = 'none';

    reset();
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
    document.getElementById("best").style.display = 'block';

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
    
    sub_restore();
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
    document.getElementById("screen_to_detail").style.display  = 'block';
}

function back() {
    document.getElementById("window_detail").style.display = 'none';
    document.getElementById("screen_to_detail").style.display  = 'none';

    document.getElementById("pay_detail").style.display = 'none';
    document.getElementById("pay_new").style.display  = 'none';

    reset();

}

function add() {
    document.getElementById("window_detail").style.display = 'none';
    document.getElementById("screen_to_detail").style.display  = 'none';

    reset();
}

function reset() {
    var radio1 = document.querySelector('input[type=radio][name=temp]:checked');
    var radio2 = document.querySelector('input[type=radio][name=size]:checked');
    var radio3 = document.querySelector('input[type=radio][name=cream]:checked');
    var radio4 = document.querySelector('input[type=radio][name=syrup]:checked');
    var radio5 = document.querySelector('input[type=radio][name=bubble]:checked');

    radio1.checked = false;
    radio2.checked = false;
    radio3.checked = false;
    radio4.checked = false;
    radio5.checked = false;
}

function pay() {
    document.getElementById("pay_detail").style.display = 'none';
    document.getElementById("window_detail").style.display = 'none';

    document.getElementById("screen_to_detail").style.display  = 'block';
    document.getElementById("pay_new").style.display  = 'block';

}

function open_pay() {
    document.getElementById("pay_detail").style.display = 'block';
    document.getElementById("screen_to_detail").style.display  = 'block';

    write_order_list_window_pay(order_list);
    
    document.getElementById("w_total_number").innerText = total_list[0];
    document.getElementById("w_total_price").innerText =total_list[1];
}

function Item(name, price) {
    this.name = name; 
    this.number = 0;
    this.price = parseInt(price);
}

var order_list = [];
function option(id, price) {

    var order = new Item(id, price);
    order.number += 1;

    open_detail();
    cnt = 0

    for (i = 0; i < order_list.length; i++) {
        if (order.name == order_list[i].name) {
            order_list[i].number += 1;
            cnt += 1; 
        }
    }

    if (cnt == 0 || order_list.length == 0) {
        order_list.push(order);
    }

    open_order_list(order_list);
}

var total_list= [0, 0];
function open_order_list(order_list) {
    var total_num = 0; 
    var total_price = 0; 

    for (i = 0; i < order_list.length; i++) {
        total_num += order_list[i].number;
        total_price += (order_list[i].price)*(order_list[i].number);
    }
    document.getElementById("count").innerHTML= (total_num);
    total_list[0] = total_num;
    total_list[1] = total_price;
}

function write_order_list_window_pay (order_list) {
    for (i=0; i<order_list.length; i++) {
        document.getElementById("w_order_" + (i + 1)).textContent = (order_list[i].name);
        document.getElementById("w_number_" + (i + 1)).textContent = (order_list[i].number) + "개 " + (order_list[i].price) * (order_list[i].number) + "원";
    }
}

