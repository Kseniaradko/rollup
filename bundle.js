
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

var e = [],
    t = [];

function n(n, r) {
  if (n && "undefined" != typeof document) {
    var a,
        s = !0 === r.prepend ? "prepend" : "append",
        d = !0 === r.singleTag,
        i = "string" == typeof r.container ? document.querySelector(r.container) : document.getElementsByTagName("head")[0];

    if (d) {
      var u = e.indexOf(i);
      -1 === u && (u = e.push(i) - 1, t[u] = {}), a = t[u] && t[u][s] ? t[u][s] : t[u][s] = c();
    } else a = c();

    65279 === n.charCodeAt(0) && (n = n.substring(1)), a.styleSheet ? a.styleSheet.cssText += n : a.appendChild(document.createTextNode(n));
  }

  function c() {
    var e = document.createElement("style");
    if (e.setAttribute("type", "text/css"), r.attributes) for (var t = Object.keys(r.attributes), n = 0; n < t.length; n++) {
      e.setAttribute(t[n], r.attributes[t[n]]);
    }
    var a = "prepend" === s ? "afterbegin" : "beforeend";
    return i.insertAdjacentElement(a, e), e;
  }
}

var css = "body {\r\n    background: black;\r\n}\r\n\r\nh1 {\r\n    color: whitesmoke;\r\n    font-style: italic;\r\n    word-spacing: 10px;\r\n    text-decoration: underline;\r\n    text-align: center;\r\n}\r\n\r\n.image {\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 10px;\r\n    border-width: 5px;\r\n    border-style: solid;\r\n    border-color: rgb(235, 214, 22);\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}";
n(css,{});

