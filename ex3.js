({
    soma : function(component, event, helper){
            var v1 = component.find("txt1").get("v.value");
            var v2 = component.find("txt2").get("v.value");
            var v3 = parseInt(v1)+parseInt(v2);
            component.set("v.result1", v3);
        component.set("v.actionName", "Seu resultado é: ")
    },
    subtracao : function(component, event, helper){
            var v1 = component.find("txt1").get("v.value");
            var v2 = component.find("txt2").get("v.value");
            var v3 = parseInt(v1)-parseInt(v2);
            component.set("v.result1", v3);
        	component.set("v.actionName", "Seu resultado é: ")
    },
    multiplicacao : function(component, event, helper){
            var v1 = component.find("txt1").get("v.value");
            var v2 = component.find("txt2").get("v.value");
            var v3 = parseInt(v1)*parseInt(v2);
            component.set("v.result1", v3);
        	component.set("v.actionName", "Seu resultado é: ")
    },
    divisao : function(component, event, helper){
            var v1 = component.find("txt1").get("v.value");
            var v2 = component.find("txt2").get("v.value");
            var v3 = parseInt(v1)/parseInt(v2);
            component.set("v.result1", v3);
        	component.set("v.actionName", "Seu resultado é: ")
    }

})