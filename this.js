var me={

    firstName:function (){
        console.log("my first name is Gothami");
        console.log(this===me);
    }

};

me.firstName();

function noAssign() {
    console.log("I am in global");
    console.log(this===global);
    
}

noAssign();