var JS_IMAGE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA7VBMVEX////pyjL/3iT+3iQAAADoyCb/4CL//vvw0S7nyDPw3Ij/2wD/5GDpyi//3BnqzEf/8bH19fUWFhYiIiLAwMD/5Wp5eXksLCznxAb9+emWlpaMjIznxhj26bT+/PPz1CtBQUHt02L32Cju1Wz37cH79tv05KL9+uzy35Hs0Vnw2n/68tDrzk7/7p3x3Yv+4Un47sbu1Wo5OTkdHR3c3Nzt7e3/87v99cLt8Ljx7p7+6YH13DP1+d7r8Mz96Yb78dXy/e3s7qX15nP09sjy3lH26I7/4UPw//7y4WD/76Dx53n18LL4+tr15ajz4Z7DKrDEAAANH0lEQVR4nO2di1/ayBbHY6YBMSW427U3dANWgaJgBe/eq7X22q6Ptrbo///n3MzkOY88ZnIGUje//Wx1ZRG+PfP45ZwzwTD06/Xvr7Be/OF//8eLV1n6699reC969PpFoIAwW//a9BtVVkPYENZfDeE/h/DVpt+oskSEr43fOG36fapLTPic9M8kfPvmT05vNv1GlVV2pflr029UWc1u0RDWXw3h8yL8z59veD0rQpF+e/aE/20I66i3opXkWa00DWFDWH81hA1h/fX2d14hoeCRUL9UZYZPpEW5NOEjv3yyrVGjRo0aNWrUqFGjqmrXXZUJx65VZ7lPlQnn7lad5Q4qE/ZrTrisTDj0Ng2RK3dSndDaNESu3H5lwnanu2mKPHnDyoTGSa0Jt6rvFsaozsO02wMgnNWa8Lg6oHFa58XUGgEQPtWacAeAcFBnQu8IgHBZa8JHAMIJsG3rVBRNOAYg7MPGcBuZVYQOKUR3DkA4hd0ttlughNVtqW9MYW1bVcJ9itCrbksNaNtWlXCbIuxOIQiP60TY2qYAOwCmDdqYViWk/rq7JxCAwMbUJ6yymraoX2YdgBAe1SmGiJqGILbUMB5BN0SKUBDN7AAjAeEMhHAJampgCd+BEMLmE4tGacEkpQm96rlELFhjWhTDAnYNpg3amFZcabQQwuYTq8VQi2kzjBp5GtrSbHkgps0wepCIoIQWiGkDNqYVCWnTtgUDCGtMKxJSvwskl4i1o0LY9VhZKULHlhYhRPRrwNhSw3insl10BozGZ1ZM6CzOdyX1niC2dJg2XAZWCGGP+zWnKcKX0m9iQggZ0waRS8RSMaYCwp1KhBcCQiDTpmZMwQk/2HjHZywNRC4RS6XQDU54SWKoxbT5tq0OhB8xIWPaQHKJRAprKTjhjWNylsYFMm1KxhSc8KWA0AMybUoZU3DCO4czbVsWBBzRweYJ21dks6BtaQeELnlvGyUc2gLTBmVLDeNIfqmBJuzbvPEGyiViKZSBoQk/2fganzFtpyB0WAP5DRGa8H8i0waTS8RSsG15hEiBcJfEkLE0ULZUKZ8IHUNi2tjyKJQtVbJt0ITXItP2GYQOq72Glaag1fmHIyAEyiXiV9+S3vKlCV/m5zAcstDQBWAXzLSp5BOlCfec4jwU0mVLVWybFsKWLtOmUgZeByFMiTuQvG3TQ0i9BKBpU+lP1ECI9BSAA8kXuvWsNLRpg8olYo3XR5hX5T7UZUsN47O0qdFAyNpSsGwplnw+UccoZWypV/24TKJpLeahtlyigfsTa0G4raXETdSWtm16CKmXsMCypVjSZWAdhKxpAzgQlEi6DCx9jS9PeAJovBWMqZYYUq9gnUECyhtTHfuhRtOmUOheAyHEcZlE0hlT/YSgtlQhn6hjHjKWBuK4TKIJZAwREhKiIHz+FxR8IRFFyY8ZQrhcIpZ0f6ISIWFDhCkCC78jpNpyiVjS/Ym5ozSTkJYZ/huJMW2QtlQhn6hGGMTQDOHMiDMIIVsAhrSlhnw+UWGlQWEnd9hJmiyh4bdMAbgLatrkjal6DE2UhJFE0nFsTI+Yrj2Y4zKJZI1ppVEahs1xSLL77v78DnMzhJC5RCxZY6o0SqMh6mA2By32Li9WZCwuHN7SwJW4A8nmExV3C9KVaS72rj+s+skobAejVsdxmUSytk2akFRm0Pfrh9s+d2U7NAWEsLZUvj9Reh5evv+wGmYsHl+QIJcIa9rkjSlohXRuCwhhTZt8oRuUcGzjibivpy8x0nSThD9xDNmuPWhC2f5E6XmYp79x9yxLCGzaDEP3jp+naxvbUtpVucCmzTAkz6xL7xZ5+uHwhB4UWCxJYwo6D0lvKdO114UCiyVp20AJF9jR0UctBL+/qp4ACSVH6bcF37UHdlwmkWQZGDKGU0fQlwibLcWS7E+EJOwLuva86vdLZCVpTCEJJ4KjFqAF4PBl4Ahld4tbvB2ypg3alkrbNsiVZpds+Nt6bal/Fbo5wr9FhOCmTdaYqs7DYX95+Yn5WdBbyhCCmzbDkAJUiOG31cX7m8Whf6XPhmfPwXk3xpbCA0raNpkY9le713dXJLGG7ZnNhue71uMyieTyiaUI2/3by+sFCtFIatt/8IrNZRziLA2dS9yCN22yZeCi3aJ/frl3Fzb/orgEg/NNzoJ5XrvF56EAj8skkssn5hMiMiRbcfnFjMpN+KGbEoQaTJtvTKW2i/yVJi4JRsW0VH3C+cg8ry84HwtcAA4kZ0wLYoiiyiCK/4x+bN8zz5tjQranDbIvMX4huBiaUdEzWl5QiIkfsj8wz8MHgljTpsGWyhrTAsJwXFLVs/CrfcE8b1d0mATelsr2JxbMw7iCFlWxk4qvzdZ239smVwAG7UuMJFfoLpqHcQE7LmXHhKyluSeXFrpziYZsf2LxWppeb5KWBD+qbGHmRmBpIG7jzUvKtuV37gVlwrhGHxUO8T/O4hvzvK+kPKq3xB1IyrblrzTJKmOGhPF/8ab8SlQABi5xB5LKJxaupUEAU4MzDK2zxzyt7fBHLbSYNt6YelbOsC3cD1G8H4ZLavgNt+FPbaT3MEkixph641kvunGQOmG80oQTEtkPzNO+2JqPyyRiCt34phSTwajreqJQFszD1ORjZN8yT1sRS7MGW8rd2DvckoaTp2PP5QZswVqaXFBQu4X/rc2mmM7JdrgGW8rZttSmOxyfdphQFjtvfqUJ5iGbpTknxntfb4k7UF8Yw/jRwVk3Fcoi18a16EUWx2G3w3tRthQ+l4jF3NibN07t+dGxFa6wxb40cqdmihD307BPuyYtX4xp02FLuRt7i63hdLnTc12rxNUTd22B8Rb3XHRuSGmNMW06bClnTDPNb7s/GFkuf0g36/qQBNSnO/x4KzoFcycghD0uk+jYKkWI1Z6/43wVOw/jK2DcfPh9l11hIiE+0wbelxjprDyhSLQvjUapT/f1/jbbSH8L/k/atEH3JUaaARHGK6c/NK/2fmYFL9AXUXkUvgAc6AiQkMy875fzwuG2spH+vsRIdKG7wijF0bsSryuc5oLyKHhfYqQlFKF/mful7LOwaeMI4Uvcgeh8YiXC8vXDB0K4hlwi1mQThJeiXKIe08Ya0yrzUIIQd3xxXXuwx2UStem1VNZXqBG+xLaU7drTY0t9ddMv5C0ljYVaL8YCF4BZW6rJtLEHZ9zOaDCRoFSbh1+JpaEAwW7jzYu9Q6Tlub3ZuOxfqArhp12HXF3Rrwt1G29eIz4j07U8r3dUam2TnYftix+mbQf+fD22NDNj2rVc92BQuLTKxLC9er8IKuCCwySasqVYOf2JXdft7OQP2NKE/Z83yLbjhBx3elRTLhErvwyMB+zx0efMC6FyHUPz60V477KUGEK4O0KyKu5PtCy3ezAQb1fFu8Xq4c60HSe6QE7OkK7JtJUsdHe7ntudjflQ5q80w/MbJ5x5KEmoBn+09qlX0FIADlT6Rjx47ek9MRd/2YTDcF1hs4xRslH7YZJEMqV8P5TW6DF1xi5jHk5+7pF1JSlgMBl/nlCbaZMjxKIsgSCGw4vrryR4Sc8XipJwKGnT0H6YJJH8HZPJCnvyNDf4GK4eFk685SVnY+NcKkrOBTOE2kyb8ifO+NPSOxvP0oQXP5zohpapIk0yRFEUT74ArOG4TCKFG3vHlG4wAKK+NsdMNoN07YkpZ5h8HkpL52UkgA8KTLpNUhjpzj26ViMg1GhLQT7fubBzL9oEk/tisJYG9uZCtAA+KLCwcy+93oQxXFMuEUvhxt4CwtzOvfCn0Y9NQYlbTwE4EMBHIRZ27sV7RLzjr8+WgnxQYGHnXuq+GAF0iz1qoc+Wyp93FhOm10u+cy+9opqohQ63md+g05aq3NhbQEgvoun9MN4VyTz06fa77GeNa+pLjAnlb+wtIMzt3AvxWy0hHSHUaEshPiiwqHOPTDw8NIV0WPpyiVgHlU1NXueeGU68jOAF0lbiDlTdtmV37uHvModmilCnaVP6PJZ8wuTCN39oJtJWAA5U3ZiKOvdaKBiapX6BVtMme3Amg5C64s1bNYXS1JcYaSLqQ5QmRJEj9VfN/VJDMxS+lO7p3PCxhstZJ7txthShmbIr5em2LM/rlK8DVdPk8SyjcbYcIa4IkqFZ+ll+8KyDR405Nl7D+dGJqxLKbX9kyg1NkrHbma8neLSmg5klHcptuaGJZx6VdV232vMn3M4uQSlFh2uTssV0DRqORx2lAZuP57mds+Ki5LrUnrw7sCpuI2k6f2geP33efPBoDZenPdUFlsLz3K2CWusG1X88q+QISPAeZRo8NqH5keTaE8nfFDqzGqwrZdQfnLHnL4qC57nds4zacU3Vnjwdu265BdZy3ZOjudbchCZNxztbRaH0g+fNBnVdV8po8njiZq09YS1802+xutrLWY93BHhdGQn6GX5V+dtIysLiEv+arxTWIXI1gs8L+VcKp8vnEzxa0/GsO1qz2fw/9aluHFQ0juMAAAAASUVORK5CYII=";

console.log('Hello World!');
var textJS = document.createElement('h1');
textJS.textContent = 'I love JavaScript';
var JSImageHTML = document.createElement('img');
JSImageHTML.src = JS_IMAGE;
JSImageHTML.className = 'image';
document.body.append(textJS, JSImageHTML);
