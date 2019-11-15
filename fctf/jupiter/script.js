var a = [
  "wo4WaQ==",
  "wpA6Ni7CqsOAAFXCs8O7C0kPSMOjwpQ=",
  "esKZw4rCp8KXTD5KKy8kwr7Dm8OBw485BUhhwrbCikzDhQfCnA/DqHktDCo="
];
(function(c, d) {
  var e = function(f) {
    while (--f) {
      c["push"](c["shift"]());
    }
  };
  var g = function() {
    var h = {
      data: { key: "cookie", value: "timeout" },
      setCookie: function(i, j, k, l) {
        l = l || {};
        var m = j + "=" + k;
        var n = 0x0;
        for (var n = 0x0, p = i["length"]; n < p; n++) {
          var q = i[n];
          m += ";\x20" + q;
          var r = i[q];
          i["push"](r);
          p = i["length"];
          if (r !== !![]) {
            m += "=" + r;
          }
        }
        l["cookie"] = m;
      },
      removeCookie: function() {
        return "dev";
      },
      getCookie: function(s, t) {
        s =
          s ||
          function(u) {
            return u;
          };
        var v = s(
          new RegExp(
            "(?:^|;\x20)" +
              t["replace"](/([.$?*|{}()[]\/+^])/g, "$1") +
              "=([^;]*)"
          )
        );
        var w = function(x, y) {
          x(++y);
        };
        w(e, d);
        return v ? decodeURIComponent(v[0x1]) : undefined;
      }
    };
    var z = function() {
      var A = new RegExp(
        "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}"
      );
      return A["test"](h["removeCookie"]["toString"]());
    };
    h["updateCookie"] = z;
    var B = "";
    var C = h["updateCookie"]();
    if (!C) {
      h["setCookie"](["*"], "counter", 0x1);
    } else if (C) {
      B = h["getCookie"](null, "counter");
    } else {
      h["removeCookie"]();
    }
  };
  g();
})(a, 0x96);
var b = function(c, d) {
  c = c - 0x0;
  var e = a[c];
  if (b["MYISAu"] === undefined) {
    (function() {
      var f = function() {
        var g;
        try {
          g = Function(
            "return\x20(function()\x20" +
              "{}.constructor(\x22return\x20this\x22)(\x20)" +
              ");"
          )();
        } catch (h) {
          g = window;
        }
        return g;
      };
      var i = f();
      var j =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
      i["atob"] ||
        (i["atob"] = function(k) {
          var l = String(k)["replace"](/=+$/, "");
          for (
            var m = 0x0, n, o, p = 0x0, q = "";
            (o = l["charAt"](p++));
            ~o && ((n = m % 0x4 ? n * 0x40 + o : o), m++ % 0x4)
              ? (q += String["fromCharCode"](0xff & (n >> ((-0x2 * m) & 0x6))))
              : 0x0
          ) {
            o = j["indexOf"](o);
          }
          return q;
        });
    })();
    var r = function(s, d) {
      var u = [],
        v = 0x0,
        w,
        x = "",
        y = "";
      s = atob(s);
      for (var z = 0x0, A = s["length"]; z < A; z++) {
        y += "%" + ("00" + s["charCodeAt"](z)["toString"](0x10))["slice"](-0x2);
      }
      s = decodeURIComponent(y);
      for (var B = 0x0; B < 0x100; B++) {
        u[B] = B;
      }
      for (B = 0x0; B < 0x100; B++) {
        v = (v + u[B] + d["charCodeAt"](B % d["length"])) % 0x100;
        w = u[B];
        u[B] = u[v];
        u[v] = w;
      }
      B = 0x0;
      v = 0x0;
      for (var C = 0x0; C < s["length"]; C++) {
        B = (B + 0x1) % 0x100;
        v = (v + u[B]) % 0x100;
        w = u[B];
        u[B] = u[v];
        u[v] = w;
        x += String["fromCharCode"](
          s["charCodeAt"](C) ^ u[(u[B] + u[v]) % 0x100]
        );
      }
      return x;
    };
    b["VxaHaq"] = r;
    b["NoZFTm"] = {};
    b["MYISAu"] = !![];
  }
  var D = b["NoZFTm"][c];
  if (D === undefined) {
    if (b["EOgpFf"] === undefined) {
      var E = function(F) {
        this["qIgfYE"] = F;
        this["itZpgJ"] = [0x1, 0x0, 0x0];
        this["FPQSWs"] = function() {
          return "newState";
        };
        this["PiGXXT"] = "\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*";
        this["FUskmP"] = "[\x27|\x22].+[\x27|\x22];?\x20*}";
      };
      E["prototype"]["SjoyZF"] = function() {
        var G = new RegExp(this["PiGXXT"] + this["FUskmP"]);
        var H = G["test"](this["FPQSWs"]["toString"]())
          ? --this["itZpgJ"][0x1]
          : --this["itZpgJ"][0x0];
        return this["XLFnxW"](H);
      };
      E["prototype"]["XLFnxW"] = function(I) {
        if (!Boolean(~I)) {
          return I;
        }
        return this["rYwNZA"](this["qIgfYE"]);
      };
      E["prototype"]["rYwNZA"] = function(J) {
        for (var K = 0x0, L = this["itZpgJ"]["length"]; K < L; K++) {
          this["itZpgJ"]["push"](Math["round"](Math["random"]()));
          L = this["itZpgJ"]["length"];
        }
        return J(this["itZpgJ"][0x0]);
      };
      new E(b)["SjoyZF"]();
      b["EOgpFf"] = !![];
    }
    e = b["VxaHaq"](e, d);
    b["NoZFTm"][c] = e;
  } else {
    e = D;
  }
  return e;
};
function main() {
  var c = (function() {
    var c = !![];
    return function(d, e) {
      var f = c
        ? function() {
            if (e) {
              var g = e["apply"](d, arguments);
              e = null;
              return g;
            }
          }
        : function() {};
      c = ![];
      return f;
    };
  })();
  var d = c(this, function() {
    var c = function() {
        return "\x64\x65\x76";
      },
      d = function() {
        return "\x77\x69\x6e\x64\x6f\x77";
      };
    var e = function() {
      var f = new RegExp(
        "\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d"
      );
      return !f["\x74\x65\x73\x74"](c["\x74\x6f\x53\x74\x72\x69\x6e\x67"]());
    };
    var g = function() {
      var h = new RegExp(
        "\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b"
      );
      return h["\x74\x65\x73\x74"](d["\x74\x6f\x53\x74\x72\x69\x6e\x67"]());
    };
    var i = function(j) {
      var k = ~-0x1 >> (0x1 + (0xff % 0x0));
      if (j["\x69\x6e\x64\x65\x78\x4f\x66"]("\x69" === k)) {
        l(j);
      }
    };
    var l = function(m) {
      var n = ~-0x4 >> (0x1 + (0xff % 0x0));
      if (m["\x69\x6e\x64\x65\x78\x4f\x66"]((!![] + "")[0x3]) !== n) {
        i(m);
      }
    };
    if (!e()) {
      if (!g()) {
        i("\x69\x6e\x64\u0435\x78\x4f\x66");
      } else {
        i("\x69\x6e\x64\x65\x78\x4f\x66");
      }
    } else {
      i("\x69\x6e\x64\u0435\x78\x4f\x66");
    }
  });
  d();
  console[b("0x0", "V0gp")]([b("0x1", "zsAu"), b("0x2", "C^Jw")][0x1]);
}
setTimeout(() => main());
