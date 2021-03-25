// В тильде создать необходимо PROMOCODE в админке на 1рубль или другую сумму. Без наличия промокода работать не будет. Эта интеграция работает с Giftery сервис.
// Скрипт разместить в head;



<script>
var d = { data: {
        balance: 200
        }
    };
    // var d.data.balance = 1000; // сверх этой суммы будет применяться скидка
    // var discountPrice = 200; // на сколько будет примениема скидка

</script>


<style>
    .t706__cartwin-totalamount-wrap.t-descr.t-descr_xl {display: none !Important;}
    .t-input-group.t-input-group_pc {display:none !Important;}
    t-inputpromocode__wrapper { display: none !Important;}
    .cert_wrapper .item{display:flex;flex-direction:column}.cert_wrapper{justify-content:space-between}.cert_wrapper .message{color:#8b1818;margin-bottom:10px;font-family:'Roboto',Arial,sans-serif}.cert_wrapper .message.success{color:#5ca419}.cert_wrapper input{height:56px;padding:0 20px;border:1px solid black}.cert_wrapper form{display:flex;justify-content:space-between;flex-wrap:wrap}.cert_wrapper label{font-family:'Roboto',Arial,sans-serif;margin-bottom:5px;font-size:16px;line-height:1.55;color:#000;font-weight:300}.cert_wrapper .activate{text-align:center;font-family:'Roboto',Arial,sans-serif;border:unset;cursor:pointer;padding:15px 0;margin-top:5px;font-size:13px;flex-wrap:wrap;width:100%;background-color:#457e80;color:white;direction:flex;align-items:center}.item.certificate{width:69%}.item.pin{width:29%}
</style>

<script>
    $(function () {
                                window.tildaForm.send = function ($jform, btnformsubmit, formtype, formskey) {

                                    alert('work');
                                    $('.t-input.t-inputpromocode').val('PROMOCODE'); // установим промокод автоматически
                                    $('.t-inputpromocode__btn.t-btn').click();
                                    setTimeout(function () {
                                        tcart.amount = tcart.prodamount - d.data.balance ;
                                        tcart.promocode.discountsum = d.data.balance ;
                                        tcart.prodamount_discountsum = d.data.balance ;
                                        tcart.prodamount_withdiscount = tcart.amount;
                                        Object.freeze(tcart);
                                        // $('.cert_wrapper .message').text('Спасибо, сертификат на сумму ' + String(d.data.balance).replace('.',',') + ' руб.' + ' активирован !').addClass('success').show();
                                        // $('#certificate ,#pin').attr('disabled','');


                                        $('.t-inputpromocode__wrapper .t-text').html('Сертификат активирован ! <br> Ваша скидка:' + String(d.data.balance).replace('.',',') + ' р.');
                                        $('.t706__cartwin-totalamount-info .t706__cartwin-totalamount-info_value').eq(2).siblings('br').eq(1).remove();
                                        $('.t706__cartwin-totalamount-info .t706__cartwin-totalamount-info_label').eq(1).hide();
                                        $('.t706__cartwin-totalamount-info .t706__cartwin-totalamount-info_value').eq(1).hide();
                                        $('.t706__cartwin-totalamount-info .t706__cartwin-totalamount-info_value').eq(2).html(String(d.data.balance).replace('.',',') + ' р.');
                                        $('.t706__cartwin-totalamount-info .t706__cartwin-totalamount-info_value').eq(3).html(String(tcart.amount).replace('.',',') + ' р.');
                                        $('.t706__cartwin-totalamount').html(String(tcart.amount).replace('.',',') + ' р.');
                                        $('.t-input-group.t-input-group_pc').attr('style','display: table !important; display: table;');
                                        $('.t706__cartwin-totalamount-wrap.t-descr.t-descr_xl').attr('style','display: block !important;');
                                        $('.cert_wrapper .activate').off('click');

                                        // Убираем возможности манипуляций с корзиной.
                                        tcart__addProduct
                                            =tcart__product__del
                                            =tcart__product__minus
                                            =tcart__product__plus
                                            =tcart__product__updateQuantity
                                            =tcart__product__editquantity
                                            = '';
                                        // Блокируем ввод промокода и пин-кода.

                                    if (window.tildaForm.tildapayment = !1, ("y" == $jform.data("formcart") || 0 < $jform.closest(".t706__orderform").length) && window.tildaForm.addPaymentInfoToForm($jform), 2 == formtype || !formtype && "" < formskey) {
                                        var $inputElem, $inputElem = $jform.find("input[name=tildaspec-cookie]");
                                        $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-cookie" value="">'), $inputElem = $jform.find("input[name=tildaspec-cookie]")), 0 < $inputElem.length && $inputElem.val(document.cookie), $inputElem = $jform.find("input[name=tildaspec-referer]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-referer" value="">'), $inputElem = $jform.find("input[name=tildaspec-referer]")), 0 < $inputElem.length && $inputElem.val(window.location.href), $inputElem = $jform.find("input[name=tildaspec-formid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-formid" value="">'), $inputElem = $jform.find("input[name=tildaspec-formid]")), 0 < $inputElem.length && $inputElem.val($jform.attr("id")), "" < formskey && ($inputElem = $jform.find("input[name=tildaspec-formskey]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-formskey" value="">'), $inputElem = $jform.find("input[name=tildaspec-formskey]")), 0 < $inputElem.length && $inputElem.val(formskey)), $inputElem = $jform.find("input[name=tildaspec-version-lib]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-version-lib" value="">'), $inputElem = $jform.find("input[name=tildaspec-version-lib]")), 0 < $inputElem.length && $inputElem.val(window.tildaForm.versionLib), $inputElem = $jform.find("input[name=tildaspec-pageid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-pageid" value="">'), $inputElem = $jform.find("input[name=tildaspec-pageid]")), 0 < $inputElem.length && $inputElem.val($("#allrecords").data("tilda-page-id")), $inputElem = $jform.find("input[name=tildaspec-projectid]"), $inputElem && 0 != $inputElem.length || ($jform.append('<input type="hidden" name="tildaspec-projectid" value="">'), $inputElem = $jform.find("input[name=tildaspec-projectid]")), 0 < $inputElem.length && $inputElem.val($("#allrecords").data("tilda-project-id")), $jform.find(".js-form-spec-comments").val(""), $formurl = "https://" + window.tildaForm.endpoint + "/procces/";
                                        var d = {};
                                        if (d = $jform.serializeArray(), d = d.filter(function (t) {
                                            return -1 === t.name.indexOf("tildadelivery-")
                                        }), window.tildaForm.tildapayment && window.tildaForm.tildapayment.products) d.push({
                                            name: "tildapayment",
                                            value: JSON.stringify(window.tildaForm.tildapayment)
                                        }); else if (0 < $jform.closest(".t706__orderform").length) return !1;
                                        var tsstartrequest = Date.now();
                                        return $.ajax({
                                            type: "POST",
                                            url: $formurl,
                                            data: d,
                                            dataType: "json",
                                            xhrFields: {withCredentials: !1},
                                            success: function (json) {
                                                var successurl = $jform.data("success-url"), successcallback = $jform.data("success-callback"),
                                                    formsendedcallback = $jform.data("formsended-callback");
                                                if (btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", ""), json && json.error) {
                                                    successurl = "", successcallback = "";
                                                    var $errBox = $jform.find(".js-errorbox-all");
                                                    $errBox && 0 != $errBox.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), $errBox = $jform.find(".js-errorbox-all"));
                                                    var $allError = $errBox.find(".js-rule-error-all");
                                                    $allError && 0 != $allError.length || ($errBox.append('<p class="js-rule-error-all">' + json.error + "</p>"), $allError = $errBox.find(".js-rule-error-all")), $allError.html(json.error).show(), $errBox.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                                                } else {
                                                    if (json && json.needcaptcha) return formskey ? void tildaForm.addTildaCaptcha($jform, formskey) : void alert("Server busy. Please try again later.");
                                                    var formres = {}, str, str;
                                                    json && json.results && json.results[0] ? (str = json.results[0], str = str.split(":"), formres.tranid = str[0] + ":" + str[1], formres.orderid = str[2] ? str[2] : "0", "" < formres.orderid && "0" != formres.orderid && (window.tildaForm.orderIdForStat = formres.orderid)) : (formres.tranid = "0", formres.orderid = "0"), $jform.data("tildaformresult", formres);
                                                    var virtPage = $jform.data("tilda-event-name") || "";
                                                    virtPage && "" != virtPage || (virtPage = "y" == $jform.data("formcart") && json && (json.next && json.next.type && "function" != json.next.type || !json.next) ? "/tilda/" + $jform.attr("id") + "/payment/" : "/tilda/" + $jform.attr("id") + "/submitted/");
                                                    var virtTitle = "Send data from form " + $jform.attr("id"), virtPrice = 0, virtProduct = "";
                                                    if (window.Tilda && "function" == typeof Tilda.sendEventToStatistics ? (window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount ? (virtPrice = window.tildaForm.tildapayment.amount, 0 < parseFloat(window.tildaForm.tildapayment.amount) && (virtTitle = "Order " + formres.orderid)) : 0 < $jform.find(".js-tilda-price").length && (virtPrice = $jform.find(".js-tilda-price").val(), 0 < parseFloat(virtPrice) && (virtTitle = "Order " + formres.orderid)), Tilda.sendEventToStatistics(virtPage, virtTitle, virtProduct, virtPrice)) : ("undefined" != typeof ga && ga && "tilda" != window.mainTracker && ga("send", {
                                                        hitType: "pageview",
                                                        page: virtPage,
                                                        title: virtTitle
                                                    }), "" < window.mainMetrika && window[window.mainMetrika] && window[window.mainMetrika].hit(virtPage, {
                                                        title: virtTitle,
                                                        referer: window.location.href
                                                    })), window.dataLayer && window.dataLayer.push({event: "submit_" + $jform.attr("id")}), $jform.trigger("tildaform:aftersuccess"), formsendedcallback && 0 < formsendedcallback.length && eval(formsendedcallback + "($jform);"), json && json.next && "" < json.next.type) {
                                                        var res = window.tildaForm.payment($jform, json.next), successurl = "";
                                                        return !1
                                                    }
                                                    window.tildaForm.successEnd($jform, successurl, successcallback)
                                                }
                                            },
                                            error: function (t) {
                                                var e = Date.now() - tsstartrequest;
                                                btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", "");
                                                var r = $jform.find(".js-errorbox-all");
                                                r && 0 != r.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), r = $jform.find(".js-errorbox-all"));
                                                var a = r.find(".js-rule-error-all");
                                                if (a && 0 != a.length || (r.append('<p class="js-rule-error-all"></p>'), a = r.find(".js-rule-error-all")), !t || 0 == t.status && e < 100) a.html("Request error (opening block content panel). Please check internet connection..."); else {
                                                    if (t && (500 <= t.status || 408 == t.status || 410 == t.status || 429 == t.status || "timeout" == t.statusText) && -1 !== window.tildaForm.endpoint.indexOf("forms.tilda")) return window.tildaForm.endpoint = "forms2.tildacdn.com", window.tildaForm.send($jform, btnformsubmit, formtype, formskey), !1;
                                                    t && "" < t.responseText ? a.html(t.responseText + ". Please, try again later.") : t && t.statusText ? a.html("Error [" + t.statusText + "]. Please, try again later.") : a.html("Unknown error. Please, try again later.")
                                                }
                                                a.show(), r.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                                            },
                                            timeout: 15e3
                                        }), !1
                                    }
                                    if ("y" == $jform.data("is-formajax")) {
                                        var d = {};
                                        return d = $jform.serializeArray(), window.tildaForm.tildapayment && window.tildaForm.tildapayment.amount && d.push({
                                            name: "tildapayment",
                                            value: JSON.stringify(window.tildaForm.tildapayment)
                                        }), $.ajax({
                                            type: "POST",
                                            url: $jform.attr("action"),
                                            data: d,
                                            dataType: "text",
                                            xhrFields: {withCredentials: !1},
                                            success: function (t) {
                                                var e, r = $jform.data("success-url"), a = $jform.data("success-callback");
                                                if (btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", ""), t && 0 < t.length) if ("{" == t.substring(0, 1)) {
                                                    if ((e = window.JSON && window.JSON.parse ? window.JSON.parse(t) : $.parseJSON(t)) && e.message) "OK" != e.message && $jform.find(".js-successbox").html(e.message); else if (e && e.error) {
                                                        var o = $jform.find(".js-errorbox-all");
                                                        o && 0 != o.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), o = $jform.find(".js-errorbox-all"));
                                                        var i = o.find(".js-rule-error-all");
                                                        return i && 0 != i.length || (o.append('<p class="js-rule-error-all">Unknown error. Please, try again later.</p>'), i = o.find(".js-rule-error-all")), i.html(e.error), i.show(), o.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror"), !1
                                                    }
                                                } else $jform.find(".js-successbox").html(t);
                                                var n = "/tilda/" + $jform.attr("id") + "/submitted/",
                                                    s = "Send data from form " + $jform.attr("id");
                                                window.Tilda && "function" == typeof Tilda.sendEventToStatistics ? window.Tilda.sendEventToStatistics(n, s, "", 0) : ("undefined" != typeof ga && "tilda" != window.mainTracker && ga("send", {
                                                    hitType: "pageview",
                                                    page: n,
                                                    title: s
                                                }), "" < window.mainMetrika && window[window.mainMetrika] && window[window.mainMetrika].hit(n, {
                                                    title: s,
                                                    referer: window.location.href
                                                })), $jform.trigger("tildaform:aftersuccess"), window.tildaForm.successEnd($jform, r, a)
                                            },
                                            error: function (t) {
                                                btnformsubmit.removeClass("t-btn_sending"), btnformsubmit.data("form-sending-status", "0"), btnformsubmit.data("submitform", "");
                                                var e = $jform.find(".js-errorbox-all");
                                                e && 0 != e.length || ($jform.prepend('<div class="js-errorbox-all"></div>'), e = $jform.find(".js-errorbox-all"));
                                                var r = e.find(".js-rule-error-all");
                                                r && 0 != r.length || (e.append('<p class="js-rule-error-all"></p>'), r = e.find(".js-rule-error-all")), t && "" < t.responseText ? r.html(t.responseText + ". Please, try again later.") : t && t.statusText ? r.html("Error [" + t.statusText + "]. Please, try again later.") : r.html("Unknown error. Please, try again later."), r.show(), e.show(), $jform.addClass("js-send-form-error"), $jform.trigger("tildaform:aftererror")
                                            },
                                            timeout: 15e3
                                        }), !1
                                    }
                                    var attraction = $jform.attr("action");
                                    return -1 == attraction.indexOf(window.tildaForm.endpoint) && (btnformsubmit.data("form-sending-status", "3"), $jform.submit(), !0)
                                }
                            },2500);
                        }
    })

</script>
