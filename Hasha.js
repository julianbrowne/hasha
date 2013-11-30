
var Hasha = { 

    hash : function(input) { 
        var h = 0;
        var strlen = input.length;
        if (strlen === 0) return h;
        for(var i=0; i<strlen; i++) { 
            var c = input.charCodeAt(i);
            h = ((h << 5) - h) + c;
            h = h & h;
        }
        return h;
    },

    print : function(input) { 
        var p = document.createElement('P');
        var t = document.createTextNode(input);
        p.appendChild(t);
        var b = document.getElementsByTagName('body')[0];
        b.appendChild(p);
    }
    
};



