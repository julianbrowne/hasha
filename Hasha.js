
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

    salty : function(input) { 
        // random salt, random length
        var s = Math.random().toString(36).substr(2, Math.floor((Math.random()*10)+1) );
        return Hasha.hash(input + s);
    },

    print : function(input) { 
        var p = document.createElement('P');
        var t = document.createTextNode(input);
        p.appendChild(t);
        var b = document.getElementsByTagName('body')[0];
        b.appendChild(p);
    }
    
};



